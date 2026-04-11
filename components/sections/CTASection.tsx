"use client";
import { GoldButton } from "../ui/GoldButton";
import { ArrowRight, MessageSquare } from "lucide-react";
import { FormEvent } from "react";

export function CTASection() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Feedback submitted!");
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg relative border-t border-gold-brown/20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,106,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Member Portal CTA */}
          <div className="bg-gradient-to-br from-dark-surface to-dark-bg p-10 rounded-2xl border border-gold-brown/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <BadgeIcon />
            </div>
            <h3 className="text-3xl font-serif text-white mb-6">Member Payment Portal</h3>
            <p className="text-text-muted mb-8 text-lg">
              Securely renew your membership, pay outstanding dues, and access your exclusive dashboard in minutes.
            </p>
            <GoldButton variant="filled" className="text-lg py-4 px-8 w-full sm:w-auto">
              Pay Dues Online <ArrowRight className="w-5 h-5 ml-2" />
            </GoldButton>
          </div>

          {/* Helpdesk Form */}
          <div className="bg-dark-surface p-10 rounded-2xl border border-gold-brown/20 relative">
            <h3 className="text-2xl font-serif text-gold-light mb-6 flex items-center gap-3">
              <MessageSquare className="text-gold-bright" />
              Helpdesk & Support
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="Full Name" required className="w-full bg-dark-bg border border-gold-brown/30 rounded p-3 text-white focus:outline-none focus:border-gold-bright transition-colors" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" required className="w-full bg-dark-bg border border-gold-brown/30 rounded p-3 text-white focus:outline-none focus:border-gold-bright transition-colors" />
                </div>
              </div>
              <div>
                <select className="w-full bg-dark-bg border border-gold-brown/30 rounded p-3 text-white focus:outline-none focus:border-gold-bright transition-colors appearance-none">
                  <option value="inquiry">General Inquiry</option>
                  <option value="membership">Membership Help</option>
                  <option value="complaint">Complaint</option>
                  <option value="media">Media/Press</option>
                </select>
              </div>
              <div>
                <textarea rows={4} placeholder="Your Message" required className="w-full bg-dark-bg border border-gold-brown/30 rounded p-3 text-white focus:outline-none focus:border-gold-bright transition-colors" />
              </div>
              <GoldButton type="submit" variant="outlined" className="w-full">
                Submit Request
              </GoldButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function BadgeIcon() {
  return (
    <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gold-bright">
      <path d="M12 15L8.5 11.5L12 8L15.5 11.5L12 15Z"/>
      <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
      <path d="M2 17L12 22L22 17"/>
      <path d="M2 12L12 17L22 12"/>
    </svg>
  )
}
