"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What AI services does Scalixity offer?",
    answer:
      "Scalixity provides AI-powered solutions including data analytics, AI chatbot development, machine learning automation, and generative AI consulting. Our technology helps businesses optimize workflows, improve decision-making, and enhance customer interactions.",
  },
  {
    question: "How can AI benefit my business?",
    answer:
      "AI streamlines operations, reduces costs, and enhances efficiency by automating repetitive tasks, analyzing data-driven insights, and improving customer engagement. Scalixity's AI-driven strategies help businesses scale with precision and innovation.",
  },
  {
    question: "Can AI solutions integrate with my existing systems?",
    answer:
      "Yes! Scalixity ensures seamless integration of AI solutions with your current software, databases, and cloud platforms. Our API-driven approach allows businesses to implement AI capabilities without disrupting existing workflows.",
  },
  {
    question: "Is AI implementation secure?",
    answer:
      "Absolutely. Scalixity prioritizes security by implementing encrypted data processing, access controls, and compliance measures. Our AI models adhere to GDPR, ISO, and other industry standards, ensuring safe and ethical AI deployment.",
  },
  {
    question: "How do I get started with Scalixity's AI solutions?",
    answer:
      "Getting started is easy! Contact us for a free consultation where we analyze your business needs and propose a tailored AI solution. Our team ensures a smooth transition from planning to deployment.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#A8B2E7] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-black uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl font-bold text-black mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Get quick answers about our AI solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-[#F3F1EB] border border-black rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-black">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-black" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-black" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-[#F3F1EB] mt-1 border border-black rounded-lg">
                      <p className="text-black">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
