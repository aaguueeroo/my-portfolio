export function LetsGetInTouchSection() {
  return (
    <section className="container mx-auto flex flex-col justify-center items-center py-40 gap-11 w-full">
      <h2 className="text-4xl md:text-5xl font-bold text-center">Let's get in touch</h2>

      <p className="text-xl text-center text-gray-700">Ready to bring your vision to life? Let's create something amazing together.</p>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:bg-blue-700">
          <span>Get a free budget</span>
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </button>

        <button className="px-8 py-3 border-2 border-gray-800 text-gray-800 font-bold rounded-lg flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:border-blue-600 hover:text-blue-600">
          <span>Contact me</span>
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}
