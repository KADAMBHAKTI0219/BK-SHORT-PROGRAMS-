import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const QuotesApp = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };
  const [quotes, setQuotes] = useState([])
  const getQuotes = ()=>{
    axios.get('http://localhost:5000/quotes').then(res=>setQuotes(res.data)).catch(err=>console.log(err))
  }
  useEffect(()=>{
    getQuotes()
  },[])
  const handleDelete = (id)=>{
    axios.delete(`http://localhost:5000/quotes/${id}`).then(res=>getQuotes()).catch(err=>console.log(err))
  }
  return (
    <div>
     <div className='Quote-head'>
     <h1>Quotes</h1>
     <button  className='addQuoteButton'><Link to={'/addQuotes'}>ADD QUOTES </Link></button>
     </div>
<Carousel
          style={{ width: "50%", margin: "auto", border: "2px solid black" }}
          responsive={responsive}
        >
      {quotes.map(el=>(
        <div key={el.id} className='quoteDiv'>
           <img src={el.image} alt={el.quote} height={200} width={200} className='quote-image'/>
          <h2 className='quote'>{el.quote}</h2>
          <h3 className='quote-author'>{el.author}</h3>
          <h4>{el.whichQuote}</h4>
          <div className='buttons'>
          <button className='editButton'><Link to={`/edit/${el.id}`}>Edit</Link></button>
          <button onClick={()=>handleDelete(el.id)} className='deleteButton'>Delete</button>
          </div>
        </div>
      ))}
       </Carousel>
    </div>
  )
}

export default QuotesApp
