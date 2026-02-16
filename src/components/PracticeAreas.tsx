import { FileText, Building2, Scale, Home, Briefcase, Plane, Users, Lightbulb, Landmark, Pickaxe, Handshake } from 'lucide-react';

const practiceAreas = [
  {
    icon: FileText,
    title: 'Commissioner for Oaths',
    description: 'Professional oath administration and document certification services for legal and official purposes.',
  },
  {
    icon: Building2,
    title: 'Corporate Advisory',
    description: 'Strategic corporate governance, compliance, and business structuring solutions for enterprises.',
  },
  {
    icon: Scale,
    title: 'Litigation',
    description: 'Expert representation in civil, commercial, and criminal matters across all court levels.',
  },
  {
    icon: Home,
    title: 'Conveyance',
    description: 'Comprehensive property transfer, title registration, and real estate transaction services.',
  },
  {
    icon: Briefcase,
    title: 'Employment & Labour Law',
    description: 'Guidance on workplace disputes, contracts, industrial relations, and employment compliance.',
  },
  {
    icon: Plane,
    title: 'Immigration Services',
    description: 'Visa applications, work permits, residency, and citizenship matters for individuals and businesses.',
  },
  {
    icon: Users,
    title: 'Family Law',
    description: 'Sensitive handling of divorce, custody, adoption, matrimonial property, and succession issues.',
  },
  {
    icon: Lightbulb,
    title: 'Intellectual Property',
    description: 'Protection and enforcement of trademarks, patents, copyrights, and trade secrets.',
  },
  {
    icon: Landmark,
    title: 'Banking Law',
    description: 'Financial regulations, loan agreements, securities, and banking compliance advisory.',
  },
  {
    icon: Pickaxe,
    title: 'Mining Law',
    description: 'Mining licenses, exploration rights, compliance, and dispute resolution in the mining sector.',
  },
  {
    icon: Handshake,
    title: 'Alternative Dispute Resolution',
    description: 'Mediation, arbitration, and negotiation services for efficient conflict resolution.',
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Our Practice Areas
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive legal services tailored to meet the diverse needs of our clients across multiple practice areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500/50 hover:-translate-y-2"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-700 group-hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-3 text-center group-hover:text-orange-500 transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
