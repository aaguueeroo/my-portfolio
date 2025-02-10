const WhoAmISection = () => {
  return (
    <section className="container mx-auto px-4 py-40 flex flex-col items-center justify-center gap-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Who am I?</h2>

      <div className="w-full bg-white rounded-lg shadow-lg p-8 h-[500px] flex items-center">
        <p className="text-lg text-gray-700">
          I'm a software engineer with a passion for web development. I have experience in building web applications using React, Angular, and Vue.
          I'm also familiar with backend technologies like Node.js, Express, and MongoDB. I'm always looking for new challenges and opportunities to
          learn and grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div className="bg-white rounded-lg shadow-lg p-8 h-[300px] flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold text-center mb-2">+4</h3>
          <p className="text-lg text-gray-700 text-center">years experience</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 h-[300px] flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold text-center mb-2">+8000</h3>
          <p className="text-lg text-gray-700 text-center">hours of coding</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 h-[300px] flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold text-center mb-2">+20</h3>
          <p className="text-lg text-gray-700 text-center">projects completed</p>
        </div>
      </div>
    </section>
  )
}

export default WhoAmISection
