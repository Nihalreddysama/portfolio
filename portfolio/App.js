import React from "react";

export default function App() {
  return (
    <>
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Animated SVG Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            id="background-paths"
            className="w-full h-full text-slate-950 dark:text-white background-shadow"
            viewBox="0 0 696 316"
            fill="none"
          >
            <title>Background Paths</title>
            <path d="M50,40 Q120,120 200,300" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.12" />
            <path d="M120,10 Q200,100 320,280" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.10" />
            <path d="M200,60 Q300,180 480,310" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.08" />
            <path d="M300,20 Q400,120 600,250" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.09" />
            <path d="M400,80 Q500,200 680,300" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.11" />
          </svg>
        </div>

        {/* COVER PAGE CONTENT */}
        <section
          id="cover"
          className="relative z-10 container mx-auto px-4 md:px-6 text-center flex flex-col items-center animate-slide-up"
        >
          <div className="branding-logo mb-6">
            <img
              src="images/Nihal Reddy Logo.jpg"
              alt="NR Logo"
              className="logo-img w-24 h-24 rounded-full object-cover"
            />
          </div>
          <h1 className="name text-5xl sm:text-6xl font-bold mb-2">Sai Nihal Reddy Sama</h1>
          <p className="tagline text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
            Digital Marketing Executive
          </p>
        </section>
      </div>

      {/* About Me Section */}
      <section id="about" className="about-section py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold mb-6">About Me</h2>
          <div className="about-content flex flex-col md:flex-row items-center gap-8">
            <div className="about-text flex-1">
              <p className="bio mb-4">A highly motivated and detail-oriented Digital Marketing enthusiast with hands-on training in SEO, Google Ads, and Social Media Marketing. Eager to kickstart my career with a dynamic organization where I can contribute to brand growth using innovative online strategies and continuously learn in a fast-paced environment.</p>
              <p className="philosophy mb-4">My marketing philosophy centers on data-driven strategies and continuous learning. I believe in leveraging analytics to understand audience behavior and optimize campaigns for maximum impact while staying adaptable to the ever-evolving digital landscape.</p>
              <p className="education font-semibold"><strong>Education:</strong> Master's in Computing, De Montfort University, England (2023)</p>
            </div>
            <div className="about-image flex-1 flex justify-center">
              <img src="images/Jhonwick.JPG" alt="Sai Nihal Reddy Sama" className="headshot w-40 h-40 rounded-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="skills-section py-12 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold mb-6">Skills & Tools</h2>
          <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="skill-item flex flex-col items-center">
              <div className="skill-icon mb-2">
                <img src="icons/seo-icon.png" alt="SEO" className="w-12 h-12" />
              </div>
              <h3 className="font-semibold">Search Engine Optimization</h3>
              <p>On-page & Off-page</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <div className="skill-icon mb-2">
                <img src="icons/google-ads-icon.png" alt="Google Ads" className="w-12 h-12" />
              </div>
              <h3 className="font-semibold">Google Ads</h3>
              <p>Search & Display Campaigns</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <div className="skill-icon mb-2">
                <img src="icons/seo-icon.png" alt="Analytics" className="w-12 h-12" />
              </div>
              <h3 className="font-semibold">Analytics</h3>
              <p>Google Analytics & Search Console</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <div className="skill-icon mb-2">
                <img src="icons/meta-ads-icon.png" alt="Meta Ads" className="w-12 h-12" />
              </div>
              <h3 className="font-semibold">Social Media Marketing</h3>
              <p>Facebook, Instagram</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <div className="skill-icon mb-2">
                <img src="icons/email-marketing-icon.png" alt="Email Marketing" className="w-12 h-12" />
              </div>
              <h3 className="font-semibold">Email Marketing</h3>
              <p>Mailchimp</p>
            </div>
            <div className="skill-item flex flex-col items-center">
              <div className="skill-icon mb-2">
                <img src="icons/wordpress-icon.png" alt="WordPress" className="w-12 h-12" />
              </div>
              <h3 className="font-semibold">Design & CMS</h3>
              <p>Canva, WordPress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Samples/Case Studies Section */}
      <section id="work" className="work-section py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold mb-6">Work Samples & Case Studies</h2>
          <div className="work-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="work-card bg-white dark:bg-slate-800 rounded-lg shadow p-6 flex flex-col">
              <div className="work-visual mb-4">
                <img src="images/fleamarket-project.jpg" alt="Fleamarket Project" className="rounded-lg" />
              </div>
              <div className="work-content">
                <h3 className="font-semibold text-xl mb-2">Social Media Handler for Fleamarket Event</h3>
                <div className="work-details">
                  <div className="work-detail mb-2">
                    <h4 className="font-bold">Objective</h4>
                    <p>To assist in content optimization and social media promotion for a fleamarket event.</p>
                  </div>
                  <div className="work-detail mb-2">
                    <h4 className="font-bold">Strategy</h4>
                    <p>Assisted in keyword research and content optimization for blog posts. Created social media posts and flyers for various stalls. Worked on backlink generation and local SEO techniques.</p>
                  </div>
                  <div className="work-detail">
                    <h4 className="font-bold">Results</h4>
                    <p>Increased event visibility through targeted social media campaigns and improved local search rankings.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-card bg-white dark:bg-slate-800 rounded-lg shadow p-6 flex flex-col">
              <div className="work-visual mb-4">
                <img src="images/seo-project.jpg" alt="SEO Project" className="rounded-lg" />
              </div>
              <div className="work-content">
                <h3 className="font-semibold text-xl mb-2">SEO Project - fleashion.in</h3>
                <div className="work-details">
                  <div className="work-detail mb-2">
                    <h4 className="font-bold">Objective</h4>
                    <p>To gain practical experience in SEO by creating and optimizing a practice website.</p>
                  </div>
                  <div className="work-detail mb-2">
                    <h4 className="font-bold">Strategy</h4>
                    <p>Created a practice website using WordPress. Implemented SEO using Rank Math plugin. Added optimized content and integrated Google Analytics for tracking.</p>
                  </div>
                  <div className="work-detail">
                    <h4 className="font-bold">Results</h4>
                    <p>Successfully improved search rankings and gained hands-on experience with SEO tools and analytics implementation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications-section py-12 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold mb-6">Certifications</h2>
          <div className="certifications-grid flex gap-8 justify-center">
            <div className="certification-item">
              <img src="images/google-logo.png" alt="Google Certification" className="w-24 h-24 object-contain" />
            </div>
            <div className="certification-item">
              <img src="images/hubspot-logo.png" alt="HubSpot Certification" className="w-24 h-24 object-contain" />
            </div>
            <div className="certification-item">
              <img src="images/meta-logo.png" alt="Meta Certification" className="w-24 h-24 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold mb-6">Testimonials</h2>
          <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card bg-white dark:bg-slate-800 rounded-lg shadow p-6">
              <p className="testimonial-text mb-4">"Nihal is a dedicated and quick learner, always eager to apply new digital marketing strategies. His work on our social media campaign was instrumental."</p>
              <p className="testimonial-author text-right font-semibold">- Marketing Manager, Local Business</p>
            </div>
            <div className="testimonial-card bg-white dark:bg-slate-800 rounded-lg shadow p-6">
              <p className="testimonial-text mb-4">"His analytical thinking and attention to detail are remarkable. Nihal consistently delivers creative content ideas that resonate with the audience."</p>
              <p className="testimonial-author text-right font-semibold">- Creative Director, Agency</p>
            </div>
            <div className="testimonial-card bg-white dark:bg-slate-800 rounded-lg shadow p-6">
              <p className="testimonial-text mb-4">"A highly motivated individual with a strong grasp of SEO and Google Ads. Nihal's hands-on experience is a valuable asset."</p>
              <p className="testimonial-author text-right font-semibold">- Digital Marketing Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="contact-section py-12 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl font-bold mb-6">Contact Me</h2>
          <div className="contact-content flex flex-col items-center">
            <div className="contact-info space-y-4">
              <div className="contact-item">
                <strong>Email:</strong> <a href="mailto:nihalreddysama26@gmail.com" className="text-blue-600">nihalreddysama26@gmail.com</a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> <a href="tel:+919618512255" className="text-blue-600">+91-9618512255</a>
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sainihal-reddy-sama-139546107" target="_blank" className="text-blue-600">LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
