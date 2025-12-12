import React, { useState } from "react";
import "./Contact.css";
import CenteredHeader from "../../CommonUsedComponents/CenteredHeader/CenteredHeader";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <div id="Contact">
            <div className="ContactBackgroundWrapper">
                <div className="ContactBackgroundImage"></div>
                <div className="ContactBackgroundOverlay"></div>
            </div>
            <div className="Container SectionLargeTopPadding PaddingBottomSection ContactContentWrapper">
                <CenteredHeader
                    tagText="Get in Touch"
                    heading="Let's Start a Conversation"
                    description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
                />

                <div className="ContactContent MarginTop40">
                    <div className="ContactGrid">
                        {/* Contact Form */}
                        <div className="ContactFormSection">
                            <h3 className="ContactSectionTitle">Send us a Message</h3>
                            <form className="ContactForm" onSubmit={handleSubmit}>
                                <div className="FormGroup">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="FormInput"
                                    />
                                </div>
                                <div className="FormGroup">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="FormInput"
                                    />
                                </div>
                                <div className="FormGroup">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="FormInput"
                                    />
                                </div>
                                <div className="FormGroup">
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="FormTextarea"
                                    ></textarea>
                                </div>
                                <div className="FormSubmit">
                                    <button type="submit" className="ContactSubmitButton">
                                        Send Message
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Info & Address */}
                        <div className="ContactInfoSection">
                            <div className="ContactInfoCard">
                                <h3 className="ContactSectionTitle">Contact Information</h3>
                                
                                <div className="ContactInfoItem">
                                    <div className="ContactInfoIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div className="ContactInfoContent">
                                        <h4>Email</h4>
                                        <p>hello@theblisssolution.com</p>
                                        <p>info@theblisssolution.com</p>
                                    </div>
                                </div>

                                <div className="ContactInfoItem">
                                    <div className="ContactInfoIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div className="ContactInfoContent">
                                        <h4>Phone</h4>
                                        <p>+91 72039 17285</p>
                                    </div>
                                </div>

                                <div className="ContactInfoItem">
                                    <div className="ContactInfoIcon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <div className="ContactInfoContent">
                                        <h4>Address</h4>
                                        <p>Arista Business Space, 103 & 109, Sindhubhavan Rd,</p>
                                        <p>Bodakdev, Ahmedabad,</p>
                                        <p>Gujarat 380059</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Section */}
                            <div className="ContactMapSection">
                                <h3 className="ContactSectionTitle">Find Us</h3>
                                <div className="MapContainer">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5465905780616!2d72.5050163255597!3d23.040414365661732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85798343a0b7%3A0x1b9d923e90ed70c2!2sThe%20Bliss%20Solution!5e0!3m2!1sen!2sin!4v1765526267546!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, borderRadius: '20px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="The Bliss Solution - Arista Business Space Location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;