import { useState } from "react";
export default function CommentsForm({addNewComment}){
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });  

    let handleInputChange = (event)=>{
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value};
        });
    }

    let handleFormSubmit = (event)=>{
        event.preventDefault();
        // console.log(formData);
        addNewComment(formData);
        setFormData({
            username: "",
            remarks: "",
            rating: 5
        }) 
    }

    return(
        <div>
            <h4>Give a Feedback</h4>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username : </label>
                <input
                    type="text"
                    name="username" 
                    id="username" 
                    value={formData.username}
                    placeholder="username"
                    onChange={handleInputChange}
                /> 
                <br /> <br />

                <label htmlFor="remarks">Remarks : </label>
                <textarea
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    placeholder="Enter your remarks here : "
                > Remarks </textarea>
                <br /> <br />

                <label htmlFor="rating">Rating : </label>
                <input 
                    type="number" 
                    name="rating" 
                    id="rating" 
                    value={formData.rating}
                    onChange={handleInputChange}
                    placeholder="Enter rating : "
                    min={1}
                    max={5}
                />
                <br /> <br />
                <button>Submit</button>
            </form>
        </div>
    );
}