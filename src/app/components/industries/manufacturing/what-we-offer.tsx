"use client";

import { motion } from 'framer-motion';

const services = [
  {
    title: "Predictive Maintenance Solutions",
    description: "Anticipate equipment failures with AI algorithms, minimizing downtime and reducing operational costs."
  },
  {
    title: "Automated Quality Control",
    description: "Implement AI-powered image recognition to identify defects instantly and ensure top-tier product quality."
  },
  {
    title: "Smart Supply Chain Management",
    description: "Optimize inventory, forecast demand, and streamline logistics with AI-driven insights."
  },
  {
    title: "AI-Driven Production Automation",
    description: "Integrate AI and robotics into your production lines to boost efficiency and precision."
  },
  {
    title: "Energy Optimization Solutions",
    description: "Leverage AI to monitor and reduce energy consumption, cutting costs and promoting sustainability."
  },
  {
    title: "Custom AI Product Design",
    description: "Utilize AI to create personalized product designs, catering to customer preferences and data insights."
  }
];

export function WhatWeOffer() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">WHAT WE OFFER</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            AI-Powered Solutions for Manufacturing
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Transform your manufacturing processes with cutting-edge AI technologies. From predictive maintenance to personalized product design, we provide innovative solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F3F1EB] p-8 rounded-xl border border-black"
            >
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black text-opacity-80 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
