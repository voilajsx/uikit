/**
 * Home page component for the corporate website
 * 
 * Displays the landing page with hero section, features, testimonials, and call-to-action
 * @module examples/corporate-site/pages/Home
 */
import React from 'react';
import { 
  FullWidthLayout, 
  Button, 
  Card, 
  Badge, 
  Divider,
  StatCard
} from '@voilajsx/uikit';

import { 
  HomeIcon, 
  CheckIcon, 
  CogIcon, 
  ChartBarIcon 
} from '@voilajsx/uikit/icons';

/**
 * Home component for corporate site landing page
 * 
 * @returns {JSX.Element} The rendered Home component
 */
const Home = () => {
  // Sample features data
  const features = [
    {
      title: 'Innovative Solutions',
      description: 'Our cutting-edge technology helps you stay ahead of the competition',
      icon: <HomeIcon size="lg" className="text-[var(--primary-color)]" />
    },
    {
      title: 'Enterprise Security',
      description: 'Industry-leading security protocols to keep your data safe',
      icon: <CheckIcon size="lg" className="text-[var(--primary-color)]" />
    },
    {
      title: 'Customizable Platform',
      description: 'Tailor our solutions to meet your specific business needs',
      icon: <CogIcon size="lg" className="text-[var(--primary-color)]" />
    },
    {
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with our powerful analytics tools',
      icon: <ChartBarIcon size="lg" className="text-[var(--primary-color)]" />
    }
  ];

  // Sample stats data
  const stats = [
    { title: 'Clients', value: '500+', subtitle: 'Worldwide' },
    { title: 'Projects', value: '1,200+', subtitle: 'Completed' },
    { title: 'Uptime', value: '99.9%', subtitle: 'Reliability' },
    { title: 'Team', value: '120+', subtitle: 'Professionals' }
  ];

  // Sample testimonials
  const testimonials = [
    {
      quote: "VoilaJSX transformed our digital operations. The platform's flexibility and power allowed us to scale rapidly.",
      author: "Jane Cooper",
      role: "CEO, TechCorp Inc."
    },
    {
      quote: "The support team is exceptional. They've been responsive and helpful throughout our implementation journey.",
      author: "Marcus Johnson",
      role: "CTO, Innovate Solutions"
    },
    {
      quote: "We've seen a 40% increase in productivity since adopting VoilaJSX. The ROI has been significant.",
      author: "Sarah Chang",
      role: "Operations Director, Global Systems"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--primary-color)] text-white py-20">
        <FullWidthLayout.Container>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-10 md:mb-0 md:pr-12">
              <Badge variant="secondary" className="mb-4">Trusted by Industry Leaders</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Empower Your Business with Next-Generation Solutions
              </h1>
              <p className="text-xl mb-8 opacity-90">
                VoilaJSX provides enterprise-grade tools to streamline operations, enhance security, and drive growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-[var(--primary-color)]">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white p-1 rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Dashboard interface" 
                  className="w-full h-auto rounded-[var(--radius-default)]" 
                />
              </div>
            </div>
          </div>
        </FullWidthLayout.Container>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <FullWidthLayout maxWidth="var(--content-width-xl)">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Features</Badge>
            <h2 className="text-3xl font-bold mb-4">Why Choose VoilaJSX</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our platform offers a comprehensive suite of tools designed to address your most pressing business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <Card.Body>
                  <div className="mb-4 p-3 bg-[var(--primary-color)] bg-opacity-10 inline-block rounded-[var(--radius-default)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-[var(--text-secondary)]">{feature.description}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </FullWidthLayout>
      </section>
      
      {/* Stats Section */}
      <section className="bg-[var(--bg-subtle)] py-20">
        <FullWidthLayout maxWidth="var(--content-width-lg)">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                subtitle={stat.subtitle}
                className="h-full"
              />
            ))}
          </div>
        </FullWidthLayout>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <FullWidthLayout maxWidth="var(--content-width-lg)">
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              We've helped hundreds of businesses transform their operations and achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <Card.Body>
                  <div className="mb-4 text-[var(--primary-color)]">
                    <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.6893 29.5262C8.39729 29.5262 5.68047 28.3643 3.53884 26.0404C1.18403 23.5073 0.00663376 20.2474 0.00663376 16.2606C0.00663376 12.4829 1.07732 9.05799 3.2187 6.0858C5.57351 2.90402 8.82247 0.903199 12.9656 0.0831223L14.1316 3.05531C10.9422 4.08904 8.60511 5.44233 7.12043 7.11519C5.63576 8.78804 4.89342 10.6745 4.89342 12.7745C4.89342 13.8082 5.10685 14.6283 5.5337 15.2347C5.96055 15.8412 6.60961 16.1444 7.48087 16.1444C9.7293 16.1444 11.2353 16.7741 12.0004 18.0333C12.7655 19.2925 13.148 20.7238 13.148 22.3273C13.148 24.5989 12.552 26.3975 11.36 27.7231C10.3802 28.9251 9.18511 29.5262 7.77461 29.5262H11.6893Z" fill="currentColor"/>
                      <path d="M39.8412 29.5262C36.5492 29.5262 33.8324 28.3643 31.6908 26.0404C29.336 23.5073 28.1586 20.2474 28.1586 16.2606C28.1586 12.4829 29.2293 9.05799 31.3707 6.0858C33.7255 2.90402 36.9745 0.903199 41.1176 0.0831223L42.2836 3.05531C39.0942 4.08904 36.7571 5.44233 35.2724 7.11519C33.7877 8.78804 33.0454 10.6745 33.0454 12.7745C33.0454 13.8082 33.2588 14.6283 33.6857 15.2347C34.1125 15.8412 34.7616 16.1444 35.6328 16.1444C37.8813 16.1444 39.3873 16.7741 40.1524 18.0333C40.9175 19.2925 41.3 20.7238 41.3 22.3273C41.3 24.5989 40.704 26.3975 39.512 27.7231C38.5322 28.9251 37.3371 29.5262 35.9266 29.5262H39.8412Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-lg mb-6">{testimonial.quote}</p>
                  <Divider className="mb-4" />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-[var(--text-secondary)]">{testimonial.role}</p>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </FullWidthLayout>
      </section>
      
      {/* CTA Section */}
      <section className="bg-[var(--primary-color)] text-white py-20">
        <FullWidthLayout maxWidth="var(--content-width-lg)">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of leading companies leveraging our platform to drive growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="secondary" 
                size="lg"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white hover:text-[var(--primary-color)]"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </FullWidthLayout>
      </section>
    </div>
  );
};

export default Home;