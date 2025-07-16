import { useState } from 'react';

function FitBot() {
  const [query, setQuery] = useState('');
const [reply, setReply] = useState('');
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    const botReply = {
      sender: 'bot',
      text: `🧠 FitBot: Noted! (AI response will be added here soon)`,
    };

    setConversation([...conversation, userMessage, botReply]);
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
