import carrito from './carrito.jpg';

export default function CartWidgetComponent() {
    const carritoStyle ={
        width: '35px',
        height: '35px',
    }
    return (
        <div>
          <img style={carritoStyle} src={carrito} alt="carrito de compras "/>
        </div>
    )
}
// marginRight: '7%'
