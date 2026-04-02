import { motion } from 'motion/react';

const experiences = [
  {
    title: "Customer Service Associate",
    focus: "Build strong relationships with customers and the company by enhancing their general satisfaction.",
    responsibilities: "Handling inquiries, billing, product selection, and initial issue resolution.",
    description: "As a Customer Service Associate, I am typically the first point of contact for customers. I handle general inquiries, complaints, billing issues, and provide product guidance. My role is mainly reactive — I focus on resolving customers' immediate needs through phone, email, or chat. I aim to build good rapport with customers and ensure they leave satisfied. I usually don't get into technical troubleshooting or proactive retention efforts."
  },
  {
    title: "Customer Support & Retention Specialist",
    focus: "Technical Problem Solving, Preventing Churn",
    responsibilities: "Troubleshooting technical errors, firmware issues, and product functionality. Saving customers from cancellation, upselling, and analyzing data to improve loyalty.",
    description: "As a Customer Support Specialist with a strong focus on retention, I serve as a key point of contact for customers. I handle both reactive technical support and proactive retention efforts. On the support side, I resolve specific product or service issues such as software errors, login problems, or hardware malfunctions. I use tools like ITG, remote access and diagnostic software. I also collaborate with engineering teams for complex cases.\n\nAt the same time, I take a proactive approach to prevent customer churn. I identify at-risk accounts, analyze customer data, and implement strategies to keep customers engaged and loyal. When customers attempt to cancel, I often handle retention conversations by offering discounts, upgraded plans, or tailored solutions. I rely heavily on CRM systems, and I work closely with marketing and sales teams to improve long-term customer loyalty.\n\nIn this blended role, I balance quick problem resolution with relationship-building and proactive retention to deliver an outstanding customer experience while reducing churn."
  }
];

export default function Experience() {
  return (
    <section className="space-y-16">
      {experiences.map((exp, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-white/50"
        >
          <h2 className="text-3xl md:text-5xl font-serif uppercase tracking-wide text-[#1A1A1A] mb-8">
            {exp.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-serif mb-3 text-[#5C3A21]">Primary Focus</h3>
                <p className="text-gray-800 leading-relaxed font-medium">{exp.focus}</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-3 text-[#5C3A21]">Key Responsibilities</h3>
                <p className="text-gray-800 leading-relaxed">{exp.responsibilities}</p>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-6">
              {exp.description.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-lg md:text-xl leading-relaxed text-gray-900 font-medium">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
