import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Brain,
  FileText,
  CreditCard,
  TrendingUp,
  Users,
  Zap,
  Lock,
  BarChart3,
  Star,
  Building2,
  Globe,
  Award,
  Target,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 lg:py-32 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-cyan-200 rounded-full opacity-20 animate-bounce delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Zap className="h-4 w-4 mr-2" />
              AI-Powered Process • 24-Hour Funding
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              How{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                InstaFin
              </span>{" "}
              Works
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200">
              Our AI-powered platform transforms traditional financial processes
              into instant, intelligent, and transparent experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4 mr-2" />
              Step-by-Step Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Application to Funding in 4 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures quick, secure, and transparent
              capital access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business Applies
              </h3>
              <p className="text-gray-600">
                Complete our streamlined application with basic business
                information. No lengthy paperwork required.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-8 h-1 bg-blue-200 rounded-full"></div>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Background Check
              </h3>
              <p className="text-gray-600">
                Automated verification via 3rd-party APIs for business
                registration, credit history, and financial records.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-8 h-1 bg-green-200 rounded-full"></div>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI Risk Scoring
              </h3>
              <p className="text-gray-600">
                Advanced AI algorithms analyze hundreds of data points for
                comprehensive risk assessment and instant decision-making.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-8 h-1 bg-purple-200 rounded-full"></div>
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Decision & Capital
              </h3>
              <p className="text-gray-600">
                Receive instant approval decision and capital disbursement
                within 24 hours through our secure platform.
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-8 h-1 bg-orange-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="h-4 w-4 mr-2" />
              Services Offered
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From capital solutions to verification services, we provide
              everything your business needs for financial success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Capital Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Short and long-term capital solutions tailored to your business
                needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Working capital loans
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Equipment financing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Growth capital
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Supplier Financing
              </h3>
              <p className="text-gray-600 mb-4">
                Streamlined financing solutions for suppliers and vendors.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Invoice financing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Purchase order financing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Supply chain optimization
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Verification Services
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive background and invoice verification services.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Background checks
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Invoice validation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Document verification
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <Brain className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI Risk Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced AI-powered risk assessment and scoring.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Real-time risk scoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Predictive analytics
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Bias-free decisions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Security & Compliance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bank-Grade Security & Regulatory Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data and transactions are protected by industry-leading
              security measures and regulatory compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Data Protection
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    End-to-end encryption, secure data centers, and multi-factor
                    authentication ensure your sensitive information is always
                    protected.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Regulatory Compliance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fully compliant with international financial regulations
                    including GDPR, PCI DSS, and SOC 2 Type II standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                  <Globe className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Global Standards
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Adhering to international banking standards and working with
                    regulatory bodies across multiple jurisdictions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Security Certifications
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        SOC 2 Type II
                      </h4>
                      <p className="text-sm text-gray-600">
                        Security & Availability
                      </p>
                    </div>
                  </div>
                  <div className="text-green-600 font-semibold">
                    ✓ Certified
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">PCI DSS</h4>
                      <p className="text-sm text-gray-600">
                        Payment Card Industry
                      </p>
                    </div>
                  </div>
                  <div className="text-blue-600 font-semibold">✓ Certified</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">GDPR</h4>
                      <p className="text-sm text-gray-600">Data Protection</p>
                    </div>
                  </div>
                  <div className="text-purple-600 font-semibold">
                    ✓ Compliant
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">ISO 27001</h4>
                      <p className="text-sm text-gray-600">
                        Information Security
                      </p>
                    </div>
                  </div>
                  <div className="text-orange-600 font-semibold">
                    ✓ Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-600/90"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Instant Capital Access?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their financial
            operations with InstaFin&apos;s AI-powered platform. Get started in
            minutes, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/solutions"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
