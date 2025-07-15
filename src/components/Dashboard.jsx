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
    </div>
  );
}

export default Dashboard;
