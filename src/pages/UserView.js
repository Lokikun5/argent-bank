import React from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import UserContent from "../component/user_content/UserContent";
import { useParams } from "react-router-dom";
import { USER_DATA_FORMATTED as userData } from '../data_test/data-user';

function UserView() {
    const { userId } = useParams();
    const user = userData.find(user => user.id === Number(userId));

    const accountsData = user ? user.accounts.map(account => ({
        type: account.type,
        balance: account.transactions[account.transactions.length - 1].balance
    })) : [];

    return (
        <div>
            <Header isLoggedIn={Boolean(user)} firstName={user?.userInfos?.firstName} />
            {user ? (
                <UserContent firstName={user.userInfos.firstName}
                             lastName={user.userInfos.lastName}
                             accounts={accountsData}/>
            ) : (
                <p>User not found</p>
            )}
            <Footer />
        </div>
    );
}

export default UserView;
