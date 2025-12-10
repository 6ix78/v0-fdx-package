export default function ExpressShippingPage() {
  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white">FedEx Express</h1>
          <p className="text-purple-200 mt-2">When time is critical, trust the global leader in express delivery</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-slide-in-left">
            <img
              src="/images/express-aircraft.jpg"
              alt="FedEx Express operations"
              className="rounded-3xl shadow-2xl hover-lift w-full h-auto"
            />
          </div>
          <div className="animate-slide-in-right">
            <div className="glass-effect-dark border-purple-500/30 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Express Delivery Excellence</h2>
              <p className="text-purple-200 mb-6">
                FedEx Express pioneered overnight delivery in 1973 and remains the world's largest express
                transportation company. Our time-definite services connect 220+ countries with unmatched reliability.
              </p>

              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded text-sm mr-3">
                      NEW
                    </span>
                    FedEx First Overnight®
                  </h3>
                  <p className="text-purple-200">Next business day by 8:00 AM to most areas</p>
                  <p className="text-sm text-purple-300 mt-2">
                    Perfect for critical documents and time-sensitive shipments
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">FedEx Priority Overnight®</h3>
                  <p className="text-purple-200">Next business day by 10:30 AM to most areas</p>
                  <p className="text-sm text-purple-300 mt-2">
                    Our most popular express service with money-back guarantee
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">FedEx Standard Overnight®</h3>
                  <p className="text-purple-200">Next business day by 3:00 PM to most areas</p>
                  <p className="text-sm text-purple-300 mt-2">
                    Cost-effective overnight delivery for less urgent shipments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
