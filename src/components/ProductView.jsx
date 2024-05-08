import { RowItemView } from "./RowItemView";
import PropTypes from 'prop-types'

export const ProductView = ({items}) => {

    return(
        <>
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
                            <RowItemView key={id} product={product} price={price} quantity={quantity}/>
                        );
                    })}
                    
                </tbody>
            </table>
        </>
    )

}

ProductView.propTypes = {
    items: PropTypes.array.isRequired
}