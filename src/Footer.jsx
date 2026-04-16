import { Link } from 'react-router';
export default function Header() {
    return (
        <footer>
            <hr />
            <Link to="/Itsc3135">Click here to go to my ITIS 3135 page </Link>
            <p></p>
            <a href="https://github.com/asoong1245">Click here to go to my GitHub</a>
            <p></p>
            <a href="https://webpages.charlotte.edu/asoong1">Click here to go to my University Webpage</a>
            <p></p>
            <a href="https://asoong1245.github.io/">Click here to go to my GitHub.io Page</a>
            <p></p>
            <a href="https://www.linkedin.com/in/arthur-e-soong/">Click here to go to my LinkedIn</a>
            <p>
                <a href="../arthuresoong.com">Designed by Arthur Soong's Design Services</a>
            </p>
            <p>
                <a href="https://www.freecodecamp.org/certification/asoong/responsive-web-design-v9">Certified in Responsive Web Design</a>
            </p>
        </footer>
    );
}