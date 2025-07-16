import { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function FitBot() {
  const [query, setQuery] = useState('');
const [reply, setReply] = useState('');
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);

const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = { sender: 'user', text: input };
  setConversation(prev => [...prev, userMessage]);
await addDoc(collection(db, "fitbot_logs"), {
  question: input,
  response: data.choices[0].message.content,
  timestamp: new Date(),
});
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer sk-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" // ⛔ Replace with your real API key (only for local testing)
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }]
      })
    });

    const data = await response.json();
    const botReply = { sender: "bot", text: data.choices[0].message.content };
    setConversation(prev => [...prev, botReply]);
  } catch (err) {
    const botReply = { sender: "bot", text: "⚠️ Error: Couldn’t reach FitBot’s brain." };
    setConversation(prev => [...prev, botReply]);
  }

  setInput('');
};

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-8">
     <h1 className="text-4xl font-bold mb-6 pulse-heading bg-green-700 px-6 py-3 rounded-xl shadow-md">
  FitBot AI Assistant 🤖🔥
</h1>

      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
        <div className="h-64 overflow-y-scroll bg-gray-700 p-4 rounded mb-4 border border-green-400">
          {conversation.map((msg, index) => (
      <input
  type="text"
  placeholder="Ask FitBot..."
  value={input}
  onChange={(e) => setInput(e.target.value)}
  className="w-full p-2 mb-4 bg-gray-700 rounded text-white border border-green-500"
/>

<button
  onClick={handleSend}
  className="bg-green-600 hover:bg-green-700 glow px-4 py-2 rounded shadow text-white w-full"
>
  Send
</button>
            <p
              key={index}
              className={`mb-2 ${
                msg.sender === 'user' ? 'text-blue-300' : 'text-green-300'
              }`}
            >
              {msg.sender === 'user' ? '👨‍🎓 You:' : '🤖 FitBot:'} {msg.text}
            </p>
          ))}
        </div>

        <div className="flex">
          <input
            type="text"
            placeholder="Ask FitBot for workout tips or study help"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-gray-700 text-white p-2 rounded-l border border-green-400"
          />
          <button
            onClick={handleSend}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r shadow text-white"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default FitBot;
