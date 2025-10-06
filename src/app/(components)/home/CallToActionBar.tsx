export default function CallToActionBar() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#005649]/90 to-[#007562]/90 backdrop-blur-sm border-t border-white/20 py-3 md:py-4 px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto gap-4 md:gap-0">
        <div className="text-white text-center md:text-left">
          <p className="text-xs md:text-sm opacity-90">Prêt à commencer votre parcours ?</p>
          <p className="font-semibold text-sm md:text-base">Première consultation offerte</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
          <button className="bg-white text-[#005649] px-4 md:px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base whitespace-nowrap">
            Réserver maintenant
          </button>
          <div className="text-white/80 text-xs md:text-sm text-center">
            ⭐ 4.9/5 (150+ avis)
          </div>
        </div>
      </div>
    </div>
  );
}