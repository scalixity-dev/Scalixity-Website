"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    company: "Trapeze",
    title:
      "Helped Trapeze Group, Revolutionize Mobility with a Paratransit Solution",
    description:
      "Using geospatial technology, we supported Trapeze in innovating their existing paratransit transportation system. Our forward-thinking solutions have reduced customer wait times and improved safety features.",
    image: "/images/Helped Trapeze Group, Revolutionize Mobility with a Paratransit Solution.svg",
    features: [
      "Real-time vehicle tracking",
      "Advanced algorithms for efficient route planning",
      "In-app communication interfaces",
      "Strict adherence to accessibility and privacy laws",
    ],
  },
  {
    company: "LegalAlly",
    title: "Reimagine Legal Support Driven by in-Depth Legal Research",
    description:
      "We leveraged Generative AI to fasten legal document analysis and drafting for a medium-sized law firm in Chicago.",
    image: "/images/Reimagine Legal Support Driven by in-Depth Legal Research.svg",
    features: [
      "Legal Chatbot Assistant",
      "Improved Communication Efficiency",
      "Research Time Reduction by 64%",
    ],
  },
  {
    company: "DeVoice",
    title: "Redefining Restaurant Ordering with a Voice Ordering Solution",
    description:
      "We built DeVoice, which is an AI-based voice agent designed specifically for restaurants and other businesses, integrating state-of-the-art voice recognition and natural language understanding.",
    image: "/images/Redefining Restaurant Ordering with a Voice Ordering Solution.svg",
    features: [
      "State-of-the-art voice recognition",
      "Provides natural dialogues and verbal responses",
      "Multi-language support for diverse customers",
      "Dynamic interaction for enhanced engagement",
    ],
  },
];

export function FeaturedWork() {
  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <span className="text-sm text-gray-700 uppercase tracking-wider">
              OUR FEATURED WORK
            </span>
            <h2 className="text-4xl font-bold text-black mt-4">
              Our Generative AI-powered projects
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:flex items-center gap-2 text-black hover:text-gray-800 transition-colors"
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
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              
              <div className="bg-[#F3F1EB] p-8 rounded-lg border-2 border-black shadow-md flex flex-col items-center">
                <div className="relative h-[400px] w-full mb-6 rounded-xl overflow-hidden border-2 border-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <span className="text-black text-sm">— {project.company}</span>
                  <h3 className="text-2xl font-bold text-black mt-2 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-800 mb-6">{project.description}</p>
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-800"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/work/${project.company.toLowerCase()}`}
                    className="inline-flex items-center gap-2 text-black hover:text-gray-800 transition-colors mt-6"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-black hover:text-gray-800 transition-colors"
          >
            Explore Our Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
