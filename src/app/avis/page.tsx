import React from 'react';
import { reviews } from './reviews';
import { getAverageRating } from './helpers';

const AvisPage = () => {
  const average = getAverageRating(reviews);

  return (
    <div className="min-h-screen pt-16 px-4 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-4xl mx-auto py-8">
        {/* Header & Google Summary */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2 text-[#005649]">Avis Clients</h1>
          <p className="text-lg text-gray-700 mb-1">
            Catherine Fabrici, Sophrologue<br />
            <span className="text-sm text-gray-500">6 Rue de la Martillière, Le Malesherbois, France</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-2">
            <span className="flex items-center text-2xl font-bold text-yellow-500">
              {average}
              <span className="ml-1 text-yellow-400 text-xl">★</span>
            </span>
            <span className="text-gray-700 font-medium">({reviews.length} avis)</span>
            <a
              href="https://www.google.com/search?q=Catherine+Fabrici+Sophrologue+Le+Malesherbois"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-600 hover:underline text-sm font-semibold"
            >
              Écrire un avis sur Google
            </a>
          </div>
        </div>

        {/* Avis Cards */}
        <div className="space-y-6">
          {[...reviews].reverse().map((a) => (
            <div key={a.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#007562]">
              <div className="flex items-center mb-2">
                <div className="flex items-center text-yellow-400 text-lg font-bold">
                  {'★'.repeat(parseInt(a.rating))}<span className="text-gray-300">{'★'.repeat(5 - parseInt(a.rating))}</span>
                </div>
                <span className="ml-3 font-semibold text-[#005649]">{a.name}</span>
                <span className="ml-3 text-xs text-gray-400">{a.date}</span>
              </div>
              {a.comment && (
                <p className="text-gray-700">{a.comment}</p>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <p className="text-lg font-medium text-[#005649]">
            Vous souhaitez partager votre expérience ?
          </p>
          <a
            href="https://www.google.com/search?q=Catherine+Fabrici+Sophrologue+Le+Malesherbois"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-[#005649] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#007562] transition"
          >
            Laisser un avis sur Google
          </a>
          <p className="text-sm text-gray-500 mt-2">
            Ou <a href="/contact" className="text-blue-600 hover:underline">contactez-moi</a> directement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvisPage;