import React from 'react';
import { Link } from "react-router-dom";
import App from "./App";
import { motion } from "framer-motion"

function Contact() {
    return(
        <motion.div 
            initial={{ y: -300}}
            animate={{ y: 0 }}
            transition={{ duration: 5, delay: 0.5, type: 'spring', stiffness: 300 }}
            className="h-screen bg-gradient-to-r from-purple-600 to-pink-400 justify-center">
                <div className="text-center pt-36 font-semibold p-4 text-3xl text-white">
                <h1 className="text-center tracking-wider leading-normal">Thank you for Banking with us. It is nice doing Business with you.</h1>
                <motion.button 
                    initial={{ x:'100vw' }} 
                    animate={{ x: 0 }}
                    transition={{ type: "spring", delay: 2.2, stiffness: 300 }}
                className="mt-9 rounded-full border-rose-600 text-purple-400 bg-white p-4 w-1/2 hover:bg-purple-500 hover:text-white transition-all"><Link to="/"  element={<App />}>Back to Home</Link></motion.button>
                </div>
            </motion.div>
    );
}

export default Contact;