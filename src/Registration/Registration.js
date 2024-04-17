import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
// import { Box } from "@mui/material";



const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",

    });

    const postapi = async () => {
        let a = await fetch("https://eice-backend-2.onrender.com/user", {
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

        a = await a.json()//this line covert the post data in json 
        console.log(a , "response")
        alert(a.msg)

    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData); // You can replace this with your form submission logic
        // Reset the form after submission if needed
        // setFormData({
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     message: "",
        // });
    };

    return (
        <Box
        sx={{
            background:
              "radial-gradient(circle at 100% 100%, #023159, #1F476A, #F5F5F5)",
            display: "flex",
            minHeight: "100vh", 
            justifyContent: "center",
            alignItems: "center",
          }}
        
        >
        
        <form onSubmit={handleSubmit} >
            <TextField
                label="firstName"
                name="firstName"
                // value={formData.firstName}
                onChange={handleChange}
                margin="normal"
                variant="outlined"
                fullWidth
                required
            />
            <TextField
                label="lastName"
                name="lastName"
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
        </Box>
    );
};






export default Registration;
