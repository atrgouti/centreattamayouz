import QuickInfosHeader from "./QuickInfosHeader";
import Nav from "./Nav";
import styles from "./contactus.module.css";
import Footer from "./Footer";
function ContactUs() {
  return (
    <div>
      <QuickInfosHeader />
      <Nav ps={"absolute"} tp={"30px"} bc={"white"} />
      <div className={styles.contactarea}>
        <h1>Contact us</h1>
        <p>
          Thank you for your interest in reaching out to us! Whether you have a
          question, suggestion, or simply want to get in touch, we're here to
          assist you. Please feel free to contact us using the information
          provided below or fill out the contact form, and we'll get back to you
          as soon as possible.
        </p>
        <h3>Contact Information</h3>
        <p>
          <b>Address:</b> 55 Galaxy Avenue, 2568 Street, 23568 New York
        </p>
        <p>
          <b>Phone:</b> 0652983093
        </p>
        <p>
          <b>Email:</b> attamayouz@gmail.com
        </p>
        <h3>Business Hours</h3>
        <p>Our office hours are as follows:</p>
        <ul style={{ marginLeft: "10px" }}>
          <li>Monday to Friday: 9:00 AM - 5:00 PM</li>
          <li>Saturday: 10:00 AM - 2:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
