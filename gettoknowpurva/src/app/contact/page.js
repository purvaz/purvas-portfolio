"use client"

import React from 'react';
import Image from "next/image";
import contact from '../../../public/contact.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react'


const InfoText = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')
    const [showAcknowledgment, setShowAcknowledgment] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name, email, subject, message
                }),
                headers: {
                    'content-type': 'application/json'
                },
            })
            if (res.ok) {
                // Show acknowledgment pop-up and reset the form fields
                setShowAcknowledgment(true);
                setName('');
                setEmail('');
                setMessage('');
                setSubject('');
            } else {
                console.error('Error:', res.statusText);
            }

        } catch (err) {
            console.error('Error : ', err)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="container mx-auto px-10 py-16 flex items-center justify-center min-h-full">
                <div className="w-1/2 justify-center">
                    <h1 className="text-4xl font-semibold text-center" >
                        Let's Get in Touch!
                    </h1>
                    <p className="text-gray-600 text-xl text-center py-5">
                        Whether you're looking to build something awesome, collaborate, or just fancy a good chat, I'm all ears.
                        Fill out the form below, and I'll get back to you in a jiffy!
                    </p>
                    <div className="flex justify-center">
                        <div className="mx-auto">
                            <Image
                                width={600}
                                height={330}
                                className="rounded-full"
                                src={contact}
                                alt="Profile"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-5 mr-10 space-x-5">
                        <a href="https://www.linkedin.com/in/purva-zinjarde-187583129/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon fontSize="large" className="text-blue-700 hover:text-blue-600 cursor-pointer" />
                        </a>
                        <a href="https://github.com/purvaz" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon fontSize="large" className="text-gray-800 hover:text-gray-700 cursor-pointer" />
                        </a>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center">
                    <div className="contact-form md:w-auto mx-10 bg-gray-800 p-12 rounded">
                        {/* <h2>Send me a message</h2> */}
                        <input type="text" placeholder="Name" className="w-full px-4 py-2 my-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder="Email Id" className="w-full px-4 py-2 my-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="subject" placeholder="Subject" className="w-full px-4 py-2 my-2 border rounded" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <textarea placeholder="Message" rows="4" className="w-full px-4 py-2 my-2 border rounded" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <button className="w-full px-4 py-2 mt-2 bg-green-700 text-white rounded hover:bg-green-600" type='submit'>
                            Send
                        </button>
                    </div>
                </div>
            </div>
            {showAcknowledgment && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded shadow-lg text-center">
                        <p className="text-xl font-semibold">Thank you!</p>
                        <p>Your message has been sent!</p>
                        <button
                            className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600"
                            onClick={() => setShowAcknowledgment(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
};

const Contact = () => {

    return (
        <div className="bg-gray-200 min-h-screen scroll-smooth">
            <InfoText />
        </div>
    );
};

export default Contact;