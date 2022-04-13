import "../styles/Banners.css";
import logo from "../assets/logo.png";

function Banner() {
    const title = "La maison jungle";
    render()
        return (
            <div className="lmj-banner">
                <img src={logo} alt="La maison jungle" className="lmj-logo" />
                <h1 className="lmj-title">{title}</h1>
            </div>
        );
    }


export default Banner;