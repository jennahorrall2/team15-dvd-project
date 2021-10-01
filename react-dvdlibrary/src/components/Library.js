import React, { useState, useEffect } from "react";
import { Text, Center, Box, Button } from "@chakra-ui/react";

function Library() {
    const [dvds, setDvds] = useState([]);

    useEffect(() => {
        fetch("http://dvd-library.us-east-1.elasticbeanstalk.com/dvds")
            .then(response => response.json())
            .then(response => setDvds(response));
    }, []);

    return (
        <div>
            <Text fontSize="5em">DVD Library</Text>
            <Center>
                <Box textAlign="left">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Release Year</th>
                                <th>Director</th>
                                <th>Rating</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dvds.map((dvd, i) => {
                                return (<tr key = {i}>
                                    <td>{dvd.title}</td>
                                    <td>{dvd.releaseYear}</td>
                                    <td>{dvd.director}</td>
                                    <td>{dvd.rating}</td>
                                    <td>{dvd.notes}</td>
                                    <td><Button>Edit</Button></td>
                                    <td><Button>Delete</Button></td>
                                </tr>);
                            })}
                        </tbody>
                    </table>
                </Box>
            </Center>
        </div>
    );
}

export default Library;