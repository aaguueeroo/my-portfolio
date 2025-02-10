import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Menu from "./menu/Menu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="sticky top-0 h-[70px] bg-white shadow-none w-full z-30">
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full px-4 gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={() => navigate("/")}>
            <svg className="w-10 h-10" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" onClick={() => setIsMenuOpen(true)}>
            <svg className="w-10 h-10" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  )
}

export default Navbar
