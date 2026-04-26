import { Link } from 'react-router';
export default function Header() {
    return (
        <header>
            <h1>Arthur Soong's Annoyed Stoat | ITIS 3135</h1>

                <nav>
                    <Link to="/">Home </Link>
                    <Link to="/Contract">Contract </Link>
                    <Link to="/Survey">Survey </Link>
                    <Link to="/Cards">Cards </Link>
                    <Link to="/Inventory">Inventory </Link>
                    <Link to="/Documentation">Documentation </Link>
          <Link to="/Product">Product </Link>
          <Link to="/Introduction">Introduction </Link>
          <Link to="/Slideshow">Slideshow </Link>
                </nav>
      </header>
    );
}