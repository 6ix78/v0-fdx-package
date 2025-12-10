export default function ShippingGuidePage() {
  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white">Shipping Guide</h1>
          <p className="text-purple-200 mt-2">Everything you need to know about shipping with FedEx</p>
        </div>

        <div className="glass-effect-dark border-purple-500/30 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-6">Complete Shipping Guide</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Packaging Guidelines</h3>
              <div className="bg-white/10 rounded-lg p-6">
                <ul className="space-y-2 text-purple-200">
                  <li>• Use sturdy boxes and proper cushioning materials</li>
                  <li>• Seal all seams with quality packing tape</li>
                  <li>• Remove or cover old shipping labels</li>
                  <li>• Keep items away from box edges</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Addressing Your Package</h3>
              <div className="bg-white/10 rounded-lg p-6">
                <p className="text-purple-200 mb-4">Proper addressing ensures fast, accurate delivery:</p>
                <ul className="space-y-2 text-purple-200">
                  <li>• Write addresses clearly and completely</li>
                  <li>• Include postal codes and country information</li>
                  <li>• Use the recipient's full name</li>
                  <li>• Add phone numbers for international shipments</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Prohibited Items</h3>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                <p className="text-red-300 mb-4">The following items cannot be shipped:</p>
                <ul className="space-y-2 text-red-200">
                  <li>• Hazardous materials and chemicals</li>
                  <li>• Firearms and ammunition</li>
                  <li>• Perishable items without proper packaging</li>
                  <li>• Currency and negotiable instruments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
