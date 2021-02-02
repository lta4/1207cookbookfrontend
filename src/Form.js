import React from "react";

const Form = (props) => {
    //STATE FOR THE FORM
    const [formData, setFormData] = React.useState(props.cookbook);

    //FUNCTIONS
    const handleSubmit = (event) => {
        event.preventDefault(); // PREVENT FORM FROM REFRESHING
        props.handleSubmit(formData) // SUBMIT TO PARENTS DESIRED FUNCTION
        props.history.push("/"); // PUSH BACK TO DISPLAY PAGE
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.title]: event.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
        />
        <input
            type="number"
            name="yearPublished"
            value={formData.yearPublished}
            onChange={handleChange}
        />
        <input className="submit" type="submit" value={props.label} />
        </form>
    );
};

export default Form;
