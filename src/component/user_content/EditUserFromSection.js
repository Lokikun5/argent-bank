import React, { useState } from 'react';
import "../../style/editUserForm.scss";
import {editProfile } from "../../API/Api";
function EditUserFromSection({ firstName, lastName, onCancel, onSave }) {

    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);


    const [errorMessage, setErrorMessage] = useState('');

    //handle Submit test reponse API
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await editProfile( firstName, lastName);
            console.log(user);
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
                <button type="submit" className="save-button button" onClick={onSave}>Save</button>
                <button type="button" className="cancel-button button" onClick={onCancel}>Cancel</button>
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
    );
}

export default EditUserFromSection;