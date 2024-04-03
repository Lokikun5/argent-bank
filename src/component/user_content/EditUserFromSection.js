import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../../actions/userActions';
import "../../style/editUserForm.scss";
import { editProfile } from "../../API/Api";
function EditUserFromSection({ firstName, lastName, onCancel, onSave }) {

    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);


    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);


    //handle Submit test reponse API
    const handleSubmit = async (e) => {
        e.preventDefault();
        // test token JWT statique
        try {
            const user = await editProfile( newFirstName, newLastName, token);
            console.log(token);
            console.log(user);
            dispatch(updateUserProfile(user));
            onSave();
        } catch (error) {
            console.error("An error occurred:", error);

            const message = error.message;
            setErrorMessage(message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="edit-user-form">
            <h2>Welcome back</h2>
            <div className="bloc">
                <input
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)}
                    placeholder="First Name"
                />
                <input
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                    placeholder="Last Name"
                />
            </div>
            <div className="bloc">
                <button type="submit" className="save-button button">Save</button>
                <button type="button" className="cancel-button button" onClick={onCancel}>Cancel</button>
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
    );
}

export default EditUserFromSection;