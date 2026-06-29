import React from "react";
import Link from "next/link";
import supabase from "@/lib/supabase";

type Tarif = {
  id: number;
  category: string;
  title: string;
  subtitle: string | null;
  duration: string;
  price_display: string;
  price_min: number;
  price_max: number;
  price_unit: string;
  note: string | null;
  sort_order: number;
};

function PricingCard({ tarif }: { tarif: Tarif }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#005649]/20 transition-all duration-300 flex flex-col justify-between">
      <div>
        <p className="text-xs font-semibold tracking-widest uppercase text-[#007562] mb-1">
          {tarif.category}
        </p>
        <h3 className="text-xl font-bold text-gray-900">{tarif.title}</h3>
        {tarif.subtitle && (
          <p className="text-gray-400 text-sm mt-0.5">{tarif.subtitle}</p>
        )}
        <p className="text-gray-500 text-sm mt-3">{tarif.duration}</p>
        {tarif.note && (
          <p className="text-gray-400 text-xs mt-1">{tarif.note}</p>
        )}
      </div>
      <div className="mt-6">
        <span className="text-4xl font-bold text-[#005649]">
          {tarif.price_display}
        </span>
      </div>
    </div>
  );
}

export default async function TarifsPage() {
  const { data: tarifs } = await supabase
    .from("prices")
    .select("*")
    .order("sort_order");

  const individuel = tarifs?.filter((t) => t.category === "Individuel") ?? [];
  const specialite = tarifs?.find((t) => t.category === "Spécialité");
  const collectif = tarifs?.find((t) => t.category === "Collectif");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f7f5] via-white to-white">
      {/* Hero */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#007562] mb-3">
            Tarifs
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Séances &amp; <span className="text-[#005649]">Tarifs</span>
          </h1>
          <p className="text-gray-500 text-sm">
            Catherine Fabrici — Sophrologue Certifiée &middot; Le Malesherbois,
            France
          </p>
        </div>
      </div>

      {/* Pricing */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        {/* Individual sessions */}
        {individuel.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {individuel.map((t) => (
              <PricingCard key={t.id} tarif={t} />
            ))}
          </div>
        )}

        {/* Hypnose — featured card */}
        {specialite && (
          <div className="bg-gradient-to-r from-[#005649] to-[#007562] rounded-2xl p-8 text-white mb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-1">
                {specialite.category}
              </p>
              <h3 className="text-2xl font-bold">{specialite.title}</h3>
              <p className="text-white/80 text-sm mt-1">
                {specialite.duration}
              </p>
              {specialite.note && (
                <p className="text-white/50 text-xs mt-1">{specialite.note}</p>
              )}
            </div>
            <div className="shrink-0">
              <div className="text-5xl font-bold leading-none">
                {specialite.price_display}
              </div>
              <div className="text-white/60 text-sm mt-1 text-right">
                {specialite.price_unit}
              </div>
            </div>
          </div>
        )}

        {/* Entreprises */}
        {collectif && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#005649]/20 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#007562] mb-1">
                {collectif.category}
              </p>
              <h3 className="text-xl font-bold text-gray-900">
                {collectif.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{collectif.duration}</p>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-3xl font-bold text-[#005649]">
                {collectif.price_display}
              </div>
              <div className="text-gray-400 text-sm">{collectif.price_unit}</div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-[#005649] to-[#007562] rounded-3xl px-10 py-8 text-white shadow-lg">
            <p className="font-semibold text-lg">Une question sur les tarifs ?</p>
            <p className="text-white/70 text-sm max-w-xs">
              N&apos;hésitez pas à me contacter pour toute information
              complémentaire.
            </p>
            <Link
              href="/contact"
              className="bg-white text-[#005649] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors duration-200"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
