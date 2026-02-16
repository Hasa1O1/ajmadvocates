import { Scale, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-orange-500 flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <Scale className="w-12 h-12 text-orange-500" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          A.J. MUVWENDE
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
          ADVOCATES
        </h2>

        <div className="w-32 h-1 bg-orange-500 mx-auto mb-8"></div>

        <p className="text-xl md:text-2xl text-white/90 mb-4 font-light tracking-wide">
          Legal Practitioners & Commissioners for Oaths
        </p>

        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Excellence in Legal Service | Strategic Corporate Governance | Client-Focused Solutions
        </p>

        <button
          onClick={scrollToContact}
          className="group bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-orange-500/50 flex items-center mx-auto space-x-2"
        >
          <span>Request Consultation</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
            <div className="text-sm uppercase tracking-wide">Practice Areas</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <div className="text-sm uppercase tracking-wide">Client Commitment</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-sm uppercase tracking-wide">Legal Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
