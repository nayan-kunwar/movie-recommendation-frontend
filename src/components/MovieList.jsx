export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-2">Recommended Movies:</h2>
      <ul className="list-disc list-inside">
        {movies.map((movie, idx) => (
          <li key={idx}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}
