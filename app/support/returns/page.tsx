export default function ReturnsPage() {
  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white">Returns</h1>
          <p className="text-purple-200 mt-2">Easy return solutions for your packages</p>
        </div>

        <div className="glass-effect-dark border-purple-500/30 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-6">Return Your Package</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Return Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">FedEx Return Manager</h4>
                  <p className="text-purple-200">Streamlined returns for businesses with automated processing</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Print Return Label</h4>
                  <p className="text-purple-200">Generate and print return labels online</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Return Process</h3>
              <div className="bg-white/10 rounded-lg p-6">
                <ol className="space-y-3 text-purple-200">
                  <li>1. Contact the sender to initiate a return</li>
                  <li>2. Receive return authorization and label</li>
                  <li>3. Package the item securely</li>
                  <li>4. Attach the return label</li>
                  <li>5. Drop off at any FedEx location or schedule pickup</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Return Policies</h3>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <ul className="space-y-2 text-blue-200">
                  <li>• Returns must be authorized by the original sender</li>
                  <li>• Items must be in original condition</li>
                  <li>• Return shipping costs may apply</li>
                  <li>• Processing time varies by service type</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
