import { useState } from "react";
import './Lottery.css';
import { generateTicket,sumOfArr} from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winningSum=15}){
    let [ticket,setTicket] = useState(generateTicket(n));
    let isWinning = sumOfArr(ticket)===winningSum;
    function buyTicket(){
        setTicket(generateTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game Started!</h1>
            <Ticket ticket={ticket} />
            <button disabled={isWinning} onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Conguratulations, You Won🎉"}</h3>
        </div>
    );
}