import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Details = (props) => {
    const [ pet, setPet] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:7300/api/pets/`+ props.id)
            .then((res) => {
                console.log(res.data);
                setPet(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    const deletePet = (petId) => {
        axios.delete(`http://localhost:7300/api/pets/` + petId)
        .then((res) => {
            console.log(res.data);
            setPet(pet.filter((petElement) => petElement._id !== petId))
            navigate("/pets");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <div className ="headerLink">
                    <Link to ={`/pets`} >back to home</Link>
                </div>
            </div>
            <h2>Details about: {pet.petName} </h2> <button className ="adoptButton" onClick = { () => deletePet(pet._id) }>Adopt {pet.petName}</button>
            <table>
                <tr>
                    <td>
                        Pet Type: 
                    </td>
                    <td>
                        {pet.petType}
                    </td>
                </tr>
                <tr>
                    <td>
                        Description: 
                    </td>
                    <td>
                        {pet.petDescription}
                    </td>
                </tr>
                <tr>
                    <td>
                        Skills: 
                    </td>
                    <td>
                        {pet.petSkillsOne}
                        {pet.petSkillsTwo}
                        {pet.petSkillsThree}
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Details;