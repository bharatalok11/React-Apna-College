import { useState } from "react";
import './comment.css';
import CommentsForm from "./CommentsForm";
export default function Comment(){
    let [comments, setComments] = useState([
        {
            username: "John",
            remarks: "Great product!",
            rating: 5
        }
    ]);
    let addNewComment = (newComment)=> {
        setComments((currComments) => {
            return [...currComments, newComment];
        });
    }   
    return(
        <div>
            <CommentsForm addNewComment={addNewComment} />
            <h3>All comments</h3>
            {
                comments.map((comment, index) =>(
                    <div className="comment" key={index}>
                        <h4>{comment.username}</h4>
                        <p>{comment.remarks}</p>
                        <p>Rating: {comment.rating}</p>
                    </div>
                ))
            }
        </div>
    )
}