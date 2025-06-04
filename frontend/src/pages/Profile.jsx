function Profile() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Your Profile</h2>
      <div className="card w-max-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title">Username: johndoe</h3>
          <p>Email: johndoe@email.com</p>
          <p>Subscription: Premium</p>
          <a href="/subscribe" className="btn btn-secondary mt-4">Manage Subscription</a>
        </div>
      </div>
    </div>
  );
}
export default Profile;