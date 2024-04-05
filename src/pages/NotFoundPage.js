import Header from "../component/Header";
import Footer from "../component/Footer";
import '../style/notFoundPage.scss';

function NotFoundPage () {
    return(
        <div className="not-found-page">
            <Header />
            <div className="not-found-content">
                <h1>404</h1>
                <p>Oops! The page you're looking for does not exist.</p>
            </div>
            <Footer />
        </div>
    );
}
export default NotFoundPage;
