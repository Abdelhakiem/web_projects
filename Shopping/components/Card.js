import React,{useState} from 'react';

const Card =({ name, image, price })=>{
    console.log(name, image, price);

    return (

    <div className='card' style={{ width: '18rem' }}>
      <div>
        <img src={image} className="hover:scale-105" style={{ width: '18rem', height:'18rem'}}  />
      </div>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <h2 className="card-text">{price}</h2>
      </div>
    </div>


    );

}
export default Card;