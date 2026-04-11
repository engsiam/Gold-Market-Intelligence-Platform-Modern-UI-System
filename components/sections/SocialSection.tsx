"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { GoldButton } from "../ui/GoldButton";
import { useNewsletterStore } from "@/store/useNewsletterStore";
import { Activity, Globe, MessageCircle, Star } from "lucide-react";

export function SocialSection() {
  const { email, setEmail } = useNewsletterStore();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-dark-bg border-t border-gold-brown/20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-surface rounded-2xl border border-gold-brown/30 p-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none bg-[radial-gradient(circle,rgba(212,175,106,0.5)_0%,transparent_70%)]" />
          
          <div className="max-w-md relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-serif text-white mb-4">Stay Informed</h3>
            <p className="text-text-muted mb-6">
              Subscribe to the BAJUS newsletter for daily insights, regulatory updates, and market intelligence.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-dark-bg border border-gold-brown/30 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-bright transition-colors"
              />
              <GoldButton type="submit" variant="filled" className="px-6">Join</GoldButton>
            </form>
          </div>

          <div className="relative z-10 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-serif text-gold-light mb-6">Connect With Us</h3>
            <div className="flex gap-6">
              {[Activity, Globe, MessageCircle, Star].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-gold-brown/30 bg-dark-bg flex items-center justify-center text-gold-muted hover:text-gold-bright hover:border-gold-bright hover:-translate-y-1 transition-all shadow-lg">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
