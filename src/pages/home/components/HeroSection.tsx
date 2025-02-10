const HeroSection = () => {
  return (
    <div className="flex-1 w-full p-0 m-0 overflow-hidden relative min-h-screen">
      <div
        className="w-full h-full p-0 m-0 absolute bg-center bg-cover bg-fixed z-10 overflow-hidden"
        style={{ backgroundImage: "url('src/assets/images/hero.png')" }}
      />
      <div className="flex-1 relative flex flex-col justify-center items-start z-20 p-8 min-h-screen">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Get a premium app <span className="text-blue-600">fast and easy</span>
        </h1>
        <p className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
          Share your vision, values and personality --I'll turn them into an app that truly represents you.
        </p>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2">
          <span>Get a budget for free</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default HeroSection
