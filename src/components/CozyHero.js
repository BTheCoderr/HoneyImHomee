import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Cozy Hero Section - "Come On In" vibe
 * Full-width welcome header featuring the Honey, I'm Home logo
 * and a warm invitation rather than corporate "Order Now"
 */
const CozyHero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-honey-cream-textured relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Subtle botanical accents - fine line art matching logo */}
      <div className="absolute top-8 right-8 sm:right-16 w-20 h-20 sm:w-24 sm:h-24 text-honey-rose/20" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
          <path d="M12 2v20M12 2c-3 0-5 2-5 5s3 7 5 12c2-5 5-9 5-12s-2-5-5-5z" />
        </svg>
      </div>
      <div className="absolute bottom-12 left-8 sm:left-16 w-16 h-16 text-honey-sage/20" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M12 6c-2 0-4 2-4 4s2 4 4 4 4-2 4-4-2-4-4-4z" />
          <path d="M8 10l-2 2 2 2 2-2-2-2z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Welcome message */}
          <div className="text-center lg:text-left">
            <p className="font-script text-honey-rose text-3xl sm:text-4xl mb-3">
              Come on in
            </p>
            <h1 className="font-display font-bold text-honey-charcoal tracking-brand text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
              Honey, I&apos;m Home
            </h1>
            <p className="text-lg sm:text-xl text-honey-charcoal-light mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Like walking into a warm kitchen where something good is always simmering. 
              Fresh, artisanal meals—made with love, portioned for your week, and ready when you are. 
              Stay awhile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => navigate('/order')}
                className="bg-honey-rose hover:bg-honey-rose-deep text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-cozy hover:shadow-cozy-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-honey-rose focus:ring-offset-2 focus:ring-offset-honey-cream"
                aria-label="Come on in - view this week's menu"
              >
                Come On In
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent hover:bg-honey-rose-muted/50 text-honey-charcoal border-2 border-honey-rose px-8 py-4 rounded-full font-semibold text-lg transition-all focus:outline-none focus:ring-2 focus:ring-honey-rose focus:ring-offset-2"
                aria-label="See how it works"
              >
                Stay Awhile
              </button>
            </div>
            <p className="mt-8 text-sm text-honey-charcoal-light italic font-serif max-w-md mx-auto lg:mx-0">
              Fresh, balanced meals—ready in minutes. Cooked in my kitchen, delivered to yours.
            </p>
          </div>

          {/* Right: Logo + signature dish photo */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="relative">
              <div className="bg-white/90 rounded-3xl shadow-cozy-lg border border-honey-rose-muted p-8 md:p-10 flex flex-col items-center backdrop-blur-sm max-w-md">
                <img
                  src="/images/hero/honeybyjas.png"
                  alt="Honey, I'm Home - Artisanal meal prep by Jasmine"
                  className="w-full h-auto rounded-xl mb-4"
                  onError={(e) => {
                    if (e.target.src.includes('.png')) {
                      e.target.src = '/images/hero/honeybyjas.jpg';
                    }
                  }}
                />
                <p className="font-script text-honey-sage-deep text-xl">Worth the wait</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CozyHero;
