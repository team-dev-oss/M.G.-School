"use client"
import {SocialMediaIcons} from '@/components/SocialMediaIcons'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { name: 'About', href: '/about-us' },
  { 
    name: 'Beyond Curriculum', 
    href: '/about',
    dropdownItems: [
      { name: 'Our History', href: '/our-history' },
      { name: 'Mission & Vision', href: '/mission-and-vission' },
      { name: 'From Principal Desk', href: '/principal-desk' },
    ]
  },
  { 
    name: 'Mandatory Disclosure', 
    href: '/academics',
    dropdownItems: [
      { name: 'Programs & Curriculum', href: '/programs-and-curriculum' },
      { name: 'Excellent Students', href: '/students' },
      { name: 'Fees Structure', href: '/fees' }
    ]
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Admission & Recruitment', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdAqA_io_zdaolKEkAwWIFY8dOETfr-AUsUCSkKX3vou0IA8A/viewform?usp=preview ' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const pathname = usePathname()

  return (
    <nav className="bg-gray-50 shadow-md" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl flex items-center gap-4 font-bold text-blue-600">
              <Image src="/logo.jpg" alt='logo' width={50} height={200}  />
              <span>M.G Public School</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <SocialMediaIcons />
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdownItems ? (
                    <div
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        aria-expanded={openDropdown === item.name}
                        className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                          pathname.startsWith(item.href)
                            ? 'text-blue-600'
                            : 'text-gray-700 hover:text-blue-600'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-10 -ml-4 mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                          >
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                              {item.dropdownItems.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                  role="menuitem"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink href={item.href} isActive={pathname === item.href}>
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdownItems ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <MobileNavLink
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                isActive={pathname === dropdownItem.href}
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.name}
                              </MobileNavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <MobileNavLink
                      href={item.href}
                      isActive={pathname === item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </MobileNavLink>
                  )}
                </div>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-gray-200">
              <SocialMediaIcons/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function NavLink({ href, children, isActive }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
        isActive
          ? 'text-blue-600'
          : 'text-gray-700 hover:text-blue-600'
      }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children, isActive, onClick }) {
  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive
          ? 'bg-blue-50 text-blue-700'
          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

