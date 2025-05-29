import { useState } from "react";
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
 
    if (!values.username) {
        errors.username = 'username is Required';
    } else if (values.username.length < 3) {
        errors.username = 'Must be atleast 3 characters or more';
    }
    if (!values.remarks) {
        errors.remarks = 'please add remark';
    }
    if (!values.rating) {
        errors.rating = 'required';
    }
    return errors;
};

export default function CommentsForm({addNewComment}){
    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5
        },
        validate,
        onSubmit: (values) => {
            // console.log('Submitted values:', values);
            addNewComment(values);
        },
    });

    return(
        <div>
            <h4>Give a Feedback</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username : </label>
                <input
                    type="text"
                    name="username" 
                    id="username" 
                    value={formik.values.username}
                    placeholder="username"
                    onChange={formik.handleChange}
                /> 
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}
                <br /> <br />

                <label htmlFor="remarks">Remarks : </label>
                <textarea
                    id="remarks"
                    name="remarks"
                    value={formik.values.remarks}
                    onChange={formik.handleChange}
                    placeholder="Enter your remarks here : "
                > Remarks </textarea>
                {formik.errors.remarks ? <div>{formik.errors.remarks}</div> : null}
                <br /> <br />

                <label htmlFor="rating">Rating : </label>
                <input 
                    type="number" 
                    name="rating" 
                    id="rating" 
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                    placeholder="Enter rating : "
                    min={1}
                    max={5}
                />
                <br /> <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}