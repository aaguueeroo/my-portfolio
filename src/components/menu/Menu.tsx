import { useNavigate } from "react-router-dom"

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const navigate = useNavigate()

  const menuItems = [
    { label: "About me", path: "/about" },
    { label: "My projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
  ]

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[998] transition-opacity" onClick={onClose} />

      {/* Menu */}
      <div className="fixed right-0 top-0 h-full w-[300px] bg-white z-[999] shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end">
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          <nav className="flex-grow mt-8">
            <ul className="space-y-6">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      navigate(item.path)
                      onClose()
                    }}
                    className="w-full flex items-center justify-between text-2xl font-bold hover:text-blue-600 transition-colors py-2"
                  >
                    {item.label}
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button className="mt-auto w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <span>Get a budget</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Menu
