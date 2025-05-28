import './App.css'
import Lottery from "./Lottety";
import { sumOfArr } from './helper';
function App() {
  let winCondition = (ticket)=>{
    // you can change the win condition here 
    // nothing need to change in Lottery component
    return sumOfArr(ticket) === 15;
  }
  return (
    <>
      <Lottery n={4} winCondition={winCondition} />
    </>
  )
}
export default App;