export function WhatDoIOfferSection() {
  return (
    <section className="container mx-auto px-4 py-40 flex flex-col items-center justify-center gap-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">What do I offer?</h2>

      <div className="flex flex-col gap-6 w-full">
        <div className="bg-white rounded-lg shadow-lg min-h-[300px] flex flex-col md:flex-row gap-6 items-center p-6">
          <img src="/path-to-your-image.jpg" alt="What I offer" className="w-full md:w-2/5 h-64 md:h-full object-cover rounded-lg" />
          <div className="flex flex-col gap-4 flex-1 justify-center">
            <h3 className="text-2xl font-semibold">Get all your app developed without delays.</h3>
            <p className="text-lg text-gray-700">Comprehensive web and mobile solutions.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 h-[300px] flex flex-col gap-4">
            <h4 className="text-xl font-semibold">Technical Consulting</h4>
            <p className="text-gray-700">
              Expert advice on technology choices, architecture, and best practices for your projects. Helping you make informed decisions for your
              technical solutions.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 h-[300px] flex flex-col gap-4">
            <h4 className="text-xl font-semibold">UI/UX Design</h4>
            <p className="text-gray-700">
              Creating intuitive and beautiful user interfaces. Focus on user experience and modern design principles to make your application stand
              out.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
