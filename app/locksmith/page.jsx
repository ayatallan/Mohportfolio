"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";

import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const LocksmithPage = () => {
    return (
        <>
            <Head>
                <title>Automotive Locksmith Services - Sky5Tech</title>
                <meta
                    name="description"
                    content="Advanced automotive locksmith and smart car key programming services using certified tools and expert technicians."
                />
            </Head>

            <FloatingNav navItems={navItems} />

            {/* First Section */}
            <section
                className="enterprise-hero"
                role="region"
                aria-label="Automotive Locksmith Hero Section"
            >
                <style jsx>{`
          .enterprise-hero {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 4rem 2rem;
            background: linear-gradient(135deg, #0c0f1c, #1a1f37, #121424);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
            color: #ffffff;
          }
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .enterprise-content {
            max-width: 900px;
            text-align: center;
            padding: 2rem;
            backdrop-filter: blur(8px);
          }
          .enterprise-content h1 {
            font-size: 2.5rem;
            line-height: 1.3;
            font-weight: bold;
            margin-bottom: 1.5rem;
            color: #f5f5f5;
          }
          .enterprise-content p {
            font-size: 1.2rem;
            color: #cbd5e1;
            line-height: 1.8;
            margin-bottom: 2rem;
          }
          @media (min-width: 768px) {
            .enterprise-content h1 {
              font-size: 3.5rem;
            }
            .enterprise-content p {
              font-size: 1.4rem;
            }
          }
        `}</style>

                <div className="enterprise-content">
                    <h1>Automotive Locksmith &amp; Car Key Programming</h1>
                    <p>
                        At Sky5Tech, we provide advanced automotive locksmith solutions and
                        smart key programming using specialized equipment and certified
                        tools. Whether you're locked out, lost your keys, or need an
                        additional copy, our expert technician is ready to assist with
                        precision and reliability.
                    </p>
                </div>
            </section>

            {/* Second Section: Services List */}
            <section
                className="enterprise-mms"
                role="region"
                aria-label="Automotive Locksmith Services"
            >
                <style jsx>{`
          .enterprise-mms {
            padding: 4rem 2rem;
            background: #121424;
            color: #e0e7ff;
            box-shadow: 0 8px 24px rgba(19, 38, 69, 0.7);
            backdrop-filter: blur(12px);
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            text-align: left;
          }
          .enterprise-mms ul {
            max-width: 800px;
            margin: 0 auto;
            padding-left: 1.6rem;
            font-size: 1.2rem;
            line-height: 1.9;
            color: #b0b9d2;
          }
          .enterprise-mms ul li {
            margin-bottom: 1rem;
          }
          .enterprise-mms p {
            text-align: center;
            font-size: 1.3rem;
            margin-bottom: 2rem;
          }
        `}</style>

                <p>Our capabilities include:</p>

                <ul>
                    <li>Programming &amp; coding smart keys, key fobs, transponder keys</li>
                    <li>Configuring immobilizer &amp; ECU systems</li>
                    <li>Cutting and duplicating car keys (laser &amp; traditional)</li>
                    <li>Non-destructive unlocking for locked vehicles</li>
                    <li>Resetting and removing lost keys from the vehicle system</li>
                    <li>Adapting new control modules to the car’s security system</li>
                    <li>Support for a wide range of brands and models</li>
                    <li>
                        Fast response and reliable assistance — on-site or at our workshop
                    </li>
                </ul>
            </section>

            {/* Third Section: Summary */}
            <section
                className="enterprise-deployment"
                role="region"
                aria-label="Locksmith Summary Section"
            >
                <style jsx>{`
          .enterprise-deployment {
            background: linear-gradient(135deg, rgb(63, 77, 95), #111827);
            color: #d1d5db;
            padding: 4rem;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
          }
          .enterprise-deployment h2 {
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
          }
          .enterprise-deployment p {
            font-size: 1.25rem;
            line-height: 1.7;
            max-width: 800px;
            margin: 0 auto;
          }
        `}</style>

                <h2>Professional, Secure &amp; Affordable</h2>

                <p>
                    We ensure a secure, seamless, and professional process with guaranteed
                    functionality. Our expert technical approach provides dealership-level
                    quality—without dealership-level cost.
                </p>
            </section>

            <Footer />
        </>
    );
};

export default LocksmithPage;
