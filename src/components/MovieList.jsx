export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Recommended Movies
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {movies.map((movie, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <p className="text-gray-700 font-medium text-center">{movie}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
