const PortfolioSection = () => {
  return (
    <section
      className="py-32 px-8 md:px-32 flex h-[30vh] flex-col items-center justify-center gap-6 max-w-[1440px] mx-auto bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/picsum/200/300')" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center">Get to know my work</h2>
      <button className="px-8 py-3 bg-gray-800 text-white font-bold rounded-lg flex items-center gap-2 hover:scale-105 hover:bg-blue-600 transition-all duration-300">
        <span>See projects</span>
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </button>
    </section>
  )
}

export default PortfolioSection
