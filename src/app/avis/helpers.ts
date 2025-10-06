import { Review } from './reviews';

export function getAverageRating(reviews: Review[]) {
  const ratings = reviews
    .map(r => parseInt(r.rating.split('/')[0], 10))
    .filter(n => !isNaN(n));
  const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
  return avg.toFixed(1);
}