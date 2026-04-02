import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-8 md:pt-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col-reverse lg:flex-row gap-12 items-center"
      >
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl md:text-7xl font-serif italic text-[#1A1A1A]">
            Professional<br/>
            <span className="ml-12">Summary</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed font-medium text-gray-800">
            Dynamic Customer Service Representative with a proven track record at VXI Global Holdings, excelling in customer relationship management and active listening. Enhanced customer satisfaction ratings through effective problem-solving and upselling techniques, while demonstrating strong communication skills in fast-paced environments. Committed to delivering results and fostering customer loyalty.
          </p>
          <blockquote className="border-l-4 border-[#D9A05B] pl-4 italic text-gray-700 my-8">
            "If you do what you love, you'll never work a day in your life,"
            <footer className="text-right mt-2 font-medium">- Marc Anthony</footer>
          </blockquote>
          
          <div className="mt-12">
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase text-[#1A1A1A] leading-none">
              Nancy Naomi<br/>
              <span className="text-6xl md:text-8xl lg:text-9xl">Mabaylan</span>
            </h1>
          </div>
        </div>
        
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/50 shadow-2xl shrink-0 relative bg-white">
          <img 
            src="https://i.postimg.cc/QdbtKrd1/658606294-1486955916468058-5025165429397645724-n.png" 
            alt="Nancy Naomi Mabaylan" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10"></div>
        </div>
      </motion.div>
    </section>
  );
}
