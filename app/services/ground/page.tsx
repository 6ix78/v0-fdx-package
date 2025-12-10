export default function GroundShippingPage() {
  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white">FedEx Ground</h1>
          <p className="text-purple-200 mt-2">Reliable, cost-effective shipping for everyday business needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-slide-in-left">
            <div className="glass-effect-dark border-purple-500/30 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Smart Ground Solutions</h2>
              <p className="text-purple-200 mb-6">
                FedEx Ground delivers to every address in the U.S. and Canada with industry-leading transit times. Our
                extensive network ensures reliable delivery at competitive rates.
              </p>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">FedEx Ground®</h3>
                  <p className="text-purple-200">1-5 business days within the continental U.S.</p>
                  <p className="text-sm text-purple-300 mt-2">
                    Perfect for non-urgent business shipments and e-commerce
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">FedEx Home Delivery®</h3>
                  <p className="text-purple-200">Residential delivery Tuesday through Saturday</p>
                  <p className="text-sm text-purple-300 mt-2">
                    Convenient delivery options including evening and weekend
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">FedEx Ground Economy</h3>
                  <p className="text-purple-200">Cost-effective delivery in 2-7 business days</p>
                  <p className="text-sm text-purple-300 mt-2">Ideal for less time-sensitive shipments</p>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-slide-in-right">
            <img
              src="/fedex-ground-delivery-truck-in-suburban-neighborho.png"
              alt="FedEx Ground delivery operations"
              className="rounded-3xl shadow-2xl hover-lift w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
