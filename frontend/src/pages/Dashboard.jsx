function Dashboard() {
  // Mock data for demonstration
  const devices = [
    { id: 1, name: "Office Entrance", status: "online" },
    { id: 2, name: "Warehouse", status: "offline" },
    { id: 3, name: "Parking Lot", status: "online" },
  ];
  const recordings = [
    { id: 1, device: "Front Door", time: "2025-06-04 10:15", url: "#" },
    { id: 2, device: "Office", time: "2025-06-03 22:01", url: "#" },
  ];
  const user = { name: "John Doe", subscription: "Premium" };

  return (
    <div className="bg-base-200 min-h-screen p-6">
      {/* Welcome Banner */}
      <div className="hero bg-primary text-primary-content rounded-xl mb-8 shadow-lg">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome, {user.name}!</h1>
            <p className="mb-2">Subscription: <span className="font-semibold">{user.subscription}</span></p>
            <p>Manage your devices, view live streams, and access your recordings all in one place.</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card bg-primary text-primary-content shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Connected Devices</h2>
            <p className="text-4xl font-bold">{devices.length}</p>
          </div>
        </div>
        <div className="card bg-success text-success-content shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Online Devices</h2>
            <p className="text-4xl font-bold">{devices.filter(d => d.status === "online").length}</p>
          </div>
        </div>
        <div className="card bg-accent text-accent-content shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Recent Recordings</h2>
            <p className="text-4xl font-bold">{recordings.length}</p>
          </div>
        </div>
      </div>

      {/* Devices Preview */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Your Devices</h2>
        <div className="flex flex-wrap gap-4">
          {devices.map(device => (
            <div key={device.id} className="card w-64 bg-primary text-primary-content shadow-md">
              <div className="card-body">
                <h3 className="card-title">{device.name}</h3>
                <p>Status: <span className={device.status === "online" ? "text-green-200" : "text-red-200"}>{device.status}</span></p>
                <a
                  href="/live"
                  className="btn btn-sm btn-primary-content mt-2"
                >
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Recordings */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Recordings</h2>
        <div className="flex flex-wrap gap-4">
          {recordings.map(rec => (
            <div key={rec.id} className="card w-64 bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title">{rec.device}</h3>
                <p className="text-sm text-gray-500">{rec.time}</p>
                <a href={rec.url} className="btn btn-sm btn-secondary mt-2">
                  Play
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;