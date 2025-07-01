import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import profileImg from "./shreyash_profile.jpg"; // Ensure this image is in src folder

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-purple-50 text-gray-800 font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-20 px-6 text-center animate-fade-in">
        <img
          src={profileImg}
          alt="Shreyash Patil"
          className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wide animate-slide-up">Shreyash Patil</h1>
        <p className="text-xl font-medium animate-slide-up">
          DevOps Engineer | GCP & AWS | Kubernetes | Automation
        </p>
        <a
          href="/Shreyash_Patil_Resume.pdf"
          download
          className="inline-block mt-6 bg-white text-purple-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-purple-200 transition duration-300"
        >
          ⬇️ Download Resume
        </a>
      </section>

      {/* Education */}
<section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up">
  <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-300 pb-2">🎓 Education</h2>
  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        title: "Bachelor of Engineering (B.E.) – Electronics & Telecommunication",
        college: "Trinity Academy of Engineering, Pune – SPPU",
        year: "2021 – 2024",
        score: "CGPA: 8.84"
      },
      {
        title: "Diploma – Computer Engineering",
        college: "PDEA’s Institute of Technology, Pune – MSBTE",
        year: "2018 – 2021",
        score: "CGPA: 8.82"
      }
    ].map((edu, index) => (
      <div
        key={index}
        className="bg-indigo-50 rounded-lg p-6 shadow hover:shadow-lg transform transition duration-300 hover:scale-105"
      >
        <h3 className="text-xl font-semibold text-black mb-2">{edu.title}</h3>
        <p className="text-gray-800 font-medium">{edu.college}</p>
        <p className="text-gray-700">{edu.year}</p>
        <p className="text-purple-900 font-bold mt-2">{edu.score}</p>
      </div>
    ))}
  </div>
</section>

      {/* Skills */}
<section className="bg-white p-8 max-w-5xl mx-auto animate-fade-in-up">
  <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-300 pb-2">🧠 Skills</h2>
  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        title: "Containerization",
        items: ["Docker", "Kubernetes", "Helm", "Argo CD"]
      },
      {
        title: "CI/CD & Automation",
        items: ["Ansible", "Jenkins", "GitLab CI", "Git", "GitHub", "Shell", "Python"]
      },
      {
        title: "Cloud Platforms",
        items: ["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)"]
      },
      {
        title: "Monitoring & Analytics",
        items: ["Prometheus", "Grafana", "Tableau", "Power BI", "Apache Spark", "Ambari Hadoop Ecosystem"]
      },
      {
        title: "Data Platforms & Databases",
        items: ["SingleStore", "Vertica", "Apache Doris"]
      },
      {
        title: "Operating Systems",
        items: ["Linux (Ubuntu, Rocky Linux)"]
      }
    ].map((skill, index) => (
      <div
        key={index}
        className="bg-indigo-50 rounded-lg p-6 shadow hover:shadow-lg transform transition duration-300 hover:scale-105"
      >
        <h3 className="text-2xl font-semibold text-black mb-3">{skill.title}:</h3>
        <ul className="list-disc pl-6 text-lg text-gray-800 space-y-1">
          {skill.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>


     {/* Work Experience */}
<section className="bg-indigo-50 p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
  <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-400 pb-2">💼 Work Experience</h2>
  <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transform transition duration-300 hover:scale-105">
    <h3 className="text-xl font-semibold text-black mb-2">
      DevOps Engineer Intern – Everlytics Data Science India LLP <span className="text-sm text-gray-600">(June 2024 – Present)</span>
    </h3>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      <li>Deployed and configured SingleStore on TCL Cloudlyte platform using Helm charts.</li>
      <li>Automated Ambari Hadoop deployment using modular Ansible scripts on TCL Cloudlyte.</li>
      <li>Set up an offline Ambari ODP repository on GCP VMs for Hadoop deployment without internet.</li>
      <li>Conducted HDFS Disaster Recovery (DR) testing using VM snapshots, IP remapping, and restarts.</li>
      <li>Set up Apache Doris on Kubernetes with 2 FE and 2 BE pods for distributed processing.</li>
      <li>Automated full deployment of 4PointX platform on Kubernetes with containerd, Longhorn, and CI/CD.</li>
      <li>Created Helm charts for 4PX Setup & Config modules with dynamic env vars.</li>
      <li>Implemented CI/CD pipeline for 4px.gateway repo with Slack notifications using GitLab CI and Ngrok.</li>
      <li>Developed Spark job to ingest/transform CSV data from GCS into Apache Doris for real-time queries.</li>
    </ul>
  </div>
</section>


      {/* Projects */}
      <section className="bg-purple-50 p-8 max-w-5xl mx-auto animate-fade-in-up rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-900 border-b-4 border-purple-400 pb-2">🚀 Projects</h2>
        {[
          {
            title: "Deployment Django App on AWS using Python and Terraform",
            points: [
              "Automated deployment of a Django app on AWS using Terraform and Python.",
              "Configured ECR, ELB, security groups, static IPs, and custom firewall rules.",
              "Enabled Docker-based deployment and CI/CD integration.",
              "Ensured scalable, secure, and efficient resource management on AWS."
            ]
          },
          {
            title: "Jenkins CI/CD Pipeline Automation with Ansible",
            points: [
              "Automated CI/CD pipeline using Jenkins, Docker, AWS EC2, and Amazon EKS.",
              "Configured AWS CLI, EKS CLI, Jenkins, and GitHub webhooks for automation.",
              "Integrated Ansible for infrastructure provisioning and deployment.",
              "Improved speed, consistency, and reliability of application delivery."
            ]
          }
        ].map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow hover:shadow-lg transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-black mb-2">{project.title}</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {project.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="bg-purple-900 text-white p-8 text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-4">📬 Get in Touch</h2>
        <p className="mb-2">📧 shreyash8248@gmail.com</p>
        <p>📞 +91 9130858424</p>
        <p>📍 Pune, Maharashtra, India</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/ShreyashAPatil/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200 transition">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/in/shreyash-patil-a875b91b2/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-200 transition">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:shreyash8248@gmail.com" className="hover:text-indigo-200 transition">
            <MdEmail size={30} />
          </a>
          <a href="tel:9130858424" className="hover:text-indigo-200 transition">
            <MdPhone size={30} />
          </a>
        </div>
      </section>

    </main>
  );
}
