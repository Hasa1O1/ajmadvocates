import { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-12 h-12 rounded-full border-3 border-blue-700 flex items-center justify-center">
              <Scale className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <div className="text-xl font-bold text-blue-700">A.J. MUVWENDE</div>
              <div className="text-xs text-gray-600 tracking-wide">ADVOCATES</div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('practice-areas')} className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              Practice Areas
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium shadow-md"
            >
              Request Consultation
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-700 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('practice-areas')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-700 font-medium">
              Practice Areas
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-700 font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-700 font-medium">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium"
            >
              Request Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
