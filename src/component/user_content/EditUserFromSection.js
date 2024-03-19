import React, { useState } from 'react';
import "../../style/editUserForm.scss";
function EditUserFromSection({ firstName, lastName, onCancel, onSave }) {

    const [newFirstName, setNewFirstName] = useState(firstName);
    const [newLastName, setNewLastName] = useState(lastName);

    return (
        <form className="edit-user-form">
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

        </form>
    );
}

export default EditUserFromSection;