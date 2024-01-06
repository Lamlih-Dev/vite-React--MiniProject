import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav initial={{translateY: -50}} animate={{translateY:0}} transition={{translateY:{duration:0.4}}} class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="images/logo.png" alt="" width="300px"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link active" href="#">Home</a>
                        <a class="nav-link" href="https://jobintech.academy/" target="blank">About JobInTech</a>
                        <a class="nav-link" href="https://jobintech.academy/" target="blank">Contact</a>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;