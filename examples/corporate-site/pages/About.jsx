/**
 * About page component for the corporate website
 * 
 * Displays company information, mission, team, and values
 * @module examples/corporate-site/pages/About
 */
import React from 'react';
import { 
  CenteredLayout, 
  TwoColumnLayout, 
  Card, 
  Avatar, 
  Divider, 
  Badge 
} from '@voilajsx/uikit';

import { 
  UserIcon, 
  CogIcon, 
  HomeIcon, 
  ChartBarIcon 
} from '@voilajsx/uikit/icons';

/**
 * About component for corporate site about page
 * 
 * @returns {JSX.Element} The rendered About component
 */
const About = () => {
  // Sample company values data
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to create cutting-edge solutions that drive meaningful impact.',
      icon: <CogIcon size="lg" className="text-[var(--primary-color)]" />
    },
    {
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our business practices and relationships.',
      icon: <UserIcon size="lg" className="text-[var(--primary-color)]" />
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships to achieve extraordinary results.',
      icon: <UserIcon size="lg" className="text-[var(--primary-color)]" />
    },
    {
      title: 'Global Impact',
      description: 'We strive to create solutions that positively impact businesses and communities worldwide.',
      icon: <HomeIcon size="lg" className="text-[var(--primary-color)]" />
    }
  ];

  // Sample team members data
  const teamMembers = [
    {
      name: 'Alexandra Chen',
      role: 'Chief Executive Officer',
      bio: 'With over 15 years of industry experience, Alexandra leads our company vision and strategy.',
      image: null // Will use Avatar fallback
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Michael brings 20 years of technical expertise and guides our product innovation.',
      image: null
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Marketing Officer',
      bio: 'Sarah has led marketing for top tech companies and drives our market positioning.',
      image: null
    },
    {
      name: 'David Kim',
      role: 'Chief Financial Officer',
      bio: 'David's financial acumen has helped scale multiple global enterprises successfully.',
      image: null
    },
    {
      name: 'Priya Patel',
      role: 'VP of Customer Success',
      bio: 'Priya ensures our clients achieve their business goals through our solutions.',
      image: null
    },
    {
      name: 'James Wilson',
      role: 'VP of Product',
      bio: 'James shapes our product roadmap to address evolving market needs.',
      image: null
    }
  ];

  // Timeline events
  const timelineEvents = [
    { year: '2010', event: 'Company founded with a mission to transform enterprise software' },
    { year: '2012', event: 'Released our first enterprise platform with 10 initial clients' },
    { year: '2015', event: 'Expanded operations to Europe with new office in London' },
    { year: '2017', event: 'Surpassed 100 enterprise clients globally' },
    { year: '2019', event: 'Launched next-generation platform with AI capabilities' },
    { year: '2021', event: 'Opened Asia-Pacific headquarters in Singapore' },
    { year: '2023', event: 'Reached milestone of supporting 500+ global enterprises' }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-[var(--primary-color)] text-white py-20">
        <CenteredLayout>
          <Badge variant="secondary" className="mb-4">Our Story</Badge>
          <h1 className="text-4xl font-bold mb-6 text-center">About VoilaJSX</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            We're on a mission to empower businesses with intelligent, scalable solutions that drive 
            growth and innovation in an increasingly complex digital landscape.
          </p>
        </CenteredLayout>
      </section>

      {/* About Content Section */}
      <section className="py-20">
        <TwoColumnLayout ratio="1fr 1fr" className="items-center">
          <TwoColumnLayout.Primary>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="mb-4 text-lg">
              At VoilaJSX, we believe technology should empower organizations to achieve their most ambitious goals. 
              Our mission is to create intuitive, powerful software that solves complex business challenges 
              and enables sustainable growth.
            </p>
            <p className="mb-6 text-lg">
              Since our founding in 2010, we've been dedicated to building solutions that combine cutting-edge 
              innovation with practical usability. Today, we serve over 500 enterprises across 40+ countries, 
              helping them transform their operations and deliver exceptional value to their customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge variant="primary">Enterprise Software</Badge>
              <Badge variant="primary">Digital Transformation</Badge>
              <Badge variant="primary">Cloud Solutions</Badge>
              <Badge variant="primary">AI & Analytics</Badge>
            </div>
          </TwoColumnLayout.Primary>
          
          <TwoColumnLayout.Secondary>
            <div className="bg-[var(--bg-subtle)] rounded-[var(--radius-lg)] overflow-hidden">
              <img 
                src="/api/placeholder/600/400" 
                alt="Company office" 
                className="w-full h-auto" 
              />
            </div>
          </TwoColumnLayout.Secondary>
        </TwoColumnLayout>
      </section>

      {/* Values Section */}
      <section className="bg-[var(--bg-subtle)] py-20">
        <CenteredLayout>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Core Values</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto text-center mb-12">
            These principles guide everything we do – from how we build our products to how we interact with our clients and each other.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <Card.Body>
                  <div className="mb-4 p-3 bg-[var(--primary-color)] bg-opacity-10 inline-block rounded-[var(--radius-default)]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-[var(--text-secondary)]">{value.description}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </CenteredLayout>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <CenteredLayout>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Leadership Team</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto text-center mb-12">
            Meet the talented individuals who drive our vision, strategy, and commitment to excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="h-full">
                <Card.Body className="text-center">
                  <Avatar 
                    name={member.name}
                    src={member.image}
                    size="xl"
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[var(--primary-color)] mb-4">{member.role}</p>
                  <p className="text-[var(--text-secondary)]">{member.bio}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </CenteredLayout>
      </section>

      {/* Timeline Section */}
      <section className="bg-[var(--bg-subtle)] py-20">
        <CenteredLayout>
          <h2 className="text-3xl font-bold mb-6 text-center">Our Journey</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto text-center mb-12">
            From our humble beginnings to becoming a global leader in enterprise solutions.
          </p>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-[var(--border-color-default)]"></div>
            
            {timelineEvents.map((item, index) => (
              <div key={index} className="flex mb-8 relative">
                <div className="bg-[var(--primary-color)] text-white rounded-full w-14 h-14 flex-shrink-0 flex items-center justify-center z-10">
                  {item.year}
                </div>
                <div className="ml-6 bg-white p-4 rounded-[var(--radius-default)] border border-[var(--border-color-default)] flex-1 shadow-[var(--shadow-sm)]">
                  <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </CenteredLayout>
      </section>
    </div>
  );
};

export default About;