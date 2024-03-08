import React from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import UserContent from "../component/user_content/UserContent";
import { useParams } from "react-router-dom";
import { USER_DATA_FORMATTED as userData } from '../data_test/data-user';

function UserView() {
    const { userId } = useParams();
    const user = userData.find(user => user.id === Number(userId));

    return (
        <div>
            <Header isLoggedIn={Boolean(user)} firstName={user?.userInfos?.firstName} />
            {user ? (
                <UserContent userId={userId} firstName={user.userInfos.firstName} lastName={user.userInfos.lastName} />
            ) : (
                <p>User not found</p>
            )}
            <Footer />
        </div>
    );
}

export default UserView;
