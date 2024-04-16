import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",

    });

    const postapi = async () => {
        let a = await fetch("http://localhost:8080/user", {
            method: "post",
            body: JSON.stringify({
                firstName: formData.firstName, lastName: formData.lastName,
                email: formData.email, message: formData.message
            }
            ),
            headers: {
                "Content-type": "application/json"
            }
        })

        a = await a.json()
        console.log(a)

    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can replace this with your form submission logic
        // Reset the form after submission if needed
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="firstName"
                name="name"
                // value={formData.firstName}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
                required
            />
            <TextField
                label="lastName"
                name="lastname"
                //   value={formData.lastName}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
                required
            />
            <TextField
                label="Email"
                name="email"
                // value={formData.email}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
                required
            />
            <TextField
                label="Message"
                name="message"
                // value={formData.message}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
            />

            <Button
                type="submit"
                onClick={postapi}
                variant="contained"
                color="primary"
                size="large"
                fullWidth
            >
                Submit
            </Button>

        </form>
    );
};





export default Registration;
