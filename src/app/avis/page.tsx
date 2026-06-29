'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import supabase from '@/lib/supabase';

interface Review {
  id: number;
  name: string;
  date: string;
  rating: string;
  comment: string;
}

function parseRating(rating: string): number {
  if (typeof rating === 'string' && rating.includes('/')) return parseInt(rating.split('/')[0], 10);
  return parseInt(rating, 10) || 5;
}

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = { sm: 'text-sm', md: 'text-base', lg: 'text-2xl' }[size];
  return (
    <div className={`flex items-center gap-0.5 ${sizeClass}`} aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-amber-400' : 'text-gray-200'}>★</span>
      ))}
    </div>
  );
}

function RatingBar({ star, count, total }: { star: number; count: number; total: number }) {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="w-5 text-right text-gray-500 font-medium">{star}</span>
      <span className="text-amber-400 text-xs">★</span>
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-400 rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-6 text-right text-gray-400 text-xs">{count}</span>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const rating = parseRating(review.rating);
  const initials = review.name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#005649]/20 transition-all duration-300 flex flex-col gap-4 break-inside-avoid">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#005649] to-[#007562] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 select-none">
            {initials}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 text-sm truncate">{review.name}</p>
            <p className="text-xs text-gray-400 mt-0.5">{review.date}</p>
          </div>
        </div>
        <StarRating rating={rating} size="sm" />
      </div>

      {review.comment && (
        <div className="relative pl-4">
          <span className="absolute top-0 left-0 text-3xl text-[#005649]/10 font-serif leading-none select-none">&ldquo;</span>
          <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
        </div>
      )}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse break-inside-avoid">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200" />
          <div className="space-y-2">
            <div className="h-3 w-28 bg-gray-200 rounded" />
            <div className="h-2 w-16 bg-gray-100 rounded" />
          </div>
        </div>
        <div className="h-3 w-20 bg-gray-200 rounded" />
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full bg-gray-100 rounded" />
        <div className="h-3 w-5/6 bg-gray-100 rounded" />
        <div className="h-3 w-3/4 bg-gray-100 rounded" />
      </div>
    </div>
  );
}

export default function AvisPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('id', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        setError('Impossible de charger les avis pour le moment.');
      } else {
        console.log('Reviews from Supabase:', data);
        setReviews(data ?? []);
      }
      setLoading(false);
    };
    fetchReviews();
  }, []);

  const ratings = reviews.map(r => parseRating(r.rating));
  const average = ratings.length > 0
    ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)
    : '5.0';

  const distribution = [5, 4, 3, 2, 1].map(star => ({
    star,
    count: ratings.filter(r => r === star).length,
  }));

  const googleUrl = 'https://www.google.com/search?q=Catherine+Fabrici+Sophrologue+Le+Malesherbois';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f7f5] via-white to-white">
      {/* Hero */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#007562] mb-3">
            Témoignages
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Avis <span className="text-[#005649]">Clients</span>
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            Catherine Fabrici — Sophrologue Certifiée &middot; Le Malesherbois, France
          </p>

          {/* Stats card */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-white rounded-3xl shadow-sm border border-gray-100 px-8 py-6 mb-4">
            {/* Average */}
            <div className="flex flex-col items-center">
              <span className="text-6xl font-bold text-gray-900 leading-none">{average}</span>
              <StarRating rating={Math.round(parseFloat(average))} size="lg" />
              <span className="text-sm text-gray-400 mt-1">
                {loading ? '—' : reviews.length} avis
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-20 bg-gray-100" />
            <div className="sm:hidden w-full h-px bg-gray-100" />

            {/* Distribution */}
            <div className="w-48 space-y-1.5">
              {distribution.map(({ star, count }) => (
                <RatingBar key={star} star={star} count={count} total={reviews.length} />
              ))}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-20 bg-gray-100" />
            <div className="sm:hidden w-full h-px bg-gray-100" />

            {/* CTA */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-gray-400 text-center max-w-[120px]">
                Partagez votre expérience
              </p>
              <a
                href={googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#005649] hover:bg-[#007562] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200 whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Écrire un avis
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews grid */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        {error && (
          <div className="text-center py-12 text-gray-400">{error}</div>
        )}

        {loading ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : reviews.length === 0 && !error ? (
          <p className="text-center text-gray-400 py-12">Aucun avis pour le moment.</p>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {!loading && reviews.length > 0 && (
          <div className="mt-14 text-center">
            <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-[#005649] to-[#007562] rounded-3xl px-10 py-8 text-white shadow-lg">
              <p className="font-semibold text-lg">Vous souhaitez partager votre expérience ?</p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#005649] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors duration-200"
                >
                  Laisser un avis sur Google
                </a>
                <Link
                  href="/contact"
                  className="border border-white/40 text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors duration-200"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
