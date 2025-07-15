import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Vault() {
  const [topic, setTopic] = useState('');
  const [formula, setFormula] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!topic || !formula) {
      setMessage('Please fill in both fields');
      return;
    }

    try {
      await addDoc(collection(db, 'vault'), {
        topic,
        formula,
        timestamp: new Date(),
      });
      setMessage('✅ Formula saved to Firestore');
      setTopic('');
      setFormula('');
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 bg-purple-700 px-6 py-3 rounded-xl shadow-md">
        NDA Formula Vault 📚
      </h1>

      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Enter Topic (e.g. Gravitation)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full mb-4 p-2 bg-gray-700 rounded text-white border border-purple-500"
        />
        <textarea
          placeholder="Enter Formula or Notes"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          rows={4}
          className="w-full mb-4 p-2 bg-gray-700 rounded text-white border border-purple-500"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded shadow text-white w-full"
        >
          Save to Vault
        </button>

        {message && <p className="mt-4 text-indigo-400">{message}</p>}
      </div>
    </div>
  );
}

export default Vault;
