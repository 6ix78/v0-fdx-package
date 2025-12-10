export default function SupplyChainPage() {
  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white">FedEx Supply Chain</h1>
          <p className="text-purple-200 mt-2">End-to-end logistics solutions that optimize your entire supply chain</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-slide-in-left">
            <div className="glass-effect-dark border-purple-500/30 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Integrated Logistics Excellence</h2>
              <p className="text-purple-200 mb-6">
                FedEx Supply Chain provides comprehensive logistics solutions that streamline your operations from
                procurement to final delivery. Our integrated approach reduces costs while improving efficiency and
                customer satisfaction.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Warehousing & Distribution</h3>
                  <p className="text-purple-200">Secure storage with advanced inventory management systems</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Order Fulfillment</h3>
                  <p className="text-purple-200">Pick, pack, and ship services with same-day processing</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Returns Management</h3>
                  <p className="text-purple-200">Streamlined reverse logistics and product lifecycle management</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Transportation Management</h3>
                  <p className="text-purple-200">Optimized routing and carrier selection for cost savings</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Cross-Docking</h3>
                  <p className="text-purple-200">Direct transfer from inbound to outbound without storage</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Supply Chain Analytics</h3>
                  <p className="text-purple-200">Data-driven insights for continuous optimization</p>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-slide-in-right">
            <img
              src="/modern-automated-fedex-warehouse-with-robotic-syst.png"
              alt="FedEx Supply Chain operations"
              className="rounded-3xl shadow-2xl hover-lift w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
