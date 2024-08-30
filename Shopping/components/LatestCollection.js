import React,{useEffect,useState} from 'react';
import Title from './Title';
import Card from './Card';
import { products } from '../assets/frontend_assets/assets';
const LatestCollection = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(products[0]);
        setData(products.slice(1, 11));

    }, []);
        

  return (
    <div>
      <div>
        <Title text1="Latest" text2="Collections" />
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
};

export default LatestCollection;
