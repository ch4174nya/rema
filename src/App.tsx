import React, { useState } from 'react';
import { Building2, MessageSquare, Calendar, BarChart3, Shield, ArrowRight, Menu, X, Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">REMA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/demo"
                className="bg-white text-indigo-600 px-6 py-2 rounded-lg border border-indigo-600 hover:bg-indigo-50 transition"
              >
                Try Demo
              </Link>
              <button 
                onClick={() => setShowApplicationForm(true)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center"
              >
                Apply for Access
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-600">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-600">How It Works</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600">Pricing</a>
              <Link
                to="/demo"
                className="block px-3 py-2 text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Try Demo
              </Link>
              <button 
                onClick={() => {
                  setShowApplicationForm(true);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-indigo-600 font-semibold"
              >
                Apply for Access
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Modern building interior"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-600/10 text-indigo-300 mb-6">
              <span className="text-sm font-medium">Now accepting applications for early access</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Real Estate Business with AI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
              Join Singapore's most innovative real estate platform. Automate listings, manage leads through WhatsApp, and optimize your schedule—all powered by advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://forms.gle/vpC1xCP61Mex54dE8', '_blank')}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center group"
              >
                Apply for Early Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
               onClick={() => window.open('https://youtu.be/wgiOeA3e2rQ', '_blank')}
               className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center group">
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </div>
              <span className="text-sm text-gray-300">Join 100+ agents already using REMA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">100+</div>
              <div className="mt-2 text-gray-600">Active Agents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">1000+</div>
              <div className="mt-2 text-gray-600">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">30min</div>
              <div className="mt-2 text-gray-600">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600">24/7</div>
              <div className="mt-2 text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features for Modern Agents</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline your property management and boost your efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Building2 className="h-8 w-8 text-indigo-600" />}
              title="Automated Property Listing"
              description="List properties instantly across multiple platforms including 99.co and PropertyGuru using AI-powered automation."
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8 text-indigo-600" />}
              title="WhatsApp Integration"
              description="Manage customer inquiries and leads in real-time through seamless WhatsApp Business integration."
            />
            <FeatureCard
              icon={<Calendar className="h-8 w-8 text-indigo-600" />}
              title="Smart Scheduling"
              description="AI-driven booking system that optimizes your appointments and open house schedules automatically."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-indigo-600" />}
              title="Real-Time Analytics"
              description="Get instant insights on market trends and optimize your listings with AI-powered recommendations."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-indigo-600" />}
              title="Advanced Security"
              description="Enterprise-grade security measures to protect your data and transactions."
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How REMA Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with REMA in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sign Up & Connect</h3>
                <p className="text-gray-600">Create your account and connect your existing property listings and WhatsApp Business account. Our AI system will analyze your current workflow.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Configuration</h3>
                <p className="text-gray-600">Our system learns your preferences, communication style, and business rules. Set up automated responses and customize your AI assistant's behavior.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Go Live</h3>
                <p className="text-gray-600">Launch your automated system and watch as REMA handles property listings, lead responses, and scheduling while you focus on closing deals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Individual</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">Free</span>
                  {/* <span className="text-gray-600 ml-2">/month</span> */}
                </div>
                <p className="text-gray-600 mt-4">Perfect for individual Home Owners</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">1 active listings</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">Basic WhatsApp integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">AI response templates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">Email support</span>
                </li>
              </ul>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Get Started
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">$49</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mt-4">For growing agencies</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">Up to 50 active listings</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">Advanced WhatsApp automation</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">Custom AI training</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">Analytics dashboard</span>
                </li>
              </ul>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Get Started
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                <div className="flex items-baseline justify-center">
                  {/* <span className="text-4xl font-bold text-gray-900">$499</span> */}
                  {/* <span className="text-gray-600 ml-2">/month</span> */}
                </div>
                {/* <p className="text-gray-600 mt-4">For large agencies</p> */}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">Unlimited active listings</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">Full WhatsApp integration</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">Custom AI development</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">Advanced analytics & API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">Custom integrations</span>
                </li>
              </ul>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowApplicationForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply for Early Access</h3>
            <ApplicationForm onClose={() => setShowApplicationForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ApplicationForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    experience: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input
          type="tel"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Company/Agency</label>
        <input
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
        <select
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
        >
          <option value="">Select experience</option>
          <option value="0-2">0-2 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5-10">5-10 years</option>
          <option value="10+">10+ years</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Submit Application
      </button>
    </form>
  );
}

export default App;