import React from 'react'
import brand from './assets/images/brand.png'
import './assets/css/style.css'
function Header() {
    return (
        <div className="container-fluid" style={{

            display:"flex",
            justifyContent:"center",
            boxShadow:"1px 1px 15px lightgray",
            padding:"15px"
        }}>
            <img src ={brand} alt="brand" style={{
                width:"200px"
            }}/>
        </div>
    )
}

export default Header
