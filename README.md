# Movie Recommender Frontend

This is the **React + Vite frontend** for the Movie Recommender project. It connects to the FastAPI backend hosted on Render to fetch movie recommendations.

---

## Clone the Repository

```bash
git clone <your-frontend-repo-url>
cd movie-recommender-frontend
```

---

## Setup Environment Variables

Create a `.env` file in the root of the project and add the backend URL:

```env
VITE_BACKEND_URL=http://localhost:8000
```

---

## Install Dependencies

```bash
npm install
```

or if you use Yarn:

```bash
yarn
```

---

## Run the Development Server

```bash
npm run dev
```

or with Yarn:

```bash
yarn dev
```

This will start the frontend at `http://localhost:5173` (default Vite port). The frontend will make requests to the backend URL you set in `.env`.

---


