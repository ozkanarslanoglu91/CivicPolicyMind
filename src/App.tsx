export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">CivicPolicyMind</h1>
          <p className="text-xl text-gray-400">Civic Policy Analysis & Tracking Platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-lg font-bold mb-2">Politika Analizi</h3>
            <p className="text-gray-400">AI ile kamu politikası etki analizi</p>
          </div>
          <div className="card">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-lg font-bold mb-2">Trend Takibi</h3>
            <p className="text-gray-400">Politika trendleri ve geliştirmeleri</p>
          </div>
          <div className="card">
            <div className="text-4xl mb-4">🏛️</div>
            <h3 className="text-lg font-bold mb-2">Vatandaş Geri Bildirimi</h3>
            <p className="text-gray-400">Toplum analitiği ve öneriler</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Son Politikalar</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold">Eğitim Reformu - Yük. Ögretim</h3>
              <p className="text-sm text-gray-400">Kabul Tarihi: 20 Şub 2026</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold">Çevre Koruma Yasası</h3>
              <p className="text-sm text-gray-400">Taslak Aşaması: %65 tamamlanmış</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
