"use client";
import { ArrowRight } from "lucide-react";
import { GoldButton } from "../ui/GoldButton";

export function MemberPaymentSection() {
  return (
    <section className="py-24 bg-dark-bg relative border-t border-gold-brown/20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,106,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-gradient-to-br from-dark-surface to-dark-bg p-10 md:p-16 rounded-2xl border border-gold-brown/30 relative overflow-hidden group text-center shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold-bright">
              <path d="M12 15L8.5 11.5L12 8L15.5 11.5L12 15Z"/>
              <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
              <path d="M2 17L12 22L22 17"/>
              <path d="M2 12L12 17L22 12"/>
            </svg>
          </div>
          
          <div className="relative z-10 w-full flex flex-col items-center">
             <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">Member Payment Portal</h3>
             <p className="text-text-muted mb-10 text-lg max-w-2xl text-center">
               Securely renew your membership, pay outstanding dues, and access your exclusive dashboard in minutes. Connect with your organization effortlessly.
             </p>
             <GoldButton variant="filled" className="text-xl py-5 px-10 w-full sm:w-auto">
               Pay Dues Online <ArrowRight className="w-5 h-5 ml-2" />
             </GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}
