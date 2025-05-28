"use client";

import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import React from "react";

const HybridCloudPage = () => {
  return (
    <>
      <FloatingNav navItems={navItems} />

      {/* Hybrid Cloud Hero Section */}
      <section className="hybrid-hero">
        <style jsx>{`
          .hybrid-hero {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            padding: 2rem;
            background: linear-gradient(to right, #0f172a, #1e293b);
            color: #f8fafc;
            position: relative;
            overflow: hidden;
          }

          .hybrid-content {
            max-width: 1100px;
            padding: 3rem;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-left: 5px solid #38bdf8;
            border-radius: 1rem;
            animation: fadeInSlide 1.2s ease-out;
            text-align: center;
          }

          .hybrid-content h1 {
            font-size: 2.8rem;
            font-weight: 800;
            line-height: 1.4;
            margin-bottom: 1rem;
            color: #f0fdfa;
          }

          @keyframes fadeInSlide {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (min-width: 1024px) {
            .hybrid-content h1 {
              font-size: 3.4rem;
            }
          }
        `}</style>

        <div className="hybrid-content">
          <h1>
            Hybrid cloud: where the power of flexibility meets the security of
            control, revolutionising the way businesses scale and innovate in
            today’s dynamic digital landscape.
          </h1>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="hybrid-usecase">
        <style jsx>{`
          .hybrid-usecase {
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            padding: 5rem 2rem;
            background: #1e293b; /* slightly lighter */
            color: #e2e8f0;
          }

          @media (min-width: 1024px) {
            .hybrid-usecase {
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 4rem;
              padding: 6rem 4rem;
            }
          }

          .usecase-text {
            flex: 1;
            max-width: 600px;
          }

          .usecase-text h2 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #f1f5f9;
          }

          .usecase-text p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #cbd5e1;
            margin-bottom: 1rem;
          }

          .usecase-text ul {
            list-style-type: disc;
            margin-left: 1.5rem;
            margin-top: 1rem;
            color: #cbd5e1;
          }

          .usecase-text ul li {
            margin-bottom: 0.5rem;
          }

          .usecase-image {
            flex: 1;
            max-width: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .usecase-image img {
            width: 100%;
            border-radius: 0.5rem;
            filter: drop-shadow(0 0 15px rgb(78, 138, 164));
          }
        `}</style>

        <div className="usecase-text">
          <h2>Use Case: Cloud Bursting</h2>
          <p>
            Many businesses face dynamic workloads that experience rapid spikes
            in resource demands, such as an e-commerce website during a holiday
            sale. This is where cloud bursting, a hybrid cloud deployment
            technique, becomes invaluable.
          </p>
          <p>
            Cloud bursting involves a configuration between a private cloud and
            a public cloud, utilising load balancing to redirect traffic
            overflow. When a private cloud reaches its full capacity, external
            workloads that would otherwise overwhelm the private servers “burst”
            to external third-party cloud services.
          </p>
          <p>
            <strong>How it Works:</strong>
            <br />
            When private cloud reaches capacity, excess workloads “burst” to
            third-party cloud services.
          </p>
          <p>
            <strong>Key Benefits:</strong>
          </p>
          <ul>
            <li>
              Prevents interruptions to business applications during sudden
              surges.
            </li>
            <li>Frees up local resources for other applications.</li>
            <li>
              Reduces capital expenditures related to on-premises
              infrastructure.
            </li>
          </ul>
        </div>
        <div className="usecase-image">
          <img src="/host.jpeg" alt="Cloud Bursting Illustration" />
        </div>
      </section>

      {/* Disaster Recovery Section */}
      <section className="hybrid-dr">
        <style jsx>{`
          .hybrid-dr {
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            padding: 5rem 2rem;
            background: #15243a; /* medium dark */
            color: #e2e8f0;
          }

          @media (min-width: 1024px) {
            .hybrid-dr {
              flex-direction: row-reverse;
              align-items: center;
              justify-content: center;
              gap: 4rem;
              padding: 6rem 4rem;
            }
          }

          .dr-text {
            flex: 1;
            max-width: 600px;
          }

          .dr-text h2 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #f1f5f9;
          }

          .dr-text p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #cbd5e1;
            margin-bottom: 1rem;
          }

          .dr-image {
            flex: 1;
            max-width: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .dr-image img {
            width: 100%;
            border-radius: 0.5rem;
            filter: drop-shadow(0 0 15px #38bdf8);
          }
        `}</style>

        <div className="dr-image">
          <img src="/screen.jpeg" alt="Cloud DR Illustration" />
        </div>
        <div className="dr-text">
          <h2>Use Case: Cloud DR</h2>
          <p>
            A hybrid cloud strategy often includes a cloud-based DR plan, where
            systems and data are maintained on-premise and backed up in a public
            cloud.
          </p>
          <p>
            In the event of a disaster, this approach enables organisations to
            swiftly transition their workloads to the public cloud with minimal
            disruption, maintaining the continuity of business operations. This
            effectively reduces the cost of maintaining a physical DR center.
          </p>
          <p>
            A cloud-based DR plan requires a carefully detailed process
            involving multiple stakeholders and must account for tools available
            both on-premises and in the cloud. Additionally, a hybrid-cloud
            strategy might involve multiple cloud services.
          </p>
          <p>
            <strong>Systemizer Technic’s</strong> portfolio provides the tools
            and expertise to ensure the success of this approach. By leveraging
            on automation, we can further enhance the execution of the DR plan
            and significantly reduce recovery time.
          </p>
        </div>
      </section>

      {/* Development & Testing Section */}
      <section className="hybrid-devtest">
        <style jsx>{`
          .hybrid-devtest {
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            padding: 5rem 2rem;
            background: #243554; /* lighter dark blue */
            color: #e2e8f0;
          }

          @media (min-width: 1024px) {
            .hybrid-devtest {
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 4rem;
              padding: 6rem 4rem;
            }
          }

          .devtest-text {
            flex: 1;
            max-width: 600px;
          }

          .devtest-text h2 {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #f1f5f9;
          }

          .devtest-text p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #cbd5e1;
            margin-bottom: 1rem;
          }

          .devtest-image {
            flex: 1;
            max-width: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .devtest-image img {
            width: 100%;
            border-radius: 0.5rem;
            filter: drop-shadow(0 0 15px #38bdf8);
          }
        `}</style>

        <div className="devtest-text">
          <h2>Use Case: Application Development & Testing</h2>
          <p>
            A hybrid cloud environment provides significant benefits for
            application development and testing by eliminating the need for
            on-premises hardware. DevOps teams frequently use public cloud
            platforms and services, such as cloud storage, to host development
            projects.
          </p>
          <p>
            Compared to launching a testing environment in a private cloud, a
            dev/test approach in a public cloud offers cost-savings,
            flexibility, and faster time to market. Once a team has developed an
            application in the public cloud, they may migrate it to a private
            cloud environment based on business needs or security factors.
          </p>
          <p>
            Leveraging the public cloud for development and testing also
            supports an organisation’s broader application modernisation efforts
            — especially transitioning from monolithic legacy applications to a
            microservices architecture.
          </p>
        </div>
        <div className="devtest-image">
          <img src="/cr.jpeg" alt="Development & Testing Illustration" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HybridCloudPage;
