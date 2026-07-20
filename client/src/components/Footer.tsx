import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [showSocial, setShowSocial] = useState(false);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/barahoom_kabab',
      color: 'hover:text-pink-500',
      bgColor: 'bg-pink-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/barahoom.kabab',
      color: 'hover:text-blue-600',
      bgColor: 'bg-blue-600'
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-2.4-2.4 2.4 2.4 0 0 1 2.4-2.4c.34 0 .67.05.98.14V9.58a5.8 5.8 0 0 0-.98-.08C9.24 9.5 7 11.72 7 14.4s2.24 4.9 5.02 4.9c2.78 0 5.02-2.22 5.02-4.9V10.88a7.19 7.19 0 0 0 4.57 1.69v-3.72a4.7 4.7 0 0 1-.98-.1z"/>
        </svg>
      ),
      url: 'https://www.tiktok.com/@barahoom_kabab',
      color: 'hover:text-black',
      bgColor: 'bg-black'
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: 'https://x.com/barahoom_kabab',
      color: 'hover:text-gray-600',
      bgColor: 'bg-gray-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/967123456789',
      color: 'hover:text-green-500',
      bgColor: 'bg-green-500'
    }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/الصور/الشعار.png" 
                alt="برهوم" 
                className="w-10 h-10"
              />
              <h3 className="text-lg font-bold text-amber-400">برهوم للكباب</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              مطعم متخصص في تقديم أشهى أنواع الكباب العراقي الأصيل بجودة عالية وخدمة احترافية.
            </p>
            
            {/* Social Media Icons */}
            <div className="mt-6">
              <p className="text-amber-400 font-bold mb-3 text-sm">تابعنا على:</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className={`w-10 h-10 rounded-full ${social.bgColor} flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">عن المطعم</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-yellow-400 transition-colors">القائمة</a></li>
              <li><a href="#branches" className="text-gray-300 hover:text-yellow-400 transition-colors">الفروع</a></li>
              <li><a href="#location" className="text-gray-300 hover:text-yellow-400 transition-colors">الموقع</a></li>
              <li>
                <div className="relative inline-block">
                  <button 
                    onClick={() => setShowSocial(!showSocial)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-1"
                  >
                    تابعنا على وسائل التواصل
                    <span className={`transition-transform ${showSocial ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {showSocial && (
                    <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl z-50 py-2">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-2 hover:bg-slate-700 transition-colors text-gray-300 hover:text-yellow-400"
                          >
                            <Icon size={18} />
                            <span>{social.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">ساعات العمل</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-yellow-400" />
                <span>الأحد - الخميس: 12 ظهراً - 12 صباحاً</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-yellow-400" />
                <span>الجمعة - السبت: 4 مساءً - 1 صباحاً</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">تواصل معنا</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">
                <Phone size={16} className="text-yellow-400" />
                <a href="tel:+967123456789">‎+967 123 456 789</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">
                <Phone size={16} className="text-yellow-400" />
                <a href="tel:+967123456790">‎+967 123 456 790</a>
              </li>
              <li className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">
                <Mail size={16} className="text-yellow-400" />
                <a href="mailto:info@barahoom.com">info@barahoom.com</a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                <span>صنعاء - شارع الخمسين والثلاثين</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              جميع الحقوق محفوظة © 2026 مطعم برهوم للكباب | أفضل مطعم كباب في صنعاء
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
