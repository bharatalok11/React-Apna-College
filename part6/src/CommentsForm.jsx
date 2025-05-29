import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CommentsForm({ addNewComment }) {
    // We can define Yup validation schema directly here or outside the component
    // It's generally good practice to define it outside if it's not dynamic
    const validationSchema = Yup.object({
        username: Yup.string().trim()
            .min(3, 'Must be at least 3 characters or more')
            .required('Username is required'),
        remarks: Yup.string().trim()
            .required('Please add a remark'),
        rating: Yup.number()
            .required('Rating is required')
            .positive('Rating must be a positive number')
            .integer('Rating must be an integer')
            .min(1, 'Rating must be at least 1')
            .max(5, 'Rating cannot exceed 5'),
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5
        },
        // Use 'validationSchema' prop instead of 'validate' for Yup
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            // console.log('Submitted values:', values);
            addNewComment(values);
            // Reset the form after successful submission
            resetForm();
        },
    });

    return (
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
                    // Add onBlur for immediate validation feedback
                    onBlur={formik.handleBlur} 
                />
                {formik.touched.username && formik.errors.username ? ( <div style={{ color: 'red' }}>{formik.errors.username}</div> ) : null}
                <br /> <br />

                <label htmlFor="remarks">Remarks : </label>
                <textarea
                    id="remarks"
                    name="remarks"
                    value={formik.values.remarks}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your remarks here : "
                ></textarea>
                {formik.touched.remarks && formik.errors.remarks ? (<div style={{ color: 'red' }}>{formik.errors.remarks}</div>) : null}
                <br /> <br />

                <label htmlFor="rating">Rating : </label>
                <input
                    type="number"
                    name="rating"
                    id="rating"
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter rating : "
                    min={1}
                    max={5}
                />
                {formik.touched.rating && formik.errors.rating ? (<div style={{ color: 'red' }}>{formik.errors.rating}</div>) : null}
                <br /> <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}