import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  "Customer Relationship Management",
  "Active Listening",
  "Conflict Resolution",
  "Upselling & Cross-selling",
  "Written & Verbal Communication",
  "Problem-Solving",
  "Team Collaboration",
  "CRM Documentation",
  "Microsoft Tools & Apps Proficiency",
  "Keen Eye for Detail & Accuracy",
  "Fast & Accurate Typing",
  "Highly Organized & Data-Driven",
  "Accountable & Dependable",
  "Focused Under Pressure",
  "Positive & Collaborative Communicator"
];

export default function Skills() {
  return (
    <section>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#5C3A21] text-[#EAE6DF] p-8 md:p-16 rounded-3xl shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#9C6B42] rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D9A05B] rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif uppercase mb-12 text-center">
            My Relevant Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start space-x-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10"
              >
                <CheckCircle2 className="w-6 h-6 text-[#D9A05B] shrink-0 mt-0.5" />
                <span className="text-lg font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
