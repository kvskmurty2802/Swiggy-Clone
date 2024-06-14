import React,{useState} from 'react'
import { itemData } from '../Data/Data'

export default function Displaybar() {
  const [displayItem,setDisplayitem]=useState(itemData)
  // console.log("data is ",displayItem)
  return (
    <div>
      <section className='itemSection'>
        {displayItem.map((item)=>{
          return(
            <div className="gallery" >
              <img src={item.item_img} alt={item.item_img}/>
            </div>
          )
        })}
      </section>
    </div>
  )
}
