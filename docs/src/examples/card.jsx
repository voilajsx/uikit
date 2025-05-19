

import React, { useState } from 'react';
import { Card } from '../../../src/components/display';
import { Button } from '../../../src/components/elements';
import { Badge } from '../../../src/components/elements';
import { Avatar } from '../../../src/components/elements';
import { Progress } from '../../../src/components/feedback';

const CardExample = () => {
  return (
    <div className="space-y-10">
      <div className="test-section">
        <h2 className="text-xl font-bold mb-4">Card Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <Card.Header>Default Card</Card.Header>
            <Card.Body>
              <p>This is a default card with standard styling.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Action</Button>
            </Card.Footer>
          </Card>
          
          <Card variant="elevated">
            <Card.Header>Elevated Card</Card.Header>
            <Card.Body>
              <p>This card has elevated styling with a larger shadow.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Action</Button>
            </Card.Footer>
          </Card>
          
          <Card variant="outline">
            <Card.Header>Outline Card</Card.Header>
            <Card.Body>
              <p>This card has an outline style with a more prominent border.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Action</Button>
            </Card.Footer>
          </Card>
          
          <Card variant="filled">
            <Card.Header>Filled Card</Card.Header>
            <Card.Body>
              <p>This card has a subtle background fill.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Action</Button>
            </Card.Footer>
          </Card>
          
          <Card variant="flat">
            <Card.Header>Flat Card</Card.Header>
            <Card.Body>
              <p>This card has no shadow or border.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Action</Button>
            </Card.Footer>
          </Card>
          
          <Card variant="primary">
            <Card.Header>Primary Card</Card.Header>
            <Card.Body>
              <p>This card uses the primary color theme.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Action</Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
      
      <div className="test-section">
        <h2 className="text-xl font-bold mb-4">Semantic Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card variant="success">
            <Card.Header>Success Card</Card.Header>
            <Card.Body>
              <p>This card indicates a successful operation or status.</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="success" size="sm">Action</Button>
            </Card.Footer>
          </Card>
          
          <Card variant="warning">
            <Card.Header>Warning Card</Card.Header>
            <Card.Body>
              <p>This card indicates a warning or caution notice.</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="warning" size="sm">Action</Button>
            </Card.Footer>
          </Card>
          
          <Card variant="danger">
            <Card.Header>Danger Card</Card.Header>
            <Card.Body>
              <p>This card indicates a dangerous or error condition.</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="danger" size="sm">Action</Button>
            </Card.Footer>
          </Card>
          
          <Card variant="info">
            <Card.Header>Info Card</Card.Header>
            <Card.Body>
              <p>This card provides general information to the user.</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="info" size="sm">Action</Button>
            </Card.Footer>
          </Card>
          
          <Card variant="secondary">
            <Card.Header>Secondary Card</Card.Header>
            <Card.Body>
              <p>This card uses the secondary color theme.</p>
            </Card.Body>
            <Card.Footer>
              <Button variant="secondary" size="sm">Action</Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
      
      <div className="test-section">
        <h2 className="text-xl font-bold mb-4">Card Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card size="sm">
            <Card.Header>Small Card</Card.Header>
            <Card.Body>
              <p>This is a small sized card with compact padding.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Action</Button>
            </Card.Footer>
          </Card>
          
          <Card size="md">
            <Card.Header>Medium Card</Card.Header>
            <Card.Body>
              <p>This is a medium sized card with standard padding.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Action</Button>
            </Card.Footer>
          </Card>
          
          <Card size="lg">
            <Card.Header>Large Card</Card.Header>
            <Card.Body>
              <p>This is a large sized card with expanded padding.</p>
            </Card.Body>
            <Card.Footer>
              <Button size="sm">Action</Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
      
      <div className="test-section">
        <h2 className="text-xl font-bold mb-4">Border Radius Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card radius="none">
            <Card.Header>No Radius</Card.Header>
            <Card.Body>
              <p>This card has no border radius (square corners).</p>
            </Card.Body>
          </Card>
          
          <Card radius="sm">
            <Card.Header>Small Radius</Card.Header>
            <Card.Body>
              <p>This card has a small border radius.</p>
            </Card.Body>
          </Card>
          
          <Card radius="md">
            <Card.Header>Medium Radius</Card.Header>
            <Card.Body>
              <p>This card has a medium border radius.</p>
            </Card.Body>
          </Card>
          
          <Card radius="lg">
            <Card.Header>Large Radius</Card.Header>
            <Card.Body>
              <p>This card has a large border radius.</p>
            </Card.Body>
          </Card>
          
          <Card radius="xl">
            <Card.Header>Extra Large Radius</Card.Header>
            <Card.Body>
              <p>This card has an extra large border radius.</p>
            </Card.Body>
          </Card>
          
          <Card radius="full">
            <Card.Header>Full Radius</Card.Header>
            <Card.Body>
              <p>This card has fully rounded corners.</p>
            </Card.Body>
          </Card>
        </div>
      </div>
      
      <div className="test-section">
        <h2 className="text-xl font-bold mb-4">Border Width Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card borderWidth="none">
            <Card.Header>No Border</Card.Header>
            <Card.Body>
              <p>This card has no border.</p>
            </Card.Body>
          </Card>
          
          <Card borderWidth="thin">
            <Card.Header>Thin Border</Card.Header>
            <Card.Body>
              <p>This card has a thin border.</p>
            </Card.Body>
          </Card>
          
          <Card borderWidth="medium">
            <Card.Header>Medium Border</Card.Header>
            <Card.Body>
              <p>This card has a medium border.</p>
            </Card.Body>
          </Card>
          
          <Card borderWidth="thick">
            <Card.Header>Thick Border</Card.Header>
            <Card.Body>
              <p>This card has a thick border.</p>
            </Card.Body>
          </Card>
        </div>
      </div>
      
      <div className="test-section">
        <h2 className="text-xl font-bold mb-4">Accent Border Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card accentPosition="left" accentColor="primary">
            <Card.Header>Left Accent</Card.Header>
            <Card.Body>
              <p>This card has a left accent border.</p>
            </Card.Body>
          </Card>
          
          <Card accentPosition="top" accentColor="success">
            <Card.Header>Top Accent</Card.Header>
            <Card.Body>
              <p>This card has a top accent border.</p>
            </Card.Body>
          </Card>
          
          <Card accentPosition="right" accentColor="warning">
            <Card.Header>Right Accent</Card.Header>
            <Card.Body>
              <p>This card has a right accent border.</p>
            </Card.Body>
          </Card>
          
          <Card accentPosition="bottom" accentColor="danger">
            <Card.Header>Bottom Accent</Card.Header>
            <Card.Body>
              <p>This card has a bottom accent border.</p>
            </Card.Body>
          </Card>
          
          <Card accentPosition="all" accentColor="info">
            <Card.Header>All Sides Accent</Card.Header>
            <Card.Body>
              <p>This card has accent borders on all sides.</p>
            </Card.Body>
          </Card>
        </div>
      </div>
      
      <div className="test-section">
        <h2 className="text-xl font-bold mb-4">Interactive and Hoverable Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card hoverable>
            <Card.Header>Hoverable Card</Card.Header>
            <Card.Body>
              <p>This card has hover effects but is not clickable.</p>
              <p>Hover over this card to see the shadow effect.</p>
            </Card.Body>
          </Card>
          
          <Card 
            interactive 
            onClick={() => alert('Card clicked!')}
          >
            <Card.Header>Interactive Card</Card.Header>
            <Card.Body>
              <p>This card is fully clickable and has hover effects.</p>
              <p>Click anywhere on this card to trigger an action.</p>
            </Card.Body>
          </Card>
        </div>
      </div>
      
      <div className="test-section">
        <h2 className="text-xl font-bold mb-4">Cards with Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <Card.Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
              alt="Meeting"
              position="top"
            />
            <Card.Body>
              <h3 className="text-lg font-semibold mb-2">Team Meeting</h3>
              <p>Productive discussion about the new project roadmap.</p>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <h3 className="text-lg font-semibold mb-2">Product Launch</h3>
              <p>Our new product line is ready for the market.</p>
            </Card.Body>
            <Card.Image 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Product"
              position="bottom"
            />
          </Card>
          
          <Card>
            <Card.Image 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Working"
              overlay={true}
              position="top"
            />
            <Card.Body>
              <h3 className="text-lg font-semibold mb-2">Overlay Effect</h3>
              <p>This image has a dark overlay applied to it.</p>
            </Card.Body>
          </Card>
        </div>
      </div>
      
      <div className="test-section">
        <h2 className="text-xl font-bold mb-4">Card Header and Footer Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <Card.Header noBorder>Header without Border</Card.Header>
            <Card.Body>
              <p>This card has a header without a bottom border.</p>
            </Card.Body>
            <Card.Footer>Standard Footer</Card.Footer>
          </Card>
          
          <Card>
            <Card.Header borderColor="primary">Custom Border Color</Card.Header>
            <Card.Body>
              <p>This card has a header with a custom border color.</p>
            </Card.Body>
            <Card.Footer borderColor="primary">Footer with Custom Border</Card.Footer>
          </Card>
          
          <Card>
            <Card.Header>Standard Header</Card.Header>
            <Card.Body>
              <p>This card has a standard header and a transparent footer.</p>
            </Card.Body>
            <Card.Footer transparent>Transparent Footer</Card.Footer>
          </Card>
          
          <Card>
            <Card.Header>Standard Header</Card.Header>
            <Card.Body>
              <p>This card has a standard header and a footer without border.</p>
            </Card.Body>
            <Card.Footer noBorder>Footer without Border</Card.Footer>
          </Card>
        </div>
      </div>
      
      <div className="test-section">
        <h2 className="text-xl font-bold mb-4">Shadow and Border Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card withShadow={false}>
            <Card.Header>No Shadow</Card.Header>
            <Card.Body>
              <p>This card has no shadow effect.</p>
            </Card.Body>
          </Card>
          
          <Card withBorder={false}>
            <Card.Header>No Border</Card.Header>
            <Card.Body>
              <p>This card has no border, only shadow.</p>
            </Card.Body>
          </Card>
          
          <Card withShadow={false} withBorder={false}>
            <Card.Header>No Shadow or Border</Card.Header>
            <Card.Body>
              <p>This card has neither shadow nor border.</p>
            </Card.Body>
          </Card>
        </div>
      </div>
      
      <div className="test-section">
        <h2 className="text-xl font-bold mb-4">Card Use Cases</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Profile Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <Card.Image 
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" 
                  alt="Profile Banner"
                  position="top"
                />
                <Card.Body>
                  <div className="flex items-center mb-4">
                    <Avatar
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      name="John Smith"
                      size="lg"
                      status="online"
                      className="mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">John Smith</h3>
                      <p className="text-sm text-gray-500">UI/UX Designer</p>
                    </div>
                  </div>
                  <p className="mb-4">Creating beautiful interfaces and experiences for web and mobile applications.</p>
                  <div className="flex space-x-2 mt-2">
                    <Badge variant="primary">UI Design</Badge>
                    <Badge variant="secondary">UX Design</Badge>
                    <Badge variant="info">Prototyping</Badge>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">Message</Button>
                    <Button variant="primary" size="sm">Follow</Button>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Metric Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <Card.Body>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500">Total Users</p>
                      <h3 className="text-2xl font-bold mt-1">24,532</h3>
                    </div>
                    <Badge variant="success">+12%</Badge>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-1">Growth</p>
                    <Progress value={75} size="sm" variant="success" />
                  </div>
                </Card.Body>
              </Card>
              
              <Card>
                <Card.Body>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500">Revenue</p>
                      <h3 className="text-2xl font-bold mt-1">$48,271</h3>
                    </div>
                    <Badge variant="success">+8%</Badge>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-1">Growth</p>
                    <Progress value={65} size="sm" variant="success" />
                  </div>
                </Card.Body>
              </Card>
              
              <Card>
                <Card.Body>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500">Conversion</p>
                      <h3 className="text-2xl font-bold mt-1">3.24%</h3>
                    </div>
                    <Badge variant="danger">-0.5%</Badge>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-1">Target</p>
                    <Progress value={45} size="sm" variant="danger" />
                  </div>
                </Card.Body>
              </Card>
              
              <Card>
                <Card.Body>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500">Active Users</p>
                      <h3 className="text-2xl font-bold mt-1">1,429</h3>
                    </div>
                    <Badge variant="success">+15%</Badge>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-1">Growth</p>
                    <Progress value={85} size="sm" variant="success" />
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Data Visualization Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <Card.Header>
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Monthly Sales</h3>
                    <Badge variant="success">+12% from last month</Badge>
                  </div>
                </Card.Header>
                <Card.Body className="h-80">
                  {/* Placeholder for LineChart component */}
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded">
                    [Line Chart Would Render Here]
                  </div>
                </Card.Body>
              </Card>
              
              <Card>
                <Card.Header>
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Product Categories</h3>
                    <Badge variant="info">Last 30 days</Badge>
                  </div>
                </Card.Header>
                <Card.Body className="h-80">
                  {/* Placeholder for BarChart component */}
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded">
                    [Bar Chart Would Render Here]
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Pricing Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card variant="outline">
                <Card.Header className="text-center">
                  <h3 className="text-xl font-bold">Basic</h3>
                </Card.Header>
                <Card.Body className="text-center">
                  <div className="my-4">
                    <span className="text-4xl font-bold">$9</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-2 text-left my-6">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      5 Projects
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      20GB Storage
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Basic Support
                    </li>
                  </ul>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button variant="outline" fullWidth>Choose Plan</Button>
                </Card.Footer>
              </Card>
              
              <Card variant="primary">
                <div className="absolute top-0 right-0 -translate-y-1/2 px-3 py-1 bg-[var(--primary-color)] text-white text-sm font-semibold rounded">
                  Popular
                </div>
                <Card.Header className="text-center">
                  <h3 className="text-xl font-bold">Pro</h3>
                </Card.Header>
                <Card.Body className="text-center">
                  <div className="my-4">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-2 text-left my-6">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      15 Projects
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      50GB Storage
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Priority Support
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Advanced Features
                    </li>
                  </ul>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button variant="primary" fullWidth>Choose Plan</Button>
                </Card.Footer>
              </Card>
              
              <Card variant="outline">
                <Card.Header className="text-center">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                </Card.Header>
                <Card.Body className="text-center">
                  <div className="my-4">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <ul className="space-y-2 text-left my-6">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Unlimited Projects
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      500GB Storage
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 Dedicated Support
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Custom Solutions
                    </li>
                  </ul>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button variant="outline" fullWidth>Contact Sales</Button>
                </Card.Footer>
              </Card>
            </div>
          </div>
      </div>
      </div>

      <div>
  <h3 className="text-lg font-semibold mb-2">Project Cards</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Card>
      <Card.Body>
        <div className="flex justify-between items-start mb-4">
          <div>
            <Badge variant="success" className="mb-2">Active</Badge>
            <h3 className="text-lg font-semibold">Website Redesign</h3>
          </div>
          <div className="bg-[var(--subtle-color)] p-2 rounded">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        <p className="text-sm mb-4">Complete overhaul of company website with new branding and improved UX.</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>72%</span>
          </div>
          <Progress value={72} size="sm" />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex -space-x-2">
            <Avatar size="sm" name="John D" bordered />
            <Avatar size="sm" name="Sarah K" bordered />
            <Avatar size="sm" name="Mike R" bordered />
          </div>
          <div className="text-sm text-gray-500">Due in 2 weeks</div>
        </div>
      </Card.Body>
    </Card>
    
    <Card>
      <Card.Body>
        <div className="flex justify-between items-start mb-4">
          <div>
            <Badge variant="warning" className="mb-2">In Review</Badge>
            <h3 className="text-lg font-semibold">Mobile Application</h3>
          </div>
          <div className="bg-[var(--subtle-color)] p-2 rounded">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <p className="text-sm mb-4">User-friendly mobile app for iOS and Android platforms.</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>89%</span>
          </div>
          <Progress value={89} size="sm" />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex -space-x-2">
            <Avatar size="sm" name="Lisa M" bordered />
            <Avatar size="sm" name="David P" bordered />
          </div>
          <div className="text-sm text-gray-500">Due next week</div>
        </div>
      </Card.Body>
    </Card>
    
    <Card>
      <Card.Body>
        <div className="flex justify-between items-start mb-4">
          <div>
            <Badge variant="danger" className="mb-2">Delayed</Badge>
            <h3 className="text-lg font-semibold">CRM Integration</h3>
          </div>
          <div className="bg-[var(--subtle-color)] p-2 rounded">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
          </div>
        </div>
        <p className="text-sm mb-4">Integration with third-party CRM system for customer management.</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>45%</span>
          </div>
          <Progress value={45} size="sm" variant="danger" />
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex -space-x-2">
            <Avatar size="sm" name="Alex T" bordered />
            <Avatar size="sm" name="James W" bordered />
            <Avatar size="sm" name="Emily R" bordered />
          </div>
          <div className="text-sm text-gray-500">Overdue by 1 week</div>
        </div>
      </Card.Body>
    </Card>
  </div>
</div>

<div>
  <h3 className="text-lg font-semibold mb-2">Product Cards</h3>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <Card hoverable>
      <Card.Image 
        src="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
        alt="Headphones"
        position="top"
      />
      <Card.Body>
        <Badge variant="info" className="mb-2">New Arrival</Badge>
        <h3 className="text-lg font-semibold">Wireless Headphones</h3>
        <div className="flex items-center my-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${star <= 4 ? 'text-yellow-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-1">(42)</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-lg font-bold">$149.99</span>
            <span className="text-sm text-gray-500 line-through ml-2">$199.99</span>
          </div>
          <Badge variant="success">25% OFF</Badge>
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" fullWidth>Add to Cart</Button>
      </Card.Footer>
    </Card>
    
    {/* Additional product cards would go here */}
  </div>
</div>

<div>
  <h3 className="text-lg font-semibold mb-2">Feature Cards</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Card>
      <Card.Body className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--primary-soft)] rounded-full text-[var(--primary-color)] mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
        <p className="text-gray-500">Our platform is optimized for speed, ensuring quick load times and responsive interfaces.</p>
      </Card.Body>
    </Card>
    
    <Card>
      <Card.Body className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--success-soft)] rounded-full text-[var(--success-color)] mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">Secure by Design</h3>
        <p className="text-gray-500">End-to-end encryption and robust security measures to protect your data.</p>
      </Card.Body>
    </Card>
    
    <Card>
      <Card.Body className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--info-soft)] rounded-full text-[var(--info-color)] mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
        <p className="text-gray-500">Our dedicated support team is available around the clock to assist you.</p>
      </Card.Body>
    </Card>
  </div>
