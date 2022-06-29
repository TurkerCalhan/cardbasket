import { useState } from 'react';
import './App.css';
import Card from "./components/card/Card";

function App() {
 const [product,setProduct] = useState([

  {
    id: 1,
   title:"MSI Anakart",
   image:"https://picsum.photos/id/1/5616/3744",
   info:"3.0 GHZ 3*USB 2.0",
   adet:1
  },
  {
    id: 2, 
    title:"RAM", 
    image:"https://picsum.photos/id/10/2500/1667", 
    info: "16GB Kingston",
    adet:1
  },
  {
    id: 3,
    title:"Ekran Kartı",
    image:"https://picsum.photos/id/100/2500/1656",
    info:"Nvdia GeForce 1050",
    adet:1
  },
  {
    id: 4, 
    title:"Monitör", 
    image:"https://picsum.photos/id/1000/5626/3635", 
    info:"17' Monitör",
    adet:1
  },
  {
    id: 5, 
    title:"Klavye", 
    image:"https://picsum.photos/id/101/2621/1747", 
    info:"Mekanin Klavye",
    adet:1
  },
  {
    id: 6, 
    title:"Mouse", 
    image:"https://picsum.photos/id/1010/5184/3456", 
    info:"Oyuncu Mouse",
    adet:1
  },
  {
    id: 7, 
    title:"Kulaklık", 
    image:"https://picsum.photos/id/1013/4256/2832", 
    info:"Oyuncu Kulaklığı",
    adet:1
  },
  {
    id: 8, 
    title:"Monitör", 
    image:"https://picsum.photos/id/102/4320/3240", 
    info:"17' Monitör",
    adet:1
  },
 
]);

const [basket,setBasket] = useState([]);

  return (
    <div className="App">
      <h1>REACT SEPET UYGULAMASI</h1>
      <h2>Listelenen Ürünler</h2>
      <div className='urunler'>
        {
          product.map((eleman,index)=>{
              return (
              <Card onClick={()=>{
                const arr=[...basket];
                if(arr.findIndex((ind)=>{
                  return eleman.id=== ind.id;
                })===-1)
                {
                  arr.push(eleman);
                  setBasket(arr);
                }
                else {
                  arr.map((item)=>{
                     if(item.id === eleman.id){
                      return (eleman.adet+=1);
                     }
                     setBasket(arr);
                  })
                }
                console.log(basket);
              }} key={index} title={eleman.title} image={eleman.image} info={eleman.info} />
              );
          })
        }
      
      </div>
      <div className='sepet'>
        <h2>Sepetimiz</h2>
        <ul className='sepet'>
          {basket.map((eleman,index)=>{
            return <li>
               {eleman.title + " ----> "+ eleman.info+ " Adet :"+ eleman.adet} <b style={{fontSize:"24px",color:"yellow"}}>
                {eleman.adet}</b>
            </li>;
          })}
        </ul>
        {
          basket.length>0 ? (<button onClick={()=>{
           
            setBasket([]);

          }}>Sepeti Temizle</button>
          ) :( 
          <h2>Sepetinizde Ürün Bulunmamaktadır.</h2>)
        }
      </div>
    </div>
  );
}

export default App;
