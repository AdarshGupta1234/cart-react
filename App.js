import React, { useEffect, useState } from 'react'
import './project4 pixabay/pixa.css'
// import img1 from './project4 pixabay/images/istockphoto-1441581800-2048x2048.jpg'

const App = () => {
  const[data,setData]=useState([])
const[search,setsearch]=useState('')


useEffect(()=>{
  fetch(`https://pixabay.com/api/?key=39413035-150d33090f3851c52c7625c87&q=${search}&image_type=photo&pretty=true`)
  .then(res=>res.json())
  .then(d=>setData(d.hits))
})
  return (
    <div className='main'>
    <div className='navbar'>
    <div className='left-nev '>
    <i class="fa-solid fa-truck-fast"></i>
    <div>PIXABAY</div>
    </div>
    <div className='middle-nav '>
    <div >Explore</div>
    <i class="fa-regular fa-bell"></i>
    <button>Upload</button>
    </div>

    </div>
    <section className='sec'>
    <h1>Stunning royalty-free images & royalty-free stock</h1>
        <p>Over 4.1 million+ high quality stock images, videos and music shared by our talented community.</p>
        
        <input type='text' placeholder='Search what you want' onChange={(e)=>setsearch(e.target.value)}></input>

        </section>
       

       
        <section className='image'>
          {data && data.map((item)=>{
              return(
               
                  <img src={item.webformatURL} alt='' height={item.webformatHeight} width={item.webformatWidth}></img>
                
                 
                 
              )
          })}
        </section>
      
    </div>
  )
}

export default App