import React, { useState } from "react";
import { validateEmail } from '../api/validateEmail'; // Import the validateEmail function

const Contact = ({ isVisible, onClose }) => {
    if (!isVisible) return null; // Hide the contact form if not visible

    const zIndex = 1000; // Making sure it stays on top of everything

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Basic validation
        if (!name || !email || !subject || !message) {
            setError("All fields are required.");
            setLoading(false);
            return;
        }
        
        // Validate email using the imported function
        const emailValidationResponse = validateEmail(email);
        if (emailValidationResponse.error) {
            setError(emailValidationResponse.error);
            setLoading(false);
            return;
        }

        // Proceed with the API call if email is valid
        try {
            const response = await fetch('/api/validateEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email: "eric.e.boisvert@gmail.com", // Updated recipient email
                    name,
                    subject,
                    message
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.error);
                setLoading(false);
                return;
            }

            // If email is valid, proceed with the rest of the submission
            setError("");
            setSuccess(true);
            setLoading(false);
        } catch (error) {
            console.error("Error during form submission:", error);
            setError("An error occurred while sending the message.");
            setLoading(false);
        }
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-md`} style={{ zIndex }} onClick={onClose}>
            <div className="p-6 rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <ion-icon name="close-outline" style={{ color: "#4CAF50", fontSize: '3rem' }}></ion-icon>
                    <span className="text-green-500" style={{ fontSize: '1.5rem' }}>X</span>
                </button>
                <h1 className="text-2xl font-semibold mb-4">Send Us a Message</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" className="my-2 p-2 border rounded w-full" />
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" className="my-2 p-2 border rounded w-full" />
                    <input id="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required placeholder="Subject" className="my-2 p-2 border rounded w-full text-black" />
                    <textarea id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Message" className="my-2 p-2 border rounded w-full text-black"></textarea>

                    <button type="submit" disabled={loading} className={`p-2 px-6 text-white font-semibold rounded-full outline outline-2 outline-green-500 hover:bg-green-600 transition ease-in-out delay-150 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>{loading ? 'Sending...' : 'Send Message'}</button>
                </form>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">Message sent successfully!</p>}
            </div>
        </div>
    );
};

export default Contact;
