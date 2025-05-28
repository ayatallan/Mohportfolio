"use client";

import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const AutomationPage = () => {
  return (
    <main>
      <FloatingNav navItems={navItems} />

      {/* First Section */}
      <section className="header-section">
        <div className="header-content">
          <h1 className="title">
            The average hourly cost of an infrastructure failure is $100,000 per
            hour, a survey of the Fortune 1000 by IDC finds.
          </h1>
          <p className="description">
            In addition, the average total cost of unplanned downtime per year
            is $1.25 billion to $2.5 billion. The financial impact may pale in
            comparison to the reputational risk and cost of lost customers, let
            alone potential regulatory sanction.
          </p>
          <p className="source">IDC survey spotlight, Jan 2021</p>
          <button className="cta-button">Read the Use Case</button>
        </div>
      </section>

      {/* Second Section */}
      <section className="content-section">
        <div className="content">
          <p className="paragraph">
            Automation entails leveraging technology to streamline and execute
            tasks or processes without direct human intervention. While commonly
            employed in sectors such as manufacturing, robotics, and vehicle
            control, its significance in IT cannot be overstated.
          </p>
          <p className="paragraph">
            In the realm of information technology, automation involves
            utilising instructions to establish a repetitive process that
            supplants manual labour by IT professionals in data centers and
            cloud deployments. Automation tools, frameworks, and appliances
            operate tasks with minimal administrator involvement. The spectrum
            of IT automation spans from singular actions to defined sequences
            and, ultimately, to self-sufficient IT deployments that respond to
            user interactions and other triggers.
          </p>
          <p className="paragraph">
            As a cornerstone of IT optimisation, embracing automation is not
            merely a forward-thinking strategy but a fundamental necessity for
            any business striving to remain relevant, secure, and efficient in
            today’s digital age. Automation enhances efficiency, consistency,
            and scalability, enabling organisations to achieve greater
            operational excellence.
          </p>
          <img
            className="section-image"
            src="a1.png"
            alt="Automation Illustration"
          />
          <p className="paragraph last-paragraph">
            IT automation simplifies and speeds up tasks in the IT environment
            using tools like Ansible with playbooks to automate processes like
            provisioning virtual machines and managing backups. Enterprise-level
            automation tools can respond to events, configure systems, detect
            unauthorized changes, and maintain server configurations
            automatically, improving efficiency and reliability in IT
            operations.
          </p>
        </div>
      </section>

      {/* Third Section */}
      <section className="third-section">
        <div className="third-content">
          <div className="text-content">
            <h2 className="section-title">The Automation Process</h2>
            <p className="intro">
              Drawing on our expertise in automation and strategic technology
              collaborations, we are a leading
            </p>
            <p className="intro">
              No matter how intricate your setup is or where you stand in your
              IT modernisation process, our automation tool is prepared to
              assist you at every stage.
            </p>
            <ul className="benefits-list">
              <li>Speed up operations and development</li>
              <li>Improve agility and responsiveness</li>
              <li>Boost productivity and efficiency</li>
              <li>Ensure consistency and availability</li>
              <li>Strengthen security and compliance</li>
              <li>Free up staff time for important projects</li>
              <li>Drive cost savings throughout your organisation</li>
            </ul>
          </div>
          <div className="image-content">
            <img src="a2.png" alt="Automation Process Illustration" />
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="fourth-section">
        <div className="fourth-content">
          <h2 className="section-title">The Automation Journey</h2>
          <p className="journey-text">
            When you choose to start your Automation journey, we guide you
            through our process and accompany you at every stage.
          </p>
          <img
            className="journey-image"
            src="a3.jpg"
            alt="Automation Journey Illustration"
          />
        </div>
      </section>

      {/* Fifth Section */}
      <section className="fifth-section">
        <div className="fifth-content">
          <div className="text-content">
            <h2 className="section-title">Use case: DR Automation</h2>
            <p className="paragraph">
              Automating disaster recovery (DR) have many benefits, including
              expedited recovery times, enhanced dependability, cost savings,
              and improved regulatory adherence.
            </p>
            <p className="paragraph">
              By automating the processes, the restoration of systems and data
              can be accomplished within minutes or hours rather than the
              traditional span of days or weeks. The utilisation of predefined
              scripts and templates mitigates the risk of human errors and
              inconsistencies. In fact, most misconfigurations are introduced
              through inadvertent human mistakes.
            </p>
            <p className="paragraph">
              Automation also provide audit trails, reports, and alerts,
              facilitating adherence to regulatory and industry mandates such as
              the Risk Management in IT (RMiT).
            </p>
          </div>
          <div className="image-content">
            <img src="a4.png" alt="Disaster Recovery Automation Illustration" />
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="conclusion-section">
        <div className="conclusion-content">
          <h2 className="section-title">Conclusion</h2>
          <p className="paragraph">
            When developing a disaster recovery (DR) plan, assessing the
            technology stack is crucial. Collaboration among subject matter
            experts (SMEs) at each layer is necessary. Manual operations can
            prolong recovery time, while automation allows for more frequent
            testing and faster restoration.
          </p>
          <p className="paragraph">
            Systemizer Technic provides tools and training for effective DR
            Automation strategy implementation, enhancing efficiency and
            accuracy while saving costs and building trust in organisational
            capabilities.
          </p>
          <div className="image-content">
            <img
              src="a5.png"
              alt="Disaster Recovery Collaboration Illustration"
            />
          </div>
          <p className="paragraph">
            Each of these layers has their own SME who will need to work in
            tandem to address complexities and challenges during a DR event.
          </p>
        </div>
      </section>
      {/* Automation Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="section-title">Automation Benefits</h2>
          <div className="benefit-card">
            <h3 className="benefit-title">Time Savings</h3>
            <p className="benefit-text">
              Traditional disaster recovery often involves manual processes and
              large teams, leading to costly downtime. Automating recovery
              reduces downtime by quickly restoring vital systems. Integrating
              tools like CMDB expedites the process.
            </p>
          </div>
          <div className="benefit-card">
            <h3 className="benefit-title">Measurable Analytics</h3>
            <p className="benefit-text">
              Automation provides valuable analytics for improving recovery
              efficiency. IT teams can track performance, set realistic goals,
              and identify areas for improvement based on data from DR testing.
            </p>
          </div>
          <div className="benefit-card">
            <h3 className="benefit-title">Reduced Compliance Risk</h3>
            <p className="benefit-text">
              Industries like finance must prove effective recovery strategies
              to avoid fines and downtime costs. Automated audit trails simplify
              compliance by providing detailed records without post-event
              reconstruction.
            </p>
          </div>
          <div className="benefit-card">
            <h3 className="benefit-title">Heightened Productivity</h3>
            <p className="benefit-text">
              Automated failover to secondary data centers maintains revenue
              generation during primary system downtime, reducing the impact of
              outages. It ensures critical systems remain operational,
              maintaining business continuity and reducing outage costs.
            </p>
          </div>
        </div>
      </section>
      <Footer />

      {/* Internal Styles */}
      <style jsx>{`
        main {
          background-color: #000319;
          color: #fafafa;
          font-family: Arial, sans-serif;
        }

        .header-section {
          background-color: #000319;
          padding: 4rem 2rem;
          display: flex;
          justify-content: center;
          text-align: center;
          padding-top:15rem;
        }

        .header-content {
          max-width: 800px;
        }

        .title {
          font-size: 2rem;
          font-weight: bold;
          color: #cbacf9;
          margin-bottom: 1.5rem;
        }

        .description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #75649a;
          margin-bottom: 1rem;
        }

        .source {
          color: #2481ba;
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }

        .cta-button {
          background-color: #cbacf9;
          color: #000319;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .cta-button:hover {
          background-color: #b598e6;
        }

        .content-section {
          padding: 4rem 2rem;
          display: flex;
          justify-content: center;
        }

        .content {
          max-width: 900px;
        }

        .paragraph {
          color: #fafafa;
          line-height: 1.7;
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
        }

        .section-image {
          width: 100%;
          max-width: 100%;
          height: auto;
          margin: 3rem 0;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .last-paragraph {
          color: #cbacf9;
        }

        /* Third Section Styles */
        .third-section {
          background-color: #121433; /* lighter than main bg */
          padding: 4rem 2rem;
          display: flex;
          justify-content: center;
        }

        .third-content {
          display: flex;
          max-width: 900px;
          gap: 3rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .text-content {
          flex: 1 1 400px;
          color: #fafafa;
        }

        .section-title {
          font-size: 1.8rem;
          font-weight: bold;
          color: #cbacf9;
          margin-bottom: 1rem;
        }

        .intro {
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 1rem;
          color: #d3c7f9;
        }

        .benefits-list {
          list-style-type: disc;
          padding-left: 1.5rem;
          color: #b8a9e0;
          font-size: 1rem;
          line-height: 1.5;
          margin-top: 0.5rem;
        }

        .benefits-list li {
          margin-bottom: 0.6rem;
        }

        .image-content {
          flex: 1 1 400px;
          text-align: center;
        }

        .image-content img {
          width: 100%;
          max-width: 400px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          height: auto;
        }

        /* Fourth Section Styles */
        .fourth-section {
          background-color: #23284a; /* lighter than third-section */
          padding: 4rem 2rem;
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .fourth-content {
          max-width: 900px;
        }

        .journey-text {
          font-size: 1.1rem;
          color: #d3c7f9;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .journey-image {
          width: 100%;
          max-width: 900px;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          margin: 0 auto;
        }

        /* Fifth Section Styles */
        .fifth-section {
          background-color: rgb(18, 26, 68); /* lighter than fourth-section */
          padding: 4rem 2rem;
          display: flex;
          justify-content: center;
        }

        .fifth-content {
          display: flex;
          max-width: 900px;
          gap: 3rem;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .fifth-section .text-content {
          flex: 1 1 450px;
          color: #fafafa;
        }

        .fifth-section .paragraph {
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.25rem;
          color: #e0dff8;
        }

        .fifth-section .image-content {
          flex: 1 1 400px;
          text-align: center;
        }

        .fifth-section .image-content img {
          width: 100%;
          max-width: 400px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          height: auto;
        }

        @media (max-width: 768px) {
          .third-content,
          .fifth-content {
            flex-direction: column;
            align-items: center;
          }

          .text-content,
          .image-content {
            flex: none;
            max-width: 100%;
          }

          .image-content img {
            max-width: 100%;
          }
        }

        .conclusion-section {
          background-color: #414e7a; /* lighter than previous section */
          padding: 4rem 2rem;
          display: flex;
          justify-content: center;
        }
        .conclusion-content {
          display: flex;
          max-width: 900px;
          gap: 3rem;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .conclusion-section .text-content {
          flex: 1 1 450px;
          color: #fafafa;
        }
        .conclusion-section .paragraph {
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.25rem;
          color: #e0dff8;
        }
        .conclusion-section .image-content {
          flex: 1 1 400px;
          text-align: center;
        }
        .conclusion-section .image-content img {
          width: 100%;
          max-width: 400px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          height: auto;
        }
        @media (max-width: 768px) {
          .conclusion-content {
            flex-direction: column;
            align-items: center;
          }
          .conclusion-section .text-content,
          .conclusion-section .image-content {
            flex: none;
            max-width: 100%;
          }
          .conclusion-section .image-content img {
            max-width: 100%;
          }
        }
        .conclusion-section {
          background-color: #414e7a; /* lighter than previous section */
          padding: 4rem 2rem;
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .conclusion-content {
          max-width: 900px;
          color: #fafafa;
        }
        .section-title {
          font-size: 1.8rem;
          font-weight: bold;
          color: #cbacf9;
          margin-bottom: 1.5rem;
        }
        .paragraph {
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.25rem;
          color: #e0dff8;
        }
        .image-content {
          margin-top: 2rem;
        }
        .image-content img {
          width: 100%;
          max-width: 600px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          height: auto;
          margin: 0 auto;
          display: block;
        }
        @media (max-width: 768px) {
          .conclusion-content {
            padding: 0 1rem;
          }
        }
        .benefits-section {
          background-color: #2c365e; /* dark blue tone, professional */
          padding: 4rem 2rem;
          display: flex;
          justify-content: center;
          color: #f0eafa;
          font-family: Arial, sans-serif;
        }
        .benefits-container {
          max-width: 900px;
          width: 100%;
          text-align: left;
        }
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #c1a7f7;
          margin-bottom: 2rem;
          text-align: center;
        }
        .benefit-card {
          background: #394873; /* slightly lighter than bg */
          border-radius: 12px;
          padding: 1.8rem 2rem;
          margin-bottom: 1.8rem;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }
        .benefit-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #d4c3f7;
          margin-bottom: 0.8rem;
        }
        .benefit-text {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #e0dff8;
        }

        @media (max-width: 768px) {
          .benefits-section {
            padding: 3rem 1rem;
          }
          .benefits-container {
            max-width: 100%;
          }
          .benefit-card {
            padding: 1.4rem 1.5rem;
          }
        }
      `}</style>
    </main>
  );
};

export default AutomationPage;
