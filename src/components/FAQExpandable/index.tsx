import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Collapse } from '@mui/material';
import React, { useState } from 'react';
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(0);
  const toggle = () => {
    setIsOpen(!isOpen);
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <div className="col-12 faqItem">
      <div className="card-wrapper">
        <div
          className="title-wrap"
          onClick={toggle}
          style={{ marginBottom: '1rem', cursor: 'pointer' }}
        >
          <h3 className="mbr-section-title customTitle faqTitle mbr-fonts-style display-2">
            {question}
            {isOpen ? <RemoveIcon /> : <AddIcon />}
          </h3>
        </div>
        <Collapse in={isOpen} key={key}>
          <p
            className="mbr-desc mbr-fonts-style display-7"
            style={{ textAlign: 'left' }}
          >
            {answer}
          </p>
        </Collapse>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'How can I be sure to get a positive ROI?',
      answer:
        'Our research shows that 100% of families put lifestyle in their top 3 most influencial factors when choosing a care home. We also found that 64% of families feel unsatisfied with updates from the care home. Poor marketing and low customer satisfaction negatively impact how a business performs and our platform is not only cost-effective, we ensure you can see the impact it has had on your marketing through regular and completely transparent updates!',
    },
    {
      question: 'What training and support is included?',
      answer:
        "When you join us you will receive (in-person or online) comprehensive training designed to inspire and motivate your team to make the most out of the platform. Beyond this we're on hand 24/7 for any further support. You don't close, so we're always there and happy to help!",
    },
    {
      question: 'What technology do I need to use Motion?',
      answer:
        'Just a screen (e.g. TV, laptop, interactive table) and a stable wifi connection — it really is that simple!',
    },
    {
      question: 'Who creates the activities?',
      answer:
        'All of the activities have been designed and developed by experienced and qualified practitionaers in their respective field. Evidence of qualifications (e.g. certificates) can be provided in the onboarding process.',
    },
    {
      question: 'What is the best way for me to advertise my care home?',
      answer:
        "90% of privately funded families find their chosen care home online, so it's important that you embrace this. Don't worry if it's not something your have time to do — that's where we come in!",
    },
    // Add more FAQs here
  ];

  return (
    <section className="FAQSection">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-wrapper">
              <h2 className="mbr-section-title mbr-fonts-style display-2 setInMotionTitle">
                Frequently Asked Questions
              </h2>
            </div>
          </div>
          <div className="faqContainer">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
