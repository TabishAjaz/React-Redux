import React from "react"
function Contact(props){
    return(
        <div className="contact-card">
        
        <h3>name:{props.name}</h3>
        <p>Phone: {props.phone}</p>
     
    </div>
    )
}
export default Contact