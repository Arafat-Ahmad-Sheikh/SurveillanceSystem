function Videos() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Recordings</h2>
      <div className="mb-4">
        <h3 className="font-semibold">2025-06-03</h3>
        <ul>
          <li>
            <div className="card w-80 bg-base-100 shadow mb-2">
              <div className="card-body flex-row items-center justify-between">
                <span>14:30 - Front Door</span>
                <button className="btn btn-sm btn-outline btn-primary">Play</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Videos;