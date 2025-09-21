import {
  Building2,
  Users,
  Truck,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Clock,
  Star,
  Target,
  Heart,
  Lightbulb,
  Award,
} from "lucide-react";

export default function Solutions() {
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
              <Target className="h-4 w-4 mr-2" />
              Tailored Solutions • Industry-Specific
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                Every Business
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200">
              Tailored financial solutions designed to meet the unique needs of
              businesses across industries and sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Small Businesses */}
      <section id="smb" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="h-4 w-4 mr-2" />
              Small Businesses
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fast Access with Simplified Verification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined solutions designed specifically for small businesses
              seeking quick capital access without complex requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Quick Application Process
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Simplified application with minimal documentation
                    requirements. Get approved in minutes, not weeks.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Flexible Credit Requirements
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our AI considers alternative data points beyond traditional
                    credit scores to assess your business potential.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Competitive Rates
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Transparent pricing with competitive rates tailored to small
                    business needs and cash flow patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Perfect For:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Startups & Early-stage businesses
                  </span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Seasonal businesses</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Service-based companies</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Retail & e-commerce</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Restaurants & hospitality
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Enterprises */}
      <section id="enterprise" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Enterprise Solutions
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        $1M - $50M
                      </h4>
                      <p className="text-sm text-gray-600">Funding Range</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Custom Terms
                      </h4>
                      <p className="text-sm text-gray-600">
                        Tailored Solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Dedicated Team
                      </h4>
                      <p className="text-sm text-gray-600">
                        Account Management
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Building2 className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Large Enterprises
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Comprehensive financial solutions for established corporations,
                multinational companies, and large-scale operations requiring
                sophisticated capital management.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Customized funding structures
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Dedicated account management
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Multi-currency support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Advanced analytics & reporting
                  </span>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  Ideal For:
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-purple-800">
                  <div>• Manufacturing</div>
                  <div>• Technology Companies</div>
                  <div>• Financial Services</div>
                  <div>• Healthcare Systems</div>
                  <div>• Energy & Utilities</div>
                  <div>• Real Estate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suppliers */}
      <section id="suppliers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Suppliers & Vendors
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Streamlined financing solutions for suppliers, vendors, and
                service providers who need working capital to fulfill orders and
                maintain operations.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Invoice-based financing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Purchase order financing
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Supply chain optimization
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Automated payment processing
                  </span>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Perfect For:
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-green-800">
                  <div>• Raw Material Suppliers</div>
                  <div>• Component Manufacturers</div>
                  <div>• Logistics Providers</div>
                  <div>• Service Contractors</div>
                  <div>• Wholesale Distributors</div>
                  <div>• Equipment Suppliers</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Supplier Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">$10K - $2M</h4>
                    <p className="text-sm text-gray-600">Funding Range</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Same Day</h4>
                    <p className="text-sm text-gray-600">Approval Process</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Global Reach
                    </h4>
                    <p className="text-sm text-gray-600">
                      Multi-Country Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investors */}
      <section id="investors" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Investment Opportunities
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">8-15%</h4>
                      <p className="text-sm text-gray-600">Expected Returns</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Diversified
                      </h4>
                      <p className="text-sm text-gray-600">Portfolio Options</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Real-Time</h4>
                      <p className="text-sm text-gray-600">
                        Performance Tracking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Investors
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Access high-quality investment opportunities through our
                marketplace, with AI-powered risk assessment and transparent
                performance tracking.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Pre-vetted investment opportunities
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    AI-powered risk assessment
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Diversified portfolio options
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Real-time performance monitoring
                  </span>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">
                  Investment Types:
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-orange-800">
                  <div>• Business Loans</div>
                  <div>• Invoice Financing</div>
                  <div>• Equipment Leasing</div>
                  <div>• Working Capital</div>
                  <div>• Trade Finance</div>
                  <div>• Growth Capital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored financial solutions designed for specific industries and
              their unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Technology
              </h3>
              <p className="text-gray-600 mb-4">
                Growth capital for tech startups, SaaS companies, and digital
                transformation projects.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• R&D financing</li>
                <li>• Product development</li>
                <li>• Market expansion</li>
                <li>• Talent acquisition</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mb-6">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Manufacturing
              </h3>
              <p className="text-gray-600 mb-4">
                Working capital and equipment financing for manufacturers and
                production companies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Equipment financing</li>
                <li>• Inventory management</li>
                <li>• Supply chain optimization</li>
                <li>• Capacity expansion</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Healthcare
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized financing for healthcare providers, clinics, and
                medical practices.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Medical equipment</li>
                <li>• Practice expansion</li>
                <li>• Technology upgrades</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Retail & E-commerce
              </h3>
              <p className="text-gray-600 mb-4">
                Flexible financing solutions for retailers, online stores, and
                consumer brands.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Inventory financing</li>
                <li>• Seasonal cash flow</li>
                <li>• Marketing campaigns</li>
                <li>• Store expansion</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-cyan-600 text-white rounded-lg flex items-center justify-center mb-6">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Logistics & Transportation
              </h3>
              <p className="text-gray-600 mb-4">
                Fleet financing and working capital for logistics and
                transportation companies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fleet expansion</li>
                <li>• Fuel financing</li>
                <li>• Route optimization</li>
                <li>• Technology upgrades</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Real Estate
              </h3>
              <p className="text-gray-600 mb-4">
                Property development and investment financing for real estate
                professionals.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Development loans</li>
                <li>• Property acquisition</li>
                <li>• Renovation financing</li>
                <li>• Bridge loans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how InstaFin can help your business access the capital it
            needs to grow and succeed. Get started today with a personalized
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/how-it-works"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
