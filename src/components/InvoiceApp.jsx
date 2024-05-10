import { useEffect, useState } from "react";
import { calculateTotal, getInvoice } from "../services/getInvoice"
import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";
import { ProductView } from "./ProductView";
import { TotalView } from "./TotalView";
import { FormItemsView } from "./FormItemsView";

const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []
        
};


export const InvoiceApp = () => {
    
    const [activeForm, setActiveForm] = useState(false);

    const [total, setTotal] = useState(0);

    const[counter, setCounter] = useState(0);

    const [invoice, setInvoice] = useState(invoiceInitial);

    const [items, setItems] = useState([]);

    const { id, name, client, company, items: itemsInitial } = invoice;

    useEffect(() => { //Usamos esto para solamente cargar los datos una vez, la vez que se construye lo que reduce los tiempos de carga
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.items);
        setCounter(data.items.length + 1);
    }, [])

    useEffect(() => {
        console.log('el counter cambio')
    }, [counter])

    useEffect(() => {
        setTotal(calculateTotal(items))
    }, [items])

    console.log('itemsLength ' + items.length)

    const startCounterValue = items.length + 1;

    console.log('aa' + startCounterValue);

    console.log('itemsLength ' + items.length)

    console.log('counter:' + counter);

    const handlerAddItems = ({product, price, quantity}) => {

        setItems([...items, {id: counter, 
            product: product.trim(), 
            price: parseInt(price.trim(), 10), //usando .trim nos aseguramos que no haya espacios después de introducir el nombre
            quantity: parseInt(quantity.trim(), 10)}]);

        setCounter(counter + 1);

    }

    const handlerDeleteItem = (id) => {
        console.log('handlerDelete ' + id)
        setItems(items.filter(item => item.id !== id))
    }
    
    const onActiveForm = () => {
        setActiveForm(!activeForm);
    }

    return(
        <>
            
            <div className="container">
                <div className="card mt-5">
                    <div className="card-header">
                        Ejemplo factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={ id } name={ name } />
                        <div className="row">
                            <div className="col">
                                
                                <ClientView client={client} />
                            </div>
                            <div className="col">
                                <CompanyView company={company} />
                            </div>
                        </div>
                        <ProductView items={ items } handlerDeleteItem={ id => handlerDeleteItem(id) } />
                        <TotalView total={ total }/>
                        <button className="btn btn-secondary mb-3"
                        onClick={onActiveForm}>{ !activeForm ? 'Agregar Item' : 'Ocultar Formulario'}</button>
                        {!activeForm ? '' : <FormItemsView handler={ (newItem) => handlerAddItems(newItem)} /> }
                        {/*En FormItemsView le paso el handler que será la función al componente formulario y me devuelve un nuevo Item  */}
                        
                    </div>
                </div>
            </div>
        </>
    )   
}