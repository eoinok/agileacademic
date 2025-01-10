import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <header className="flex h-12 bg-primary-800">
      <nav className="flex-1 flex justify-between items-center mx-auto p-4">
        <div className="mr-auto">
          <Link to="/" className="font-medium p-2">
              Blog
          </Link>
          <Link className="font-medium p-2" to="/about">
              About
            </Link>
        </div>
          
        <div className="ml-auto">
          <Link className="font-medium p-2" to="/about">
            About
          </Link>
          <Link className="font-medium p-2" to="/about">
            About
          </Link>
          
        </div>
      </nav>
      
    </header>
  )
}

export default Navbar
