"use client"

import React from 'react';
import Image from "next/image";
import contact from '../../../public/contact.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useEffect, useState } from 'react'


const InfoText = () => {
   
    return (
        <form>
            <div className="container mx-auto px-10 py-16 flex items-center justify-center min-h-full">
                <div className="justify-center">
                    <h1 className="text-4xl font-semibold text-center" >
                        Let&apos;s Get in Touch!
                    </h1>
                    <p className="text-gray-600 text-xl text-center py-5">
                        Whether you&apos;re looking to build something awesome, collaborate, or just fancy a good chat, I&apos;m all ears. <br />
                        Shoot me an email, or get in touch on LinkedIn and I&apos;ll get back to you in a jiffy!
                    </p>
                    <div className="flex justify-center">
                        <div className="mx-auto">
                            <Image
                                width={500}
                                height={300}
                                className="rounded-full"
                                src={contact}
                                alt="Profile"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-5 mr-10 space-x-5">
                        <a href="https://www.linkedin.com/in/purva-zinjarde/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon fontSize="large" className="text-blue-700 hover:text-blue-600 cursor-pointer" />
                        </a>
                        <a href="https://github.com/purvaz" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon fontSize="large" className="text-gray-800 hover:text-gray-700 cursor-pointer" />
                        </a>
                        <a href="mailto:purvajoshi2712@gmail.com" className="flex flex-col items-center cursor-pointer">
                            <EmailIcon
                                fontSize="large"
                                className="text-red-600 hover:text-red-500 cursor-pointer"
                            />
                        </a>

                    </div>
                </div>
            </div>
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