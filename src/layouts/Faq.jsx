import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import garageTeam from "../assets/20943401.jpg"; // Replace with your image
import Image from "next/image";

const faqs = [
  {
    question: "How long does a typical car repair take?",
    answer:
      "It depends on the type of repair. Minor services like oil changes or brake pad replacements can be done in a few hours, while more complex issues may take a day or two. We'll always give you a time estimate upfront.",
  },
  {
    question: "Do I need an appointment, or can I just walk in?",
    answer:
      "Appointments are recommended to ensure faster service, but walk-ins are welcome too.",
  },
  {
    question: "What kind of parts do you use?",
    answer:
      "We use high-quality OEM and aftermarket parts depending on your preference and budget.",
  },
  {
    question: "Is your diagnostic check free?",
    answer:
      "Yes, we offer a free basic diagnostic check. More advanced diagnostics may have a small fee.",
  },
  {
    question: "Do you offer any warranty on repairs?",
    answer:
      "Yes, all our repairs come with a standard warranty to give you peace of mind.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit/debit cards, and mobile payments for your convenience.",
  },
  {
    question: "Can I get a quote before bringing in my car?",
    answer:
      "Absolutely! You can request a free quote online or over the phone before visiting us.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadow-md">
          <Image
            src={garageTeam}
            alt="Team at work"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right FAQ Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Answers To Common Questions
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Got questions about our process, pricing, or services? We’ve answered
            some of the most common queries to help you feel confident before
            booking with us.
          </p>

          {/* FAQ Accordions */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <FaMinus className="text-gray-500" />
                  ) : (
                    <FaPlus className="text-gray-500" />
                  )}
                </button>

                {/* Animated Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 px-5 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
