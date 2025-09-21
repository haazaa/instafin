import {
  Target,
  Eye,
  Users,
  Award,
  CheckCircle,
  Globe,
  Shield,
  Zap,
  Heart,
  Lightbulb,
  TrendingUp,
  Star,
  Building2,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function About() {
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
              <Heart className="h-4 w-4 mr-2" />
              Founded in 2020 • Serving 10,000+ Businesses
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                InstaFin
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-200">
              We&apos;re revolutionizing business finance through AI-powered
              solutions that make capital access faster, smarter, and more
              accessible than ever before.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Lightbulb className="h-4 w-4 mr-2" />
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why We Started InstaFin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from frustration with traditional banking, we set out to
              create a better way for businesses to access capital.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-red-200 transition-colors">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    The Problem We Faced
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    As entrepreneurs ourselves, we experienced firsthand the
                    frustration of traditional banking. Lengthy approval
                    processes, opaque decision-making, and high rejection rates
                    were blocking countless businesses from growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    The Solution We Built
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We combined cutting-edge AI technology with deep financial
                    expertise to create a platform that delivers instant, fair,
                    and transparent capital access decisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    The Impact We&apos;re Making
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Today, we&apos;ve helped over 10,000 businesses access more
                    than $2 billion in capital, transforming how companies grow
                    and succeed in the modern economy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Our Journey
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    2020
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Founded</h4>
                    <p className="text-sm text-gray-600">
                      Started with a vision to democratize capital access
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    2021
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      First AI Model
                    </h4>
                    <p className="text-sm text-gray-600">
                      Launched our proprietary risk assessment algorithm
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    2022
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      $1B Milestone
                    </h4>
                    <p className="text-sm text-gray-600">
                      Reached $1 billion in capital deployed
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    2024
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Global Expansion
                    </h4>
                    <p className="text-sm text-gray-600">
                      Serving businesses across 15+ countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4 mr-2" />
              Mission & Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Helping Businesses Grow with Fair and Verified Capital
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission is to democratize access to business capital through
              AI-powered solutions that are fair, transparent, and accessible to
              all.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  To democratize access to business capital by leveraging
                  cutting-edge AI technology that eliminates traditional
                  barriers and makes financial solutions accessible to
                  businesses of all sizes, regardless of their background or
                  location.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe every business deserves a fair chance to grow and
                  succeed, and we&apos;re committed to making that vision a
                  reality through innovation, transparency, and unwavering
                  support.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">
                    What This Means:
                  </h4>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Fair, bias-free risk assessment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Transparent decision-making process
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Accessible to businesses of all sizes
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the world&apos;s leading AI-powered financial
                  platform that transforms how businesses access capital, manage
                  risk, and make financial decisions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We envision a future where financial services are instant,
                  intelligent, and inclusive—where every business has the tools
                  and support they need to thrive in an increasingly complex
                  global economy.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-3">
                    Our Future Goals:
                  </h4>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Global expansion to 50+ countries
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      $10B+ in capital deployed
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Serving 100,000+ businesses
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Principles That Guide Everything We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every decision we make and every interaction
              we have with our clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors group-hover:scale-110">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Transparency
              </h3>
              <p className="text-gray-600">
                We operate with complete transparency and honesty in all our
                dealings. No hidden fees, no surprise terms, no opaque
                processes.
              </p>
            </div>

            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors group-hover:scale-110">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Security
              </h3>
              <p className="text-gray-600">
                Bank-grade security with end-to-end encryption, multi-factor
                authentication, and compliance with international standards.
              </p>
            </div>

            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors group-hover:scale-110">
                <TrendingUp className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Growth
              </h3>
              <p className="text-gray-600">
                We&apos;re committed to helping businesses grow sustainably.
                Every decision we make is designed to support long-term success.
              </p>
            </div>

            <div className="text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors group-hover:scale-110">
                <Zap className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI-Driven Insights
              </h3>
              <p className="text-gray-600">
                We leverage cutting-edge AI technology to provide accurate,
                bias-free insights that drive better financial decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built by Financial Technology Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines decades of experience in finance, technology,
              and AI to deliver innovative solutions that truly serve
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-xl">SJ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sarah Johnson
              </h3>
              <p className="text-blue-600 font-medium mb-4">CEO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Former Goldman Sachs executive with 15+ years in fintech
                innovation. Led the development of our core AI platform.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-xl">MC</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Michael Chen
              </h3>
              <p className="text-blue-600 font-medium mb-4">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                AI research scientist with PhD from Stanford. Previously led
                machine learning teams at Google and Facebook.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-xl">ER</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Emily Rodriguez
              </h3>
              <p className="text-blue-600 font-medium mb-4">CFO</p>
              <p className="text-gray-600 text-sm">
                Certified public accountant with extensive experience in
                financial risk management and regulatory compliance.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Commitment to Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With over 50 team members across engineering, finance, and
                customer success, we&apos;re dedicated to providing the highest
                level of service and innovation. Our diverse team brings
                together expertise from leading financial institutions,
                technology companies, and regulatory bodies to ensure we deliver
                solutions that truly serve our clients&apos; needs.
              </p>
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
            Ready to Experience the InstaFin Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that trust InstaFin for their capital
            needs. Experience transparent, AI-powered financial solutions that
            put your business first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/how-it-works"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
