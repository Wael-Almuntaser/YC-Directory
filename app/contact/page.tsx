"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال النموذج
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus("success");
    setIsSubmitting(false);
    
    // إعادة تعيين النموذج
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("idle");
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="home-container">
      <section>
        <h1 className="home-title">
          GET IN TOUCH<br />
          WITH OUR TEAM
        </h1>
        <p className="home-subtitle">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </section>

      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>hello@ycdirectory.com</p>
                <p>support@ycdirectory.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <h4>Office</h4>
                <p>123 Innovation Street</p>
                <p>Tech District, Riyadh 12345</p>
                <p>Saudi Arabia</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2136 21.3521 21.4019C21.1469 21.5902 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0971 21.9454 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09456 3.90347 2.12787 3.62421 2.21649 3.36089C2.30512 3.09757 2.44706 2.85569 2.63421 2.65089C2.82136 2.44609 3.04926 2.28271 3.30351 2.17109C3.55775 2.05947 3.83271 2.00232 4.10999 2.00001H7.10999C7.59524 1.99522 8.06577 2.16708 8.43373 2.48353C8.80168 2.79999 9.04201 3.23945 9.10999 3.72001C9.23662 4.68007 9.47144 5.62273 9.80999 6.53001C9.94454 6.88792 9.97348 7.27675 9.89399 7.65001C9.81449 8.02327 9.62984 8.36824 9.35999 8.65001L8.08999 9.92001C9.51355 12.4135 11.5865 14.4865 14.08 15.91L15.35 14.64C15.6318 14.3702 15.9767 14.1855 16.35 14.106C16.7233 14.0265 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+966 50 123 4567</p>
                <p>+966 11 234 5678</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.8954 2 13 2.89543 13 4V6C13 7.10457 13.8954 8 15 8H18C19.1046 8 20 7.10457 20 6V4C20 2.89543 19.1046 2 18 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 2H6C4.89543 2 4 2.89543 4 4V6C4 7.10457 4.89543 8 6 8H9C10.1046 8 11 7.10457 11 6V4C11 2.89543 10.1046 2 9 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 16H15C13.8954 16 13 16.8954 13 18V20C13 21.1046 13.8954 22 15 22H18C19.1046 22 20 21.1046 20 20V18C20 16.8954 19.1046 16 18 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 16H6C4.89543 16 4 16.8954 4 18V20C4 21.1046 4.89543 22 6 22H9C10.1046 22 11 21.1046 11 20V18C11 16.8954 10.1046 16 9 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="contact-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="contact-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="contact-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="contact-textarea"
                  placeholder="Tell us about your inquiry, feedback, or partnership opportunities..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-submit-btn"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="error-message">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How can I submit my startup?</h4>
              <p>Simply sign in to your account and click the "Create" button in the navigation bar. Fill out the startup submission form with all required details.</p>
            </div>
            <div className="faq-item">
              <h4>How do I connect with investors?</h4>
              <p>Once your startup is listed, investors can discover and contact you directly through our platform. You can also reach out to investors through our networking features.</p>
            </div>
            <div className="faq-item">
              <h4>What types of startups do you accept?</h4>
              <p>We welcome all innovative startups across various industries including technology, healthcare, education, fintech, sustainability, and more.</p>
            </div>
            <div className="faq-item">
              <h4>Is there a fee to list my startup?</h4>
              <p>Basic listing is free for all startups. We offer premium features and enhanced visibility options for a small fee.</p>
            </div>
            <div className="faq-item">
              <h4>How do you verify startup information?</h4>
              <p>We have a thorough verification process that includes reviewing business plans, checking references, and validating company information.</p>
            </div>
            <div className="faq-item">
              <h4>Can I update my startup information?</h4>
              <p>Yes, you can update your startup information anytime by accessing your dashboard and editing your startup profile.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 