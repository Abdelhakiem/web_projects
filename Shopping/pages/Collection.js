import React,{useEffect,useState}  from 'react'
import Title from '../components/Title';
import Card from '../components/Card';
import { products } from '../assets/frontend_assets/assets';

export default function Collection() {
  const [data, setData] = useState([]);

  useEffect(() => {
      console.log(products[0]);
      setData(products);

  }, []);

  return (
     <div>
     <div>
     <Title text1="ALL" text2="Collection" />
     </div>
     <div className='grid sm:grid-cols-5 md:grid-cols-4 lg:grid-cols4 xl:grid-cols5'>

       {data.map((e) => (
           <Card 
           name={e.name} 
           image={e.image} 
           price={e.price}
           />
       ))}
       </div>

   </div>
  )
}
