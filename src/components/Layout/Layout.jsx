import React from "react";
import Navbar from "../Navbar/Navbar";
const Layout = (props) => {
    return (
        <>
        <Navbar/>
       {props.children}
        </>
    )
}
export default Layout;