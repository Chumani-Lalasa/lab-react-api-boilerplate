import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [bookData,setBookData] = useState([]);
  const getData = () => {
    axios.get("https://reactnd-books-api.udacity.com/books",
            { headers: { 'Authorization': 'whatever-you-want' },
          })
          .then((res) => setBookData(res.data.books))
          .catch((err) => {
            console.warn('Status code = 404');
            console.error('Website not found');
          })
  }
  console.log(bookData);
  useEffect(() => {
    getData();
  },[])
  return (
    <>
      {bookData.map((el,i) => (
        <div key={i} style={{borderBottom:'1px solid black'}}>
          <h2>{el.title}</h2>
          <div className='image-container'>
          <img src={el.imageLinks.thumbnail} alt="" />
          <p>{el.description}</p>
          </div>
          <div className='authors'>
            {el.authors.map((author,i) => (
              <h3 key={i}>{author}</h3>
            ))}
          </div>
        </div>
        
      ))}
    </>
  )
}

export default App
