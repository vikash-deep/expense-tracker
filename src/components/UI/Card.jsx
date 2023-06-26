import React from 'react'
import './Card.css'

// we are using this component to avoid css code duplication (box-shadow, border-radius etc.) which has been applied on card as well as on card wrapper 
const Card = (props) => {
  const classes='card '+ props.className;  //to add classes in the card
  return (
    <>  
      <div className={classes}>{props.children}</div>
    </>

  )
}

export default Card