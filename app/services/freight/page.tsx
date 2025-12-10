export default function FreightServicesPage() {
  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white">FedEx Freight</h1>
          <p className="text-purple-200 mt-2">Comprehensive LTL and truckload solutions for heavy shipments</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-slide-in-left">
            <img
              src="/large-fedex-freight-truck-at-loading-dock-with-ind.png"
              alt="FedEx Freight operations"
              className="rounded-3xl shadow-2xl hover-lift w-full h-auto"
            />
          </div>
          <div className="animate-slide-in-right">
            <div className="glass-effect-dark border-purple-500/30 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-semibold mb-4">Heavy-Duty Shipping Solutions</h2>
              <p className="text-purple-200 mb-6">
                FedEx Freight provides comprehensive less-than-truckload (LTL) and full truckload services for shipments
                that exceed standard package limits. Our extensive network ensures reliable delivery for your heaviest
                cargo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">FedEx Freight Priority</h3>
                  <p className="text-purple-200">1-3 business days for LTL shipments</p>
                  <p className="text-sm text-purple-300 mt-2">Faster transit times with money-back guarantee</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">FedEx Freight Economy</h3>
                  <p className="text-purple-200">Cost-effective LTL shipping in 2-5 business days</p>
                  <p className="text-sm text-purple-300 mt-2">Budget-friendly option for non-urgent freight</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">FedEx Custom Critical</h3>
                  <p className="text-purple-200">Exclusive-use vehicles for time-critical freight</p>
                  <p className="text-sm text-purple-300 mt-2">Dedicated service for your most important shipments</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">White Glove Service</h3>
                  <p className="text-purple-200">Inside delivery and setup for special handling</p>
                  <p className="text-sm text-purple-300 mt-2">Professional installation and assembly services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
