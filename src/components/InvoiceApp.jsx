import { getInvoice } from "../services/getInvoice"
import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";
import { ProductView } from "./ProductView";
import { TotalView } from "./TotalView";

export const InvoiceApp = () => {

    const { total, id, name, client, company, items } = getInvoice();

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
                        <ProductView items={ items } />
                        <TotalView total={ total }/>
                    </div>
                </div>
            </div>
        </>
    )   
}