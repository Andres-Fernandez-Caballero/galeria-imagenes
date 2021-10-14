import React from 'react'

const Footer = () => {
    return (
        <div>
           <nav className="navbar navbar-dark bg-primary">
               <span className="text-center">Electricat -&copy; {new Date().getFullYear()}</span></nav> 
        </div>
    )
}

export default Footer
