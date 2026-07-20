import { Menu, X, Instagram, Facebook, MessageCircle, Twitter, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSocialDropdown, setShowSocialDropdown] = useState(false);

  const navItems = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'عن المطعم', href: '#about' },
    { label: 'القائمة', href: '#menu' },
    { label: 'الفروع', href: '#branches' },
    { label: 'الموقع', href: '#location' },
    { label: 'التواصل', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/barahoom_kabab',
      color: 'text-pink-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/barahoom.kabab',
      color: 'text-blue-600'
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4c.34 0 .67.05.98.14V9.58a5.8 5.8 0 0 0-.98-.08C9.24 9.5 7 11.72 7 14.4s2.24 4.9 5.02 4.9c2.78 0 5.02-2.22 5.02-4.9V10.88a7.19 7.19 0 0 0 4.57 1.69v-3.72a4.7 4.7 0 0 1-.98-.1z"/>
        </svg>
      ),
      url: 'https://www.tiktok.com/@barahoom_kabab',
      color: 'text-black'
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: 'https://x.com/barahoom_kabab',
      color: 'text-gray-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/967123456789',
      color: 'text-green-500'
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/الصور/الشعار.png" 
            alt="برهوم" 
            className="w-12 h-12"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold" style={{color: '#d4af37'}}>برهوم</h1>
            <p className="text-xs text-gray-300">للكباب</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{color: '#ffffff'}}
              onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
            >
              {item.label}
            </a>
          ))}

          {/* Social Media Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSocialDropdown(!showSocialDropdown)}
              className="text-sm font-medium transition-colors duration-200 flex items-center gap-2 hover:text-amber-400"
              style={{color: '#ffffff'}}
              onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
            >
              تابعنا
              <ChevronDown size={16} className={`transition-transform ${showSocialDropdown ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {showSocialDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl py-2 border border-slate-700">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-slate-700 transition-colors text-gray-300 hover:text-amber-400"
                    >
                      <Icon size={18} className={social.color} />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button 
            className="btn-luxury text-slate-900 font-semibold"
            style={{background: 'linear-gradient(135deg, #d4af37 0%, #c9a227 100%)'}}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            احجز الآن
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{color: '#ffffff'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#d4af37'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Social Dropdown */}
            <div className="border-t border-slate-700 pt-4 mt-4">
              <button
                onClick={() => setShowSocialDropdown(!showSocialDropdown)}
                className="text-sm font-medium transition-colors duration-200 flex items-center gap-2 w-full hover:text-amber-400"
                style={{color: '#ffffff'}}
              >
                تابعنا على وسائل التواصل
                <ChevronDown size={16} className={`transition-transform ${showSocialDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showSocialDropdown && (
                <div className="mt-2 flex flex-col gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-2 hover:bg-slate-700 transition-colors text-gray-300 hover:text-amber-400 rounded"
                      >
                        <Icon size={18} className={social.color} />
                        <span>{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <Button 
              className="w-full btn-luxury text-slate-900 font-semibold"
              style={{background: 'linear-gradient(135deg, #d4af37 0%, #c9a227 100%)'}}
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              احجز الآن
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
