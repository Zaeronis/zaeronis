import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contactForm.css'

export default function ContactForm() {
    const contact = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();
        const templateParams = {
            name: contact.current.name.value,
            subject: contact.current.subject.value,
            message: contact.current.message.value,
            timestamp: new Date().toString(),
            email: contact.current.email.value,
        }

        // noinspection JSUnresolvedReference
        emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_PUBLIC_KEY,
        )
            .then(() => {
                alert('Email sent successfully!')
            }, (error) => {
                console.error('Error sending email:', error);
            })

        contact.current.name.value = '';
        contact.current.subject.value = '';
        contact.current.message.value = '';
        contact.current.email.value = '';
    }

    return (
        <form
            ref={contact}
            id="contactForm"
            className="contactForm"
            onSubmit={sendEmail}
        >
            <input
                type="text"
                placeholder="Your Name"
                id="name"
                name="name"
                required
            />
            <input
                type="subject"
                placeholder="Subject"
                id="subject"
                name="subject"
                required
            />
            <textarea
                placeholder="Enter your message here"
                id="message"
                name="message"
                onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                required
            />
            <input
                type="email"
                placeholder="Your Email"
                id="email"
                name="email"
                required
            />
            <button
                onClick="submit"
                id="sendButton"
            >
                Send
            </button>
        </form>
    )
}