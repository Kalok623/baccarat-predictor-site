'use client';
import { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface Record {
  id: string;
  email: string;
  screenshotUrl: string;
  authorized: boolean;
}

export default function Admin() {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Record[];
      setRecords(data);
    };

    fetchData();
  }, []);

  const authorize = async (uid: string) => {
    await updateDoc(doc(db, 'users', uid), { authorized: true });
    setRecords((records) =>
      records.map((r) => (r.id === uid ? { ...r, authorized: true } : r))
    );
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Proof</th>
            <th className="border px-4 py-2">Authorized</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r) => (
            <tr key={r.id}>
              <td className="border px-4 py-2">{r.email}</td>
              <td className="border px-4 py-2">
                <a
                  href={r.screenshotUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View
                </a>
              </td>
              <td className="border px-4 py-2">
                {r.authorized ? 'Yes' : 'No'}
              </td>
              <td className="border px-4 py-2">
                {!r.authorized && (
                  <button
                    onClick={() => authorize(r.id)}
                    className="bg-green-600 text-white px-2 py-1 rounded"
                  >
                    Authorize
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
