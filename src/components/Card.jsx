import React from 'react';
import PropTypes from 'prop-types';

const Card = ({imagen, description, color}) => {

    return (
        <>
        {
        console.log(description)
        }
            <div 
                className="card" 
                style={{
                    width: '16rem',
                    backgroundColor:color
                }}>
                <img 
                    src={imagen}
                    className="card-img-top" 
                    alt="..."
                    width={254}/>
                <div className="card-body p-0">
                    <p className="card-text">{description !== null?  description: 'sin descripcion'}</p>
                    <a href="localhost:3000" className="btn btn-primary">Descargar</a>
                </div>
            </div>
        </> 
    )
}

Card.prototype = {
    imagen: PropTypes.string,
    color: PropTypes.string,

}

export default Card
