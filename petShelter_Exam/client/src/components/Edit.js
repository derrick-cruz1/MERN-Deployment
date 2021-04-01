import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Edit = (props) => {
    const [ petName, setPetName] = useState("");
    const [ petType, setPetType] = useState("");
    const [ petDescription, setPetDescription] = useState("");
    const [ petSkillsOne, setPetSkillsOne] = useState("");
    const [ petSkillsTwo, setPetSkillsTwo] = useState(""); 
    const [ petSkillsThree, setPetSkillsThree] = useState("");
    const [ errs, setErrs] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:7300/api/pets/`+ props.id)
            .then((res) => {
                console.log(res.data);
                //setAuthor(res.data);
                let pet = res.data;
                setPetName(pet.petName);
                setPetType(pet.petType);
                setPetDescription(pet.petDescription);
                setPetSkillsOne(pet.petSkillsOne);
                setPetSkillsTwo(pet.petSkillsTwo);
                setPetSkillsThree(pet.petSkillsThree);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);
    
    const submitHandler = (e) => {
        e.preventDefault();
    
        axios.put(`http://localhost:7300/api/pets/`+props.id, {
            petName: petName,
            petType: petType,
            petDescription: petDescription,
            petSkillsOne: petSkillsOne,
            petSkillsTwo: petSkillsTwo,
            petSkillsThree: petSkillsThree
        })
            .then((res) => {
                if(res.data.errors) {
                    console.log(res.data.errors);
                    setErrs(res.data.errors);
                }
                else {
                console.log(res.data);
                navigate("/pets");
                }
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
                    <Link to ={`/pets`} >back to home</Link>
                </div>
            </div>
            <h2> Edit {petName}</h2>
            <form onSubmit = {submitHandler}>
                <div>
                   <label>Pet Name:</label>
                    <input type="text"
                    name = "petName"
                    value = {petName}
                    onChange = { (e) => setPetName(e.target.value) }
                    />
                    {
                        errs.petName ? 
                        <span className ="error-text">{errs.petName.message}</span>
                        : null
                    }
                </div>
                <div>
                   <label>Pet Type:</label>
                    <input type="text"
                    name = "petType"
                    value = {petType}
                    onChange = { (e) => setPetType(e.target.value) }
                    />
                    {
                        errs.petType ? 
                        <span className ="error-text">{errs.petType.message}</span>
                        : null
                    }
                </div>
                <div>
                   <label>Pet Description:</label>
                    <input type="text"
                    name = "petDescription"
                    value = {petDescription}
                    onChange = { (e) => setPetDescription(e.target.value) }
                    />
                    {
                        errs.petDescription ? 
                        <span className ="error-text">{errs.petDescription.message}</span>
                        : null
                    }
                </div>
                <div>
                   <label>Skill 1</label>
                    <input type="text"
                    name = "petSkillsOne"
                    value = {petSkillsOne}
                    onChange = { (e) => setPetSkillsOne(e.target.value) }
                    />
                    {
                        errs.petSkillsOne ? 
                        <span className ="error-text">{errs.petSkillsOne.message}</span>
                        : null
                    }
                </div>
                <div>
                   <label>Skill 2</label>
                    <input type="text"
                    name = "petSkillsTwo"
                    value = {petSkillsTwo}
                    onChange = { (e) => setPetSkillsTwo(e.target.value) }
                    />
                    {
                        errs.petSkillsTwo ? 
                        <span className ="error-text">{errs.petSkillsTwo.message}</span>
                        : null
                    }
                </div>
                <div>
                   <label>Skill 3</label>
                    <input type="text"
                    name = "petSkillsThree"
                    value = {petSkillsThree}
                    onChange = { (e) => setPetSkillsThree(e.target.value) }
                    />
                    {
                        errs.petSkillsThree ? 
                        <span className ="error-text">{errs.petSkillsThree.message}</span>
                        : null
                    }
                </div>
                <div>
                    <button type ="submit">Edit Pet</button>
                    <button onClick = {() => navigate("/pets")}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;