import { motion } from 'motion/react';
import { MapPin, GraduationCap, Calendar, User } from 'lucide-react';

export default function PersonalInfo() {
  return (
    <section className="grid md:grid-cols-2 gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        <h2 className="text-4xl md:text-6xl font-serif uppercase text-[#1A1A1A]">
          Personal Info
        </h2>
        
        <div className="space-y-4 text-lg font-medium text-gray-800">
          <div className="flex items-center gap-4">
            <Calendar className="text-[#9C6B42] w-6 h-6" />
            <span>March 30, 2004 (Age: 22)</span>
          </div>
          <div className="flex items-center gap-4">
            <User className="text-[#9C6B42] w-6 h-6" />
            <span>Female, Filipino</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-[#9C6B42] w-6 h-6" />
            <span>173 Gumamela St, Kasilak, Bucana, Brgy. 76-A, Davao City</span>
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-gray-800 font-medium">
          <p>
            I was born in Davao City, but when I was one year old, my family moved to Cagayan de Oro. I had a fun and memorable childhood there, filled with meaningful experiences and friendships. However, around 2011, we decided to move back to Davao.
          </p>
          <p>
            Growing up, I developed a strong love for electronic gadgets and reading books. There was even a time when my life revolved around Wattpad. While life felt simpler back then, I'm grateful that I still had the chance to connect with others and learn valuable lessons along the way.
          </p>
          <p>
            During my high school years, I began to realize that life is much more than books and imagination. I developed a curiosity for adventure, inspired by the places I saw on social media. For the first time, I wanted to experience things beyond what I could simply imagine. One of the most important lessons I've learned is to put myself out there. Today, I am a graduate of Humanities and Social Sciences with experience in the BPO industry. And when life gave me lemons, I didn't just make lemonade—I gathered more and made something even better.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8 bg-white/40 p-8 md:p-12 rounded-3xl border border-white/50 shadow-sm"
      >
        <h2 className="text-3xl md:text-5xl font-serif uppercase text-[#1A1A1A] flex items-center gap-4">
          <GraduationCap className="w-10 h-10 text-[#5C3A21]" />
          Education
        </h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#9C6B42] before:to-transparent">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#EAE6DF] bg-[#9C6B42] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl shadow-sm bg-white/80 border border-white">
              <div className="flex items-center justify-between space-x-2 mb-2">
                <div className="font-bold text-[#5C3A21] text-lg">Senior High School</div>
                <div className="text-sm font-bold text-[#9C6B42] bg-[#D9A05B]/20 px-2 py-1 rounded-md">2023</div>
              </div>
              <div className="text-gray-700 font-medium">Davao City National High School</div>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#EAE6DF] bg-[#9C6B42] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl shadow-sm bg-white/80 border border-white">
              <div className="flex items-center justify-between space-x-2 mb-2">
                <div className="font-bold text-[#5C3A21] text-lg">Junior High School</div>
                <div className="text-sm font-bold text-[#9C6B42] bg-[#D9A05B]/20 px-2 py-1 rounded-md">2021</div>
              </div>
              <div className="text-gray-700 font-medium">Davao City National High School</div>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#EAE6DF] bg-[#9C6B42] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl shadow-sm bg-white/80 border border-white">
              <div className="flex items-center justify-between space-x-2 mb-2">
                <div className="font-bold text-[#5C3A21] text-lg">Elementary</div>
                <div className="text-sm font-bold text-[#9C6B42] bg-[#D9A05B]/20 px-2 py-1 rounded-md">2017</div>
              </div>
              <div className="text-gray-700 font-medium">Buhangin Central Elementary School SPED Center</div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
