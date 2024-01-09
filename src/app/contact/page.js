import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.873244355636!2d66.9859135743319!3d24.86817844495057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315932482bfa1%3A0xc090ff3142bf401f!2sJd%20Musique%20Studio!5e0!3m2!1sen!2s!4v1704780213670!5m2!1sen!2s"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};

export default Contact;