import React, {useState, useEffect } from "react";

function LibraryPage() {
    // Temporary class. When we actually get data from the database it'll already be in json.
    class Dvd {
        constructor(id, title, releaseYear, director, rating, notes) {
            this.id = id;
            this.title = title;
            this.releaseYear = releaseYear;
            this.director = director;
            this.rating = rating
            this.notes = notes;
        }
    }

    const [dvds, setDvds] = [new Dvd(1, "Lala Land", 2016, "Damien Chazelle", 9.8, ""), new Dvd(2, "yuh", 1000, "bruh", 10, "")];

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