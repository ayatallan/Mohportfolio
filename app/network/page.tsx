"use client";

import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const NetworkSecurityPage = () => {
  const [sending, setSending] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_1g1w89u",
        "template_knmfq55",
        e.target,
        "J-f43ZlJRbLTKjrDa"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
          setSending(false);
        },
        (error) => {
          alert("Failed to send the message, please try again.");
          setSending(false);
        }
      );
  };

  return (
    <>
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <section className="stn-hero">
        <style jsx>{`
          .stn-hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 3rem 2rem;
            background: linear-gradient(135deg, #06080f, #0c1b27, #101827);
            background-size: 400% 400%;
            animation: bgMove 18s ease infinite;
            color: #ffffff;
            overflow: hidden;
          }
          @keyframes bgMove {
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
          .stn-hero-container {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            max-width: 1200px;
            width: 100%;
          }
          @media (min-width: 768px) {
            .stn-hero-container {
              flex-direction: row;
              align-items: center;
            }
          }
          .stn-text {
            flex: 1;
            backdrop-filter: blur(10px);
            background-color: rgba(255, 255, 255, 0.05);
            border-left: 4px solid #2dd4bf;
            padding: 2rem;
            border-radius: 1rem;
            animation: fadeInLeft 1.5s ease-out;
          }
          .stn-text h1 {
            font-size: 2.5rem;
            font-weight: 800;
            line-height: 1.3;
            color: #f0f9ff;
            margin-bottom: 1rem;
          }
          .stn-text p {
            font-size: 1.2rem;
            color: #cbd5e1;
            line-height: 1.8;
          }
          .stn-visual {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeInRight 2s ease-out;
          }
          .stn-visual img {
            width: 90%;
            max-width: 500px;
            filter: drop-shadow(0 0 30px #22d3ee);
            transform: rotate(3deg);
            animation: float 6s ease-in-out infinite;
          }
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) rotate(3deg);
            }
            50% {
              transform: translateY(-10px) rotate(3deg);
            }
          }
          @media (min-width: 1024px) {
            .stn-text h1 {
              font-size: 3.2rem;
            }
            .stn-text p {
              font-size: 1.4rem;
            }
          }
        `}</style>

        <div className="stn-hero-container">
          <div className="stn-text">
            <h1>
              Leading-edge IT technology services custom-tailored for your business
            </h1>
<p>
  Systemizer Technic specializes in helping companies modernise technology, reimagine processes and transform experiences. We are on a mission to drive innovation through technology — streamlining operations, supercharging growth, and putting your business at the forefront of digital transformation.
</p>

          </div>
          <div className="stn-visual">
            <img
              src="/network-server-svgrepo-com.svg"
              alt="Futuristic network"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="stn-services">
        <style jsx>{`
          .stn-services {
            background: linear-gradient(to right, #0f172a, #1e293b);
            padding: 5rem 2rem;
            color: #e2e8f0;
            display: flex;
            justify-content: center;
          }
          .stn-services-container {
            max-width: 1200px;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: start;
          }
          .service-card {
            background: rgba(255, 255, 255, 0.05);
            border-left: 4px solid #38bdf8;
            border-radius: 1rem;
            padding: 2rem;
            box-shadow: 0 0 30px rgba(56, 189, 248, 0.1);
            backdrop-filter: blur(8px);
            animation: riseFade 1.2s ease-out both;
            transition: transform 0.3s ease;
          }
          .service-card:hover {
            transform: translateY(-5px) scale(1.02);
          }
          .service-card:nth-child(odd) {
            transform: translateY(20px);
          }
          .service-card h2 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #f8fafc;
          }
          .service-card p {
            font-size: 1.05rem;
            line-height: 1.8;
            color: #cbd5e1;
          }
          @keyframes riseFade {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (max-width: 768px) {
            .stn-services-container {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="stn-services-container">
          <div className="service-card">
            <h2>What We Do</h2>
            <p>
              As an innovative solution provider, we provide a range of services designed to take the heavy lifting off your hands. We are Systemizer Technic — engineering modern IT solutions with a focus on results, experience, and value.
            </p>
          </div>
          <div className="service-card">
            <p>
              We deliver operational excellence through flexible scaling, specialized skills, and cohesive partner ecosystems. Your goals shape our solutions — from strategy and design to execution.
            </p>
          </div>
          <div className="service-card">
            <p>
              We maintain open dialogue with our clients, ensuring our implementations align seamlessly with your long-term goals. We believe every detail matters in building impactful tech experiences.
            </p>
          </div>
          <div className="service-card">
            <p>
              Our team works closely with yours to design a comprehensive IT plan, tailored to your transformation journey and digital priorities. Let us help unlock the next stage of your business potential.
            </p>
          </div>
        </div>
      </section>

<section className="stn-email">
  <style jsx>{`
    .stn-email {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #06080f, #0c1b27, #101827);
      color: #f0f9ff;
      backdrop-filter: blur(10px);
      border-radius: 1rem;
      margin: 0 auto;
    }

    .stn-email h2 {
      font-size: 2.5rem;
      font-weight: 800;
      border-left: 4px solid #2dd4bf;
      padding-left: 1rem;
      margin-bottom: 1.5rem;
      margin-top: 1.5rem;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 90%;
      max-width: 600px;
      gap: 2.5rem;
      padding: 5rem;
    }

    input[type="email"],
    textarea {
      background-color: rgba(255, 255, 255, 0.05);
      border: 2px solid #2dd4bf;
      border-radius: 0.75rem;
      padding: 1rem;
      color: #e0f7fa;
      font-size: 1.1rem;
      font-family: inherit;
      resize: vertical;
      min-height: 3rem;
      transition: border-color 0.3s ease;
    }

    input[type="email"]:focus,
    textarea:focus {
      outline: none;
      border-color: #22d3ee;
      background-color: rgba(255, 255, 255, 0.1);
    }

    textarea {
      min-height: 120px;
    }

    button {
      background-color: #2dd4bf;
      color: #0f172a;
      font-weight: 700;
      padding: 1rem 2rem;
      border-radius: 0.75rem;
      border: none;
      cursor: pointer;
      font-size: 1.1rem;
      transition: background-color 0.3s ease;
      align-self: flex-start;
      box-shadow: 0 0 15px #2dd4bf;
    }

    button:hover {
      background-color: #22d3ee;
      box-shadow: 0 0 20px #22d3ee;
    }

    button:disabled {
      background-color: #0f172a;
      color: #94a3b8;
      cursor: not-allowed;
      box-shadow: none;
    }
  `}</style>

        <h2>Send Us a Message</h2>

        <form onSubmit={sendEmail}>
          <input
            type="email"
            name="from_email"
            placeholder="Your email address"
            required
            autoComplete="email"
          />
          <textarea
            name="message"
            placeholder="Write your message here..."
            required
          />
          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default NetworkSecurityPage;
