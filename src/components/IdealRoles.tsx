import { motion } from 'motion/react';

const roles = [
  {
    title: "Appointment Setter",
    focus: "Booking qualified meetings",
    responsibilities: "Cold/warm calling, lead qualification, CRM logging, sending reminders",
    description: "I excel at this role because I've spent nearly 2 years in high-volume BPO customer service (VXI Global Holdings and AWESOME CX), where I handled inbound calls/emails, built rapport quickly through active listening and empathy, and used upselling/cross-selling techniques to drive results. I'm comfortable making outbound calls, qualifying leads, and scheduling appointments while staying positive and solution-focused—even under pressure."
  },
  {
    title: "Data Entry",
    focus: "Accurate information management",
    responsibilities: "Fast typing, data validation, deduplication, database updates",
    description: "I'm an excellent match for data entry because I have proven fast and accurate typing, a keen eye for detail, and strong CRM documentation skills from my CSR roles where I maintained accurate records while meeting KPIs like average handle time. I'm highly organized, data-driven, and accountable—I consistently met or exceeded quality and productivity targets in fast-paced environments."
  },
  {
    title: "General Admin Assistant",
    focus: "Operational office support",
    responsibilities: "Calendar management, correspondence, event planning, document handling",
    description: "General admin is a natural fit for me due to my Microsoft Tools & Apps proficiency, strong organization, problem-solving, and team collaboration skills. In my previous roles I managed CRM documentation, resolved escalated issues, flagged recurring problems for process improvements, and collaborated with teams to share best practices—all while staying positive and focused under pressure."
  },
  {
    title: "Virtual Assistant / Remote Admin",
    focus: "Providing comprehensive remote administrative support to individuals or teams",
    responsibilities: "Calendar and email management, Scheduling meetings and travel arrangements, Data entry and document organization, CRM updates and file management, Preparing reports, presentations, and meeting agendas, Handling client communications and customer service inquiries, Light bookkeeping, invoicing, and expense tracking",
    description: "I can handle scheduling, email management, data organization, and light project coordination independently while staying proactive and detail-focused."
  },
  {
    title: "Remote Customer Support / Success",
    focus: "Ensuring customer satisfaction and retention through timely, professional support",
    responsibilities: "Responding to customer inquiries via phone, email, or chat, Troubleshooting issues and providing solutions, Documenting interactions in CRM systems, Escalating complex cases to appropriate teams, Monitoring customer satisfaction (CSAT) and response time KPIs, Identifying trends to improve service delivery and product usability, Guiding customers through onboarding and renewal processes",
    description: "My proven CSR experience, active listening, conflict resolution, and relationship-building skills would let me deliver excellent remote support and build customer loyalty."
  },
  {
    title: "Inside Sales / Lead Qualification",
    focus: "Generating and qualifying sales leads to fill the sales pipeline",
    responsibilities: "Engaging cold and warm leads via phone, email, and SMS, Qualifying prospects based on budget, need, and timeline, Booking high-quality appointments for the sales team, Maintaining accurate CRM records and tracking performance metrics, Conducting market research and lead generation, Collaborating with marketing and sales teams to refine targeting strategies",
    description: "Combining my upselling experience, persuasive communication, and Producer urgency, I'd be great at qualifying leads and driving appointments or sales remotely."
  },
  {
    title: "Remote Scheduler / Appointment Coordinator",
    focus: "Managing scheduling logistics to ensure smooth operations and timely appointments",
    responsibilities: "Coordinating meetings, diagnostic tests, or service appointments, Managing complex calendars across time zones, Communicating with clients, providers, or internal teams to confirm availability, Handling rescheduling and cancellations promptly, Preparing appointment reminders and pre-visit instructions, Ensuring accurate record-keeping and calendar synchronization",
    description: "My organization, fast typing, CRM proficiency, and ability to work decisively under pressure make me ideal for managing calendars and bookings efficiently from anywhere."
  },
  {
    title: "Data Processor or CRM Administrator",
    focus: "Maintaining data accuracy and system integrity within CRM and operational databases",
    responsibilities: "Entering, updating, and verifying customer or operational data, Managing CRM records (e.g., HubSpot, Salesforce, Zoho), Performing data mining, extraction, and list building, Generating reports and dashboards for business insights, Ensuring compliance with data privacy standards (e.g., HIPAA, FERPA), Supporting system integrations, audits, and process improvements, Cleaning and organizing databases to improve efficiency",
    description: "My accuracy, data-driven mindset, Microsoft skills, and preference for structured, high-standard work would ensure clean, reliable data management without constant supervision."
  }
];

export default function IdealRoles() {
  return (
    <section className="space-y-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-4xl mx-auto space-y-6"
      >
        <h2 className="text-4xl md:text-6xl font-serif uppercase text-[#1A1A1A]">
          Why Hire Me?
        </h2>
        <p className="text-xl leading-relaxed font-medium text-gray-800">
          I am a strong fit for remote appointment setter, data entry, and general administration roles because my customer service experience, core skills, and <strong className="text-[#5C3A21]">Producer DISC style</strong> (self-directed, urgent, goal-focused, and decisive) make me reliable, proactive, and effective in independent or fast-paced remote environments.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {roles.map((role, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (index % 2) * 0.1 }}
            className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-white/50 hover:shadow-md transition-all hover:-translate-y-1"
          >
            <h3 className="text-2xl md:text-3xl font-serif uppercase text-[#5C3A21] mb-6">
              {role.title}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">Primary Focus</h4>
                <p className="text-gray-800 font-medium">{role.focus}</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">Key Responsibilities</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{role.responsibilities}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-gray-200/60">
                <p className="text-gray-900 font-medium italic leading-relaxed">
                  "{role.description}"
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#D9A05B]/20 p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto border border-[#D9A05B]/30"
      >
        <p className="text-xl md:text-2xl leading-relaxed font-serif text-[#4A2F1D]">
          Overall, my combination of real-world BPO experience, practical skills, and Producer personality makes me someone who can jump into remote roles quickly, stay productive, meet goals, and add value right away—while still collaborating positively when needed. I'm ready to bring that same energy and reliability to any of these positions!
        </p>
      </motion.div>
    </section>
  );
}
