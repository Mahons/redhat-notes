'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="MTechSolutions Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-primary-600 transition">
              Services
            </Link>
            <Link href="#case-studies" className="text-gray-700 hover:text-primary-600 transition">
              Case Studies
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-primary-600 transition">
              About
            </Link>
            <Link
              href="#contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              Services
            </Link>
            <Link href="#case-studies" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              Case Studies
            </Link>
            <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
              About
            </Link>
            <Link href="#contact" className="block px-3 py-2 bg-primary-600 text-white rounded-lg text-center">
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
