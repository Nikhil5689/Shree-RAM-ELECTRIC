"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Phone, MapPin, Star, Zap, Home, Wrench, Shield, Camera, CheckCircle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ShriRamElectricService() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "New Wiring for Flats",
      description: "Complete electrical wiring solutions for residential and commercial properties up to 2500+ sq. ft.",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Appliance Repair",
      description:
        "Expert repair services for AC, Washing Machine, Refrigerator, Cooker, Mixer, Motor, Fan, Geyser (Indian + Imported)",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Society Maintenance",
      description: "Comprehensive electrical maintenance services for residential societies and commercial complexes",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "CCTV & Security Setup",
      description: "Professional CCTV camera installation and security system setup for homes and businesses",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Specialist Wiring",
      description: "Expert wiring services for clubs, bars, hotels, and commercial establishments",
    },
  ]

  const promises = [
    { icon: <CheckCircle className="w-6 h-6" />, text: "Reliability" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Honesty" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Professional Service" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Expertise in Complex Projects" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Zap className="w-8 h-8 text-orange-600" />
              <span className="font-bold text-xl text-gray-900">Shri Ram Electric</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                Contact
              </button>
              <a
                href="tel:8425856456"
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-white border-t border-gray-100 py-4"
            >
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-left"
                >
                  Contact
                </button>
                <a
                  href="tel:8425856456"
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors inline-flex items-center w-fit"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src="/placeholder-o5e53.png"
            alt="Professional electrical services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="block text-orange-400">Powering Mira-Bhayander</span>
            <span className="block">for Over 12 Years</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-6"
          >
            Shri Ram Electric Service
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Your trusted electrical service provider with 12+ years of experience in residential and commercial
            electrical solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:8425856456"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />📞 Call Us Now
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Get a Quote
            </button>
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex items-center justify-center space-x-2"
          >
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">5.03 ⭐ Google Reviews</span>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Key Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional electrical solutions for all your residential and commercial needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 5).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-orange-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Shri Ram Electric Service</h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Meet Our Founder - Sanjay Shukla</h3>
                <p className="text-lg text-gray-600 mb-6">
                  With over 12 years of dedicated service to the Mira-Bhayander community, Sanjay Shukla has built Shri
                  Ram Electric Service on the foundation of trust, reliability, and professional excellence. Starting as
                  Sai Ram Sales and Service, we have grown to become the most trusted electrical service provider in the
                  region.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-orange-50 p-6 rounded-xl mb-8"
              >
                <h4 className="text-xl font-semibold text-orange-800 mb-4">Our Legacy</h4>
                <p className="text-orange-700 text-lg font-medium">
                  "12+ Years of Trust, Reliability & Service Excellence"
                </p>
              </motion.div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Promise</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {promises.map((promise, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="text-green-600">{promise.icon}</div>
                      <span className="text-gray-700 font-medium">{promise.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/electrician-sanjay-shukla.png"
                alt="Sanjay Shukla - Founder of Shri Ram Electric Service"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Complete Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From residential wiring to commercial maintenance, we provide comprehensive electrical solutions for
              homes, societies, clubs, bars, hotels, and commercial establishments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Specialization Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8 rounded-2xl text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Specialization</h3>
            <p className="text-lg md:text-xl mb-6">
              Expert in wiring clubs, bars, hotels & flats up to 2500+ sq. ft. projects
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full">Residential Wiring</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Commercial Projects</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Society Maintenance</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Security Systems</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to get started? Contact us today for a free consultation and quote.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>

              {/* Phone Numbers */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Primary Contact</p>
                    <a href="tel:8425856456" className="text-orange-600 hover:text-orange-700 text-lg font-medium">
                      8425856456
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Alternative Numbers</p>
                    <div className="space-x-4">
                      <a href="tel:9320777141" className="text-orange-600 hover:text-orange-700 font-medium">
                        9320777141
                      </a>
                      <a href="tel:8291599122" className="text-orange-600 hover:text-orange-700 font-medium">
                        8291599122
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <MapPin className="w-5 h-5 text-orange-600 mr-2" />
                    Shop 1 - Sai Ram Sales & Service
                  </h4>
                  <p className="text-gray-600 ml-7">
                    Shop no. B-5, New Hari Darshan bldg, Maharana Pratap Rd, near Pawan Season Centre, Bhayandar,
                    Vinayak Nagar, Bhayandar West, Mira Bhayandar, Maharashtra 401101
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <MapPin className="w-5 h-5 text-orange-600 mr-2" />
                    Shop 2 - Shri Ram Electric Service
                  </h4>
                  <p className="text-gray-600 ml-7">
                    Shop No.: 19, Radha Raman Building, Opp. D Mart, Bhayander (W) - 401101
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
                  <form className="space-y-4">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        type="tel"
                        placeholder="Your Phone Number"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-all">
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Find Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.123456789!2d72.8567890!3d19.3012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzA0LjQiTiA3MsKwNTEnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sai Ram Sales & Service Location"
                ></iframe>
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-gray-900">Sai Ram Sales & Service</h4>
                  <p className="text-sm text-gray-600">Shop no. B-5, New Hari Darshan bldg</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.123456789!2d72.8567890!3d19.3012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzA0LjQiTiA3MsKwNTEnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shri Ram Electric Service Location"
                ></iframe>
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-gray-900">Shri Ram Electric Service</h4>
                  <p className="text-sm text-gray-600">Shop No.: 19, Radha Raman Building</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
                <span className="font-bold text-xl">Shri Ram Electric Service</span>
              </div>
              <p className="text-gray-400 mb-4">
                Powering Mira-Bhayander for Over 12 Years with reliable, professional electrical services.
              </p>
              <div className="flex space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-400">5.03 ⭐ Google Reviews</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-2">
                <a
                  href="tel:8425856456"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>8425856456</span>
                </a>
                <a
                  href="tel:9320777141"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>9320777141</span>
                </a>
                <div className="flex items-start space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span className="text-sm">Mira-Bhayander, Maharashtra 401101</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Shri Ram Electric Service. All rights reserved. | Formerly Sai Ram Sales and Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
