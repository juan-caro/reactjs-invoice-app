import { useEffect, useState } from "react";

export const FormItemsView = ({handler}) => {
    const [invoiceItemsState, setInvoiceItemsState] = useState({
        product: '',
        price: '',
        quantity: ''
    });

    const {product, price, quantity} = invoiceItemsState;

    useEffect(() => {
        console.log('el invoiceItemsState cambio')
    }, [invoiceItemsState])

    const onInputChange = ({target: {name, value}}) => {
        console.log(name);
        console.log(value);
        setInvoiceItemsState({
            ...invoiceItemsState,
            [name]: value
        });
    }

    const onInvoiceSubmit = (event) => {
        event.preventDefault();

        if(product.trim().length <= 1) {
            alert('Debes introducir un nombre para el producto');
            return
        };
        if(price.trim().length < 1 || isNaN(price.trim())) {
        
            alert('Error: Debe introducir un precio y debe ser numérico');
            return
        };
        if(quantity.trim().length < 1 || isNaN(quantity.trim())) {
        
            alert('Error: Debe introducir una cantidad y debe ser numérica');
            return
        };

        handler(invoiceItemsState);

        setInvoiceItemsState({
            product: '',
            price: '',
            quantity: ''
        });

    }

    return(
        <>
            <form className="w-50" onSubmit={event => onInvoiceSubmit(event)}>
                <input type="text" name="product" value={product} placeholder="Product" className="form-control mb-3" onChange={ event => onInputChange(event) }/>
                <input type="text" name="price" value={price} placeholder="Price" className="form-control mb-3" onChange={ event => onInputChange(event) }/>
                <input type="text" name="quantity" value={quantity} placeholder="Quantity" className="form-control mb-3" onChange={ event => onInputChange(event)}/>

                <button type="submit" className="btn btn-primary">Crear Item</button>
            </form>
        </>
    )
}