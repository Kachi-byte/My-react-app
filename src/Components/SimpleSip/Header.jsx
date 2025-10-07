import "./SimpleSip.css";
import "@fontsource/poppins/200.css";
import logo from "./images/logo.png";
const Header = () => {
  return (
    <div>
        <div className="header">
              <div className="logo">
                <img src={logo} alt="dynamic" />
              </div>
              <div className="navbar">
                <a href="#w">Home</a>
                <a href="#w">Shop</a>
                <a href="#w">About</a>
                <a href="#w">Contact</a>
              </div>
              <div className="cartnsearch">
                <input type="text" placeholder="search drinks" id="input1" />
              </div>
            </div>
            <hr />
    </div>
  )
}

export default Header
