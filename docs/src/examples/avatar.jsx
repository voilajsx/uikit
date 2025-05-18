/**
 * Avatar Component Example
 * 
 * Demonstrates various avatar variants, sizes, and use cases
 */

import React from 'react';
import { Avatar } from '../../../src/components/elements';
import { Card } from '../../../src/components/display';
import { Badge } from '../../../src/components/elements';

const AvatarExample = () => {
  return (
    <div>
      <div className="test-section">
        <h2>Avatar Sizes</h2>
        <div className="test-row flex items-center gap-4">
          <Avatar size="xs" name="John Doe" />
          <Avatar size="sm" name="John Doe" />
          <Avatar size="md" name="John Doe" />
          <Avatar size="lg" name="John Doe" />
          <Avatar size="xl" name="John Doe" />
          <Avatar size="2xl" name="John Doe" />
        </div>
      </div>
      
      <div className="test-section">
        <h2>Avatar with Images</h2>
        <div className="test-row flex items-center gap-4">
          <Avatar
            size="md"
            src="https://randomuser.me/api/portraits/women/21.jpg"
            name="Jane Smith"
          />
          <Avatar
            size="md"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            name="John Smith"
          />
          <Avatar
            size="md"
            src="https://randomuser.me/api/portraits/women/44.jpg"
            name="Emily Johnson"
          />
          <Avatar
            size="md"
            src="https://randomuser.me/api/portraits/men/56.jpg"
            name="Michael Brown"
          />
          {/* Avatar with broken image source - will display initials */}
          <Avatar
            size="md"
            src="https://non-existent-image.jpg"
            name="Broken Image"
          />
        </div>
      </div>
      
      <div className="test-section">
        <h2>Avatar Shapes</h2>
        <div className="test-row flex items-center gap-4">
          <Avatar
            name="John Doe"
            size="lg"
          />
          <Avatar
            name="John Doe"
            size="lg"
            squared
          />
          <Avatar
            name="John Doe"
            size="lg"
            bordered
          />
          <Avatar
            name="John Doe"
            size="lg"
            squared
            bordered
          />
          <Avatar
            name="John Doe"
            size="lg"
            bordered
            borderColor="var(--primary-color)"
          />
        </div>
      </div>
      
      <div className="test-section">
        <h2>Avatar with Status</h2>
        <div className="test-row flex items-center gap-4">
          <Avatar
            name="Online User"
            status="online"
            size="md"
          />
          <Avatar
            name="Offline User"
            status="offline"
            size="md"
          />
          <Avatar
            name="Away User"
            status="away"
            size="md"
          />
          <Avatar
            name="Busy User"
            status="busy"
            size="md"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/21.jpg"
            name="Jane Smith"
            status="online"
            size="md"
          />
        </div>
      </div>
      
      <div className="test-section">
        <h2>Avatar with Custom Styling</h2>
        <div className="test-row flex items-center gap-4">
          <Avatar
            name="John Doe"
            className="shadow-lg"
          />
          <Avatar
            name="Jane Smith"
            style={{ filter: 'grayscale(100%)' }}
            src="https://randomuser.me/api/portraits/women/21.jpg"
          />
          <Avatar
            name="Custom Avatar"
            className="border-4 border-indigo-500"
          />
          <Avatar
            name="Elevated"
            className="shadow-xl hover:scale-110 transition-transform duration-200"
          />
        </div>
      </div>
      
      <div className="test-section">
        <h2>Avatar Use Cases</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Avatar Groups</h3>
            <div className="flex -space-x-2">
              <Avatar
                src="https://randomuser.me/api/portraits/men/32.jpg"
                name="User 1"
                bordered
              />
              <Avatar
                src="https://randomuser.me/api/portraits/women/21.jpg"
                name="User 2"
                bordered
              />
              <Avatar
                src="https://randomuser.me/api/portraits/men/56.jpg"
                name="User 3"
                bordered
              />
              <Avatar
                name="User 4"
                bordered
              />
              <Avatar
                name="+5"
                bordered
                className="bg-[var(--bg-subtle)] text-[var(--text-primary)]"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">User Profile Card</h3>
            <Card>
              <Card.Body>
                <div className="flex items-center">
                  <Avatar
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    name="Emily Johnson"
                    size="xl"
                    status="online"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Emily Johnson</h4>
                    <p className="text-[var(--text-secondary)]">Product Designer</p>
                    <div className="mt-2">
                      <Badge variant="success">Pro User</Badge>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Comment Section</h3>
            <div className="space-y-4">
              <div className="flex">
                <Avatar
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  name="John Smith"
                  size="md"
                  className="mr-3 flex-shrink-0"
                />
                <div className="bg-[var(--bg-subtle)] rounded-lg p-3 flex-grow">
                  <div className="flex justify-between">
                    <h4 className="font-medium">John Smith</h4>
                    <span className="text-sm text-[var(--text-secondary)]">2 hours ago</span>
                  </div>
                  <p className="mt-1">This looks great! I'm really impressed with the new design.</p>
                </div>
              </div>
              
              <div className="flex">
                <Avatar
                  name="Lisa Wang"
                  size="md"
                  className="mr-3 flex-shrink-0"
                />
                <div className="bg-[var(--bg-subtle)] rounded-lg p-3 flex-grow">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Lisa Wang</h4>
                    <span className="text-sm text-[var(--text-secondary)]">1 hour ago</span>
                  </div>
                  <p className="mt-1">Thanks for the feedback! We worked hard on this update.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Team Members List</h3>
            <Card>
              <Card.Body className="p-0">
                <div className="divide-y divide-[var(--border-color-default)]">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <Avatar
                        src="https://randomuser.me/api/portraits/women/21.jpg"
                        name="Jane Smith"
                        status="online"
                        className="mr-3"
                      />
                      <div>
                        <h4 className="font-medium">Jane Smith</h4>
                        <p className="text-sm text-[var(--text-secondary)]">CEO</p>
                      </div>
                    </div>
                    <Badge variant="primary">Admin</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <Avatar
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        name="John Smith"
                        status="busy"
                        className="mr-3"
                      />
                      <div>
                        <h4 className="font-medium">John Smith</h4>
                        <p className="text-sm text-[var(--text-secondary)]">CTO</p>
                      </div>
                    </div>
                    <Badge variant="primary">Admin</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center">
                      <Avatar
                        name="Mike Johnson"
                        status="away"
                        className="mr-3"
                      />
                      <div>
                        <h4 className="font-medium">Mike Johnson</h4>
                        <p className="text-sm text-[var(--text-secondary)]">Developer</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Member</Badge>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarExample;