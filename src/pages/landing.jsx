import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import companies from "@/data/companies.json";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find your dream job
          <span className="flex items-center gap-2 sm:gap-6">
            and get Hired.
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings across or find the perfect candidate
          accross the world.
        </p>
      </section>
      <div className="flex flex-row gap-6 sm:gap-20 items-center justify-center">


        {/* buttons */}
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-jobs">
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>

      {/* carousel */}
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1500,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, path, id }) => (
            <CarouselItem
              key={id}
              className="px-2 md:px-4 basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
              <div className="p-2">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>


      {/* cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12">
        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <CardTitle className="text-xl mb-2">
              Comprehensive Job Search
            </CardTitle>
            <CardDescription className="text-gray-400">
              Explore a wide range of job listings to find the perfect
              opportunity for you.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <CardTitle className="text-xl mb-2">Real-time Updates</CardTitle>
            <CardDescription className="text-gray-400">
              Get instant notifications about new opportunities and application
              status.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-colors">
          <CardHeader>
            <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <CardTitle className="text-xl mb-2">Verified Companies</CardTitle>
            <CardDescription className="text-gray-400">
              All companies are thoroughly vetted to ensure legitimate
              opportunities.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
      <section className="flex flex-col md:flex-row gap-8 px-4 justify-center items-center">
        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-colors w-full max-w-sm">
          <CardHeader>
            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <CardTitle className="text-xl mb-2">For Job Seekers</CardTitle>
            <CardDescription className="text-gray-400">
              Search and apply for jobs, track applications, and more.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-gray-700 transition-colors w-full max-w-sm">
          <CardHeader>
            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <CardTitle className="text-xl mb-2">For Employers</CardTitle>
            <CardDescription className="text-gray-400">
              Post jobs, manage applications, and find the best candidates.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>



      {/* accordion */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is HiringHub?</AccordionTrigger>
          <AccordionContent>
            HiringHub is a Job Portal Application which allows companies to post job
            listings and users to search and apply for jobs. It provides
            features for both job seekers and employers, with user-friendly
            interfaces and secure authentication.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I post a job?</AccordionTrigger>
          <AccordionContent>
            As an employer, you can post a job by navigating to the 'Post Job'
            section after logging in. Fill in the job details and submit the
            form to create a new job listing.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How can i search for jobs?</AccordionTrigger>
          <AccordionContent>
            Job seekers can search for jobs by keywords, location, category, and
            other filters using the search bar on the homepage or the dedicated
            job search page.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How do I apply for a job?</AccordionTrigger>
          <AccordionContent>
            To apply for a job, click on the job listing and follow the
            application instructions provided. You may need to upload your
            resume and provide additional information.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Can i save jobs to apply later?</AccordionTrigger>
          <AccordionContent>
            Yes, you can save job listings by clicking the 'Save Job' button on
            the job listing. Saved jobs can be accessed from your profile under
            the 'Saved Jobs' section.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>How can I track my applications?</AccordionTrigger>
          <AccordionContent>
            Job seekers can track the status of their applications from the
            'Applications' section in their profile. This section provides
            updates on the progress of each application.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default LandingPage;
