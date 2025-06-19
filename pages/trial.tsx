
export default function Trial() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">試用版下載 (Trial Version)</h1>
      <a href="/trial.py" download className="px-6 py-3 bg-green-600 text-white rounded">{`Download trial.py`}</a>
    </div>
  );
}
