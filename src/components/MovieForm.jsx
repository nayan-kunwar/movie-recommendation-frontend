import { useState } from "react";
import axios from "axios";

export default function MovieForm({ setMovies }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const res = await axios.post(
        `${BACKEND_URL}/recommend/`,
        { user_input: input },
        { headers: { "Content-Type": "application/json" } }
      );
      setMovies(res.data.recommended_movies);
    } catch (err) {
      console.error(err);
      setMovies(["Error fetching recommendations."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto mt-10"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe your movie preferences..."
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Recommendations"}
      </button>
    </form>
  );
}
