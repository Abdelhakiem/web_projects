import React,{useEffect,useState} from 'react';
import Title from './Title';
import Card from './Card';
import { products } from '../assets/frontend_assets/assets';

const BestSeller = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(products[0]);
        setData(products.slice(10, 21));

    }, []);
        

  return (
    <div>
      <div>
        <Title text1="Best" text2="Seller" />
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols4 xl:grid-cols5'>

        {data.map((e) => (
            <Card 
            name={e.name} 
            image={e.image} 
            price={e.price}
            />
        ))}
        </div>

    </div>
  );

}

export default BestSeller;
