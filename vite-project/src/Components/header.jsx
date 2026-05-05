export default function Header({ dark, setDark, search, setSearch, cartCount, onCartOpen }) {
  return (
    <header style={{
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky', top: 0, zIndex: 100,
      padding: '0 24px'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', height: 70, gap: 16 }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <span style={{ fontSize: 26 }}>🪔</span>
          <div>
            <div style={{ fontFamily: 'var(--font-h)', fontSize: 20, fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>IndianDrape</div>
            <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Authentic Indian Fashion</div>
          </div>
        </div>

        <div style={{ flex: 1, maxWidth: 400, margin: '0 16px', position: 'relative' }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>🔍</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search sarees, kurtas..."
            style={{
              width: '100%', padding: '9px 12px 9px 36px',
              borderRadius: 40, border: '1px solid var(--border)',
              background: 'var(--surface2)', color: 'var(--text)',
              fontSize: 13, outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>

          <button
            onClick={() => setDark(d => !d)}
            style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 40, padding: '7px 14px', cursor: 'pointer', fontSize: 13, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 6 }}>
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>

          <button
            onClick={onCartOpen}
            style={{ background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 40, padding: '9px 18px', cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}>
            🛒 Cart
            {cartCount > 0 && (
              <span style={{ background: '#fff', color: 'var(--accent)', borderRadius: 10, padding: '1px 7px', fontWeight: 700, fontSize: 11 }}>
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  )
}