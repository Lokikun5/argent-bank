import Header from "../component/Header";
import Footer from "../component/Footer";
import SignInContent from "../component/SignInContent";
import "../style/sign-in-page.scss"
function SignInPage (){
    return (
        <div className="sign-in-body">
            <Header/>
                <main className="main bg-dark">
                    <SignInContent/>
                </main>
            <Footer/>
        </div>
    );
}
export default SignInPage