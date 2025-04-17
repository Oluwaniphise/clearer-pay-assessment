import React from 'react'
import { Header } from '../components/Header';

export const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] font-poppins">
      <div className="max-w-[1360px] mx-auto px-4 pt-[60px]">
        <Header />
        <main className='py-6' >
          {children}
        </main>
      </div>
    </div>

  );
}
