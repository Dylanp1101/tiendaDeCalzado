import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../../productos";
import { ItemListContainer } from "../itemListContainer/ItemListContainer";

export const CategoryView = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) return; 

    const filteredProducts = productos.filter(
      (product) => product.category?.toLowerCase() === categoryId.toLowerCase()
    );

    setItems(filteredProducts);
  }, [categoryId]);

  return (
    <div className="category-view">
      {categoryId ? (
        <>
          <h2>Categoría: {categoryId}</h2>
          <ItemListContainer greeting={`Productos en la categoría ${categoryId}`} items={items} />
        </>
      ) : (
        <h2>Cargando categoría...</h2>
      )}
    </div>
  );
};
