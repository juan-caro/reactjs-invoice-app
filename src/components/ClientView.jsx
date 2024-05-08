import PropTypes from 'prop-types'
export const ClientView = ( { client } ) => {
    
    return(
        <>
            <h2>Datos del cliente</h2>
            <ul className="list-group"> 
                <li className="list-group-item active">FullName: { client.name } { client.lastName }</li>
                <li className="list-group-item">Country/City: { client.address.country } / { client.address.city }</li>
                <li className="list-group-item">Street: { client.address.street } { client.address.number } </li>
            </ul>
        </>
    )
}

ClientView.propTypes = {

    client: PropTypes.object.isRequired

}