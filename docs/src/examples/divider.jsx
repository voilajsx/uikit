/**
 * Divider Component Example
 * 
 * Demonstrates various divider variants, orientations, and use cases
 */

import React from 'react';
import { Divider } from '../../../src/components/elements';
import { Card } from '../../../src/components/display';

const DividerExample = () => {
  return (
    <div>
      <div className="test-section">
        <h2>Basic Dividers</h2>
        <p>Simple horizontal divider</p>
        <Divider />
        <p>Dividers create visual separation between content sections</p>
      </div>
      
      <div className="test-section">
        <h2>Divider Variants</h2>
        <div className="space-y-6">
          <div>
            <p>Default divider</p>
            <Divider variant="default" />
          </div>
          
          <div>
            <p>Primary divider</p>
            <Divider variant="primary" />
          </div>
          
          <div>
            <p>Secondary divider</p>
            <Divider variant="secondary" />
          </div>
          
          <div>
            <p>Success divider</p>
            <Divider variant="success" />
          </div>
          
          <div>
            <p>Danger divider</p>
            <Divider variant="danger" />
          </div>
          
          <div>
            <p>Warning divider</p>
            <Divider variant="warning" />
          </div>
          
          <div>
            <p>Info divider</p>
            <Divider variant="info" />
          </div>
          
          <div>
            <p>Light divider (visible on dark backgrounds)</p>
            <div className="bg-gray-800 p-4">
              <Divider variant="light" />
            </div>
          </div>
          
          <div>
            <p>Dark divider</p>
            <Divider variant="dark" />
          </div>
          
          <div>
            <p>Dashed divider</p>
            <Divider variant="dashed" />
          </div>
          
          <div>
            <p>Dotted divider</p>
            <Divider variant="dotted" />
          </div>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Divider with Text</h2>
        <div className="space-y-6">
          <div>
            <Divider withText>OR</Divider>
          </div>
          
          <div>
            <Divider withText variant="primary">SECTION BREAK</Divider>
          </div>
          
          <div>
            <Divider withText textPosition="left">LEFT TEXT</Divider>
          </div>
          
          <div>
            <Divider withText textPosition="center">CENTER TEXT</Divider>
          </div>
          
          <div>
            <Divider withText textPosition="right">RIGHT TEXT</Divider>
          </div>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Vertical Dividers</h2>
        <div className="h-24 flex items-center">
          <span>Left Content</span>
          <Divider orientation="vertical" />
          <span>Middle Content</span>
          <Divider orientation="vertical" variant="primary" />
          <span>Right Content</span>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Divider Thickness</h2>
        <div className="space-y-6">
          <div>
            <p>Extra Small (xs)</p>
            <Divider thickness="xs" variant="primary" />
          </div>
          
          <div>
            <p>Small (sm)</p>
            <Divider thickness="sm" variant="primary" />
          </div>
          
          <div>
            <p>Medium (md) - Default</p>
            <Divider thickness="md" variant="primary" />
          </div>
          
          <div>
            <p>Large (lg)</p>
            <Divider thickness="lg" variant="primary" />
          </div>
          
          <div>
            <p>Extra Large (xl)</p>
            <Divider thickness="xl" variant="primary" />
          </div>
        </div>
      </div>
      
      <div className="test-section">
        <h2>Custom Styling</h2>
        <div className="space-y-6">
          <Divider className="rounded-full" />
          
          <Divider 
            variant="primary" 
            className="opacity-50" 
          />
          
          <Divider 
            className="bg-gradient-to-r from-purple-500 to-pink-500" 
          />
        </div>
      </div>
      
      <div className="test-section">
        <h2>Divider Use Cases</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Form Sections</h3>
            <Card>
              <Card.Body>
                <h4 className="text-lg font-medium mb-4">Personal Information</h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-1">First Name</label>
                    <input type="text" className="w-full border p-2 rounded" />
                  </div>
                  <div>
                    <label className="block mb-1">Last Name</label>
                    <input type="text" className="w-full border p-2 rounded" />
                  </div>
                </div>
                
                <Divider withText textPosition="left">Contact Details</Divider>
                
                <div className="grid grid-cols-2 gap-4 my-4">
                  <div>
                    <label className="block mb-1">Email</label>
                    <input type="email" className="w-full border p-2 rounded" />
                  </div>
                  <div>
                    <label className="block mb-1">Phone</label>
                    <input type="tel" className="w-full border p-2 rounded" />
                  </div>
                </div>
                
                <Divider withText textPosition="left">Address</Divider>
                
                <div className="my-4">
                  <label className="block mb-1">Street Address</label>
                  <input type="text" className="w-full border p-2 rounded" />
                </div>
              </Card.Body>
            </Card>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Content Sections</h3>
            <article className="prose max-w-2xl">
              <h4>Introduction</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
                Donec in efficitur ipsum, in egestas libero.
              </p>
              
              <Divider />
              
              <h4>Main Points</h4>
              <p>
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                Curabitur lacinia enim at ex blandit, vel pellentesque odio elementum.
              </p>
              
              <Divider />
              
              <h4>Conclusion</h4>
              <p>
                Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat.
                Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor.
              </p>
            </article>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">List with Dividers</h3>
            <div className="bg-[var(--bg-subtle)] rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Team meeting</h4>
                    <p className="text-sm text-[var(--text-secondary)]">10:00 AM - 11:00 AM</p>
                  </div>
                  <span className="text-sm bg-[var(--primary-color)] text-white px-2 py-1 rounded">Today</span>
                </div>
              </div>
              
              <Divider className="m-0" />
              
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Project review</h4>
                    <p className="text-sm text-[var(--text-secondary)]">2:00 PM - 3:30 PM</p>
                  </div>
                  <span className="text-sm bg-[var(--primary-color)] text-white px-2 py-1 rounded">Today</span>
                </div>
              </div>
              
              <Divider className="m-0" />
              
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Client call</h4>
                    <p className="text-sm text-[var(--text-secondary)]">9:30 AM - 10:00 AM</p>
                  </div>
                  <span className="text-sm bg-[var(--bg-muted)] text-[var(--text-secondary)] px-2 py-1 rounded">Tomorrow</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Menu with Vertical Dividers</h3>
            <nav className="bg-[var(--bg-subtle)] p-4 rounded-lg">
              <ul className="flex items-center">
                <li className="px-4">Home</li>
                <Divider orientation="vertical" className="h-6" />
                <li className="px-4">Products</li>
                <Divider orientation="vertical" className="h-6" />
                <li className="px-4">Services</li>
                <Divider orientation="vertical" className="h-6" />
                <li className="px-4">About</li>
                <Divider orientation="vertical" className="h-6" />
                <li className="px-4">Contact</li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Footer with Divider</h3>
            <footer className="bg-[var(--bg-subtle)] p-6 rounded-lg">
              <div className="flex flex-wrap justify-between">
                <div>
                  <h4 className="font-medium mb-2">Company Name</h4>
                  <p className="text-sm text-[var(--text-secondary)]">Making the world a better place through design.</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Contact</h4>
                  <p className="text-sm text-[var(--text-secondary)]">info@example.com</p>
                  <p className="text-sm text-[var(--text-secondary)]">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <Divider className="my-6" />
              
              <div className="flex justify-between items-center">
                <p className="text-sm text-[var(--text-secondary)]">© 2023 Company. All rights reserved.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Privacy</a>
                  <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Terms</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DividerExample;