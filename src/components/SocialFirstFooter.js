import React from 'react';
import { useNavigate } from 'react-router-dom';

/** Contact phone: 508-556-1264 (per user spec) */
const CONTACT_PHONE = '508-556-1264';
const INSTAGRAM_HANDLE = 'honeyimhome.co';

/**
 * Social-First Footer - feels like an invitation
 * Prominent phone + Instagram CTA since ordering happens via IG DM and Text
 */
const SocialFirstFooter = () => {
  const navigate = useNavigate();

  return (
    <footer
      id="contact"
      className="bg-honey-sage-deep text-white py-16 sm:py-20 scroll-offset"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Invitation block - "Say Hello" */}
        <div className="text-center mb-12">
          <p className="font-script text-honey-sage-muted text-3xl sm:text-4xl mb-4">
            We&apos;d love to hear from you
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-8">
            Come on in — say hello
          </h2>

          {/* Primary CTAs: Phone + Instagram */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href={`tel:+1${CONTACT_PHONE.replace(/\D/g, '')}`}
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-5 rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/40 min-w-[280px] justify-center"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider text-honey-sage-muted font-semibold">
                  Text or Call
                </span>
                <span className="text-xl font-bold">
                  {CONTACT_PHONE.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
                </span>
              </div>
            </a>

            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gradient-to-r from-purple-600/90 to-pink-600/90 hover:from-purple-500 hover:to-pink-500 px-8 py-5 rounded-2xl transition-all duration-300 border border-white/20 hover:shadow-lg min-w-[280px] justify-center"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.255-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-wider text-white/90 font-semibold">
                  Order via DM
                </span>
                <span className="text-xl font-bold">@{INSTAGRAM_HANDLE}</span>
              </div>
            </a>
          </div>

          <p className="text-honey-sage-muted text-sm max-w-md mx-auto">
            Order by Wednesday for weekend delivery. DM us on Instagram or text to
            place your order—we&apos;re here for you.
          </p>
        </div>

        {/* Navigation row */}
        <div className="border-t border-honey-sage/50 pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-display font-bold tracking-brand text-lg uppercase">
            Honey, I&apos;m Home
          </p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => navigate('/order')}
              className="hover:text-white transition-colors focus:outline-none bg-transparent border-none cursor-pointer"
            >
              Weekly Menu
            </button>
            <a
              href="#meal-plans"
              className="hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Meal Plans
            </a>
            <a
              href="#how-it-works"
              className="hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              How It Works
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About Jasmine
            </a>
          </nav>
        </div>

        <div className="border-t border-honey-sage/50 pt-8 mt-8 text-center text-sm text-honey-sage-muted">
          <p>&copy; {new Date().getFullYear()} Honey, I&apos;m Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SocialFirstFooter;
