function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4 bg-indigo-700 px-6 py-3 rounded-xl shadow-lg">
        NDA Prep Cockpit 🎯
      </h1>
      <div className="bg-gray-800 rounded-lg p-6 shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-2">Welcome, Officer Cadet 🫡</h2>
        <p className="text-sm text-indigo-300">
          Your dashboard is ready — use the navigation to access Vaults, FitBot, OLQ Tracker and more.
        </p>
        <div className="mt-4 border-t border-gray-700 pt-4">
          <p className="text-green-400">🔥 Login Successful</p>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg mt-6 w-full max-w-3xl shadow-xl border border-purple-600">
  <h2 className="text-2xl font-bold text-green-400 mb-4">Site Actions 🧠⚙️</h2>
  <div className="grid grid-cols-2 gap-4">
    <a href="/vault" className="bg-indigo-600 hover:bg-indigo-700 px-4 py-3 rounded text-white text-center shadow">
      🧮 Open Formula Vault
    </a>
    <a href="/planner" className="bg-green-600 hover:bg-green-700 px-4 py-3 rounded text-white text-center shadow">
      📅 NDA Planner
    </a>
    <a href="/fitbot" className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded text-white text-center shadow">
      🤖 FitBot Assistant
    </a>
    <a href="/olq" className="bg-yellow-600 hover:bg-yellow-700 px-4 py-3 rounded text-white text-center shadow">
      📊 OLQ Tracker
    </a>
  </div>
</div>
    </div>
  );
}

export default Dashboard;
