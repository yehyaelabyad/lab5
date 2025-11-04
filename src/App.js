import React, {useState} from 'react'
import './styles.css'

function MovieItem({id, title, rating, comment, onRemove}) {
  return (
    <div className="movie-item">
      <h3>🎬 {title}</h3>
      <p>{'⭐'.repeat(rating)}</p>
      <p>💬 {comment}</p>
      <button onClick={() => onRemove(id)}>🗑 Remove</button>
    </div>
  )
}

export default function App() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const addMovie = () => {
    if (!title) return alert('Write a movie name!')
    const newMovie = {
      id: Date.now(),
      title,
      rating,
      comment,
    }
    setMovies([...movies, newMovie])
    setTitle('')
    setRating(0)
    setComment('')
  }

  const removeMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id))
  }

  return (
    <div className="container">
      <h1>🎞 My Movie Watchlist 🎞</h1>

      <input
        placeholder="Movie name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Stars (1-5)"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        min="0"
        max="5"
      />
      <input
        placeholder="Your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={addMovie}>➕ Add Movie</button>

      <div>
        {movies.map((m) => (
          <MovieItem key={m.id} {...m} onRemove={removeMovie} />
        ))}
      </div>
    </div>
  )
}
