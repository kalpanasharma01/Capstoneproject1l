import { CATEGORIES, GENDERS } from '../data/product.js'
import './sidebar.css'

export default function Sidebar({
  category, setCategory,
  gender,   setGender,
  minPrice, setMinPrice,
  maxPrice, setMaxPrice,
  onReset
}) {
  return (
    <aside className="sidebar">
      <div className="filter-group">
        <div className="group-title">Category</div>
        {CATEGORIES.map(c => (
          <button
            key={c}
            className={`cat-btn ${category===c ? 'active':''}`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="filter-group">
        <div className="group-title">For</div>
        {GENDERS.map(g => (
          <button
            key={g}
            className={`gender-btn ${gender===g ? 'active':''}`}
            onClick={() => setGender(g)}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="filter-group">
        <div className="group-title">Price</div>
        <input type="range" min={0} max={15000}
          value={minPrice}
          onChange={e => setMinPrice(+e.target.value)} />
        <input type="range" min={0} max={15000}
          value={maxPrice}
          onChange={e => setMaxPrice(+e.target.value)} />
      </div>

      <button onClick={onReset}>Reset Filters</button>
    </aside>
  )
}