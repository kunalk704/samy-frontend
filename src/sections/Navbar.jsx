import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../utils/cn'
import { navLinks } from '../data/navLinks'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-dark-100">
      <div className="section-padding">
        <div className="container-wide flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-dark-900">Samy</span>
            <span className="hidden sm:inline text-sm text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
              Ecosystem
            </span>
          </div>

          {/* Desktop Nav + CTA */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-dark-600 hover:text-brand-600 font-medium"
              >
                {link.label}
              </a>
            ))}
            {/* Plain button instead of component to test */}
            <button className="px-4 py-2 bg-brand-500 text-white rounded-lg font-medium hover:bg-brand-600">
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-dark-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        'md:hidden overflow-hidden transition-all',
        isOpen ? 'max-h-64' : 'max-h-0'
      )}>
        <div className="section-padding pb-6 space-y-4 bg-white border-b border-dark-100">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block text-dark-600 font-medium">
              {link.label}
            </a>
          ))}
          <button className="px-5 py-2.5 bg-brand-500 text-white rounded-lg font-medium hover:bg-brand-600 shadow-sm">
  Get Started
</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar