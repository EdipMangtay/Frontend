import { useState } from "react"

function App() {

  const [imageId, setImageId] = useState(200)
  const getLoremPicsumImg = (id,width=800,height=450) =>`https://picsum.photos/id/${id}/${width}/${height}`


  function handleClick(id){
    setImageId(id)
  }

  return (
    <main className="container">
      <h1> 
          Mini Görsel Uygulaması
      </h1>
      <img src={getLoremPicsumImg(imageId)} alt="" style={{width: "100%"}} />
      <div className="grid" style={{marginTop: "30px"}}>
        {
          [...Array(5)].map((item,index) => <div key={index}>
            
            <img
            onClick={() => handleClick(200 + index)} 
            src={getLoremPicsumImg((200 + index),100,100)}
             alt="" 
             
             />

          </div>)
        }
      </div>
    </main>
  )
}

export default App
