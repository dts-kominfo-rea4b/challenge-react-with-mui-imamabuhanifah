// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import React, {useState} from "react";
import { Card, TextField, Stack, Button } from '@mui/material';

const ContactForm = ({addContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name: "",
        phone: "",
        email: "",
        photo: ""
    })

    const handleContact = (e) => {
        setNewContact({
            ...newContact,
            [e.target.name]: e.target.value,
        });
    };

    const addContactHandler = (e) => {
        e.preventDefault();

        addContact(newContact);
        setNewContact({
            name: "",
            phone: "",
            email: "",
            photo: "",
        });
    };

    return (
        <>
            <Card variant="outlined" sx={{ padding: "1.2rem" }}>
                <form onSubmit={addContactHandler}>
                    <Stack width="100%" autoComplete="off" spacing={4}>
                        <TextField
                            id="name"
                            name="name"
                            label="Name"
                            variant="outlined"
                            required
                            value={newContact.name}
                            onChange={handleContact}
                        />
                        <TextField
                            id="phone"
                            name="phone"
                            label="Phone"
                            variant="outlined"
                            required
                            value={newContact.phone}
                            onChange={handleContact}
                        />
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            required
                            value={newContact.email}
                            onChange={handleContact}
                        />
                        <TextField
                            id="photo"
                            name="photo"
                            label="Photo URL"
                            variant="outlined"
                            value={newContact.photo}
                            onChange={handleContact}
                        />
                        <Button type="submit" variant="contained">
                            Submit
                        </Button>
                    </Stack>
                </form>
            </Card>
        </>
    );
}

export default ContactForm;