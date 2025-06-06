"use client";

import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import React from "react";

const EnterprisePage = () => {
  return (
    <>
      <FloatingNav navItems={navItems} />

      {/* First Section */}
      <section className="enterprise-hero">
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

          .enterprise-content blockquote {
            font-size: 1.1rem;
            font-style: italic;
            border-left: 4px solid #33c1c9;
            padding-left: 1rem;
            color: #94a3b8;
            background-color: rgba(255, 255, 255, 0.05);
            display: inline-block;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }

          @media (min-width: 768px) {
            .enterprise-content h1 {
              font-size: 3.5rem;
            }

            .enterprise-content p {
              font-size: 1.4rem;
            }

            .enterprise-content blockquote {
              font-size: 1.3rem;
            }
          }
        `}</style>

        <div className="enterprise-content">
          <h1>Excellence in Enterprise Maintenance Services</h1>
          <p>
            Isn&rsquo;t just about fixing issues quickly. It&rsquo;s about
            anticipating your needs, preventing problems before they arise, and
            creating a seamless, efficient digital environment where technology
            truly empowers your success.
          </p>
          <blockquote>
            &ldquo;Hairie Zairel Oh, Managing Director, Systemizer Technic&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Second Section: Managed Maintenance Services */}
      <section className="enterprise-mms">
        <style jsx>{
          .enterprise-mms {
            padding: 4rem 2rem;
            background: #121424;
            color: #e0e7ff;

            // border-radius: 12px;
            box-shadow: 0 8px 24px rgba(19, 38, 69, 0.7);
            backdrop-filter: blur(12px);
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          }

          .enterprise-mms p {
            font-size: 1.3rem;
            line-height: 1.7;
            margin-bottom: 2.5rem;
            color: #b0b9d2;
          }

          .table-wrapper {
            overflow-x: auto;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            min-width: 900px;
            font-size: 0.9rem;
          }

          thead {
            background: #0a76a0;
            color: #fff;
            text-align: center;
          }

          th,
          td {
            padding: 0.75rem 1rem;
            border: 1px solid rgba(255, 255, 255, 0.15);
            text-align: center;
          }

          tbody tr:hover {
            background: rgba(51, 193, 201, 0.15);
          }

          @media (min-width: 768px) {
            .enterprise-mms p {
              font-size: 1.4rem;
            }

            table {
              font-size: 1rem;
            }
          }
        }</style>

        <p>
          Managed Maintenance Services (ST-MMS)
          <br />
          When it comes to IT infrastructure maintenance services, flexibility
          is crucial. Our Enterprise Managed Maintenance Services (ST-MMS) offer
          4 customisable tiers with varying support levels to meet specific SLA
          requirements and budget requirements. We provide certified engineers,
          Single Points of Contact (SPOCs), and an IT service ticketing system
          for streamlined communication.
        </p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>MMS-1</th>
                <th>MMS-2</th>
                <th>MMS-3</th>
                <th>MMS-4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Extended Warranty</td>
                <td>On-Site with Principal Support</td>
                <td>End to End</td>
                <td>Mission Critical</td>
                <td></td>
              </tr>
              <tr>
                <td>Principal Support</td>
                <td>Principal</td>
                <td>Principal</td>
                <td>ST-MMS</td>
                <td>ST-MMS / Principal</td>
              </tr>
              <tr>
                <td>Extended Warranty</td>
                <td>Principal</td>
                <td>Principal</td>
                <td>ST-MMS</td>
                <td>ST-MMS / Principal</td>
              </tr>
              <tr>
                <td>Single Point of Contact</td>
                <td>Principal</td>
                <td>ST-MMS</td>
                <td>ST-MMS</td>
                <td>ST-MMS</td>
              </tr>
              <tr>
                <td>On-site Engineer</td>
                <td>Principal</td>
                <td>ST-MMS</td>
                <td>ST-MMS</td>
                <td>ST-MMS</td>
              </tr>
              <tr>
                <td>Resident Engineer</td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
                <td>On-Site RE(s)</td>
              </tr>
              <tr>
                <td>Parts Availability</td>
                <td>Subjected to local availability</td>
                <td>Subjected to local availability</td>
                <td>100% Availability Guarantee</td>
                <td></td>
              </tr>
              <tr>
                <td>Spare Parts c/w Warranty</td>
                <td>100% Availability Guarantee</td>
                <td>Spare Parts c/w Warranty</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>On-site Parts inventory</td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
                <td>Available as Option</td>
              </tr>
              <tr>
                <td>Preventive Maintenance</td>
                <td>NA</td>
                <td>Included</td>
                <td>Included</td>
                <td>Included</td>
              </tr>
              <tr>
                <td>Corrective Maintenance</td>
                <td>Follows Principal support package</td>
                <td>Unlimited by ST-MMS</td>
                <td>Unlimited by ST-MMS</td>
                <td>Unlimited by ST-MMS</td>
              </tr>
              <tr>
                <td>Support Coverage</td>
                <td>Follows Principal support package</td>
                <td>24x7</td>
                <td>24x7</td>
                <td>24x7</td>
              </tr>
              <tr>
                <td>Response Time</td>
                <td>Follows Principal support package</td>
                <td>
                  2 Hours Response
                  <br />4 Hours Onsite
                </td>
                <td>
                  2 Hours Response
                  <br />4 Hours Onsite
                </td>
                <td>
                  2 Hours Response
                  <br />4 Hours Onsite
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Third Section: Enterprise Deployment */}
      <section className="enterprise-deployment">
        <style jsx>{
          .enterprise-deployment {
            background: linear-gradient(135deg, rgb(63, 77, 95), #111827);
            color: #d1d5db;
            padding: 4rem;
            // border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.7);
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            width: 100%;
          }

          .enterprise-deployment h2 {
            font-size: 2.8rem;
            font-weight: 700;
            padding: 1.5rem 1.5rem 1.5rem 1.5rem;
            margin-bottom: 1.5rem;
            color: #e0e7ff;
            text-align: center;
          }

          .enterprise-deployment p {
            font-size: 1.25rem;
            line-height: 1.7;
            margin-bottom: 2.5rem;
            color: #cbd5e1;
            text-align: center;
          }

          .enterprise-deployment ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            max-width: 400px;
            margin: 0 auto;
            color: #94a3b8;
            font-size: 1.1rem;
            line-height: 1.6;
          }

          .enterprise-deployment ul li {
            margin-bottom: 1rem;
          }

          @media (min-width: 768px) {
            .enterprise-deployment h2 {
              font-size: 3.2rem;
            }

            .enterprise-deployment p {
              font-size: 1.4rem;
            }

            .enterprise-deployment ul {
              font-size: 1.2rem;
            }
          }
        }</style>

        <h2>Enterprise Deployment</h2>
        <p>
          IT infrastructure deployment is a crucial process that is frequently
          undervalued. Our engagement initiates well in advance of logistical
          planning, prioritising the safeguarding of your investment.
        </p>
        <p>
          Our installations are exclusively conducted by skilled and certified
          engineers, guaranteeing accuracy and dependability. Upon completion, a
          detailed report will be provided. Additionally, we extend support in
          managing asset records and configuring hardware to enhance operational
          efficiency.
        </p>
        <ul>
          <li>Insured Transportation & Handling</li>
          <li>Professional Installation & Configuration</li>
          <li>Cabling & Tagging Network Configuration</li>
          <li>Deployment Report</li>
        </ul>
      </section>
      {/* Fourth Section: Helpdesk */}
      <section className="helpdesk-section">
        <style jsx>{
          .helpdesk-section {
            background-color: rgb(82, 100, 118); /* lighter background */
            padding: 4rem 2rem;
            // border-radius: 12px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            color: #192130;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            // max-width: 900px;
            // margin: 3rem auto;
            text-align: center;
          }

          .helpdesk-section h2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #192130;
          }

          .helpdesk-section p {
            font-size: 1.2rem;
            line-height: 1.7;
            margin-bottom: 2rem;
            color: #192130;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }

          .helpdesk-section img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }

          @media (min-width: 768px) {
            .helpdesk-section h2 {
              font-size: 3rem;
            }

            .helpdesk-section p {
              font-size: 1.3rem;
            }
          }
        }</style>

        <h2>Helpdesk</h2>
        <p>
          Our Helpdesk ensures round-the-clock IT support, providing swift and
          reliable solutions to keep your operations running seamlessly.
        </p>
        {/* Replace the src below with your actual image path or URL */}
        <img src="/e1.png" alt="Helpdesk Support Illustration" />
      </section>

      <Footer />
    </>
  );
};

export default EnterprisePage;
