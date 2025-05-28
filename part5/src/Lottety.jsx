import { useState } from "react";
import './Lottery.css';
import { generateTicket,sumOfArr} from "./helper";

export default function Lottery(){
    let [ticket,setTicket] = useState(generateTicket(3));
    let isWinning = sumOfArr(ticket)===15;
    function buyTicket(){
        setTicket(generateTicket(3));
    }
    return(
        <div>
            <h1>Lottery Started</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div> <br />
            <button disabled={isWinning} onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Conguratulations, You Won🎉"}</h3>
        </div>
    );
}