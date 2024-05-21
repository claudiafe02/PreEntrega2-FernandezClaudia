import './ItemList.css';
import { useEffect, useState } from "react";
import { getProducts } from '../../asyncMock';
import Item from "../Product/Item";
import { useParams } from 'react-router-dom';

export default function ItemList() {
    const [items,setItems] = useState([]);
    // const { prodCategory }= useParams();
    const category = useParams().prodCategory;
        useEffect(() =>{
            if (category){
                getProducts.then((datos) =>
                setItems(datos.filter((dato) => dato.category ==category )))
            }else {
                getProducts.then((datos) => setItems(datos))
            }
    },[category]);     
    
    return(
        <>
            <section className="sectionStyle" >
                {items.map((dato) => ( 
                    <Item key={dato.id} 
                    image= {dato.image}
                    title={dato.title}
                    price= {dato.price}
                    id={dato.id}
                    category={dato.category}
                    subtitle={dato.subtitle}
                    />                 
                ))}
            </section>
        </>
    )
};

