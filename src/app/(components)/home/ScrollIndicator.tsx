export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-24 md:bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
      <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/60 rounded-full flex justify-center">
        <div className="w-1 h-2 md:h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  );
}