import SocialLinks from './SocialLinks';

export default function ProfessionalProfile() {
  return (
    <div className="absolute top-75 left-10    z-10 max-w-sm h-auto w-[450px] ">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30 h-full overflow-y-auto">
        <h2 className="text-2xl font-bold text-[#005649] mb-2">Catherine Fabrici</h2>
        <h3 className="text-lg font-semibold text-[#007562] mb-4">Sophrologue</h3>
       
        {/* Services */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-[#005649] mb-2">
            <div className="w-2 h-2 bg-[#005649] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Sophrologie pour :</span>
          </div>
          <div className="ml-4 text-gray-700 text-xs space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#007562] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <span>Enfant / Adolescent / Adulte / Entreprise</span>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-[#005649] mb-2">
            <div className="w-2 h-2 bg-[#005649] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <span className="text-sm font-medium">Qualifications</span>
          </div>
          <div className="ml-4 text-gray-700 text-xs space-y-1">
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 bg-[#007562] rounded-full animate-pulse mt-1" style={{animationDelay: '1.5s'}}></div>
              <span>Diplômée Centre Evolution Formation</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 bg-[#007562] rounded-full animate-pulse mt-1" style={{animationDelay: '2s'}}></div>
              <span>Sophrologue Praticienne certifiée RNCP niveau III</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 bg-[#007562] rounded-full animate-pulse mt-1" style={{animationDelay: '2.5s'}}></div>
              <span>Praticienne en hypnose humaniste</span>
            </div>
          </div>
        </div>

        {/* Entreprise Services */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-[#005649] mb-2">
            <div className="w-2 h-2 bg-[#005649] rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
            <span className="text-sm font-medium">Sophrologie & Entreprise</span>
          </div>
          <div className="ml-4 text-gray-700 text-xs">
            <div className="flex items-start gap-2">
              <div className="w-1 h-1 bg-[#007562] rounded-full animate-pulse mt-1" style={{animationDelay: '3.5s'}}></div>
              <span>Gestion du stress au travail et ateliers de QVT</span>
            </div>
          </div>
        </div>
      
      
        
        {/* Social Links inside Bienvenue container */}
        <div className=" ">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}