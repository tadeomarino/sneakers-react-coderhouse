import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const pathImgUrl = require.context("../../assets/img", true)

const ItemDetail = ({item}) => {

  const handleOnAdd = (value) =>{
    console.log(`se agrego ${value}`);
}

  return (
    
    <div>
        <div>
            <img src={pathImgUrl(`./${item.imgUrl}`)} alt={item.name} />
            <h1>{item.name}</h1>
            <p>Description: {item.description}</p>
            <p>$ {item.price}</p>
            <p>Stock disponible: {item.id}</p>
        </div>
        <ItemCount onAdd = {handleOnAdd} stock = {item.stock} initial = {1}/>
    </div>
  )
}

export default ItemDetail