import { useState } from 'react'
import { TAG_COLORS } from '../data/product.js'
import './productcard.css'

export default function ProductCard({ p, wishlist, toggleWishlist, addToCart }) {
  const [hovered, setHovered] = useState(false)
  const isWished = wishlist.includes(p.id)

  return (
    <div
      className={`card ${hovered ? 'card-hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div className="card-img">
        <span className="card-emoji">{p.img}</span>
        {p.tag && TAG_COLORS[p.tag] && (
          <span
            className="card-tag"
            style={{
              background: TAG_COLORS[p.tag].bg,
              color: TAG_COLORS[p.tag].color
            }}
          >
            {p.tag}
          </span>
        )}
      </div>

      <button
        className={`wish-btn ${isWished ? 'wished' : ''}`}
        onClick={() => toggleWishlist(p.id)}
      >
        {isWished ? '♥' : '♡'}
      </button>

      {/* Info area */}
      <div className="card-info">
        <div className="card-name">{p.name}</div>
        <div className="card-price">₹{p.price.toLocaleString()}</div>
        <button className="add-btn" onClick={() => addToCart(p)}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
