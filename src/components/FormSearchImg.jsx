import React from 'react'
import PropTypes from 'prop-types'

const FormSearchImg = ({handleSubmit}) => {
    return (
        <>
          <form onSubmit={handleSubmit}>
                <div className='input-group mb-3 p-3'>
                    <input className='form-control' type={'text'} name='inputText'placeholder='Buscar'/>
                    <button className='btn btn-primary' type="submit">
                        <span className="material-icons"
                            >search
                        </span>
                    </button>
                </div>
            </form>  
        </>
    )
}

FormSearchImg.propTypes = {
    handleSubmit:PropTypes.func,
}

export default FormSearchImg;