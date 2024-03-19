import "../../style/accounts-section.scss";
function AccountsSection ({ account }) {
    return(
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{account.type} (x8349)</h3>
                <p className="account-amount">${account.balance.toFixed(2)}</p>
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
}
export default AccountsSection