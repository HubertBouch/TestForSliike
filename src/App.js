import image from './hero-image.png';
import supportimg from './support247.svg'
import deliveryimg from './free-delivery.svg'
import authenticimg from './authentic.svg'
import axios from 'axios'
import React,{useState} from "react";
import './App.css';
import Items from './ShowItem';



// async function GetItem() {
//   const axios = require('axios');
//   const baseURL = "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=8 ";
//   const response  = await axios.get(baseURL).then(res => res.response)
//   return response
// };

function  App() {
  const [data, getData] = useState(0);
  const baseURL = "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=8 ";
 React.useEffect(() => {
    getAllItem();
}, []);

  const getAllItem = () => {
    axios.get(`${baseURL}`).then((response)=> {
      const allItems = response.data.data.products
      getData(allItems)
    })
    .catch(error => console.error(`Error:${error}`))
  }
 

  return (
    <div className="main">

      <div className="Header">
        <header className="Furniture">Furniture</header>
      </div>
    
      <div className="container">
        <div className="text">
          <div className="newArrival">New Arrival</div>
          <div className="collectionBox">
            <div className="collection">Discover Our New Collection</div>
          </div>
          <div className='loremBox'>
            <div className="newArrival">Cillum nisi consequat mollit cillum labore dolore occaecat duis ex minim excepteur dolore.</div>
          </div>
          <div className='buttonContainer'>
            <div className='buttonText'>buy now</div>
          </div>
        </div>
        <div className='flex-boxContainer'>
        <div className='deliveryContainer'>
          <p className='deliveryText'>Free Delivery</p>
          <p className='lorem'> Lorem ipsum dolor sit amet.</p>
          <img src={deliveryimg} className='icon' alt='freeDeliveryIcon'></img>
        </div>
        <div className='supportContainer'>
          <p className='supportText'> Support 24/7 </p>
          <p className='lorem'> Lorem ipsum dolor sit amet.</p>
          <img src={supportimg} className='icon' alt='supportIcon'></img>
        </div>
        <div className='authenticContainer'>
        <p className='authenticText'> 100% Authentic </p>
        <p className='lorem'> Lorem ipsum dolor sit amet.</p>
          <img src={authenticimg} className='icon' alt='authenticIcon'></img>
        </div>
      </div>
        <img src={image} alt="" />
      </div>

      <Items data = {data}/>
      
    </div>
  );
}

export default App;
