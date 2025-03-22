import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { FadeLoader } from "react-spinners";
import { db } from "../../../firebaseDato";
import "./itemListContainer.css";

export const ItemListContainer = ({ greeting, items: propItems }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let refCollection = collection(db, "productos");

        if (propItems) {
          setItems(propItems);
        } else {
          const querySnapshot = await getDocs(refCollection);
          const nuevoArray = querySnapshot.docs.map((elemento) => ({
            id: elemento.id,
            ...elemento.data(),
          }));

          setItems(nuevoArray);
        }
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [propItems]);

  return (
    <div className="container">
      <h2>{greeting}</h2>
      {loading ? (
        <p className="centered">
          <FadeLoader />
        </p>
      ) : (
        <div className="products-grid">
          {items.map((item, index) => {
            // Verificar si `item.id` existe y es único
            if (!item.id) {
              console.warn("Item sin id:", item);
            }

            return (
              <div key={item.id || index} className="product-card"> {/* Usamos `item.id` o el `index` */}
                <img src={item.imgUrl} alt={item.title} />
                <h3>{item.title}</h3>
                <p className="price">${item.price}</p>
                <p className="stock">Stock: {item.stock}</p>
                <Link to={`/product/${item.id}`} className="view-button">
                  Ver detalles
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
