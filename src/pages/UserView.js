import React from 'react';
import Header from "../component/Header";
import Footer from "../component/Footer";
import UserContent from "../component/user_content/UserContent";
import { useSelector } from 'react-redux';
import { USER_DATA_FORMATTED as userData } from '../data_test/data-user';

function UserView() {
    const userProfile = useSelector((state) => state.user.userProfile);

    const firstName = userProfile?.body?.firstName;
    const lastName = userProfile?.body?.lastName;

    //mocking data Accounts info
    const userAccountsData = userData.find(user => user.id === 100);

    const accountsData = userAccountsData ? userAccountsData.accounts.map(account => ({
        type: account.type,
        balance: account.transactions[account.transactions.length - 1].balance,
    })) : [];

    return (
        <div>
            <Header isLoggedIn={Boolean(userProfile)} firstName={firstName} lastName={lastName} />
            <UserContent
                firstName={firstName}
                lastName={lastName}
                accounts={accountsData}
            />
            <Footer />
        </div>
    );
}

export default UserView;
