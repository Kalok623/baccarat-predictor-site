
import { useState, useEffect } from 'react';
import { auth, db, storage } from '../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';

export default function UploadProof() {
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, u => {
      if (u) setUser(u);
      else router.push('/login');
    });
  }, []);
  const handleUpload = async () => {
    if (!file) return alert('Select a file');
    const storageRef = ref(storage, `proofs/${user.uid}/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    await setDoc(doc(db, 'payments', user.uid), {
      uid: user.uid,
      email: user.email,
      screenshotUrl: url,
      paid: true,
      authorized: false,
      timestamp: new Date()
    });
    alert('Uploaded. Awaiting authorization.');
    router.push('/');
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Upload Payment Proof</h1>
      <input type="file" accept="image/*" onChange={e=>setFile(e.target.files[0])} className="mb-4" />
      <button onClick={handleUpload} className="px-4 py-2 bg-blue-600 text-white rounded">Upload</button>
    </div>
  );
}
