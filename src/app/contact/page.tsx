"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  User,
  Building,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    businessType: "",
    fundingAmount: "",
    message: "",
    demoRequest: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Started
              </span>{" "}
              Today
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with AI-powered financial
              solutions? Let&apos;s discuss how InstaFin can help you access the
              capital you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get Your Free Consultation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours with a personalized funding solution.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Your application has been submitted successfully. Our team
                    will review your information and contact you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="businessType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Business Type *
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select business type</option>
                        <option value="startup">Startup</option>
                        <option value="small-business">Small Business</option>
                        <option value="medium-business">Medium Business</option>
                        <option value="large-enterprise">
                          Large Enterprise
                        </option>
                        <option value="supplier">Supplier/Vendor</option>
                        <option value="investor">Investor</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="fundingAmount"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Funding Amount Needed
                      </label>
                      <select
                        id="fundingAmount"
                        name="fundingAmount"
                        value={formData.fundingAmount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select amount range</option>
                        <option value="5k-50k">$5,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="1m-5m">$1,000,000 - $5,000,000</option>
                        <option value="5m+">$5,000,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Tell us about your business needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your business, funding needs, and any specific requirements..."
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="demoRequest"
                      name="demoRequest"
                      checked={formData.demoRequest}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="demoRequest"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      I would like to schedule a demo of InstaFin&apos;s
                      platform
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Submit Application
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions? We&apos;re here to help. Reach out to our team
                through any of the channels below.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600 mb-1">hello@instafin.com</p>
                    <p className="text-gray-600 mb-1">support@instafin.com</p>
                    <p className="text-sm text-gray-500">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
                    <p className="text-gray-600 mb-1">+1 (555) 987-6543</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Visit Us
                    </h3>
                    <p className="text-gray-600 mb-1">123 Financial District</p>
                    <p className="text-gray-600 mb-1">
                      San Francisco, CA 94105
                    </p>
                    <p className="text-sm text-gray-500">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 mb-1">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600 mb-1">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-sm text-gray-500">
                      24/7 online support available
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Why Choose InstaFin?
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      24 Hours
                    </div>
                    <div className="text-sm text-gray-600">
                      Average Response Time
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600">
                      Customer Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      10K+
                    </div>
                    <div className="text-sm text-gray-600">
                      Businesses Served
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      $2B+
                    </div>
                    <div className="text-sm text-gray-600">
                      Capital Deployed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our services and process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                How quickly can I get funded?
              </h3>
              <p className="text-gray-600">
                Most applications are approved within minutes, and funding is
                typically available within 24 hours of approval. Our AI-powered
                system processes applications instantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What are the minimum requirements?
              </h3>
              <p className="text-gray-600">
                We require businesses to be registered and operating for at
                least 6 months, with minimum monthly revenue of $5,000. Credit
                requirements vary by funding amount and business type.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Are there any hidden fees?
              </h3>
              <p className="text-gray-600">
                No hidden fees. We believe in complete transparency. All fees
                and terms are clearly disclosed upfront, and you&apos;ll know
                exactly what you&apos;re paying before you accept any funding.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                How does the AI risk assessment work?
              </h3>
              <p className="text-gray-600">
                Our AI analyzes hundreds of data points including business
                performance, credit history, market conditions, and industry
                trends to provide accurate, bias-free risk assessments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Can I apply if I have bad credit?
              </h3>
              <p className="text-gray-600">
                Yes, our AI considers multiple factors beyond just credit
                scores. We look at business performance, cash flow, and growth
                potential to make funding decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Is my data secure?
              </h3>
              <p className="text-gray-600">
                Absolutely. We use bank-grade security with end-to-end
                encryption, multi-factor authentication, and comply with
                international security standards including SOC 2 and GDPR.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already discovered the power
            of AI-driven financial solutions. Apply now and get funded in 24
            hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group"
            >
              Apply Now
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
