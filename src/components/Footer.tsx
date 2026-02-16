import { Scale, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    'Commissioner for Oaths',
    'Corporate Advisory',
    'Litigation',
    'Conveyance',
    'Employment & Labour Law',
    'Immigration Services',
    'Family Law',
    'Intellectual Property',
    'Banking Law',
    'Mining Law',
    'Alternative Dispute Resolution',
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full border-3 border-orange-500 flex items-center justify-center bg-white/10">
                <Scale className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <div className="text-lg font-bold">A.J. MUVWENDE</div>
                <div className="text-xs text-orange-500 tracking-wide">ADVOCATES</div>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              Premier legal practice providing comprehensive legal services with excellence and integrity.
            </p>
            <div className="text-sm text-white/70 italic">
              Legal Practitioners &<br />Commissioners for Oaths
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500">Practice Areas</h3>
            <ul className="space-y-2">
              {practiceAreas.slice(0, 6).map((area, index) => (
                <li key={index}>
                  <a href="#practice-areas" className="text-sm text-white/80 hover:text-orange-500 transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500">More Services</h3>
            <ul className="space-y-2">
              {practiceAreas.slice(6).map((area, index) => (
                <li key={index}>
                  <a href="#practice-areas" className="text-sm text-white/80 hover:text-orange-500 transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-sm text-white/80">
                  Plot 2024, Flat No.4<br />
                  Ituna Road, Rhodespark<br />
                  Lusaka, Zambia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+260979827082" className="text-sm text-white/80 hover:text-orange-500 transition-colors">
                  +260 979 827082
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <a href="mailto:aj.muvwende_advocates@yahoo.com" className="text-sm text-white/80 hover:text-orange-500 transition-colors break-all">
                  aj.muvwende_advocates@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/70 text-center md:text-left">
              {currentYear} A.J. Muvwende Advocates. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#hero" className="text-sm text-white/70 hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#hero" className="text-sm text-white/70 hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
