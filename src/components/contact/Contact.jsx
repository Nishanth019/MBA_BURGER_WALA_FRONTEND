import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";
import toast from 'react-hot-toast'

const Contact = () => {

  const formHandler = (e) => {
    e.preventDefault();
    toast.success("Message Sent!!")
  }

  return (
   
    <section className="contact">
      <motion.form
      onSubmit={formHandler}
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <h2>Contact Us</h2>
       
        <input required type="text" placeholder="Name" />
        <input required type="email" placeholder="Email" />

        <textarea required placeholder="Message..." cols="30" rows="10"></textarea>

        <button  type="submit">Send</button>
        
      </motion.form>

      <motion.div
        className="formBorder"
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{
            y: "-100vh",
            x: "50%",
            opacity: 0,
          }}
          animate={{
            x: "50%",
            y: "-50%",
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
        >
          <img src={burger} alt="Burger" />
        </motion.div>
      </motion.div>
    </section>
   
  );
};

export default Contact;