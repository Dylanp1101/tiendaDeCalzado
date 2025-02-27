import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { productos } from "../../../productos"
import "./ItemListContainer.css"
import { FadeLoader } from "react-spinners"

export const ItemListContainer = ({ greeting, items: propItems }) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (propItems) {
      setItems(propItems)
      setLoading(false)
      return
    }

    setTimeout(() => {
      setItems(productos)
      setLoading(false)
    }, 2000)
  }, [propItems])

  return (
    <div className="container">
      <h2>{greeting}</h2>
      {loading ? (
        <p className="centered"><FadeLoader /></p>
      ) : (
        <div className="products-grid">
          {items.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.imgUrl} alt={item.title} />
              <h3>{item.title}</h3>
              <p className="price">${item.price}</p>
              <p className="stock">Stock: {item.stock}</p>
              <Link to={`/product/${item.id}`} className="view-button">
                Ver detalles
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