</div>

<div>
  <h3 className="text-lg font-semibold mb-2">Blog Post Cards</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Card>
      <Card.Image 
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" 
        alt="Laptop"
        position="top"
      />
      <Card.Body>
        <div className="flex items-center mb-2">
          <Badge variant="primary">Technology</Badge>
          <span className="text-sm text-gray-500 ml-2">5 min read</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">The Future of Web Development</h3>
        <p className="text-gray-500 mb-4">Exploring new technologies and frameworks that are reshaping how we build for the web.</p>
        <div className="flex items-center mt-4">
          <Avatar size="sm" name="John Doe" src="https://randomuser.me/api/portraits/men/32.jpg" className="mr-2" />
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">May 15, 2023</p>
          </div>
        </div>
      </Card.Body>
    </Card>
    
    {/* Additional blog post cards would go here */}
  </div>
</div>

<div>
  <h3 className="text-lg font-semibold mb-2">Cards with Custom Styling</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card 
      className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
      withBorder={false}
    >
      <Card.Body>
        <h3 className="text-xl font-bold mb-2">Gradient Background</h3>
        <p>This card uses a custom gradient background.</p>
      </Card.Body>
    </Card>
    
    <Card 
      className="border-dashed border-2 border-purple-500"
      withShadow={false}
    >
      <Card.Body>
        <h3 className="text-xl font-bold mb-2">Dashed Border</h3>
        <p>This card has a custom dashed border style.</p>
      </Card.Body>
    </Card>
    
    <Card 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      withBorder={false}
    >
      <Card.Body className="text-white bg-black bg-opacity-50">
        <h3 className="text-xl font-bold mb-2">Background Image</h3>
        <p>This card has a background image with an overlay.</p>
      </Card.Body>
    </Card>
    
    <Card className="shadow-2xl shadow-blue-500/20">
      <Card.Body>
        <h3 className="text-xl font-bold mb-2">Custom Shadow</h3>
        <p>This card has a custom colored shadow effect.</p>
      </Card.Body>
    </Card>
  </div>
