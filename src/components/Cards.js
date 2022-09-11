import React, { useState, useEffect } from 'react'
import uniqid from "uniqid"

export default function Cards() {

    const [arrayState, setarrayState] = useState(["./img/img1.png", "./img/img2.png", "./img/img3.png", "./img/img4.png", "./img/img5.png"])
    let randomizedArray = ["./img/img1.png", "./img/img2.png", "./img/img3.png", "./img/img4.png", "./img/img5.png"]


    useEffect(() => {
        const randomizeImg = () => {
            randomizedArray.sort( () => Math.random() - 0.5)
        }

        const onClick = () => {
            randomizeImg()
            setarrayState(randomizedArray)
        }

        const cardsDiv = document.querySelectorAll(".card-img")
        cardsDiv.forEach(function(item) {
            item.addEventListener("click", onClick)
        })

        return () => {
            cardsDiv.forEach(function(item) {
                item.removeEventListener("click", onClick)
            })
          };
    
      }, [arrayState]);


  return (
    <div className='container'>
    {
    // imageData.map((properties) => (
    //     <div className='cards'>
    //         <div className='card-img' onClick={onClick}>
    //             <img key={properties.id} src={require(`${properties.path}`)} />
    //         </div>
    //     </div>
        //     )) 
            arrayState.map((properties) => (
            <div className='cards' id="cards" key={uniqid()} >
                <div className='card-img'>
                    <img  src={require(`${properties}`)} />
                </div>
            </div>
            )) 
        }
    </div>
  )
}
