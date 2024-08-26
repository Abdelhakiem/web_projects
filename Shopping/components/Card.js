import React,{useState} from 'react';

const Card =({ title, description, img })=>{
    

    return (

    <div className='card' style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" style={{ width: '18rem', height:'18rem'}} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>


    );

}
export default Card;