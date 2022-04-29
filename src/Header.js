import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
    return(
        <div className="bg-gradient-to-r from-purple-600 to-pink-400 md:flex">
      <div>
        <motion.h1 
        initial={{ y: -250}}
        animate={{ y: 0 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 150 }}
        className="text-3xl font-bold text-white ml-4 pt-2">DailyTracker</motion.h1>
      </div>
      <div className="mt-2">
        <ul className="md:flex">
        <motion.li whileHover={{ scale: 1.3, originX: 0, }}
        transition={{ type: 'spring', stiffness: 300}}
        className="border-b pl-3 pb-3 pt-3 pr-2 font-semibold text-white hover:bg-white hover:text-purple-400"><Link to="/">Home</Link></motion.li>
        <motion.li whileHover={{ scale: 1.3, originX: 0, }}
        transition={{ type: 'spring', stiffness: 300}}
        className="border-b pl-3 pb-3 pt-3 pr-2 font-semibold text-white hover:bg-white hover:text-purple-400"><Link to="expenses">Expenses</Link></motion.li>
        <motion.li whileHover={{ scale: 1.3, originX: 0, }}
        transition={{ type: 'spring', stiffness: 300}}
         className="border-b pl-3 pb-3 pt-3 pr-2 font-semibold text-white hover:bg-white hover:text-purple-400"><Link to="invoice">Invoice</Link></motion.li>
        <motion.li whileHover={{ scale: 1.3, originX: 0, }}
        transition={{ type: 'spring', stiffness: 300}}
        className="border-b pl-3 pb-3 pt-3 pr-2 font-semibold text-white hover:bg-white hover:text-purple-400" ><Link to="contact">Contact</Link></motion.li>
        </ul>
      </div>
    </div>
    );
}

export default Header;