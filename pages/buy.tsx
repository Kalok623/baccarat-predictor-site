
export default function Buy() {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Payment Methods</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <img src="/payme.png" alt="PayMe" className="mx-auto w-40" />
          <p className="mt-2">PayMe</p>
        </div>
        <div className="text-center">
          <img src="/alipayhk.png" alt="Alipay HK" className="mx-auto w-40" />
          <p className="mt-2">Alipay HK</p>
        </div>
        <div className="text-center">
          <img src="/eps.png" alt="EPS" className="mx-auto w-40" />
          <p className="mt-2">EPS</p>
        </div>
      </div>
    </div>
  );
}
