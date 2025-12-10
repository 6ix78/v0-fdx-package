export default function ClaimsPage() {
  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white">Claims</h1>
          <p className="text-purple-200 mt-2">File a claim for lost or damaged packages</p>
        </div>

        <div className="glass-effect-dark border-purple-500/30 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-6">Package Claims Process</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">When to File a Claim</h3>
              <div className="bg-white/10 rounded-lg p-6">
                <ul className="space-y-2 text-purple-200">
                  <li>• Package is lost or missing</li>
                  <li>• Package arrived damaged</li>
                  <li>• Contents are missing or damaged</li>
                  <li>• Delivery was significantly delayed</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Required Information</h3>
              <div className="bg-white/10 rounded-lg p-6">
                <p className="text-purple-200 mb-4">To file a claim, you'll need:</p>
                <ul className="space-y-2 text-purple-200">
                  <li>• Tracking number</li>
                  <li>• Proof of value (invoice, receipt)</li>
                  <li>• Photos of damage (if applicable)</li>
                  <li>• Description of contents</li>
                  <li>• Packaging materials (for inspection)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Claims Timeline</h3>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-300">File Within:</h4>
                    <p className="text-blue-200">• 60 days for domestic shipments</p>
                    <p className="text-blue-200">• 21 days for international shipments</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-300">Processing Time:</h4>
                    <p className="text-blue-200">• 5-7 business days for review</p>
                    <p className="text-blue-200">• Additional time may be required for investigation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
