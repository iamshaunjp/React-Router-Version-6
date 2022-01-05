import { Link } from "react-router-dom"

export default function Products() {
  return (
    <div className="content">
      <h3>Hoodies</h3>
      <div className="products">
        {[0,1,2,3].map(p => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Tees</h3>
      <div className="products">
        {[4,5,6,7].map(p => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
          </div>
        ))}
      </div>
      <h3>Sneakers</h3>
      <div className="products">
        {[8,9,10,11].map(p => (
          <div key={p}>
            <Link to={`/products/${p}`}>
              <img src="https://via.placeholder.com/250x150" alt="product" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
