import React, { useState } from 'react';
import "../../style/user-content.scss";
import AccountsSection from "./AccountsSection";
import EditUserFromSection from "./EditUserFromSection";
function UserContent ({ firstName, lastName, accounts }){

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleCancel = () => {
        setIsEditing(false);
    };
    const handleSave = () => {
        setIsEditing(false);
    };
    return(
        <main className="main bg-dark">
            <div className="header">
                {isEditing ? (
                    <EditUserFromSection
                        firstName={firstName}
                        lastName={lastName}
                        onCancel={handleCancel}
                        onSave={handleSave}
                    />
                ) : (
                    <>
                        <h1>Welcome back <br /> {firstName} {lastName}</h1>
                        <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
                    </>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account, index) => (
                <AccountsSection key={index} account={account} />
            ))}
        </main>
    );
}
export default UserContent