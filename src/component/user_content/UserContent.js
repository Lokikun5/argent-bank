import "../../style/user-content.scss";
import AccountsSection from "./AccountsSection";
function UserContent ({ firstName, lastName  }){
    return(
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back <br /> {firstName} {lastName}</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountsSection/>
        </main>
    );
}
export default UserContent