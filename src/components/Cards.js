import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Header from './Header';

export default function Cards() {
  const [arrayState, setarrayState] = useState([
    { path: "./img/img1.png", id: 1 },
    { path: "./img/img2.png", id: 2 },
    { path: "./img/img3.png", id: 3 },
    { path: "./img/img4.png", id: 4 },
    { path: "./img/img5.png", id: 5 },
    { path: "./img/img6.png", id: 6 },
    { path: "./img/img7.png", id: 7 },
    { path: "./img/img8.png", id: 8 },
    { path: "./img/img9.png", id: 9 },
    { path: "./img/img10.png", id: 10 },
  ]);

  let randomizedArray = [
    { path: "./img/img1.png", id: 1 },
    { path: "./img/img2.png", id: 2 },
    { path: "./img/img3.png", id: 3 },
    { path: "./img/img4.png", id: 4 },
    { path: "./img/img5.png", id: 5 },
    { path: "./img/img6.png", id: 6 },
    { path: "./img/img7.png", id: 7 },
    { path: "./img/img8.png", id: 8 },
    { path: "./img/img9.png", id: 9 },
    { path: "./img/img10.png", id: 10 },
  ];

    const [selectedChar, setSelectedChar] = useState([])

    const [score, setScore] = useState(0)

    // If local storage exists, use that value, else 0
    const [highScore, setHighScore] = useState(localStorage.getItem("highScore") != null ? localStorage.getItem("highScore") : 0)

  useEffect(() => {

    const randomizeImg = () => {
        randomizedArray.sort(() => Math.random() - 0.5);
    };

    const increaseScore = () => {
        setScore(score + 1)
    }

    const resetScore = () => {
        setScore(0)
    }

    const checkHighScore = () => {
        if(score > highScore) {
            setHighScore(score)

            //Adds new high score if true.
            localStorage.setItem("highScore", JSON.stringify(score))
        }
    }

    const resetCurrentPicks = () => {
        setSelectedChar([])
    }

    const gameLogic = (id) => {
        if (selectedChar.includes(id)) {
            //Game ends.
            checkHighScore()
            resetScore()
            resetCurrentPicks()
        } else {
            increaseScore()
        }
        
    }

    const onClick = (e) => {
      randomizeImg();
      setarrayState(randomizedArray);

      let charId = e.target.id
      setSelectedChar([...selectedChar, charId])
      
      //Game logic func here.
      gameLogic(charId)

    };

    const cardsDiv = document.querySelectorAll(".card-img");
    cardsDiv.forEach(function (item) {
      item.addEventListener("click", onClick);
    });

    return () => {
      cardsDiv.forEach(function (item) {
        item.removeEventListener("click", onClick);
      });
    };
  }, [arrayState, selectedChar]);

  return (
    <div className="header">
    <Header score={score} highScore={highScore}/>
    <div className="container">
      {arrayState.map((properties) => (
        <div className="cards" id="cards" key={uniqid()}>
          <div className="card-img" id={properties.id}>
            <img id={properties.id} src={require(`${properties.path}`)} />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
