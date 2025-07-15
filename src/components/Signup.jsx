import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Signup successful ✅');
      setError('');
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-3xl font-bold bg-indigo-700 px-6 py-2 rounded-lg shadow mb-6">
        Create an Account 📝
      </h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="mb-4 p-2 rounded bg-gray-800 text-white border border-indigo-400 w-full max-w-md"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="mb-4 p-2 rounded bg-gray-800 text-white border border-indigo-400 w-full max-w-md"
      />
      <button
        onClick={handleSignup}
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow w-full max-w-md"
      >
        Sign Up
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {success && <p className="mt-4 text-green-400">{success}</p>}
    </div>
  );
}

export default Signup;
