import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';

// Render 8-10 cards images, in a random order. -> Loop with each card file ending in {x}. 
// Optional -> more than 10 images available to make it harder, but we can render just 10 at a time
// When clicking on a card. Randomize the order again.
// Keep track of the ID or name of the card chosen. 
// If it is chosen again, then game (or scores) restarts/ends
// If it is not chosen, the users score increases by 1 -> display this score somewhere.

// Components needs:
// Header with title and score.
// Cards component with its game logic.

function App() {
  return (
    <div>
      <div className='cards-container'>
        <Cards />
      </div>
    </div>
  );
}

export default App;
