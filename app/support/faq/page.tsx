export default function FAQPage() {
  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white">Frequently Asked Questions</h1>
          <p className="text-purple-200 mt-2">Find answers to common shipping questions</p>
        </div>

        <div className="glass-effect-dark border-purple-500/30 rounded-lg p-8 text-white">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Shipping & Delivery</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">How do I track my package?</h4>
                  <p className="text-purple-200">
                    Enter your tracking number on our tracking page to see real-time updates on your package location
                    and delivery status.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">What if my package is delayed?</h4>
                  <p className="text-purple-200">
                    Check the tracking information for updates. Weather, customs, or other factors may cause delays.
                    Contact customer service if concerns persist.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Pricing & Payment</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Why must the receiver pay the delivery fee?</h4>
                  <p className="text-purple-200">
                    Delivery fees cover the final mile delivery service, customs clearance, and local handling. This
                    ensures your package reaches its destination safely and complies with local regulations.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">How are shipping rates calculated?</h4>
                  <p className="text-purple-200">
                    Rates are based on package weight, dimensions, destination, and service type. Use our rate
                    calculator for accurate pricing.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">International Shipping</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">What documents are needed for international shipping?</h4>
                  <p className="text-purple-200">
                    Commercial invoice, customs declaration, and sometimes additional permits depending on the
                    destination and contents.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">How long does customs clearance take?</h4>
                  <p className="text-purple-200">
                    Typically 1-3 business days, but can vary by country and package contents. Proper documentation
                    speeds up the process.
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
