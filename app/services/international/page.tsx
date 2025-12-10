export default function InternationalShippingPage() {
  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white">FedEx International</h1>
          <p className="text-purple-200 mt-2">Connect your business to the world with reliable global shipping</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-slide-in-left">
            <img
              src="/world-map-showing-fedex-international-shipping-rou.png"
              alt="FedEx international network"
              className="rounded-3xl shadow-2xl hover-lift w-full h-auto"
            />
          </div>
          <div className="animate-slide-in-right">
            <div className="glass-effect-dark border-purple-500/30 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Global Reach, Local Expertise</h2>
              <p className="text-purple-200 mb-6">
                Ship to 220+ countries and territories with FedEx International services. Our global network combines
                speed, reliability, and customs expertise to get your shipments delivered on time.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">International Priority®</h3>
                  <p className="text-purple-200">1-3 business days to major markets worldwide</p>
                  <p className="text-sm text-purple-300 mt-2">
                    Fastest international service with customs clearance included
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">International Economy®</h3>
                  <p className="text-purple-200">2-5 business days to 215+ countries</p>
                  <p className="text-sm text-purple-300 mt-2">
                    Cost-effective international shipping with reliable delivery
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">International Ground®</h3>
                  <p className="text-purple-200">2-7 business days to Canada and Mexico</p>
                  <p className="text-sm text-purple-300 mt-2">
                    Economical cross-border shipping to neighboring countries
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Europe First®</h3>
                  <p className="text-purple-200">Next business day within Europe</p>
                  <p className="text-sm text-purple-300 mt-2">Premium express service across European markets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
