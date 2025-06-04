function Devices() {
  return (
    <div className="p-4 sm:p-8 max-w-screen-sm mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Devices</h2>
      <div className="card w-full max-w-md bg-base-100 shadow-xl mb-4">
        <div className="card-body">
          <h2 className="card-title">Front Door Camera</h2>
          <p>Last active: Today, 14:30</p>
          <div className="card-actions justify-end">
            <a href="/videos" className="btn btn-primary">View Recordings</a>
          </div>
        </div>
      </div>
      <button className="btn btn-accent w-full max-w-md">Add New Device</button>
    </div>
  );
}
export default Devices;