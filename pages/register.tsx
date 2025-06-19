
import { useState } from 'react';
import { auth } from '../lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (e) { alert('Register failed: ' + e.message); }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <input type="email" placeholder="Email" className="mb-2 p-2 border" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="mb-2 p-2 border" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleRegister} className="px-4 py-2 bg-green-600 text-white rounded">Register</button>
    </div>
  );
}
