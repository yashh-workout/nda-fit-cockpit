import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.message);
    }
  };

 return (
  <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
    <h1 className="text-4xl font-bold text-white bg-indigo-600 p-4 rounded-lg shadow-xl">
      Welcome to NDA Fit Cockpit 🚀
    </h1>
    <br />
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={e => setEmail(e.target.value)}
      className="mt-4 p-2 rounded bg-gray-800 text-white border border-indigo-400"
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={e => setPassword(e.target.value)}
      className="mt-2 p-2 rounded bg-gray-800 text-white border border-indigo-400"
    />
    <button
      onClick={handleLogin}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mt-4 rounded shadow-md"
    >
      Login
    </button>
    {error && <p className="mt-4 text-red-500">{error}</p>}
  </div>
);
}

export default Login;
