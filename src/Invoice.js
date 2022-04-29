import React from 'react';
import Header from './Header';
import { Link } from "react-router-dom";
import Contact from './Contact';
import { motion } from "framer-motion"

function Invoice() {
    return(
        <motion.div 
                initial={{ y: -250}}
                animate={{ y: 0 }}
                transition={{ delay: 1.5, type: 'spring', stiffness: 150 }}>
            <div>
            <Header />
            </div>
            <div className="h-screen bg-gradient-to-r from-purple-600 to-pink-400 justify-center">
                <div className="text-center pt-36 font-bold text-3xl text-white">
                <motion.h1 
                    initial={{ x: '100vw' }}  
                    animate= {{ x: 0 }}
                    transition={{ delay: 2.5, type: "spring", stiffness: 150 }}
                >Your Invoice</motion.h1>
                <motion.button 
                    initial={{ x:'100vw' }} 
                    animate={{ x: 0 }}
                    transition={{ type: "spring", delay: 2.2, stiffness: 150 }}
                className="mt-9 rounded-full border-rose-600 text-purple-400 bg-white p-3 w-36 hover:bg-purple-500 hover:text-white transition-all"><Link to="/contact"  element={<Contact />}>Proceed</Link></motion.button>
                </div>
            </div>
        </motion.div>
    );
}

export default Invoice; 