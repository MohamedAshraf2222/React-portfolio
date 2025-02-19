import SectionHeader from "../commons/SectionHeader";
import { commonData } from "../assets/common"; // Assuming you have a commonData file for contact info
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa"; // Icons for social media
import emailjs from "emailjs-com"; // Import EmailJS
import { useState } from "react"; // For handling form state and success/error messages

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = "service_cpifyz9";
    const templateID = "template_ibtt5z5";
    const userID = "ZMDm3-3dC3s-Vc1hi";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setIsSent(true);
        setError("");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setError("Failed to send message. Please try again.");
      });
  };

  const date= new Date()
  return (
    <div
      id="contact"
      className="bg-[#0e2431] text-white pb-8 pt-12 px-6 sm:px-12 lg:px-24"
    >
      <SectionHeader header={"Contact"} />

      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mt-8">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[#1e3647] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4070f4]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[#1e3647] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4070f4]"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[#1e3647] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4070f4]"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#4070f4] text-white py-3 px-6 rounded-lg hover:bg-[#3056b3] transition duration-300"
            >
              Send Message
            </button>
            {isSent && (
              <p className="text-green-500 text-sm mt-2">
                Message sent successfully!
              </p>
            )}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </div>

        {/* Contact Information */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h3 className="text-2xl font-bold">Get in Touch</h3>
          <p className="text-gray-300">
            Feel free to reach out to me for collaborations, opportunities, or
            just a friendly hello!
          </p>

          <div className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#4070f4] text-2xl" />
              <a
                href={`mailto:${commonData.email}`}
                className="text-gray-300 hover:text-[#4070f4] transition duration-300"
              >
                {commonData.email}
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#4070f4] text-2xl" />
              <a
                href={`tel:${commonData.phone}`}
                className="text-gray-300 hover:text-[#4070f4] transition duration-300"
              >
                {commonData.phone}
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-[#4070f4] text-2xl" />
              <a
                href={commonData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#4070f4] transition duration-300"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* GitHub */}
            <div className="flex items-center gap-3">
              <FaGithub className="text-[#4070f4] text-2xl" />
              <a
                href={commonData.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#4070f4] transition duration-300"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        &copy; {date.getFullYear()} copyright all right reserved
      </div>
    </div>
  );
};

export default Contact;
