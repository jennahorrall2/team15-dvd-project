import React, { useState, useEffect } from "react";

function LibraryPage() {
    // Temporary class. When we actually get data from the database it'll already be in json.
    const [dvds, setDvds] = useState([]);

    useEffect(() => {
        fetch("http://dvd-library.us-east-1.elasticbeanstalk.com/dvds")
            .then(response => response.json())
            .then(response => setDvds(response));
    }, []);

    return (
        <div>
            <h1>DVD Library</h1>
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
                            <td>Edit Button</td>
                            <td>Delete Button</td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default LibraryPage;