</div>

<div>
  <h3 className="text-lg font-semibold mb-2">Different Layout Patterns</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Card>
      <div className="grid grid-cols-3 h-full">
        <div className="col-span-1 bg-[var(--primary-color)]">
          <div className="flex items-center justify-center h-full text-white">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
        </div>
        <div className="col-span-2 p-4">
          <h3 className="font-semibold mb-2">Split Column</h3>
          <p className="text-sm">This card uses a split column layout.</p>
        </div>
      </div>
    </Card>
    
    <Card className="flex flex-col">
      <Card.Body className="flex-grow">
        <h3 className="font-semibold mb-2">Flexible Height</h3>
        <p className="text-sm">This card will stretch to match the height of the tallest card in the row.</p>
      </Card.Body>
      <Card.Footer className="mt-auto">
        <Button size="sm" variant="outline" fullWidth>Action</Button>
      </Card.Footer>
    </Card>
    
    <Card>
      <Card.Body className="grid grid-cols-2 gap-2">
        <div className="bg-[var(--subtle-color)] p-3 rounded">
          <h4 className="font-medium text-sm mb-1">Section A</h4>
          <p className="text-xs">Content for section A</p>
        </div>
        <div className="bg-[var(--subtle-color)] p-3 rounded">
          <h4 className="font-medium text-sm mb-1">Section B</h4>
          <p className="text-xs">Content for section B</p>
        </div>
        <div className="bg-[var(--subtle-color)] p-3 rounded">
          <h4 className="font-medium text-sm mb-1">Section C</h4>
          <p className="text-xs">Content for section C</p>
        </div>
        <div className="bg-[var(--subtle-color)] p-3 rounded">
          <h4 className="font-medium text-sm mb-1">Section D</h4>
          <p className="text-xs">Content for section D</p>
        </div>
      </Card.Body>
    </Card>
  </div>
</div>

    </div>
  );
};      

function InteractiveCardExample() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Interactive Card with State</h3>
      <Card>
        <Card.Body>
          <h3 className="text-lg font-semibold mb-2">Expandable Content</h3>
          <p className="mb-4">This is a brief introduction to the content.</p>
          
          {expanded && (
            <div className="mt-4 p-4 bg-[var(--bg-subtle)] rounded-lg">
              <p>This is the expanded content that shows additional details when the user clicks the button below.</p>
              <p className="mt-2">It could include more text, images, or any other components.</p>
            </div>
          )}
          
          <Button 
            variant="outline" 
            onClick={() => setExpanded(!expanded)}
            className="mt-4"
          >
            {expanded ? 'Show Less' : 'Show More'}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
   
export default CardExample;