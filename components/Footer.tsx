import React from 'react';
import { NavLink } from 'react-router-dom';
import { FOOTER_LINKS } from '../constants'; // Ensure this path is correct

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-background-dark py-16 overflow-hidden">
      
      {/* --- INJECTED STYLES FOR FLUID ANIMATIONS --- */}
      <style>{`
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient-border {
          background: linear-gradient(90deg, transparent, #26d48c, #1842b6, #26d48c, transparent);
          background-size: 200% auto;
          animation: gradient-flow 6s linear infinite;
        }
      `}</style>

      {/* --- ANIMATED GRADIENT TOP BORDER --- */}
      <div className="absolute top-0 left-0 w-full h-[2px] animated-gradient-border opacity-70"></div>

      {/* --- SUBTLE BACKGROUND GLOW --- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-primary-brand/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
        
        {/* Logo & Intro - Takes up more space */}
        <div className="col-span-full md:col-span-3 lg:col-span-2">
          <NavLink to="/" className="inline-flex items-center text-3xl font-bold text-text-light mb-6 group">
            {/* HI5 Technet SVG Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="auto" viewBox="0 0 419.25 297.75" preserveAspectRatio="xMidYMid meet" className="h-10 md:h-12 mr-3 transition-transform duration-500 group-hover:scale-105">
              <path fill="#ffffff" d="M 79.753906 259.976562 L 78.65625 256.980469 L 63.199219 262.59375 L 64.296875 265.589844 L 70.382812 263.402344 L 76.089844 279.191406 L 79.417969 277.953125 L 73.664062 262.210938 Z M 79.753906 259.976562 " fillOpacity="1" fillRule="nonzero"/>
              <path fill="#ffffff" d="M 111.1875 263.117188 L 101.339844 266.683594 L 99.4375 261.402344 L 108.046875 258.265625 L 107 255.363281 L 98.390625 258.503906 L 96.632812 253.746094 L 106.191406 250.273438 L 105.097656 247.328125 L 92.257812 252.035156 L 99.105469 270.820312 L 112.234375 266.019531 Z M 111.1875 263.117188 " fillOpacity="1" fillRule="nonzero"/>
              <path fill="#ffffff" d="M 141.960938 247.328125 L 138.4375 248.5625 C 138.582031 251.511719 136.914062 253.84375 134.160156 254.839844 C 130.542969 256.125 126.789062 254.460938 125.363281 250.609375 C 123.980469 246.757812 125.789062 243.046875 129.40625 241.714844 C 132.066406 240.765625 134.828125 241.378906 136.539062 243.425781 L 140.011719 242.144531 C 137.585938 238.339844 132.875 236.914062 128.308594 238.578125 C 122.554688 240.667969 119.894531 246.285156 121.890625 251.847656 C 123.9375 257.457031 129.597656 260.027344 135.300781 257.9375 C 140.011719 256.222656 142.671875 252.039062 141.960938 247.328125 Z M 141.960938 247.328125 " fillOpacity="1" fillRule="nonzero"/>
              <path fill="#ffffff" d="M 168.023438 224.5 L 164.695312 225.6875 L 167.5 233.441406 L 157.796875 236.960938 L 154.992188 229.253906 L 151.660156 230.445312 L 158.460938 249.179688 L 161.789062 247.992188 L 158.84375 239.859375 L 168.546875 236.339844 L 171.492188 244.425781 L 174.824219 243.238281 Z M 168.023438 224.5 " fillOpacity="1" fillRule="nonzero"/>
              <path fill="#ffffff" d="M 207.589844 231.300781 L 200.742188 212.5625 L 197.460938 213.753906 L 202.453125 227.402344 L 186.570312 217.699219 L 183.386719 218.839844 L 190.234375 237.625 L 193.515625 236.4375 L 188.617188 222.933594 L 204.453125 232.445312 L 207.59375 231.304688 Z M 207.589844 231.300781 " fillOpacity="1" fillRule="nonzero"/>
              <path fill="#ffffff" d="M 235.082031 217.984375 L 225.285156 221.597656 L 223.332031 216.316406 L 231.984375 213.175781 L 230.941406 210.277344 L 222.285156 213.417969 L 220.574219 208.613281 L 230.085938 205.144531 L 229.039062 202.242188 L 216.199219 206.902344 L 223 225.6875 L 236.175781 220.933594 Z M 235.082031 217.984375 " fillOpacity="1" fillRule="nonzero"/>
              <path fill="#ffffff" d="M 258.335938 194.964844 L 257.242188 191.96875 L 241.785156 197.582031 L 242.878906 200.621094 L 248.964844 198.390625 L 254.671875 214.175781 L 258 212.988281 L 252.246062 197.199219 Z M 258.335938 194.964844 " fillOpacity="1" fillRule="nonzero"/>
              <path fill="#ffffff" d="M 203.726562 61.847656 L 203.726562 199.226562 L 160.695312 214.890625 L 160.695312 169.097656 L 105.792969 189.082031 L 105.792969 234.875 L 62.761719 250.539062 L 62.761719 113.15625 L 105.792969 97.492188 L 105.792969 143.285156 L 160.695312 123.304688 L 160.695312 77.511719 Z M 203.726562 61.847656 " fillOpacity="1" fillRule="nonzero"/>
              <path fill="#ffffff" d="M 258.238281 42.003906 L 258.238281 179.390625 L 251.953125 181.679688 L 215.203125 195.054688 L 215.203125 57.671875 Z M 258.238281 42.003906 " fillOpacity="1" fillRule="nonzero"/>
              <path fill="#26d48c" d="M 366.277344 2.6875 L 366.277344 48.480469 L 269.710938 83.628906 L 269.710938 37.828125 Z M 366.277344 2.6875 " fillOpacity="1" fillRule="nonzero"/>
              <path fill="#26d48c" d="M 366.277344 176.21875 C 366.277344 179.503906 366.078125 182.746094 365.683594 185.921875 C 361.5 220.042969 335.546875 247.417969 302.144531 253.726562 L 300.644531 253.992188 L 269.714844 259.480469 L 269.714844 220.859375 L 299.738281 209.929688 C 313.472656 204.898438 323.269531 191.714844 323.269531 176.246094 C 323.269531 169.417969 321.367188 163.042969 318.0625 157.613281 C 311.761719 147.285156 300.386719 140.386719 287.40625 140.386719 C 280.976562 140.386719 274.933594 142.078125 269.714844 145.054688 L 269.714844 99.316406 C 275.394531 98.015625 281.308594 97.324219 287.386719 97.324219 C 302.082031 97.324219 315.84375 101.339844 327.621094 108.339844 C 341.175781 116.394531 352.121094 128.398438 358.847656 142.765625 C 363.617188 152.921875 366.277344 164.261719 366.277344 176.214844 Z M 366.277344 176.21875 " fillOpacity="1" fillRule="nonzero"/>
              <path fill="#26d48c" d="M 257.71875 225.117188 L 257.71875 261.546875 L 62.296875 294.695312 Z M 257.71875 225.117188 " fillOpacity="1" fillRule="nonzero"/>
            </svg>
            <span className="sr-only">HI5 Technet</span>
          </NavLink>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-sm">
            Transforming raw data into intelligent, real-world business advantages with Generative AI and Enterprise Machine Learning.
          </p>
        </div>

        {/* Dynamic Navigation Links with Fluid Hover */}
        {FOOTER_LINKS.map((category, catIndex) => (
          <div key={catIndex} className="col-span-1">
            <h4 className="text-lg font-semibold text-white tracking-wide mb-6">{category.category}</h4>
            <ul className="space-y-4">
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  {/* Tailwind Fluid Nudge and Underline implementation */}
                  <NavLink 
                    to={link.to} 
                    className="group relative inline-flex items-center text-text-muted hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary-brand transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social / Contact Column */}
        <div className="col-span-1">
          <h4 className="text-lg font-semibold text-white tracking-wide mb-6">Connect With Us</h4>
          <ul className="space-y-4">
            {['LinkedIn', 'Twitter', 'Facebook'].map((social, idx) => (
              <li key={idx}>
                <a 
                  href={`https://${social.toLowerCase()}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative inline-flex items-center text-text-muted hover:text-white transition-all duration-300 hover:translate-x-2"
                >
                  {social}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary-brand transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                </a>
              </li>
            ))}
            <li>
              <NavLink 
                to="/contact" 
                className="group relative inline-flex items-center text-primary-brand hover:text-white transition-all duration-300 hover:translate-x-2 font-medium"
              >
                Contact Form
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary-brand transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-20 pt-8 border-t border-glass-border/30 text-center flex flex-col items-center justify-center space-y-2">
        <p className="text-sm text-text-muted transition-colors hover:text-text-light duration-300">
          &copy; {new Date().getFullYear()} HI5 Technet. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;