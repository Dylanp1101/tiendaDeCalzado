"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productos } from "../../../productos"
import { ItemListContainer } from "../itemListContainer/ItemListContainer"

export const CategoryView = () => {
  const [items, setItems] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const filteredProducts = productos.filter((product) => product.category === categoryId)
    setItems(filteredProducts)
  }, [categoryId])

  return <ItemListContainer greeting={`Productos ${categoryId}`} items={items} />
}

