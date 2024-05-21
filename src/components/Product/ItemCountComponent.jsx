import { useState } from "react";
import './ItemCountComponent.css';

export default function ItemCountComponent() {
    const stock= 10;
    const [count, setCount]= useState(0);

    const handleInc= () =>{
        if (count<=stock-1) {
            setCount(count+1);
            cliks.current++;
            console.log('Contador de clicks: '+cliks.current);
        }
    } 

    const handleDec= () =>{
        if (count>=1) {
            setCount(count-1);
            cliks.current++;
            console.log('Contador de clicks: '+cliks.current);
        }
    } 
    return (    
        <section>
            <div className="butonClicStyle">
                <button onClick={handleInc}>+</button>
                <p>{count}</p>
                <button onClick={handleDec}>-</button>
            </div>
            <div className="butonAddStyle">
            <button>Agregar al carrito</button>
            </div>
        </section>    
            
    )
}