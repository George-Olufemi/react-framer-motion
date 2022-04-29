import React from 'react';
import Header from "./Header";
import { Link } from "react-router-dom";
import Expenses from "./Expenses";
import { motion } from "framer-motion"

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 2 }}
      >
      <Header />
      <div className="h-screen bg-gradient-to-r from-purple-600 to-pink-400">
        <div className="justify-center">
          <div className="text-center pt-36 font-bold text-3xl text-white">
            <motion.h1 
            initial={{ x: '-100vw' }}  
            animate= {{ x: 0 }}
            transition={{ delay: 1.9, duration: 5 }}
            >
            Proceed to Account</motion.h1>
            <motion.button 
            initial={{ x:'-100vw' }} 
            animate={{ x: 0 }}
            transition={{ delay: 1.1, duration: 5 }}
            whileHover={{ scale: 1.5 }}
            className="mt-9 rounded-full border-rose-600 text-purple-400 bg-white p-3 w-36 hover:bg-purple-500 hover:text-white transition-all"><Link to="/expenses"  element={<Expenses />}>Proceed</Link></motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
