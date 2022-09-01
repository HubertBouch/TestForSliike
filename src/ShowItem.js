import React from "react"
import './App.css';

export default function Items(props){
   const displayItems = (props) => { 
    
    const {data} = props;
        
        if(data.length > 0){
            return(
            data.map((item,index)=>{
                console.log(item)
                let url = (item.imageURLs[0]).toString()
                return(
                    <div className='itemContainer' key={item._id}>
                        <div>
                            <img src={url} alt=''/>
                        <p className="itemText">{item.fulhausProductName}</p>
                        <p className="priceText">${item.retailPrice} CAD</p>
                        </div>
                    </div>
                )
            })
        )
    } 
    else {
        return( console.log("Empty data"))
    }
}
    return (
        <>{displayItems(props)}</>
    )
}
