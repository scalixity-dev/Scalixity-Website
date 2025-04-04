"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    company: "RetailBot",
    title: "Enhancing E-Commerce Engagement with AI Chatbots",
    description: "We developed a smart AI chatbot for an e-commerce brand, improving customer interactions and boosting conversions through personalized recommendations.",
    image: "/images/Enhancing E-Commerce Engagement with AI Chatbots.svg",
    features: [
      "Personalized shopping recommendations",
      "Seamless order tracking and support",
      "24/7 automated customer service",
      "Multi-platform integration (Web, WhatsApp, Messenger)"
    ]
  },
  {
    company: "MediAssist AI",
    title: "Revolutionizing Patient Support with AI-Powered Chatbots",
    description: "We implemented an AI chatbot for a healthcare provider, enabling instant appointment booking and symptom assessment while ensuring compliance with medical regulations.",
    image: "/images/Revolutionizing Patient Support with AI-Powered Chatbots.svg",
    features: [
      "Instant appointment scheduling",
      "HIPAA-compliant patient support",
      "AI-driven symptom checker",
      "Integration with EHR systems"
    ]
  },
  {
    company: "BankWise AI",
    title: "Automating Banking Services with Conversational AI",
    description: "Our AI chatbot solution transformed customer engagement for a financial institution, streamlining account management and fraud detection assistance.",
    image: "/images/Automating Banking Services with Conversational AI.svg",
    features: [
      "Secure AI-driven banking assistant",
      "Fraud detection alerts & prevention",
      "Loan eligibility and EMI calculations",
      "Multilingual chatbot for global customers"
    ]
  }
];

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-black uppercase tracking-wider">OUR FEATURED WORK</span>
            <h2 className="text-4xl font-bold text-black mt-4">
              AI Chatbot Development Case Studies
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center border-2 border-black rounded-lg overflow-hidden bg-[#F3F1EB]"
            >
              <div className="relative w-full md:w-1/2 h-[400px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-6">
                <span className="text-primary text-sm">— {project.company}</span>
                <h3 className="text-2xl font-bold text-black mt-2 mb-4">{project.title}</h3>
                <p className="text-black mb-6">{project.description}</p>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-black">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/work/${project.company.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-6"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
