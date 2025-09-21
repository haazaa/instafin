"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  Brain,
  Target,
  Star,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedButton from "@/components/AnimatedButton";
import AnimatedCounter from "@/components/AnimatedCounter";
import {
  fadeUp,
  staggerContainer,
  float,
  hoverScale,
  tapScale,
} from "@/lib/animations";

export default function Home() {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 lg:py-32 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 animate-pulse"></div>

        {!shouldReduce && (
          <>
            <motion.div
              className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
              animate={float}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-200 rounded-full opacity-20"
              animate={float}
              transition={{ delay: 1 }}
            />
          </>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
              variants={fadeUp}
            >
              <Star className="h-4 w-4 mr-2" />
              Trusted by
              <AnimatedCounter value={10000} suffix="+" className="ml-1 mr-1" />
              Businesses Worldwide
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
              variants={fadeUp}
            >
              Smart Capital Access
              <motion.span
                className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                variants={fadeUp}
                transition={{ delay: 0.2 }}
              >
                Backed by AI-Powered
              </motion.span>
              <motion.span
                className="block"
                variants={fadeUp}
                transition={{ delay: 0.4 }}
              >
                Risk Verification
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
              variants={fadeUp}
              transition={{ delay: 0.6 }}
            >
              Transform your business with instant capital access, intelligent
              risk scoring, and seamless background verification powered by
              cutting-edge AI technology.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeUp}
              transition={{ delay: 0.8 }}
            >
              <AnimatedButton
                variant="primary"
                size="lg"
                className="group shadow-lg hover:shadow-xl"
              >
                <Link href="/contact" className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedButton>

              <AnimatedButton
                variant="outline"
                size="lg"
                className="shadow-lg hover:shadow-xl"
              >
                <Link href="/how-it-works">Learn How It Works</Link>
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <AnimatedSection className="py-20 bg-white" stagger>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Problem */}
            <motion.div className="space-y-8" variants={fadeUp}>
              <div className="flex items-center mb-6">
                <motion.div
                  className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4"
                  whileHover={hoverScale}
                >
                  <Target className="h-6 w-6 text-red-600" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  The Problem
                </h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    number: "1",
                    title: "Hard for SMEs to Access Capital",
                    description:
                      "Traditional banks reject 80% of small business loan applications, leaving entrepreneurs without the capital they need to grow.",
                  },
                  {
                    number: "2",
                    title: "Lengthy Approval Processes",
                    description:
                      "Weeks or months of waiting for decisions, with opaque criteria and no clear explanation for rejections.",
                  },
                  {
                    number: "3",
                    title: "Limited Risk Assessment",
                    description:
                      "Outdated credit scoring models that don't capture the true potential of modern businesses.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start group"
                    variants={fadeUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-red-200 transition-colors"
                      whileHover={hoverScale}
                    >
                      <span className="text-red-600 font-bold text-sm">
                        {item.number}
                      </span>
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div className="space-y-8" variants={fadeUp}>
              <div className="flex items-center mb-6">
                <motion.div
                  className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4"
                  whileHover={hoverScale}
                >
                  <Brain className="h-6 w-6 text-green-600" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Solution
                </h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    number: "1",
                    title: "AI-Powered Risk Verification",
                    description:
                      "Advanced machine learning algorithms analyze hundreds of data points for accurate, fair risk assessment.",
                  },
                  {
                    number: "2",
                    title: "Instant Decisions",
                    description:
                      "Get approved in minutes, not months. Our AI processes applications in real-time with transparent criteria.",
                  },
                  {
                    number: "3",
                    title: "Trusted & Transparent",
                    description:
                      "Bank-grade security with complete transparency. No hidden fees, clear terms, and 24/7 support.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start group"
                    variants={fadeUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-green-200 transition-colors"
                      whileHover={hoverScale}
                    >
                      <span className="text-green-600 font-bold text-sm">
                        {item.number}
                      </span>
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Trust Indicators */}
      <AnimatedSection className="py-16 bg-gray-50" stagger>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={fadeUp}>
            <p className="text-gray-600 text-lg">
              Trusted by businesses worldwide
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              {
                value: 10000,
                suffix: "+",
                label: "Active Users",
                color: "text-blue-600",
              },
              {
                value: 2,
                suffix: "B+",
                label: "Capital Deployed",
                color: "text-green-600",
              },
              {
                value: 99.9,
                suffix: "%",
                label: "Uptime",
                color: "text-purple-600",
              },
              {
                value: 24,
                suffix: "/7",
                label: "Support",
                color: "text-orange-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeUp}
                whileHover={hoverScale}
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works (3 Steps) */}
      <AnimatedSection className="py-20 bg-white" stagger>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient. Get started in three easy
              steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Apply",
                description:
                  "Complete our streamlined application with basic business information. No lengthy paperwork required.",
                color: "from-blue-600 to-blue-700",
                bgColor: "bg-blue-200",
              },
              {
                number: "2",
                title: "Verify",
                description:
                  "Our AI instantly analyzes your business data, credit history, and market conditions for comprehensive risk assessment.",
                color: "from-green-600 to-green-700",
                bgColor: "bg-green-200",
              },
              {
                number: "3",
                title: "Get Capital",
                description:
                  "Receive instant approval and funding within 24 hours. Access your capital through our secure platform.",
                color: "from-purple-600 to-purple-700",
                bgColor: "bg-purple-200",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={fadeUp}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg`}
                  whileHover={hoverScale}
                  whileTap={tapScale}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4 flex justify-center">
                  <div className={`w-8 h-1 ${step.bgColor} rounded-full`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            variants={fadeUp}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/how-it-works"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose InstaFin?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-driven platform delivers unmatched speed, accuracy, and
              reliability in financial decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI Verification
              </h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms provide accurate, bias-free
                risk assessment in real-time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Lightning Speed
              </h3>
              <p className="text-gray-600">
                Get approved in minutes, not months. Our AI processes
                applications instantly with transparent criteria.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Smart Risk Scoring
              </h3>
              <p className="text-gray-600">
                Comprehensive risk assessment and predictive analytics to
                optimize your financial decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Bank-Grade Security
              </h3>
              <p className="text-gray-600">
                End-to-end encryption, multi-factor authentication, and
                compliance with international security standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied businesses that trust InstaFin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;InstaFin transformed our cash flow management. The
                AI-powered risk assessment gave us confidence in our financial
                decisions.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SJ</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">CEO, TechStart Inc.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;The speed and accuracy of InstaFin&apos;s platform is
                unmatched. We got approved and funded within hours, not
                weeks.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MC</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-500">CFO, RetailPlus</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;As a small business owner, InstaFin gave me access to
                capital I never thought possible. The process was seamless and
                transparent.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ER</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                  <p className="text-sm text-gray-500">
                    Owner, Local Services Co.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-semibold text-gray-600 mb-8">
              Trusted by Leading Companies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
              <div className="text-2xl font-bold text-gray-400 hover:opacity-100 transition-opacity">
                TechCorp
              </div>
              <div className="text-2xl font-bold text-gray-400 hover:opacity-100 transition-opacity">
                FinancePro
              </div>
              <div className="text-2xl font-bold text-gray-400 hover:opacity-100 transition-opacity">
                BusinessHub
              </div>
              <div className="text-2xl font-bold text-gray-400 hover:opacity-100 transition-opacity">
                CapitalFlow
              </div>
              <div className="text-2xl font-bold text-gray-400 hover:opacity-100 transition-opacity">
                GrowthCo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-600/90"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already discovered the power
            of AI-driven financial solutions. Apply now and get funded in 24
            hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
