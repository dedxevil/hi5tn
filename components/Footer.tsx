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

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 gap-12 xl:gap-8">

        {/* Logo & Intro - Takes up more space */}
        <div className="col-span-full md:col-span-3 lg:col-span-2">
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center text-3xl font-bold text-text-light mb-6 group">
            {/* HI5 Technet SVG Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="auto" viewBox="0 0 419.25 297.75" preserveAspectRatio="xMidYMid meet" className="h-10 md:h-12 mr-3 transition-transform duration-500 group-hover:scale-105">
              <path fill="#ffffff" d="M 79.753906 259.976562 L 78.65625 256.980469 L 63.199219 262.59375 L 64.296875 265.589844 L 70.382812 263.402344 L 76.089844 279.191406 L 79.417969 277.953125 L 73.664062 262.210938 Z M 79.753906 259.976562 " fillOpacity="1" fillRule="nonzero" />
              <path fill="#ffffff" d="M 111.1875 263.117188 L 101.339844 266.683594 L 99.4375 261.402344 L 108.046875 258.265625 L 107 255.363281 L 98.390625 258.503906 L 96.632812 253.746094 L 106.191406 250.273438 L 105.097656 247.328125 L 92.257812 252.035156 L 99.105469 270.820312 L 112.234375 266.019531 Z M 111.1875 263.117188 " fillOpacity="1" fillRule="nonzero" />
              <path fill="#ffffff" d="M 141.960938 247.328125 L 138.4375 248.5625 C 138.582031 251.511719 136.914062 253.84375 134.160156 254.839844 C 130.542969 256.125 126.789062 254.460938 125.363281 250.609375 C 123.980469 246.757812 125.789062 243.046875 129.40625 241.714844 C 132.066406 240.765625 134.828125 241.378906 136.539062 243.425781 L 140.011719 242.144531 C 137.585938 238.339844 132.875 236.914062 128.308594 238.578125 C 122.554688 240.667969 119.894531 246.285156 121.890625 251.847656 C 123.9375 257.457031 129.597656 260.027344 135.300781 257.9375 C 140.011719 256.222656 142.671875 252.039062 141.960938 247.328125 Z M 141.960938 247.328125 " fillOpacity="1" fillRule="nonzero" />
              <path fill="#ffffff" d="M 168.023438 224.5 L 164.695312 225.6875 L 167.5 233.441406 L 157.796875 236.960938 L 154.992188 229.253906 L 151.660156 230.445312 L 158.460938 249.179688 L 161.789062 247.992188 L 158.84375 239.859375 L 168.546875 236.339844 L 171.492188 244.425781 L 174.824219 243.238281 Z M 168.023438 224.5 " fillOpacity="1" fillRule="nonzero" />
              <path fill="#ffffff" d="M 207.589844 231.300781 L 200.742188 212.5625 L 197.460938 213.753906 L 202.453125 227.402344 L 186.570312 217.699219 L 183.386719 218.839844 L 190.234375 237.625 L 193.515625 236.4375 L 188.617188 222.933594 L 204.453125 232.445312 L 207.59375 231.304688 Z M 207.589844 231.300781 " fillOpacity="1" fillRule="nonzero" />
              <path fill="#ffffff" d="M 235.082031 217.984375 L 225.285156 221.597656 L 223.332031 216.316406 L 231.984375 213.175781 L 230.941406 210.277344 L 222.285156 213.417969 L 220.574219 208.613281 L 230.085938 205.144531 L 229.039062 202.242188 L 216.199219 206.902344 L 223 225.6875 L 236.175781 220.933594 Z M 235.082031 217.984375 " fillOpacity="1" fillRule="nonzero" />
              <path fill="#ffffff" d="M 258.335938 194.964844 L 257.242188 191.96875 L 241.785156 197.582031 L 242.878906 200.621094 L 248.964844 198.390625 L 254.671875 214.175781 L 258 212.988281 L 252.246062 197.199219 Z M 258.335938 194.964844 " fillOpacity="1" fillRule="nonzero" />
              <path fill="#ffffff" d="M 203.726562 61.847656 L 203.726562 199.226562 L 160.695312 214.890625 L 160.695312 169.097656 L 105.792969 189.082031 L 105.792969 234.875 L 62.761719 250.539062 L 62.761719 113.15625 L 105.792969 97.492188 L 105.792969 143.285156 L 160.695312 123.304688 L 160.695312 77.511719 Z M 203.726562 61.847656 " fillOpacity="1" fillRule="nonzero" />
              <path fill="#ffffff" d="M 258.238281 42.003906 L 258.238281 179.390625 L 251.953125 181.679688 L 215.203125 195.054688 L 215.203125 57.671875 Z M 258.238281 42.003906 " fillOpacity="1" fillRule="nonzero" />
              <path fill="#26d48c" d="M 366.277344 2.6875 L 366.277344 48.480469 L 269.710938 83.628906 L 269.710938 37.828125 Z M 366.277344 2.6875 " fillOpacity="1" fillRule="nonzero" />
              <path fill="#26d48c" d="M 366.277344 176.21875 C 366.277344 179.503906 366.078125 182.746094 365.683594 185.921875 C 361.5 220.042969 335.546875 247.417969 302.144531 253.726562 L 300.644531 253.992188 L 269.714844 259.480469 L 269.714844 220.859375 L 299.738281 209.929688 C 313.472656 204.898438 323.269531 191.714844 323.269531 176.246094 C 323.269531 169.417969 321.367188 163.042969 318.0625 157.613281 C 311.761719 147.285156 300.386719 140.386719 287.40625 140.386719 C 280.976562 140.386719 274.933594 142.078125 269.714844 145.054688 L 269.714844 99.316406 C 275.394531 98.015625 281.308594 97.324219 287.386719 97.324219 C 302.082031 97.324219 315.84375 101.339844 327.621094 108.339844 C 341.175781 116.394531 352.121094 128.398438 358.847656 142.765625 C 363.617188 152.921875 366.277344 164.261719 366.277344 176.214844 Z M 366.277344 176.21875 " fillOpacity="1" fillRule="nonzero" />
              <path fill="#26d48c" d="M 257.71875 225.117188 L 257.71875 261.546875 L 62.296875 294.695312 Z M 257.71875 225.117188 " fillOpacity="1" fillRule="nonzero" />
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
                    onClick={() => window.scrollTo(0, 0)}
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
        <div className="col-span-full lg:col-span-3 xl:col-span-3 flex flex-col xl:flex-row gap-8 xl:gap-12">

          {/* Social Icons Sub-Column */}
          <div>
            <h4 className="text-lg font-semibold text-white tracking-wide mb-6">Connect With Us</h4>
            <ul className="flex gap-4 flex-wrap max-w-[140px] sm:max-w-none">
              {[
                {
                  name: 'LinkedIn',
                  url: 'https://in.linkedin.com/company/hi5-technet?trk=public_profile_topcard-current-company',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  name: 'X',
                  url: 'https://x.com/Hi5technet27938',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )
                },
                {
                  name: 'Facebook',
                  url: 'https://www.facebook.com/Hi5technet',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  name: 'Instagram',
                  url: 'https://www.instagram.com/hi5technet/',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  )
                },
                {
                  name: 'YouTube',
                  url: 'https://www.youtube.com/@HI5technet',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M21.582 6.186a2.684 2.684 0 00-1.888-1.9C18.028 3.8 12 3.8 12 3.8s-6.028 0-7.694.486a2.684 2.684 0 00-1.888 1.9C1.933 7.87 1.933 12 1.933 12s0 4.13.485 5.814a2.684 2.684 0 001.888 1.9C6.028 20.2 12 20.2 12 20.2s6.028 0 7.694-.486a2.684 2.684 0 001.888-1.9C22.067 16.13 22.067 12 22.067 12s0-4.13-.485-5.814zM9.9 15.582V8.418L16.208 12 9.9 15.582z" clipRule="evenodd" />
                    </svg>
                  )
                }
              ].map((social, idx) => (
                <li key={idx}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-text-muted hover:text-white hover:bg-primary-brand transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(38,212,140,0.3)]"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Sub-Column */}
          <div className="pt-6 xl:pt-0 xl:pl-8 border-t xl:border-t-0 xl:border-l border-glass-border/30">
            <h4 className="text-lg font-semibold text-white tracking-wide mb-6 hidden xl:block">Contact Us</h4>
            <div className="flex flex-col space-y-3 text-text-muted text-sm pb-4">
              <div className="flex items-start">
                <svg className="w-4 h-4 mr-2 mt-1 shrink-0 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <div>
                  <strong className="block text-white mb-0.5">Hi5Technet</strong>
                  {/* <span className="block text-xs text-primary-brand mb-1.5 whitespace-nowrap font-medium">GSTIN: 33AANFH0640L1ZE</span> */}
                  <span className="block text-sm leading-relaxed text-text-muted">
                    11/1, Surya Nagar Ext: 4<br />
                    Ondipudur, Coimbatore<br />
                    Tamil Nadu - 641016
                  </span>
                </div>
              </div>

              <div className="pt-2"></div>

              <a href="mailto:info@hi5technet.com" className="hover:text-primary-brand transition-colors flex items-center">
                <svg className="w-4 h-4 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                info@hi5technet.com
              </a>

              {/* <a href="https://hi5technet.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-brand transition-colors flex items-center">
                <svg className="w-4 h-4 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                hi5technet.com
              </a> */}

              <div className="pt-2"></div>

              <a href="tel:+918667842296" className="hover:text-primary-brand transition-colors flex items-start">
                <svg className="w-4 h-4 mr-2 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Gowtham</span>
                  <span className="font-medium whitespace-nowrap">+91 86678 42296</span>
                </div>
              </a>
              <a href="tel:+919360572528" className="hover:text-primary-brand transition-colors flex items-start mt-1">
                <svg className="w-4 h-4 mr-2 mt-1 opacity-0 shrink-0" fill="none" viewBox="0 0 24 24"></svg>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Jagadeesh</span>
                  <span className="font-medium whitespace-nowrap">+91 93605 72528</span>
                </div>
              </a>
            </div>

            <NavLink
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="group relative inline-flex items-center text-primary-brand hover:text-white transition-all duration-300 hover:translate-x-2 font-medium"
            >
              Contact Form
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary-brand transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-20 pt-8 border-t border-glass-border/30 text-center flex flex-col items-center justify-center space-y-2">
        <p className="text-sm text-text-muted transition-colors hover:text-text-light duration-300">
          &copy; {new Date().getFullYear()} HI5 Technet. All rights reserved.
        </p>
      </div>
    </footer >
  );
};

export default Footer;