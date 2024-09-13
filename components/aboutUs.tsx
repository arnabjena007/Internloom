// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { TracingBeam } from "./ui/tracing-beam";

// Asset imports
import Placeholder from "@/public/aboutus.jpg";


const AboutUs = () => {
  return (
    <Section id="about-us">
      <Container>

      <TracingBeam className="px-6">
        <div className="not-prose relative flex w-full overflow-hidden rounded-lg border">
          <Image
            src={Placeholder}
            alt="placeholder"
            layout="responsive" // This ensures the image scales proportionally
            objectFit="contain" // This ensures the whole image is visible
          />
        </div>

       
        <h2>Internloom</h2>
          <p><strong>Unlock Your Potential</strong></p>
          <p>
            At InternLoom, we are committed to empowering the next generation of digital professionals. 
            Our internship program is crafted for those who are passionate about technology, design, and innovation. 
            Join us to work alongside experts, gain hands-on experience, and grow your career in the dynamic digital landscape.
          </p>

          <h3>Why Choose InternLoom?</h3>
          <ul>
            <li><strong>Real-World Experience:</strong> Work on live projects that challenge you to apply your knowledge in practical situations, preparing you for a successful career.</li>
            <li><strong>Mentorship and Guidance:</strong> Learn from experienced professionals who are dedicated to helping you grow and achieve your full potential.</li>
            <li><strong>Innovative Environment:</strong> Be part of a dynamic team that encourages creativity and embraces the latest technologies to solve real-world problems.</li>
            <li><strong>Growth Opportunities:</strong> Potential for a full-time position based on your performance during the internship, giving you a direct path to launch your career.</li>
            <li><strong>Networking and Connections:</strong> Build valuable relationships with industry leaders, mentors, and fellow interns that can benefit you throughout your career.</li>
          </ul>

          <h3>Start Your Journey with InternLoom</h3>
          <p>
            Ready to kickstart your career and gain hands-on experience in the digital world? Join us as an intern and be part of our innovative team. 
            <Link href="/contact">Contact us</Link> today to learn more about our internship opportunities and how you can make an impact with InternLoom.
          </p>

          <h2>Companies who believe in us</h2>
        </TracingBeam>
      </Container>
    </Section>
  );
};

export default AboutUs;
