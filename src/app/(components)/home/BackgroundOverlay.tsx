export default function BackgroundOverlay() {
  return (
    <>
      {/* Background Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
      
      {/* Animated Background Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-[#005649]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-16 h-16 md:w-32 md:h-32 bg-white/3 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
    </>
  );
}