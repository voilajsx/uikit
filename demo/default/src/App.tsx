import React, { useState } from 'react';
import { ThemeProvider } from '@voilajsx/uikit/theme-provider';
import { PageLayout } from '@voilajsx/uikit/page';
import {
  ValidatedInput,
  ValidatedCheckbox,
  FormActions,
} from '@voilajsx/uikit/form';
import { Card, CardContent, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Motion, Reveal, Hover } from '@voilajsx/uikit/motion';
import { Home, Info, Stethoscope, Mail } from 'lucide-react';
import '@voilajsx/uikit/styles';

const navigation = [
  { key: 'home', label: 'Home', href: '#home', icon: Home, isActive: true },
  { key: 'about', label: 'About', href: '#about', icon: Info },
  { key: 'services', label: 'Services', href: '#services', icon: Stethoscope },
  { key: 'contact', label: 'Contact', href: '#contact', icon: Mail },
];

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsLoading(false);
  };

  const handleNavigation = (href: string) => {
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme="studio" mode="light">
      <PageLayout scheme="default" tone="clean" size="xl">
        <PageLayout.Header
          logo={
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">B</span>
              </div>
              <span className="text-xl font-bold text-foreground">Brand Health Studio</span>
            </div>
          }
          navigation={navigation}
          onNavigate={handleNavigation}
          position="sticky"
        />

        <PageLayout.Content>
          {/* Hero Section */}
          <section id="home" className="py-20 bg-background">
            <Reveal preset="fadeIn" duration="normal">
              <div className="text-center">
                <img
                  src="https://source.unsplash.com/1600x900/?health,wellness"
                  alt="Health and Wellness"
                  className="w-full h-96 object-cover rounded-lg mb-6"
                />
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  Welcome to Brand Health Studio
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Empowering your journey to optimal health and wellness.
                </p>
                <Hover effect="scale">
                  <Button
                    className="bg-primary text-primary-foreground"
                    onClick={() => handleNavigation('#services')}
                  >
                    Explore Services
                  </Button>
                </Hover>
              </div>
            </Reveal>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-muted">
            <Reveal preset="slideInUp" duration="normal">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">About Us</h2>
                  <p className="text-muted-foreground mb-4">
                    Brand Health Studio is a leading health company dedicated to providing
                    comprehensive wellness solutions. Our team of experts focuses on
                    preventive care, personalized fitness programs, and nutritional guidance.
                  </p>
                  <p className="text-muted-foreground">
                    We integrate the latest advancements in health technology to deliver
                    superior outcomes for our clients.
                  </p>
                </div>
                <Hover effect="lift">
                  <img
                    src="https://source.unsplash.com/800x600/?doctor,health"
                    alt="Health Professional"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </Hover>
              </div>
            </Reveal>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-background">
            <Reveal preset="fadeIn" duration="normal">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                Our Services
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: 'Fitness Programs',
                    description: 'Tailored exercise regimens to enhance strength and endurance.',
                    image: 'https://source.unsplash.com/400x300/?fitness',
                    delay: 0,
                  },
                  {
                    title: 'Nutritional Guidance',
                    description: 'Expert advice on balanced diets and meal planning.',
                    image: 'https://source.unsplash.com/400x300/?nutrition',
                    delay: 100,
                  },
                  {
                    title: 'Mental Wellness',
                    description: 'Therapies and mindfulness practices for mental resilience.',
                    image: 'https://source.unsplash.com/400x300/?mental-health',
                    delay: 200,
                  },
                ].map((service) => (
                  <Motion key={service.title} preset="slideInUp" delay={service.delay}>
                    <Hover effect="lift">
                      <Card className="bg-card border-border">
                        <CardHeader>
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                        </CardHeader>
                        <CardContent>
                          <CardTitle className="text-foreground mb-2">{service.title}</CardTitle>
                          <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                      </Card>
                    </Hover>
                  </Motion>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-contrast text-primary-foreground">
            <Reveal preset="fadeIn" duration="normal">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-primary-foreground mb-4">Contact Us</h2>
                <p className="text-primary-foreground mb-8">
                  Reach out for inquiries or to schedule a consultation.
                </p>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
                  <ValidatedInput
                    type="text"
                    required
                    label="Name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, name: value }))
                    }
                    className="bg-background border-border text-foreground"
                  />
                  <ValidatedInput
                    type="email"
                    required
                    label="Email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, email: value }))
                    }
                    className="bg-background border-border text-foreground"
                  />
                
                  <ValidatedCheckbox
                    required
                    label="I agree to the terms and conditions"
                    description="Please read our terms before submitting"
                    checked={formData.agree}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, agree: value }))
                    }
                  />
                  <FormActions
                    submitText="Send Message"
                    showCancel={false}
                    loading={isLoading}
                    disabled={!formData.name || !formData.email || !formData.message || !formData.agree}
                  />
                </form>
              </div>
            </Reveal>
          </section>
        </PageLayout.Content>

        <PageLayout.Footer
          tone="contrast"
          copyright="© 2025 Brand Health Studio. All rights reserved."
          navigation={[
            { key: 'privacy', label: 'Privacy Policy', href: '/privacy' },
            { key: 'terms', label: 'Terms of Service', href: '/terms' },
          ]}
        />
      </PageLayout>
    </ThemeProvider>
  );
};

export default App;