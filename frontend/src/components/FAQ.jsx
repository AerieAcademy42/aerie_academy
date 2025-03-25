import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  // State to track which FAQ item is open
  const [openItem, setOpenItem] = useState(0); // First item open by default

  // FAQ data
  const faqItems = [
    {
      question: "What is the duration of the GATE 2026 Architecture & Planning Course?",
      answer: "The course is designed to be valid until the GATE 2026 exam, ensuring comprehensive preparation up to the exam date."
    },
    {
      question: "Who are the instructors for this course?",
      answer: "Our courses are led by experienced IITians, GATE toppers, and industry experts, providing in-depth knowledge and practical insights."
    },
    {
      question: "What study materials are provided?",
      answer: "Enrollees receive curated subject-wise e-books, access to over 1,000 practice questions, previous year solved question papers, and more."
    },
    {
      question: "Are there live classes, and what if I miss one?",
      answer: "Yes, we offer live interactive classes. If you miss a session, recorded lectures are available for you to access at your convenience until the exam day."
    },
    {
      question: "How does the doubt-clearing process work?",
      answer: "We provide live one-on-one doubt-clearing sessions and mentorship from industry experts to address your queries promptly."
    },
    {
      question: "Are mock tests included in the course?",
      answer: "Absolutely! We conduct section-wise and topic-wise tests, along with full-length mock tests, to simulate the exam environment and boost your confidence."
    },
    {
      question: "Is there a community for peer interaction?",
      answer: "Yes, students can join our exclusive WhatsApp group to receive updates, share resources, and engage with fellow aspirants."
    },
    {
      question: "What are the payment options available?",
      answer: "We offer up to 40% scholarships based on merit and need, along with easy payment plans that allow you to pay in monthly installments."
    },
    {
      question: "How can I enroll in the course?",
      answer: "You can enroll by visiting our website's course page and following the enrollment instructions. For personalized guidance, feel free to schedule a free consultation call with our advisors."
    },
    {
      question: "Is there a trial period or demo available?",
      answer: "Yes, we offer a free demo video to help you understand our teaching methodology and course structure before making a commitment."
    }
  ];

  // Toggle FAQ item
  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };



  return (
    <section className="pt-[3rem] pb-[4rem] px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Got Questions? We Have Answers</h2>
          <p className="text-gray-600">Find answers to the most common questions about our GATE preparation courses</p>
        </div>

        <div className="space-y-4 mb-10">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                onClick={() => toggleItem(index)}
                aria-expanded={openItem === index}
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                {openItem === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-4 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;