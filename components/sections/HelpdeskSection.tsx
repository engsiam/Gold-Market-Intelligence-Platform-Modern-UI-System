"use client";
import { MessageSquare } from "lucide-react";
import { GoldButton } from "../ui/GoldButton";
import { useHelpdeskStore, HelpdeskCategory } from "@/store/useHelpdeskStore";
import { FormEvent } from "react";

export function HelpdeskSection() {
  const { name, email, category, message, updateField, reset } = useHelpdeskStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Request submitted successfully for ${category}!`);
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg relative border-t border-gold-brown/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="bg-dark-surface p-10 md:p-12 rounded-2xl border border-gold-brown/20 shadow-2xl relative">
          <h3 className="text-2xl font-serif text-gold-light mb-8 flex items-center justify-center gap-3 w-full text-center">
            <MessageSquare className="text-gold-bright" />
            Helpdesk & Support
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  value={name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full bg-dark-bg border border-gold-brown/30 rounded p-4 text-white focus:outline-none focus:border-gold-bright transition-colors" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  value={email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full bg-dark-bg border border-gold-brown/30 rounded p-4 text-white focus:outline-none focus:border-gold-bright transition-colors" 
                />
              </div>
            </div>
            <div>
              <select 
                className="w-full bg-dark-bg border border-gold-brown/30 rounded p-4 text-white focus:outline-none focus:border-gold-bright transition-colors appearance-none"
                value={category}
                onChange={(e) => updateField('category', e.target.value as HelpdeskCategory)}
              >
                <option value="inquiry">General Inquiry</option>
                <option value="membership">Membership Help</option>
                <option value="complaint">Complaint</option>
                <option value="media">Media/Press</option>
              </select>
            </div>
            <div>
              <textarea 
                rows={5} 
                placeholder="Your Message" 
                required 
                value={message}
                onChange={(e) => updateField('message', e.target.value)}
                className="w-full bg-dark-bg border border-gold-brown/30 rounded p-4 text-white focus:outline-none focus:border-gold-bright transition-colors" 
              />
            </div>
            <GoldButton type="submit" variant="filled" className="w-full py-4 text-lg">
              Submit Request
            </GoldButton>
          </form>
        </div>
      </div>
    </section>
  );
}
