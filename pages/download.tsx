
import { useState, useEffect } from 'react';
import { auth, db } from '../lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function Download() {
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, u => {
      if (u) setUser(u);
      else router.push('/login');
    });
  }, []);
  useEffect(() => {
    if (user) {
      getDoc(doc(db, 'payments', user.uid)).then(docSnap => {
        if (docSnap.exists() && docSnap.data().authorized) {
          setAuthorized(true);
        }
      });
    }
  }, [user]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {authorized ? (
        <a href="/all.py" download className="px-6 py-3 bg-green-600 text-white rounded">Download all.py</a>
      ) : (
        <p className="text-red-600">Not authorized yet.</p>
      )}
    </div>
  );
}
