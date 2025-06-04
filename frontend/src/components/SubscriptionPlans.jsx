function SubscriptionPlans() {
  const plans = [
    { id: "basic", name: "Basic", price: "$5/mo", features: ["1 device", "7-day storage"] },
    { id: "premium", name: "Premium", price: "$15/mo", features: ["5 devices", "30-day storage", "Cloud backup"] },
  ];

  return (
    <div className="flex gap-8">
      {plans.map(plan => (
        <div key={plan.id} className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{plan.name}</h2>
            <p className="text-2xl">{plan.price}</p>
            <ul className="mb-4">
              {plan.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
            <a href={`/subscribe?plan=${plan.id}`} className="btn btn-primary">
              Subscribe
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default SubscriptionPlans;