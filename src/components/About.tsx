import { Award, Target, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              About A.J. Muvwende Advocates
            </h2>
            <div className="w-24 h-1 bg-orange-500 mb-8"></div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A.J. Muvwende Advocates is a premier legal practice located in the heart of <span className="font-semibold text-blue-700">Rhodespark, Lusaka</span>.
              We are dedicated to providing exceptional legal services with unwavering commitment to excellence and integrity.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our firm specializes in strategic corporate governance, litigation, and a comprehensive range of legal services
              designed to protect your interests and advance your objectives. We understand that every client's needs are unique,
              and we tailor our approach accordingly.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With a client-focused philosophy and deep expertise across multiple practice areas, we have established ourselves
              as trusted advisors to individuals, businesses, and organizations throughout Zambia.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 mb-1">Excellence</h4>
                  <p className="text-sm text-gray-600">Uncompromising quality in every matter</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 mb-1">Integrity</h4>
                  <p className="text-sm text-gray-600">Ethical practice and transparency</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 mb-1">Results</h4>
                  <p className="text-sm text-gray-600">Strategic solutions that deliver</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-700 mb-1">Client Focus</h4>
                  <p className="text-sm text-gray-600">Your success is our priority</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional legal services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-8 rounded-xl shadow-xl max-w-xs">
              <div className="text-3xl font-bold mb-2">Why Choose Us?</div>
              <p className="text-sm text-white/90">
                Professional expertise, personalized service, and proven results for every client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
