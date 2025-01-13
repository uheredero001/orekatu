import React from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import { Container } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';


export default function ContactUs() {

  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.send('service_gmail_unai', 'template_d6vbd6u', {
      from_name: e.target.from_name.value,
      message: e.target.html_message.value,
      from_email: e.target.from_email.value
    }, 'WLhLVAX4BwZgaA_1p')
      .then((result) => {
        toast.success("Email enviado!");
        wait(5000);
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" /><br />
        <label>Nombre</label><br />
        <input type="text" size="60" name="from_name" required/><br /><br />
        <label>Email</label><br />
        <input type="email" size="60" name="from_email" required/><br /><br />
        <label>Mensaje</label><br />
        <textarea name="html_message" rows="4" cols="60" required/><br /><br />
        <input type="submit" id="contactSend" value="Enviar" />
      </form>
    </Container>
  );
}