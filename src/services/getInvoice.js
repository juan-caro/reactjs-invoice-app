import { invoice } from "../data/invoice"

export const getInvoice = () =>{

    // let total = 0;
    // invoice.items.forEach(item =>{
    //     total = total + item.price * item.quantity;
    // });

    const total = calculateTotal(invoice.items);

    return {...invoice, total: total}; // devuelve clon de factura y agrega el campo total con valor total
}

export const calculateTotal = ( items = []) => {

    return items
        .map( item => item.price * item.quantity)    
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

}