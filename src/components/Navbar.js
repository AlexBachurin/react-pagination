import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="logo-container">
                <Link to="/">
                    <img className="nav-logo" src="https://res.cloudinary.com/dljezd6qv/image/upload/v1632485129/logo-crop_dpqp9u.png" alt="bacha coding" />
                </Link>
            </div>

        </nav>
    )
}

export default Navbar