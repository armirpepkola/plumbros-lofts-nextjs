import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    // Added top padding (pt-24) to create "breathing room" from the main content
    <footer className="relative bg-[#1a1a1a] text-white pt-24 mt-12">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* OVERLAPPING CTA CARD - Now fully responsive */}
        {/* Negative margin is now conditional (only on 'md' screens and up) */}
        <div className="relative mb-16 md:-mt-48 max-w-5xl mx-auto bg-[var(--color-brand-primary)] p-8 md:p-10 rounded-lg shadow-2xl">
          {/* Layout stacks vertically on mobile, horizontally on larger screens */}
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold font-[var(--font-montserrat)] text-white mb-2">
                Ready to Start Your Project?
              </h2>
              <p className="text-white text-opacity-90">
                Contact us for a free, no-obligation consultation.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-[var(--color-brand-primary)] font-bold font-[var(--font-montserrat)] uppercase py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER CONTENT - Responsive grid already in place */}
        <div className="pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          
          <div className="mb-6 lg:mb-0">
            <Link href="/" className="inline-block mb-4"><Image src="/logo.png" alt="Plumbros Lofts Logo" width={180} height={45} /></Link>
            <p className="text-gray-400 text-sm mb-6">Creating beautiful, functional living spaces with unmatched craftsmanship and service.</p>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/plum.kastrati/?locale=ms_MY" aria-label="Facebook" className="text-gray-400 hover:text-white transform hover:-translate-y-1 transition-all duration-200" target="_blank"><FaFacebookF size={24} /></a>
              <a href="https://www.instagram.com/plumbroslofts/" aria-label="Instagram" className="text-gray-400 hover:text-white transform hover:-translate-y-1 transition-all duration-200" target="_blank"><FaInstagram size={24} /></a>
              <a href="https://www.tiktok.com/@plum.bros.lofts" aria-label="TikTok" className="text-gray-400 hover:text-white transform hover:-translate-y-1 transition-all duration-200" target="_blank"><FaTiktok size={24} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-[var(--font-montserrat)] uppercase mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/loft-conversion" className="inline-block text-gray-400 hover:text-[var(--color-brand-primary)] transform hover:-translate-y-px transition-all duration-200">Loft Conversion</Link></li>
              <li><Link href="/house-extension" className="inline-block text-gray-400 hover:text-[var(--color-brand-primary)] transform hover:-translate-y-px transition-all duration-200">House Extension</Link></li>
              <li><Link href="/refurbishment" className="inline-block text-gray-400 hover:text-[var(--color-brand-primary)] transform hover:-translate-y-px transition-all duration-200">Refurbishment</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-[var(--font-montserrat)] uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="inline-block text-gray-400 hover:text-[var(--color-brand-primary)] transform hover:-translate-y-px transition-all duration-200">Home</Link></li>
              <li><Link href="/portfolio" className="inline-block text-gray-400 hover:text-[var(--color-brand-primary)] transform hover:-translate-y-px transition-all duration-200">Portfolio</Link></li>
              <li><Link href="/blog" className="inline-block text-gray-400 hover:text-[var(--color-brand-primary)] transform hover:-translate-y-px transition-all duration-200">Blog</Link></li>
              <li><Link href="/contact" className="inline-block text-gray-400 hover:text-[var(--color-brand-primary)] transform hover:-translate-y-px transition-all duration-200">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold font-[var(--font-montserrat)] uppercase mb-4">Let's have a chat</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start"><FaMapMarkerAlt className="w-4 h-4 mr-3 mt-1 flex-shrink-0" /><span>London, United Kingdom</span></li>
              <li className="flex items-center"><FaPhone className="w-4 h-4 mr-3" /><span>+44 7915-635702</span></li>
              <li className="flex items-center"><FaEnvelope className="w-4 h-4 mr-3" /><span>info@plumbroslofts.co.uk</span></li>
            </ul>
          </div>

        </div>
      </div>
      <div className="bg-black bg-opacity-20 py-4">
        <div className="container mx-auto max-w-7xl px-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Plum & Bros Lofts Ltd. Company Number 12051264. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}