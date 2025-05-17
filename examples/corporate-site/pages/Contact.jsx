/**
 * Contact page component for the corporate website
 * 
 * Displays contact form and company contact information
 * @module examples/corporate-site/pages/Contact
 */
import React, { useState } from 'react';
import { 
  TwoColumnLayout, 
  Card, 
  Input, 
  Textarea, 
  Select, 
  Button, 
  FormGroup, 
  FormLabel, 
  FormHelperText, 
  Alert,
  Divider
} from '@voilajsx/uikit';

import { 
  UserIcon, 
  BellIcon, 
  CogIcon
} from '@voilajsx/uikit/icons';

/**
 * Contact component for corporate site contact page
 * 
 * @returns {JSX.Element} The rendered Contact component
 */
const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: ''
  });
  
  // Form validation state
  const [errors, setErrors] = useState({});
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  /**
   * Updates form state when input values change
   * @param {Event} e - The input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  /**
   * Validates the form data
   * @returns {boolean} Whether the form is valid
   */
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message should be at least 20 characters';
    }
    
    // Department validation
    if (!formData.department) {
      newErrors.department = 'Please select a department';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  /**
   * Handles form submission
   * @param {Event} e - The form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          department: ''
        });
      }, 1500);
    }
  };
  
  // Sample office locations
  const offices = [
    {
      name: 'Headquarters',
      address: '123 Innovation Drive, San Francisco, CA 94103, USA',
      phone: '+1 (415) 555-1234',
      email: 'info@voilajsx.com'
    },
    {
      name: 'European Office',
      address: '45 Tech Square, London, EC2A 4PF, United Kingdom',
      phone: '+44 20 7123 4567',
      email: 'europe@voilajsx.com'
    },
    {
      name: 'Asia-Pacific Office',
      address: '8 Marina View, Singapore 018960',
      phone: '+65 6123 4567',
      email: 'apac@voilajsx.com'
    }
  ];
  
  // Sample social media links
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Instagram', url: 'https://instagram.com' }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-[var(--primary-color)] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions or want to learn more about our solutions? We're here to help.
            Reach out to our team and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <TwoColumnLayout ratio="3fr 2fr" gap="var(--spacing-8)">
            <TwoColumnLayout.Primary>
              <Card>
                <Card.Header>
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                </Card.Header>
                <Card.Body>
                  {submitted ? (
                    <Alert variant="success" title="Message Sent!">
                      Thank you for contacting us. We've received your message and will get back to you within 1-2 business days.
                    </Alert>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormGroup>
                            <FormLabel htmlFor="name" required>Name</FormLabel>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              error={!!errors.name}
                              leftIcon={<UserIcon />}
                            />
                            {errors.name && (
                              <FormHelperText error>{errors.name}</FormHelperText>
                            )}
                          </FormGroup>
                          
                          <FormGroup>
                            <FormLabel htmlFor="email" required>Email</FormLabel>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              error={!!errors.email}
                            />
                            {errors.email && (
                              <FormHelperText error>{errors.email}</FormHelperText>
                            )}
                          </FormGroup>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormGroup>
                            <FormLabel htmlFor="phone">Phone (Optional)</FormLabel>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </FormGroup>
                          
                          <FormGroup>
                            <FormLabel htmlFor="department" required>Department</FormLabel>
                            <Select
                              id="department"
                              name="department"
                              value={formData.department}
                              onChange={handleChange}
                              error={!!errors.department}
                            >
                              <option value="">Select a department</option>
                              <option value="sales">Sales</option>
                              <option value="support">Technical Support</option>
                              <option value="billing">Billing</option>
                              <option value="partnerships">Partnerships</option>
                              <option value="careers">Careers</option>
                            </Select>
                            {errors.department && (
                              <FormHelperText error>{errors.department}</FormHelperText>
                            )}
                          </FormGroup>
                        </div>
                        
                        <FormGroup>
                          <FormLabel htmlFor="subject" required>Subject</FormLabel>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            error={!!errors.subject}
                          />
                          {errors.subject && (
                            <FormHelperText error>{errors.subject}</FormHelperText>
                          )}
                        </FormGroup>
                        
                        <FormGroup>
                          <FormLabel htmlFor="message" required>Message</FormLabel>
                          <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            error={!!errors.message}
                          />
                          {errors.message && (
                            <FormHelperText error>{errors.message}</FormHelperText>
                          )}
                        </FormGroup>
                        
                        <div className="flex justify-end">
                          <Button 
                            type="submit" 
                            isLoading={isSubmitting}
                            loadingText="Sending..."
                          >
                            Send Message
                          </Button>
                        </div>
                      </div>
                    </form>
                  )}
                </Card.Body>
              </Card>
            </TwoColumnLayout.Primary>
            
            <TwoColumnLayout.Secondary>
              <Card className="mb-6">
                <Card.Header>
                  <h2 className="text-xl font-bold">Our Offices</h2>
                </Card.Header>
                <Card.Body>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className={index > 0 ? 'pt-4 border-t border-[var(--border-color-default)]' : ''}>
                        <h3 className="font-semibold text-lg mb-2">{office.name}</h3>
                        <div className="space-y-2 text-[var(--text-secondary)]">
                          <p>{office.address}</p>
                          <p>Phone: {office.phone}</p>
                          <p>Email: {office.email}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
              
              <Card>
                <Card.Header>
                  <h2 className="text-xl font-bold">Connect With Us</h2>
                </Card.Header>
                <Card.Body>
                  <p className="mb-4">Follow us on social media for the latest updates and industry insights.</p>
                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map((link, index) => (
                      <Button key={index} variant="outline" href={link.url}>
                        {link.name}
                      </Button>
                    ))}
                  </div>
                  
                  <Divider className="my-6" />
                  
                  <div>
                    <h3 className="font-semibold mb-2">Support Hours</h3>
                    <p className="text-[var(--text-secondary)]">Monday - Friday: 9AM - 6PM (Local Time)</p>
                    <p className="text-[var(--text-secondary)]">
                      For urgent inquiries outside business hours, please email <strong>support@voilajsx.com</strong>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </TwoColumnLayout.Secondary>
          </TwoColumnLayout>
        </div>
      </section>
    </div>
  );
};

export default Contact;