import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const ListAll = (props) => {
const [allPets, setAllPets] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:7300/api/pets")
            .then((res) => {
                console.log(res.data);
                setAllPets(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, []);

    const deletePet = (petId) => {
        axios.delete(`http://localhost:7300/api/pets/` + petId)
        .then((res) => {
            console.log(res.data);
            setAllPets(allPets.filter((petElement) => petElement._id !== petId))
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <div className = "headerLink">
                    <Link to ={`/pets/new`} >add a pet to the shelter</Link>
                </div>
            </div>
            <h2>These pets are looking for a good home</h2>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        allPets.map((pets, index) => (
                        <tr>
                            <td>
                                {pets.petName}
                            </td>
                            <td>
                                {pets.petType}
                            </td>
                            <td>
                                <Link to ={`/pets/${pets._id}`} >Details</Link>
                                    | 
                                <Link to ={`/pets/${pets._id}/edit`} >Edit</Link>
                                {/* <button onClick = { () => deletePet(pets._id) }>Delete</button> */}
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListAll;