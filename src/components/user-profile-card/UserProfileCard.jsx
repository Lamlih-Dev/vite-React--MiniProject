import React, { useState } from "react";
import { motion } from "framer-motion";
import "./UserProfileCard.css";

const UserProfileCard = ({ id, photo, name, description, age, hobbies }) => {
    const [isOpen, setIsOpen] = useState(false);
    var i = 0;
    return (
        <div className="col-md-4 col-sm-6">
            <motion.div layout initial={{ translateY: 30 }} animate={{ translateY: 0 }} transition={{ translateY: { delay: id * 0.1, type: "spring" } }} className="card col-md-12 ">
                <motion.img layout="position" src={photo} alt="" />
                <motion.h1 layout="position">{name}</motion.h1>
                <motion.p layout="position">{description}</motion.p>
                {isOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: isOpen ? 1 : 0 }} transition={{ opacity: { delay: 0.1 } }} className="card-details">
                        <p className="age">
                            <span>Age:</span>{age}
                        </p>
                        <div className="hobbies">
                            {hobbies.map((hobby) => (
                                <span key={i++}>{hobby}</span>
                            ))}
                        </div>
                    </motion.div>
                )}
                <button className="btn" onClick={() => setIsOpen(!isOpen)} >Show Details</button>
            </motion.div>
        </div>
    );
}

export default UserProfileCard;