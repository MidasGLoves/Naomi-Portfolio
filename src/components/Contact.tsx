import { motion } from 'motion/react';
import { Phone, Mail, Linkedin, Instagram, Facebook, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#1A1A1A] text-[#EAE6DF] p-12 md:p-20 rounded-3xl text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#5C3A21] via-[#9C6B42] to-[#D9A05B]"></div>
        
        <h2 className="text-4xl md:text-6xl font-serif uppercase mb-8">
          Let's Connect
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300 font-medium leading-relaxed">
          I'm currently open to new remote opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a href="tel:+639603482949" className="flex items-center gap-3 bg-[#5C3A21] hover:bg-[#9C6B42] transition-colors px-8 py-4 rounded-full font-medium text-lg shadow-lg">
            <Phone className="w-5 h-5" />
            +63 960 348 2949
          </a>
          <a href="mailto:jeitherjjoyd@gmail.com" className="flex items-center gap-3 bg-[#5C3A21] hover:bg-[#9C6B42] transition-colors px-8 py-4 rounded-full font-medium text-lg shadow-lg">
            <Mail className="w-5 h-5" />
            Email Me
          </a>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10 flex justify-center gap-8">
          <a href="https://www.linkedin.com/in/naomimabaylan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D9A05B] transition-colors p-2 hover:bg-white/5 rounded-full">
            <Linkedin className="w-8 h-8" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/yumuiee/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D9A05B] transition-colors p-2 hover:bg-white/5 rounded-full">
            <Instagram className="w-8 h-8" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://www.facebook.com/yumuieeee" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D9A05B] transition-colors p-2 hover:bg-white/5 rounded-full">
            <Facebook className="w-8 h-8" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="https://t.me/yumuiee" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D9A05B] transition-colors p-2 hover:bg-white/5 rounded-full">
            <Send className="w-8 h-8" />
            <span className="sr-only">Telegram</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
