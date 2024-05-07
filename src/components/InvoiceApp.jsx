import { getInvoice } from "../services/getInvoice"

export const InvoiceApp = () => {

    const { id, name, client, company, items } = getInvoice();

    const { country, city, street, number } = client.address;


    return(
        <>
            
            <div className="container">
                <div className="card mt-5">
                    <div className="card-header">
                        Ejemplo factura
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">Id: { id }</li>
                            <li className="list-group-item">Name: { name }</li>
                        </ul>
                        <div className="row">
                            <div className="col">
                                <h2>Datos del cliente</h2>
                                <ul className="list-group"> 
                                    <li className="list-group-item active">FullName: { client.name } { client.lastName }</li>
                                    <li className="list-group-item">Country/City: { country } / { city }</li>
                                    <li className="list-group-item">Street: { street } { number } </li>
                                </ul>
                            </div>
                            <div className="col">
                                <h2>Datos de la empresa</h2>
                                <ul className="list-group">
                                    <li className="list-group-item active">{ company.name }</li>
                                    <li className="list-group-item">{ company.fiscalNumber }</li>
                                </ul>
                            </div>
                        </div>
                        <h4>Productos de la factura</h4>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(({id, product, price, quantity}) => {
                                    return (
                                        <tr key={id}>
                                            <td>{ product }</td>
                                            <td>{ price }</td>
                                            <td>{ quantity }</td>
                                        </tr>
                                    );
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )   
}