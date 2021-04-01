import React from 'react';
import {Link, navigate} from '@reach/router';

const Header = (props) => {
    return (
        <div>
            <h1>Pet Shelter</h1>
            <div>
            <Link to ={`/pets/new`} >add a pet to the shelter</Link>
            </div>
        </div>
    )
}

export default Header;