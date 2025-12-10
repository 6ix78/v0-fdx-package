export default function SameDayDeliveryPage() {
  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white">FedEx SameDay</h1>
          <p className="text-purple-200 mt-2">Ultra-fast delivery when every minute counts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-slide-in-left">
            <div className="glass-effect-dark border-purple-500/30 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">When Time is Everything</h2>
              <p className="text-purple-200 mb-6">
                FedEx SameDay provides door-to-door delivery within hours for your most critical shipments. Our
                dedicated vehicles and aircraft ensure your urgent packages arrive exactly when needed.
              </p>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">SameDay City</h3>
                  <p className="text-purple-200">Direct delivery within the same metropolitan area</p>
                  <p className="text-sm text-purple-300 mt-2">
                    Perfect for medical supplies, legal documents, and emergency parts
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">SameDay Metro</h3>
                  <p className="text-purple-200">Delivery within 4-6 hours across metro areas</p>
                  <p className="text-sm text-purple-300 mt-2">Ideal for time-critical business documents and samples</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">SameDay Freight</h3>
                  <p className="text-purple-200">Same-day delivery for larger shipments up to 500 lbs</p>
                  <p className="text-sm text-purple-300 mt-2">Specialized handling for oversized and heavy items</p>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-slide-in-right">
            <img
              src="/fedex-same-day-delivery-van-rushing-through-city-s.png"
              alt="FedEx SameDay delivery service"
              className="rounded-3xl shadow-2xl hover-lift w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
