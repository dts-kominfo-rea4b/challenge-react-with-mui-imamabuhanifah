// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { Card, Avatar, Stack, Typography } from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    const randomImg = Math.floor(Math.random() * 1000)


    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    display: "flex",
                    padding: "1.2rem",
                    alignItems: "center",
                    marginButtom: "10px"
                }}
            >
                <Avatar
                    sx={{ width: 72, height: 72 }}
                    alt={data.name}
                    src={data.photo ? data.photo : `http://placekitten.com/${randomImg}`}
                />

                <Stack spacing={1} marginLeft={4} textAlign="left">
                    <Typography variant="h2" fontSize="1.25rem" fontWeight="bold">
                        {data.name}
                    </Typography>
                    <Typography variant="p">{data.phone}</Typography>
                    <Typography variant="p">{data.email}</Typography>
                </Stack>

            </Card>
        </>
    );
};

export default Contact;
