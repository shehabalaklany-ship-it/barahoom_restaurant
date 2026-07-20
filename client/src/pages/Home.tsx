import { MapPin, Phone, Mail, Star, ChefHat, Flame, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedBranch, setSelectedBranch] = useState('main');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedDish, setSelectedDish] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const branches: { [key: string]: { name: string; address: string; phone: string; whatsapp: string } } = {
    main: {
      name: 'الفرع الرئيسي',
      address: 'شارع الخمسين، صنعاء',
      phone: '+967123456789',
      whatsapp: '967123456789'
    },
    second: {
      name: 'الفرع الثاني',
      address: 'شارع الثلاثين، مقابل سوق القات المركزي، صنعاء',
      phone: '+967123456790',
      whatsapp: '967123456790'
    }
  };

  const handleOrderClick = (dishName: string) => {
    setSelectedDish(dishName);
    setShowOrderModal(true);
  };

  const handleOrderWithBranch = (branchKey: string, method: 'whatsapp' | 'call') => {
    const branch = branches[branchKey];
    if (method === 'whatsapp') {
      const message = `مرحباً، أود طلب ${selectedDish} من ${branch.name}`;
      const whatsappUrl = `https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      window.location.href = `tel:${branch.phone}`;
    }
    setShowOrderModal(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `الاسم: ${contactForm.name}\nالبريد: ${contactForm.email}\nالرسالة: ${contactForm.message}`;
    const whatsappUrl = `https://wa.me/${branches.main.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <p className="text-amber-500 font-semibold text-lg">مرحباً بك في</p>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  مطعم برهوم
                  <br />
                  <span className="text-amber-500">للكباب</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                استمتع بطعم الكباب العراقي الأصيل المشهور عالمياً، مع أفضل جودة اللحوم والتوابل التقليدية في بيئة فاخرة وراقية.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-lg px-8 py-6"
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  اطلب الآن
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-slate-900 text-slate-900 hover:bg-slate-50 font-semibold text-lg px-8 py-6"
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  استعرض القائمة
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 lg:h-full min-h-96">
              <img 
                src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&h=400&fit=crop"
                alt="قائمة مطعم برهوم"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ChefHat,
                title: 'طهاة محترفون',
                description: 'فريق طهاة متخصصون بخبرة عشرات السنين في فن الشواء والطهي'
              },
              {
                icon: Flame,
                title: 'مكونات طازة',
                description: 'نستخدم أفضل اللحوم الطازة والتوابل التقليدية الأصيلة'
              },
              {
                icon: Star,
                title: 'جودة عالية',
                description: 'معايير صحية عالية وخدمة احترافية في بيئة فاخرة'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-amber-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-slate-900" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop"
                alt="داخل مطعم برهوم"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">عن مطعم برهوم</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                منذ تأسيسه، يقدم مطعم برهوم للكباب أشهى أنواع الكباب العراقي الأصيل بجودة لا تضاهى. نحن ملتزمون بتقديم تجربة طعام فريدة من نوعها، حيث يجتمع الطعم الأصيل مع الخدمة الراقية.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                كل طبق يتم تحضيره بعناية فائقة من قبل فريق طهاة متخصصين، مستخدمين أفضل المكونات الطازة والتوابل التقليدية. نؤمن أن الطعام الجيد يجمع الناس معاً.
              </p>
              <div className="pt-4">
                <Button 
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-lg px-8 py-6"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  تواصل معنا
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Selection Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">اختر الفرع</h2>
            <p className="text-xl text-gray-600">اختر الفرع الذي تريد الطلب منه</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            {Object.entries(branches).map(([key, branch]) => (
              <button
                key={key}
                onClick={() => setSelectedBranch(key)}
                className={`p-6 rounded-xl transition-all duration-300 ${
                  selectedBranch === key
                    ? 'bg-amber-500 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-900 border-2 border-gray-200 hover:border-amber-500'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{branch.name}</h3>
                <p className="text-sm opacity-90">{branch.address}</p>
              </button>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{branches[selectedBranch].name}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-gray-600 font-semibold">العنوان</p>
                  <p className="text-slate-900">{branches[selectedBranch].address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-gray-600 font-semibold">الهاتف</p>
                  <a href={`tel:${branches[selectedBranch].phone}`} className="text-amber-500 hover:text-amber-600">
                    {branches[selectedBranch].phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">قائمتنا</h2>
            <p className="text-xl text-gray-600">استمتع بتشكيلة متنوعة من أطباقنا الشهية</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'كباب زيت',
                description: 'كباب زيت دوار بطريقة تقليدية عراقية',
                image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop'
              },
              {
                name: 'كباب فحم',
                description: 'لحم مشوي على الفحم بتتبيلة مختارة',
                image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop'
              },
              {
                name: 'فحسة لحم',
                description: 'لحم مفروم مع بهارات وخضار طازة',
                image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop'
              },
              {
                name: 'كباب دقة',
                description: 'لحم مفروم مشوي على الفحم بطريقة فريدة',
                image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop'
              },
              {
                name: 'كباب فحم ودقة',
                description: 'تشكيلة من اللحم المشوي واللحم المفروم',
                image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop'
              },
              {
                name: 'كباب زيت ودجاج',
                description: 'مزيج لذيذ من كباب الزيت والدجاج المشوي',
                image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop'
              },
              {
                name: 'فحم ودجاج',
                description: 'لحم ودجاج مشوي على الفحم بطريقة مميزة',
                image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop'
              },
              {
                name: 'حمص وثوم',
                description: 'حمص لذيذ مع ثوم طاز وزيت زيتون',
                image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
              },
              {
                name: 'شيش طاوة',
                description: 'لحم وخضار مشوية على الفحم بطريقة طرازية',
                image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop'
              },
              {
                name: 'سمك بروست',
                description: 'سمك مقلي مع ليمون طاز وبهارات البحر',
                image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button 
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"
                    onClick={() => handleOrderClick(item.name)}
                  >
                    اطلب الآن
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section with Interactive Maps */}
      <section id="location" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">📍 موقعنا على الخريطة</h2>
            <p className="text-xl text-gray-600">استخدم الخريطة لمعرفة أقرب فرع إليك</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Branch Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 text-white">
                <h3 className="text-xl font-bold">🗺️ الفرع الرئيسي</h3>
                <p className="text-sm opacity-90">شارع الخمسين، صنعاء</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5!2d44.2!3d15.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIwJzI0LjAiTiA0NMKwMTInMDAuMCJF!5e0!3m2!1sen!2sye!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="p-6 space-y-3">
                <button
                  onClick={() => window.open('https://www.google.com/maps/search/مطاعم+برهوم+للكباب+البلدي+والمشويات+الشامية/@15.3,44.2,15z', '_blank')}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin size={20} />
                  فتح في Google Maps
                </button>
                <button
                  onClick={() => window.location.href = 'tel:+967123456789'}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  اتصل الآن
                </button>
              </div>
            </div>

            {/* Second Branch Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 text-white">
                <h3 className="text-xl font-bold">🗺️ الفرع الثاني</h3>
                <p className="text-sm opacity-90">شارع الثلاثين، مقابل سوق القات المركزي</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5!2d44.25!3d15.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIwJzI0LjAiTiA0NMKwMTInMDAuMCJF!5e0!3m2!1sen!2sye!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="p-6 space-y-3">
                <button
                  onClick={() => window.open('https://www.google.com/maps/search/مجموعة+مطاعم+برهوم+للكباب+البلدي/@15.35,44.25,15z', '_blank')}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin size={20} />
                  فتح في Google Maps
                </button>
                <button
                  onClick={() => window.location.href = 'tel:+967123456790'}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  اتصل الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">فروعنا</h2>
            <p className="text-xl text-gray-600">زرنا في أحد فروعنا المتعددة في صنعاء</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Branch */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-500 p-4 rounded-lg">
                  <MapPin className="text-slate-900" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">الفرع الرئيسي</h3>
                  <p className="text-yellow-400 text-sm">⭐ الفرع الأساسي</p>
                </div>
              </div>
              <div className="space-y-4 border-t border-slate-700 pt-6">
                <div>
                  <p className="text-gray-300 text-sm mb-1">📍 العنوان</p>
                  <p className="text-lg font-semibold">شارع الخمسين، صنعاء</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-1">📞 الهاتف</p>
                  <p className="text-lg font-semibold">
                    <a href="tel:+967123456789" className="hover:text-yellow-400 transition-colors">
                      +967 123 456 789
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-1">🕐 ساعات العمل</p>
                  <p className="text-sm">الأحد - الخميس: 12 ظهراً - 12 صباحاً</p>
                  <p className="text-sm">الجمعة - السبت: 4 مساءً - 1 صباحاً</p>
                </div>
              </div>
              <button 
                onClick={() => window.open(`https://wa.me/967123456789?text=${encodeURIComponent('مرحباً، أود معرفة المزيد عن الفرع الرئيسي')}`, '_blank')}
                className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-3 rounded-lg transition-colors"
              >
                تواصل عبر WhatsApp
              </button>
            </div>

            {/* Second Branch */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-500 p-4 rounded-lg">
                  <MapPin className="text-slate-900" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">الفرع الثاني</h3>
                  <p className="text-yellow-400 text-sm">🆕 فرع جديد</p>
                </div>
              </div>
              <div className="space-y-4 border-t border-slate-700 pt-6">
                <div>
                  <p className="text-gray-300 text-sm mb-1">📍 العنوان</p>
                  <p className="text-lg font-semibold">شارع الثلاثين، مقابل سوق القات المركزي، صنعاء</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-1">📞 الهاتف</p>
                  <p className="text-lg font-semibold">
                    <a href="tel:+967123456790" className="hover:text-yellow-400 transition-colors">
                      +967 123 456 790
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm mb-1">🕐 ساعات العمل</p>
                  <p className="text-sm">الأحد - الخميس: 12 ظهراً - 12 صباحاً</p>
                  <p className="text-sm">الجمعة - السبت: 4 مساءً - 1 صباحاً</p>
                </div>
              </div>
              <button 
                onClick={() => window.open(`https://wa.me/967123456790?text=${encodeURIComponent('مرحباً، أود معرفة المزيد عن الفرع الثاني')}`, '_blank')}
                className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-3 rounded-lg transition-colors"
              >
                تواصل عبر WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-xl text-gray-300">لديك استفسار؟ نحن هنا للمساعدة</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: 'الهاتف',
                content: '+967 123 456 789'
              },
              {
                icon: Mail,
                title: 'البريد الإلكتروني',
                content: 'info@barahoom.com'
              },
              {
                icon: MapPin,
                title: 'العنوان',
                content: 'شارع الخمسين، صنعاء'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-slate-800 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-slate-900" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-2xl">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">الاسم</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="أدخل اسمك"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">الرسالة</label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="أدخل رسالتك"
                ></textarea>
              </div>
              <Button 
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                إرسال الرسالة عبر WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-fade-in">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">اختر الفرع</h2>
            <p className="text-gray-600 mb-6">لطلب: <span className="font-semibold text-amber-500">{selectedDish}</span></p>
            
            <div className="space-y-4 mb-6">
              {Object.entries(branches).map(([key, branch]) => (
                <div key={key} className="border-2 border-gray-200 rounded-xl p-4 hover:border-amber-500 transition-colors">
                  <h3 className="font-bold text-slate-900 mb-3">{branch.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{branch.address}</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleOrderWithBranch(key, 'call')}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone size={18} />
                      اتصال
                    </button>
                    <button
                      onClick={() => handleOrderWithBranch(key, 'whatsapp')}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.259-1.02 1.02-1.756 2.119-2.259 3.356-.504 1.238-.749 2.565-.949 4.255-.2 1.69-.2 3.38 0 5.07.2 1.69.445 3.017.949 4.255.503 1.238 1.239 2.335 2.259 3.356 1.021 1.02 2.118 1.756 3.356 2.259 1.238.504 2.565.749 4.255.949 1.69.2 3.38.2 5.07 0 1.69-.2 3.017-.445 4.255-.949 1.238-.503 2.335-1.239 3.356-2.259 1.02-1.021 1.756-2.118 2.259-3.356.504-1.238.749-2.565.949-4.255.2-1.69.2-3.38 0-5.07-.2-1.69-.445-3.017-.949-4.255-.503-1.238-1.239-2.335-2.259-3.356-1.021-1.02-2.118-1.756-3.356-2.259-1.238-.504-2.565-.749-4.255-.949-1.69-.2-3.38-.2-5.07 0z"/>
                      </svg>
                      WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => setShowOrderModal(false)}
              className="w-full bg-gray-200 hover:bg-gray-300 text-slate-900 font-semibold py-2 rounded-lg transition-colors"
            >
              إلغاء
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
