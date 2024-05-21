import './ItemDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import ItemCountComponent from "./ItemCountComponent";

export function ItemDetail() {
    const [item,setItem] = useState({});
    const { prodId } = useParams();

    useEffect(() =>{
        setItem(getProduct(prodId));                
    }, []);

    return(
        <>
        <section className='detailsection'>
            <h2>Detalles</h2>
            <img className= 'image' src={item.image} alt={item.title} />
                <p>Descripcion: {item.subtitle}</p>
                <p>Categoria: {item.category}</p>
                <p>Precio:{item.price}</p>
            <div>
                <ItemCountComponent />
            </div>
        </section>
        </>
    )

}