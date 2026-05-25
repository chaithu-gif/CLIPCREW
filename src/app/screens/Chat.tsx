import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
  MessageCircle,
  Send,
} from "lucide-react";

import { Button } from "../components/ui/button";

import {
  Card,
  CardContent,
} from "../components/ui/card";

import { Input } from "../components/ui/input";

import {
  auth,
  db,
} from "../../firebase";

import {
  onAuthStateChanged,
} from "firebase/auth";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

export default function Chat() {
  const navigate = useNavigate();
  const { creatorId } = useParams();

  const [currentUser, setCurrentUser] =
    useState<any>(null);
  const [creator, setCreator] =
    useState<any>(null);
  const [messages, setMessages] =
    useState<any[]>([]);
  const [messageText, setMessageText] =
    useState("");
  const [loading, setLoading] =
    useState(true);
  const [sending, setSending] =
    useState(false);

  const messagesEndRef =
    useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (user) => {
          if (!user) {
            navigate("/login");
            return;
          }

          setCurrentUser(user);

          try {
            const userDoc = await getDoc(
              doc(db, "users", user.uid)
            );

            const userData = userDoc.data();

            if (userData?.role === "creator") {
              alert(
                "Only customers can chat with creators here."
              );
              navigate("/dashboard");
              return;
            }

            const creatorRef = doc(
              db,
              "creators",
              creatorId as string
            );
            const creatorSnap = await getDoc(creatorRef);

            if (creatorSnap.exists()) {
              setCreator({
                id: creatorSnap.id,
                ...creatorSnap.data(),
              });
            } else {
              setCreator(null);
            }
          } catch (error) {
            console.error(error);
          }

          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, [creatorId, navigate]);

  useEffect(() => {
    if (!currentUser || !creator) {
      return;
    }

    const chatId = [currentUser.uid, creator.id]
      .sort()
      .join("_");

    const chatDoc = doc(db, "chats", chatId);
    const messagesQuery = query(
      collection(chatDoc, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(
      messagesQuery,
      (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );

    setDoc(
      chatDoc,
      {
        creatorId: creator.id,
        customerId: currentUser.uid,
        participants: [currentUser.uid, creator.id],
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    ).catch((error) => {
      console.error("Failed to initialize chat:", error);
    });

    return () => unsubscribe();
  }, [currentUser, creator]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!messageText.trim() || !currentUser || !creator) {
      return;
    }

    setSending(true);

    try {
      const chatId = [currentUser.uid, creator.id]
        .sort()
        .join("_");
      const chatDoc = doc(db, "chats", chatId);

      await addDoc(
        collection(chatDoc, "messages"),
        {
          text: messageText.trim(),
          senderId: currentUser.uid,
          senderName:
            currentUser.displayName ||
            currentUser.email ||
            "Customer",
          createdAt: serverTimestamp(),
        }
      );

      await setDoc(
        chatDoc,
        {
          customerId: currentUser.uid,
          creatorId: creator.id,
          lastMessage: messageText.trim(),
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      setMessageText("");
    } catch (error) {
      console.error(error);
      alert("Unable to send message. Please try again.");
    }

    setSending(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">Loading chat...</p>
      </div>
    );
  }

  if (!creator) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">Creator not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-28">
      <div className="bg-blue-600 text-white p-6">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-blue-500 rounded-full transition-colors mb-4"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg overflow-hidden bg-white/20 flex items-center justify-center text-2xl">
            {creator.name?.charAt(0)}
          </div>

          <div>
            <h1 className="text-2xl font-semibold">
              Chat with {creator.name}
            </h1>
            <p className="text-blue-100">{creator.subCategory}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <Card className="border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">
                  Your messages are stored in Firebase and sync in real time.
                </p>
                <p className="text-sm text-gray-500">
                  Use this chat to connect with the creator about the booking.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="border border-gray-200 rounded-3xl h-[60vh] overflow-y-auto bg-slate-50 p-4 space-y-3">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 py-16">
              No messages yet. Send the first message to start the conversation.
            </div>
          )}

          {messages.map((message) => {
            const isCurrentUser =
              message.senderId === currentUser.uid;

            return (
              <div
                key={message.id}
                className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm ${
                  isCurrentUser
                    ? "ml-auto bg-blue-600 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <div className="font-medium mb-1">
                  {message.senderName ||
                    (isCurrentUser ? "You" : creator.name)}
                </div>
                <div className="whitespace-pre-wrap">
                  {message.text}
                </div>
                <div className="mt-2 text-[11px] text-blue-100">
                  {message.createdAt?.toDate
                    ? message.createdAt.toDate().toLocaleString()
                    : "Sending..."}
                </div>
              </div>
            );
          })}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex gap-3 max-w-2xl mx-auto">
          <Input
            value={messageText}
            onChange={(event) =>
              setMessageText(event.target.value)
            }
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button
            onClick={handleSendMessage}
            disabled={sending || !messageText.trim()}
            className="h-12 px-5 bg-blue-600 hover:bg-blue-700"
          >
            <Send className="w-4 h-4 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
