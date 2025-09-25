import React, { useState } from 'react';
import { Phone, MapPin, Clock, Wrench, Truck, Car, Zap, MessageCircle, Navigation, Star, Mail, Users, Award, ArrowUp, Menu, X } from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  const phoneNumber = "07 65 87 37 43";
  const whatsappNumber = "33765873743";
  const address = "8 Av. de Fontainebleau, 77310 Pringy";
  const hours = "24h/24 - 7j/7"; // À adapter

  const services = [
    {
      id: 1,
      title: "Dépannage",
      description: "Intervention rapide sur site pour tous types de pannes",
      icon: Wrench,
      image: "/images/maverick-service1.webp"
    },
    {
      id: 2,
      title: "Remorquage",
      description: "Transport sécurisé vers le garage de votre choix",
      icon: Truck,
      image: "/images/maverick-service2.webp"
    },
    {
      id: 3,
      title: "Transport de Prestige",
      description: "Transport spécialisé pour véhicules haut de gamme",
      icon: Car,
      image: "/images/maverick-bg1.webp"
    },
    {
      id: 4,
      title: "Assistance Rapide",
      description: "Intervention d'urgence en moins de 30 minutes",
      icon: Zap,
      image: "/images/maverick-bg2.webp"
    }
  ];

  const testimonials = [
    {
      name: "Jean-Pierre M.",
      rating: 5,
      text: "Service exceptionnel ! Intervention rapide et professionnelle. Mon véhicule de prestige a été transporté avec le plus grand soin."
    },
    {
      name: "Marie L.",
      rating: 5,
      text: "Disponible 24h/24, très réactif. L'équipe Maverick a résolu ma panne en un temps record. Je recommande vivement !"
    },
    {
      name: "Alexandre D.",
      rating: 5,
      text: "Professionnalisme exemplaire. Transport de ma voiture de collection effectué avec une attention particulière aux détails."
    }
  ];

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Bonjour, j'ai besoin d'une assistance`, '_blank');
  };

  const handleDirections = () => {
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(address)}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset pour éviter que le header fixe masque le haut de section
      const headerOffset = 100; // ~hauteur approximative du header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsNavMenuOpen(false);
    }
  };

  // Gérer l'affichage du bouton de retour en haut
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between md:justify-center">
            <div className="flex items-center space-x-8">
              <button
                onClick={scrollToTop}
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/images/Maverick_Motors_logo.webp"
                  alt="Maverick Motors"
                  className="h-16 w-auto"
                  loading="lazy"
                  decoding="async"
                  width={256}
                  height={64}
                />
              </button>
              <nav className="hidden md:flex items-center space-x-8">
                <button onClick={() => scrollToSection('services')} className="hover:text-maverick-yellow transition-colors">Services</button>
                <button onClick={() => scrollToSection('about')} className="hover:text-maverick-yellow transition-colors">À propos</button>
                <button onClick={() => scrollToSection('avis')} className="hover:text-maverick-yellow transition-colors">Avis</button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-maverick-yellow transition-colors">Contact</button>
                <button
                  onClick={handleCall}
                  className="bg-maverick-yellow text-black px-6 py-2 rounded-lg hover:bg-maverick-yellow/90 transition-all transform hover:scale-105 font-semibold"
                >
                  📞 Appeler
                </button>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
              className="md:hidden w-10 h-10 bg-maverick-yellow text-black rounded-lg flex items-center justify-center"
            >
              {isNavMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isNavMenuOpen && (
            <div className="md:hidden mt-4 bg-black/95 backdrop-blur-sm rounded-lg p-3 border border-maverick-yellow/30 shadow-xl max-w-xs ml-auto">
              <button
                onClick={() => scrollToSection('hero')}
                className="w-full text-right px-3 py-2.5 pr-4 text-white hover:text-maverick-yellow hover:bg-maverick-yellow/20 rounded-md transition-all duration-200 border-b border-gray-700/50 last:border-b-0"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="w-full text-right px-3 py-2.5 pr-4 text-white hover:text-maverick-yellow hover:bg-maverick-yellow/20 rounded-md transition-all duration-200 border-b border-gray-700/50 last:border-b-0"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="w-full text-right px-3 py-2.5 pr-4 text-white hover:text-maverick-yellow hover:bg-maverick-yellow/20 rounded-md transition-all duration-200 border-b border-gray-700/50 last:border-b-0"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection('avis')}
                className="w-full text-right px-3 py-2.5 pr-4 text-white hover:text-maverick-yellow hover:bg-maverick-yellow/20 rounded-md transition-all duration-200 border-b border-gray-700/50 last:border-b-0"
              >
                Avis
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-right px-3 py-2.5 pr-4 text-white hover:text-maverick-yellow hover:bg-maverick-yellow/20 rounded-md transition-all duration-200 border-b border-gray-700/50 last:border-b-0"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 scroll-mt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url('/images/maverick-hero.webp')`
          }}
        >
          <div className="absolute inset-0 bg-black/60">
            {/* Effets visuels flottants */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-maverick-yellow rounded-full animate-pulse-slow"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-maverick-yellow/60 rounded-full animate-float"></div>
            <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-maverick-yellow rounded-full animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-maverick-yellow/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 right-10 w-1 h-1 bg-maverick-yellow rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-maverick-yellow">Dépannage</span> & <br />
            <span className="text-white">Transport</span> <br />
            <span className="text-maverick-yellow">24/7</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Service professionnel de dépannage et transport de véhicules de prestige
          </p>

          {/* Contact Info */}
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-maverick-yellow" />
                <a href={`tel:${phoneNumber}`} className="hover:text-maverick-yellow transition-colors font-semibold">
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-maverick-yellow" />
                <span className="text-sm">{address}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-maverick-yellow" />
                <span className="font-semibold text-maverick-yellow">{hours}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleCall}
              className="bg-maverick-yellow text-black px-8 py-4 rounded-xl text-xl font-bold hover:bg-maverick-yellow/90 transition-all transform hover:scale-105 shadow-xl min-w-[200px]"
            >
              📞 Appeler maintenant
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-green-500 transition-all transform hover:scale-105 shadow-xl min-w-[200px] flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={handleDirections}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-blue-500 transition-all transform hover:scale-105 shadow-xl min-w-[200px] flex items-center justify-center space-x-2"
            >
              <Navigation className="w-6 h-6" />
              <span>Itinéraire</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
  <section id="services" className="section-shell scroll-mt-32">
        <div
          className="section-bg"
          style={{
            /* Using @2x filename placeholder for future high-res asset */
            backgroundImage: `image-set(url('/images/maverick-bg1.webp') 1x, url('/images/maverick-bg1@2x.webp') 2x)`
          }}
        />
        <div className="section-overlay" />
        <div className="section-noise" />
        <div className="section-accent" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Nos <span className="text-maverick-yellow">Services</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une gamme complète de services professionnels pour tous vos besoins de dépannage et transport
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service) => (
              <div key={service.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-black/35 backdrop-blur-md border border-maverick-yellow/25 card-hover-glow">
                  <div 
                    className="h-32 md:h-64 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `url('${service.image}')`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10"></div>
                    <div className="absolute top-2 left-2 md:top-4 md:left-4 w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center icon-ring bg-maverick-yellow shadow-[0_0_0_1px_rgba(255,255,255,0.15)]">
                      <service.icon className="w-4 h-4 md:w-6 md:h-6 text-black drop-shadow" />
                    </div>
                  </div>
                  
                  <div className="p-3 md:p-6">
                    <h4 className="text-sm md:text-xl font-bold mb-1 md:mb-3 text-maverick-yellow text-center">{service.title}</h4>
                    <p className="text-xs md:text-base text-gray-300 hidden md:block text-center">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - nouvelle version */}
  <section id="about" className="section-shell scroll-mt-32 section-mask-soft section--image-strong">
        <div
          className="section-bg"
          style={{
            backgroundImage: `image-set(url('/images/maverick-about.webp') 1x, url('/images/maverick-about@2x.webp') 2x)`
          }}
        />
        <div className="section-overlay" />
        <div className="section-noise" />
        <div className="section-accent" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Colonne texte principale */}
            <div className="lg:col-span-7 panel-glass p-8 md:p-10 relative overflow-hidden">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                À propos de <span className="text-maverick-yellow">Maverick</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                Service premium de <span className="text-maverick-yellow font-semibold">dépannage</span> & transport de véhicules avec une expertise dédiée aux modèles haut de gamme et de collection. Intervention <span className="text-maverick-yellow font-semibold">rapide 24/7</span> et prise en charge sécurisée.
              </p>
              <div className="stats-grid mb-8">
                <div className="stat-box text-center">
                  <h4 className="text-maverick-yellow">450+</h4>
                  <p>Interventions Réussies</p>
                </div>
                <div className="stat-box text-center">
                  <h4 className="text-maverick-yellow">30min</h4>
                  <p>Temps Moyen</p>
                </div>
                <div className="stat-box text-center">
                  <h4 className="text-maverick-yellow">24/7</h4>
                  <p>Disponibilité</p>
                </div>
                <div className="stat-box text-center">
                  <h4 className="text-maverick-yellow">100%</h4>
                  <p>Satisfaction</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                <div className="text-center">
                  <div className="w-14 h-14 bg-maverick-yellow rounded-xl flex items-center justify-center mx-auto mb-3 icon-ring shadow-md">
                    <Users className="w-7 h-7 text-black" />
                  </div>
                  <h4 className="text-sm font-semibold mb-1 text-maverick-yellow tracking-wide">Équipe Expert</h4>
                  <p className="text-gray-400 text-xs">Techniciens qualifiés</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-maverick-yellow rounded-xl flex items-center justify-center mx-auto mb-3 icon-ring shadow-md">
                    <Clock className="w-7 h-7 text-black" />
                  </div>
                  <h4 className="text-sm font-semibold mb-1 text-maverick-yellow tracking-wide">Intervention Rapide</h4>
                  <p className="text-gray-400 text-xs">Moins de 30 minutes</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-maverick-yellow rounded-xl flex items-center justify-center mx-auto mb-3 icon-ring shadow-md">
                    <Award className="w-7 h-7 text-black" />
                  </div>
                  <h4 className="text-sm font-semibold mb-1 text-maverick-yellow tracking-wide">Qualité Premium</h4>
                  <p className="text-gray-400 text-xs">Standards élevés</p>
                </div>
              </div>
            </div>
            {/* Colonne latérale / encart */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="panel-glass p-6 md:p-8 flex flex-col justify-between h-full">
                <h4 className="text-2xl font-bold mb-4">
                  Pourquoi <span className="text-maverick-yellow">nous choisir</span>
                </h4>
                <ul className="space-y-4 text-sm text-gray-300">
                  <li className="flex items-start gap-3"><span className="text-maverick-yellow">•</span> Flotte équipée pour véhicules bas / prestige</li>
                  <li className="flex items-start gap-3"><span className="text-maverick-yellow">•</span> Suivi transparent & communication directe</li>
                  <li className="flex items-start gap-3"><span className="text-maverick-yellow">•</span> Assurance et sécurité optimales</li>
                  <li className="flex items-start gap-3"><span className="text-maverick-yellow">•</span> Intervention multi-départements</li>
                  <li className="flex items-start gap-3"><span className="text-maverick-yellow">•</span> Engagement satisfaction client</li>
                </ul>
                <div className="mt-8">
                  <button onClick={() => scrollToSection('contact')} className="w-full bg-maverick-yellow text-black py-3 rounded-lg font-semibold hover:bg-maverick-yellow/90 transition-colors">
                    Nous contacter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - nouvelle version */}
  <section id="avis" className="section-shell scroll-mt-32 section-mask-soft section--image-strong bg-flip-x">
        <div
          className="section-bg"
          style={{
            backgroundImage: `image-set(url('/images/maverick-avis.webp') 1x, url('/images/maverick-avis@2x.webp') 2x)`
          }}
        />
        <div className="section-overlay" />
        <div className="section-noise" />
        <div className="section-accent" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="reviews-summary mb-14">
              <div className="flex flex-col items-center">
                <span className="score">5.0</span>
                <span className="label">Note Globale</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-maverick-yellow fill-current" />
                  ))}
                </div>
                <span className="total">Basé sur 300+ avis</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="score text-3xl md:text-[2.4rem]">100%</span>
                <span className="label">Satisfaction</span>
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-10 text-center">
              Avis <span className="text-maverick-yellow">Clients</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-maverick-yellow fill-current" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">- {testimonial.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
  <section id="contact" className="py-20 bg-black/50 scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-maverick-yellow">Contactez</span>-nous
            </h3>
            <p className="text-xl text-gray-300">Besoin d'assistance ? Nous sommes là pour vous aider</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-bold mb-8 text-maverick-yellow">Informations de contact</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-maverick-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Téléphone</h5>
                    <a href={`tel:${phoneNumber}`} className="text-maverick-yellow hover:underline text-lg">
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-maverick-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Adresse</h5>
                    <p className="text-gray-300">{address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-maverick-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Horaires</h5>
                    <p className="text-maverick-yellow font-semibold">{hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h4 className="text-2xl font-bold mb-8 text-maverick-yellow">Formulaire de contact</h4>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-maverick-yellow focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-maverick-yellow focus:border-transparent transition-all"
                    placeholder="Votre numéro"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-maverick-yellow focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-maverick-yellow focus:border-transparent transition-all"
                    placeholder="Décrivez votre demande..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-maverick-yellow text-black py-3 px-6 rounded-lg font-semibold hover:bg-maverick-yellow/90 transition-all transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 inline-block mr-2" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <button
                onClick={scrollToTop}
                className="hover:opacity-80 transition-opacity mb-4 block"
              >
                <img 
                  src="/images/Maverick_Motors_logo.webp" 
                  alt="Maverick Motors" 
                  className="h-16 w-auto"
                />
              </button>
              <p className="text-gray-400">
                Votre partenaire de confiance pour le dépannage et transport de véhicules 24h/24.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-maverick-yellow">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Dépannage automobile</li>
                <li>Remorquage sécurisé</li>
                <li>Transport de prestige</li>
                <li>Assistance rapide</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4 text-maverick-yellow">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li>{phoneNumber}</li>
                <li>{address}</li>
                <li className="text-maverick-yellow font-semibold">{hours}</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Maverick. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Floating Navigation Menu */}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-4 md:bottom-8 w-12 h-12 bg-maverick-yellow text-black rounded-full flex items-center justify-center shadow-lg hover:bg-maverick-yellow/90 transition-all transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-maverick-yellow/20 p-4 z-50 md:hidden">
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleCall}
            className="flex-1 bg-maverick-yellow text-black py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-maverick-yellow/90 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span>Appeler</span>
          </button>
          <button
            onClick={handleDirections}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-500 transition-all"
          >
            <Navigation className="w-5 h-5" />
            <span>Itinéraire</span>
          </button>
        </div>
      </div>

      {/* Mobile padding to prevent content overlap */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
}

export default App;