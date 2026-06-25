import './styles/contact.css'
import ContactForm from "./components/ContactForm.jsx";

export default function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact</h1>
            <ContactForm />
        </div>
    )
}