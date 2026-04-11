import { Activity, Globe, MessageCircle, Star, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0705] border-t border-gold-brown/20 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-gold-bright to-gold-deep flex items-center justify-center">
                <span className="text-dark-bg font-serif font-bold">B</span>
              </div>
              <span className="text-xl font-serif text-white tracking-widest font-bold">BAJUS</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              The premier trade body representing Bangladesh's gold, bullion, and jewellery industry since 1984. Empowering a transparent and thriving market.
            </p>
            <div className="flex gap-4">
              {[Activity, Globe, MessageCircle, Star].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gold-brown/30 flex items-center justify-center text-gold-muted hover:text-gold-bright hover:border-gold-bright transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-light font-serif text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gold-bright"></span>
            </h3>
            <ul className="space-y-3">
              {['About BAJUS', 'Leadership', 'Member Directory', 'Market Data', 'Industry News'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted hover:text-gold-bright transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold-brown"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gold-light font-serif text-lg mb-6 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gold-bright"></span>
            </h3>
            <ul className="space-y-3">
              {['Research Hub', 'Circulars & Policies', 'Events & Fairs', 'Media Center', 'Helpdesk'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-muted hover:text-gold-bright transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold-brown"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold-light font-serif text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gold-bright"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-bright shrink-0" />
                <span className="text-text-muted text-sm">Bashundhara City Shopping Complex, Level 19, Panthapath, Dhaka-1215</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-bright shrink-0" />
                <span className="text-text-muted text-sm">+880 2 12345678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-bright shrink-0" />
                <span className="text-text-muted text-sm">info@bajus.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-brown/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} BAJUS. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-muted">
            <a href="#" className="hover:text-gold-light">Sitemap</a>
            <a href="#" className="hover:text-gold-light">Privacy Policy</a>
            <a href="#" className="hover:text-gold-light">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
