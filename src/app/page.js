import React from "react";
import Image from "next/image";
//import image from "./image.png";

function Home() {
  return (
    <div className="text-gray-900 font-sans w-full">

      {/* Hero Section */}
      <section className="h-[80vh] bg-black">
        <div className="flex flex-col items-center justify-center text-center py-20 text-white bg-[url('/images/landing/image1.png')] bg-cover bg-center bg-no-repeat w-full h-full">

          <div className="bg-indigo-600 px-4 py-2 rounded flex flex-row items-center gap-6">
            <p className="text-lg font-semibold">Empowering Your Career Growth</p>
            <a className="text-yellow-500 text-lg font-semibold">Explore More</a>
          </div>

          <h1 className="text-5xl font-bold mt-10">Weaving Your Future Together</h1>

          <p className="mt-16 text-xl">Discover Exciting Internship Opportunities and Unlock Your Potential</p>

          <button className="mt-10 bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold">Get Started Now</button>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col md:flex-row md:px-32 items-center py-16 px-10 bg-gray-100">

        <img src="/images/landing/image.png" alt="People collaborating" className="w-full md:w-1/3 rounded-lg" />

        <div className="flex flex-col gap-4 mt-8 md:mt-0 md:ml-10 text-left">
          <h4 className="text-lg text-gray-500 font-semibold">Unlock Your Potential Today</h4>
          <h1 className="text-3xl font-bold text-black">
            Empower Your Future with InternLoom
          </h1>
          <p className="text-gray-700 leading-relaxed">
            InternLoom provides a seamless platform connecting students with
            top-notch internships and companies with exceptional talent.
            Discover endless opportunities to kickstart your career or find the
            perfect fit for your business.
          </p>
          <div className="flex flex-col gap-4 items-start">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md">
              Get Started Now
            </button>
            <p className="text-sm text-gray-600">
              Already a Member?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Sign In Here
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white md:mx-32">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Empowering Your Internship Search</h1>
          <h2 className="text-xl text-blue-700 mt-4">
            Unleash Your Potential with InternLoom
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-10">
          <FeatureCard
            icon="⚡"
            title="Tailored Internships"
            description="Access diverse internship opportunities tailored to your skills and interests."
          />
          <FeatureCard
            icon="✨"
            title="Enhanced Visibility"
            description="Boost your profile's visibility with SEO optimization for increased exposure."
          />
          <FeatureCard
            icon="🔒"
            title="Premium Insights"
            description="Unlock exclusive insights and opportunities with our advanced subscription plans."
          />
          <FeatureCard
            icon="❤️"
            title="Interactive Platform"
            description="Engage with a user-friendly platform designed to streamline your internship search process."
          />
        </div>
      </section>



      {/* Features Section */}
      <section className="py-20 bg-white md:mx-32">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Seamless Employer Experience</h1>

          <div className="flex flex-row justify-center gap-4 mt-8">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md">
              Engage Top Talent Today
            </button>

            <button className="bg-white text-blue-500 border-2 border-blue-500 px-6 py-3 rounded-md">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-10">
          <FeatureCard
            icon="⚡"
            title="Effortless Discovery"
            description="Discover top talent effortlessly with our intuitive employer interface."
          />
          <FeatureCard
            icon="✨"
            title="Enhanced Visibility"
            description="Boost your job postings' visibility through targeted promotions and strategies."
          />
          <FeatureCard
            icon="🔒"
            title="Access to Database"
            description="Access a rich candidate database to find the perfect match for your company."
          />
          <FeatureCard
            icon="❤️"
            title="Premium Support"
            description="Receive dedicated support and guidance from our team to optimize your recruiting experience."
          />
        </div>
      </section>



      <section className="py-20 bg-gray-100 md:px-32">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Empowering Your Internship Search</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-10">
          <ReviewCard
            text={`"InternLoom helped me land my dream internship at a leading tech company!"`}
            author="- Emily Parker"
          />

          <ReviewCard
            text={`"As an employer, InternLoom provided us with a pool of talented candidates. Highly recommended!"`}
            author="- James Thompson"
          />

          <ReviewCard
            text={`"The personalized recommendations boosted my profile visibility, leading to multiple offers. Thank you!"`}
            author="- Anonymous"
          />
        </div>
      </section>



      <section className="py-20 bg-white md:mx-32 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">FAQ & Help</h1>

          <h2 className="text-xl text-blue-700 mt-4">
            Get Answers Here
          </h2>
        </div>

        <div className="flex flex-col md:w-1/3">
          <FaqCard
            text="How do I create an account?"
          />

          <FaqCard
            text="Can I apply for multiple internships?"
          />

          <FaqCard
            text="Do employers have access to my profile?"
          />

          <FaqCard
            text="How can I stand out as a candidate?"
          />

          <FaqCard
            text="Is there a limit to the number of internships I can apply for?"
          />

          <FaqCard
            text="How can I contact support for assistance?"
          />
        </div>
      </section>
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-100 border rounded-lg p-6">
    <div className="text-4xl">{icon}</div>
    <h4 className="text-xl font-bold mt-4">{title}</h4>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const ReviewCard = ({ text, author }) => (
  <div className="bg-white border rounded-lg p-6">
    <h4 className="">{text}</h4>
    <p className="text-gray-600 font-bold mt-6">{author}</p>
  </div>
);

const FaqCard = ({ text }) => (
  <div className="bg-white border rounded-lg p-6 mt-6 flex flex-row justify-between items-center">
    <h4 className="font-semibold text-xl">{text}</h4>
    <span className="text-2xl">▸</span>
  </div>
);

export default Home;
