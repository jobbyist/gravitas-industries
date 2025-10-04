const PartnerLogos = () => {
  // Placeholder partner logos - will use real logos later
  const partners = Array(10).fill(null).map((_, i) => ({
    id: i + 1,
    name: `Partner ${i + 1}`
  }));

  return (
    <section className="py-16 px-6 bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-wide">
          Trusted Partners
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12 items-center">
            {/* Duplicate the array for seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-32 h-20 bg-card border border-border rounded-lg flex items-center justify-center"
              >
                <span className="text-muted-foreground text-sm font-medium">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnerLogos;
