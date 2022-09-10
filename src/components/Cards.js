import React, { useState } from 'react'

export default function Cards() {

    const imageData = [
        {
            id: 1,
            path: "./img/img1.png"
        },
        {
            id: 2,
            path: "./img/img2.png"
        },
        {
            id: 3,
            path: "./img/img3.png"
        },
        {
            id: 4,
            path: "./img/img4.png"
        },
        {
            id: 5,
            path: "./img/img5.png"
        },
    ]


  return (
    <div className='container'>

        <div className='cards'>
            {
                imageData.map((properties) => (
                    <img key={properties.id} src={require(`${properties.path}`)} />
                    )) 
            }
            
        </div>
    </div>
  )
}
