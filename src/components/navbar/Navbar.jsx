import React from 'react'
import abs from '../images/navimages/abs.jpg'
import bulkbody from '../images/navimages/bulkbody.jpg'
import logo3 from '../images/navimages/logo3.png'
import au from '../images/flags/au.svg';
import br from '../images/flags/br.svg';
import ca from '../images/flags/ca.svg';
import flag from '../images/flags/flag.svg';
import il from '../images/flags/il.svg';
import jp from '../images/flags/jp.svg';
import ru from '../images/flags/ru.svg';
import us from '../images/flags/us.svg';
import { Link } from 'react-router-dom';
import { LocalOffer, EmojiEvents, InvertColors, Person, AddShoppingCart } from '@mui/icons-material';


function Navbar() {
    return (
        <div className="container-fluid bg-light">
            <div className="row">
                <ul className="nav nav-fill ">
                    <div className="col-sm-1">
                        <li className="nav-item">
                            <a href="#" className="nav-link active"><img src={logo3} alt="logo1" width="100px" height="100px" /></a>
                        </li>
                    </div>
                    <form className="form-inline col-sm-4.5 " style={{ marginLeft: "40px", marginTop: "30px" }}>
                        <input type="text" className="form-control mr-sm-3" placeholder="Search" />
                        <button className="btn btn-success " type="button">Search</button>
                    </form>
                    <div className="col-sm-1 ">
                        <li className="nav-item">
                            <Link to="/salesSpecials" className="nav-link" style={{ marginTop: "20px", color: "#000" }}><LocalOffer style={{ color: "blue", marginRight: "3px" }} />Sales-Specials</Link>
                        </li>
                    </div>
                    <div className="col-sm-1">
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ marginTop: "20px", color: "#000" }}><EmojiEvents style={{ color: "blue", marginRight: "3px" }} />Top-Products</a>
                        </li>
                    </div>
                    <div className="col-sm-1 ">
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ marginTop: "20px", color: "#000" }} ><InvertColors style={{ color: "blue", marginRight: "3px" }} />New-Trending</a>
                        </li>
                    </div>
                    <div className="col-sm-1 ">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" style={{ marginTop: "25px" }} data-toggle="dropdown" href="#"><img src={flag} alt="flag" width="30%" /></a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#"><img src={us} alt="us" width="20%" />United States</a>
                                <a className="dropdown-item" href="#"><img src={ca} alt="ca" width="20%" /> Canada</a>
                                <a className="dropdown-item" href="#"><img src={jp} alt="jp" width="20%" />Japan</a>
                                <a className="dropdown-item" href="#"><img src={au} alt="au" width="20%" />Australia</a>
                                <a className="dropdown-item" href="#"><img src={flag} alt="flag" width="20%" />India</a>
                                <a className="dropdown-item" href="#"><img src={ru} alt="ru" width="20%" />Russia</a>
                                <a className="dropdown-item" href="#"><img src={br} alt="br" width="20%" />Brazil</a>
                                <a className="dropdown-item" href="#"><img src={il} alt="il" width="20%" />Israel</a>
                            </div>
                        </li>
                    </div>
                    <div className="col-sm-1 ">
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ marginTop: "20px", color: "#000" }}><Person style={{ color: "blue" }} />Account</a>
                        </li>
                    </div>
                    <div className="col-sm-1 ">
                        <li className="nav-item">
                            <a href="#" className="nav-link" style={{ marginTop: "20px", color: "#000" }}><AddShoppingCart style={{ color: "blue", marginRight: "3px" }} />Cart</a>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="row">
                <ul className="nav nav-tabs ">

                    <li className="nav-item">
                        <a href="#" className="nav-link" style={{ color: "#000", marginBottom: "10px", marginLeft: "30px" }}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" style={{ color: "#000", marginBottom: "10px" }}>Protine</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="/performance" className="nav-link dropdown-toggle" data-toggle="dropdown" style={{ color: "#000", marginBottom: "10px" }}>Performance</a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="performance/img"><img src={bulkbody} alt="bulk" width="100%" />
                                <p style={{ textAlign: "center" }}>Bulk-Body</p>
                            </a>
                            <a className="dropdown-item" href="performance/img3"><img src={abs} alt="bulk" width="100%" />
                                <p style={{ textAlign: "center" }}>SixPack-Abs</p>
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" style={{ color: "#000", marginBottom: "10px" }}>Weight-Management</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" style={{ color: "#000", marginBottom: "10px" }}>Vitamins-Health</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" style={{ color: "#000", marginBottom: "10px" }}>Clothing-Accessories</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" style={{ color: "#000" }}><strong>Join-BodyFit</strong></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
