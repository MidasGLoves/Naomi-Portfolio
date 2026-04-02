import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Wood Panels - Fixed on Desktop, Top on Mobile */}
      <div className="flex md:fixed md:left-0 md:top-0 md:h-screen md:w-48 lg:w-64 h-16 w-full z-50 shadow-xl">
        <div className="w-1/3 h-full bg-[#5C3A21]"></div>
        <div className="w-1/3 h-full bg-[#9C6B42]"></div>
        <div className="w-1/3 h-full bg-[#D9A05B]"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-48 lg:ml-64 relative">
        {/* Subtle background decoration */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <main className="relative z-10 p-6 md:p-12 lg:p-20 max-w-6xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
