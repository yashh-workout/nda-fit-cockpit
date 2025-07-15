import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function OLQ() {
  const [name, setName] = useState('');
  const [qualities, setQualities] = useState('');
  const [remarks, setRemarks] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!name || !qualities || !remarks) {
      setMessage('Please fill in all fields');
      return;
    }

    try {
      await addDoc(collection(db, 'olq_logs'), {
        name,
        qualities,
        remarks,
        timestamp: new Date(),
      });
      setMessage('✅ OLQ entry saved');
      setName('');
      setQualities('');
      setRemarks('');
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 bg-blue-700 px-6 py-3 rounded-xl shadow-md">
        OLQ Performance Tracker 🧠📋
      </h1>

      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Cadet Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded border border-blue-400"
        />

        <input
          type="text"
          placeholder="Qualities (e.g. Leadership, Initiative)"
          value={qualities}
          onChange={(e) => setQualities(e.target.value)}
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded border border-blue-400"
        />

        <textarea
          placeholder="Performance Remarks"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          rows={4}
          className="w-full mb-4 p-2 bg-gray-700 text-white rounded border border-blue-400"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded shadow text-white w-full"
        >
          Save OLQ Entry
        </button>

        {message && <p className="mt-4 text-green-400">{message}</p>}
      </div>
    </div>
  );
}

export default OLQ;
