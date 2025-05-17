/**
 * Settings Page Component
 * 
 * Settings page with various configuration options organized into tabs.
 * Demonstrates form components for different settings categories.
 * 
 * @module examples/dashboard/pages/Settings
 */

import React, { useState } from 'react';
import {
  Card,
  Button,
  Tabs,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Switch,
  FormGroup,
  FormLabel,
  FormHelperText,
  Avatar,
  Divider
} from '@voilajsx/uikit';

/**
 * Settings page component with multiple settings sections
 * 
 * @returns {JSX.Element} Settings page component
 */
const Settings = () => {
  // Profile settings state
  const [profileSettings, setProfileSettings] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Product manager with over 5 years of experience in SaaS companies.',
    avatarUrl: ''
  });
  
  // Account settings state
  const [accountSettings, setAccountSettings] = useState({
    username: 'johndoe',
    language: 'en',
    timezone: 'America/New_York'
  });
  
  // Notification settings state
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: true,
    weeklyDigest: true,
    productUpdates: true,
    securityAlerts: true
  });
  
  // Privacy settings state
  const [privacySettings, setPrivSettingsState] = useState({
    profileVisibility: 'public',
    allowDataCollection: true,
    showActivityStatus: true
  });
  
  // Theme settings state
  const [themeSettings, setThemeSettings] = useState({
    colorScheme: 'system',
    fontSize: 'medium',
    reducedMotion: false,
    highContrast: false
  });
  
  // Form submission handlers
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('Profile settings saved:', profileSettings);
    alert('Profile settings saved successfully!');
  };
  
  const handleAccountSubmit = (e) => {
    e.preventDefault();
    console.log('Account settings saved:', accountSettings);
    alert('Account settings saved successfully!');
  };
  
  const handleNotificationSubmit = (e) => {
    e.preventDefault();
    console.log('Notification settings saved:', notificationSettings);
    alert('Notification settings saved successfully!');
  };
  
  const handlePrivacySubmit = (e) => {
    e.preventDefault();
    console.log('Privacy settings saved:', privacySettings);
    alert('Privacy settings saved successfully!');
  };
  
  const handleThemeSubmit = (e) => {
    e.preventDefault();
    console.log('Theme settings saved:', themeSettings);
    alert('Theme settings saved successfully!');
  };
  
  // Form change handlers
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileSettings(prev => ({ ...prev, [name]: value }));
  };
  
  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setAccountSettings(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings(prev => ({ ...prev, [name]: checked }));
  };
  
  const handlePrivacyChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPrivSettingsState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleThemeChange = (e) => {
    const { name, value, type, checked } = e.target;
    setThemeSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  return (
    <div className="space-y-[var(--spacing-6)]">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-[var(--text-secondary)]">Manage your account settings and preferences</p>
      </div>
      
      {/* Settings Tabs */}
      <Tabs>
        <Tabs.List>
          <Tabs.Tab>Profile</Tabs.Tab>
          <Tabs.Tab>Account</Tabs.Tab>
          <Tabs.Tab>Notifications</Tabs.Tab>
          <Tabs.Tab>Privacy</Tabs.Tab>
          <Tabs.Tab>Appearance</Tabs.Tab>
        </Tabs.List>
        
        <Tabs.Panels>
          {/* Profile Settings Panel */}
          <Tabs.Panel>
            <Card className="mt-[var(--spacing-4)]">
              <Card.Header>Profile Information</Card.Header>
              <Card.Body>
                <form onSubmit={handleProfileSubmit} className="space-y-[var(--spacing-4)]">
                  <div className="flex flex-col md:flex-row gap-[var(--spacing-4)] items-center mb-[var(--spacing-4)]">
                    <Avatar 
                      name={`${profileSettings.firstName} ${profileSettings.lastName}`} 
                      size="xl"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium mb-[var(--spacing-2)]">Profile Picture</h3>
                      <p className="text-[var(--text-secondary)] mb-[var(--spacing-2)]">
                        Upload a new picture or update your profile information.
                      </p>
                      <Input 
                        type="file" 
                        accept="image/*"
                        className="mt-[var(--spacing-2)]"
                      />
                    </div>
                  </div>
                  
                  <Divider />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-4)]">
                    <FormGroup>
                      <FormLabel htmlFor="firstName" required>First Name</FormLabel>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={profileSettings.firstName}
                        onChange={handleProfileChange}
                        required
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="lastName" required>Last Name</FormLabel>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={profileSettings.lastName}
                        onChange={handleProfileChange}
                        required
                      />
                    </FormGroup>
                  </div>
                  
                  <FormGroup>
                    <FormLabel htmlFor="email" required>Email Address</FormLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profileSettings.email}
                      onChange={handleProfileChange}
                      required
                    />
                    <FormHelperText>
                      This email is used for notifications and account recovery.
                    </FormHelperText>
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={profileSettings.phone}
                      onChange={handleProfileChange}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="bio">Bio</FormLabel>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={profileSettings.bio}
                      onChange={handleProfileChange}
                      rows={4}
                    />
                    <FormHelperText>
                      Write a short bio about yourself. This will be visible on your profile.
                    </FormHelperText>
                  </FormGroup>
                  
                  <div className="flex justify-end space-x-[var(--spacing-2)]">
                    <Button type="button" variant="outline">Cancel</Button>
                    <Button type="submit" variant="primary">Save Changes</Button>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Tabs.Panel>
          
          {/* Account Settings Panel */}
          <Tabs.Panel>
            <Card className="mt-[var(--spacing-4)]">
              <Card.Header>Account Settings</Card.Header>
              <Card.Body>
                <form onSubmit={handleAccountSubmit} className="space-y-[var(--spacing-4)]">
                  <FormGroup>
                    <FormLabel htmlFor="username" required>Username</FormLabel>
                    <Input
                      id="username"
                      name="username"
                      value={accountSettings.username}
                      onChange={handleAccountChange}
                      required
                    />
                    <FormHelperText>
                      Your username is used for your public profile URL.
                    </FormHelperText>
                  </FormGroup>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-4)]">
                    <FormGroup>
                      <FormLabel htmlFor="language">Language</FormLabel>
                      <Select
                        id="language"
                        name="language"
                        value={accountSettings.language}
                        onChange={handleAccountChange}
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="zh">Chinese</option>
                      </Select>
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="timezone">Timezone</FormLabel>
                      <Select
                        id="timezone"
                        name="timezone"
                        value={accountSettings.timezone}
                        onChange={handleAccountChange}
                      >
                        <option value="America/New_York">Eastern Time (ET)</option>
                        <option value="America/Chicago">Central Time (CT)</option>
                        <option value="America/Denver">Mountain Time (MT)</option>
                        <option value="America/Los_Angeles">Pacific Time (PT)</option>
                        <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                        <option value="Europe/Paris">Central European Time (CET)</option>
                        <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                      </Select>
                    </FormGroup>
                  </div>
                  
                  <Divider />
                  
                  <h3 className="font-medium">Password</h3>
                  <p className="text-[var(--text-secondary)] mb-[var(--spacing-2)]">
                    Update your password or keep your current one.
                  </p>
                  
                  <FormGroup>
                    <FormLabel htmlFor="currentPassword">Current Password</FormLabel>
                    <Input
                      id="currentPassword"
                      name="currentPassword"
                      type="password"
                    />
                  </FormGroup>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-4)]">
                    <FormGroup>
                      <FormLabel htmlFor="newPassword">New Password</FormLabel>
                      <Input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="confirmPassword">Confirm New Password</FormLabel>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                      />
                    </FormGroup>
                  </div>
                  
                  <div className="flex justify-end space-x-[var(--spacing-2)]">
                    <Button type="button" variant="outline">Cancel</Button>
                    <Button type="submit" variant="primary">Save Changes</Button>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Tabs.Panel>
          
          {/* Notification Settings Panel */}
          <Tabs.Panel>
            <Card className="mt-[var(--spacing-4)]">
              <Card.Header>Notification Preferences</Card.Header>
              <Card.Body>
                <form onSubmit={handleNotificationSubmit} className="space-y-[var(--spacing-4)]">
                  <FormGroup>
                    <h3 className="font-medium mb-[var(--spacing-2)]">Notification Channels</h3>
                    <div className="space-y-[var(--spacing-2)]">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">Email Notifications</span>
                          <p className="text-sm text-[var(--text-secondary)]">
                            Receive notifications via email
                          </p>
                        </div>
                        <Switch
                          name="emailNotifications"
                          checked={notificationSettings.emailNotifications}
                          onChange={handleNotificationChange}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">Push Notifications</span>
                          <p className="text-sm text-[var(--text-secondary)]">
                            Receive notifications on your device
                          </p>
                        </div>
                        <Switch
                          name="pushNotifications"
                          checked={notificationSettings.pushNotifications}
                          onChange={handleNotificationChange}
                        />
                      </div>
                    </div>
                  </FormGroup>
                  
                  <Divider />
                  
                  <FormGroup>
                    <h3 className="font-medium mb-[var(--spacing-2)]">Email Preferences</h3>
                    <div className="space-y-[var(--spacing-2)]">
                      <Checkbox
                        name="marketingEmails"
                        checked={notificationSettings.marketingEmails}
                        onChange={handleNotificationChange}
                      >
                        Marketing emails and newsletters
                      </Checkbox>
                      
                      <Checkbox
                        name="weeklyDigest"
                        checked={notificationSettings.weeklyDigest}
                        onChange={handleNotificationChange}
                      >
                        Weekly activity digest
                      </Checkbox>
                      
                      <Checkbox
                        name="productUpdates"
                        checked={notificationSettings.productUpdates}
                        onChange={handleNotificationChange}
                      >
                        Product updates and new features
                      </Checkbox>
                      
                      <Checkbox
                        name="securityAlerts"
                        checked={notificationSettings.securityAlerts}
                        onChange={handleNotificationChange}
                      >
                        Security alerts and privacy updates
                      </Checkbox>
                    </div>
                  </FormGroup>
                  
                  <div className="flex justify-end space-x-[var(--spacing-2)]">
                    <Button type="button" variant="outline">Cancel</Button>
                    <Button type="submit" variant="primary">Save Changes</Button>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Tabs.Panel>
          
          {/* Privacy Settings Panel */}
          <Tabs.Panel>
            <Card className="mt-[var(--spacing-4)]">
              <Card.Header>Privacy Settings</Card.Header>
              <Card.Body>
                <form onSubmit={handlePrivacySubmit} className="space-y-[var(--spacing-4)]">
                  <FormGroup>
                    <FormLabel htmlFor="profileVisibility">Profile Visibility</FormLabel>
                    <div className="space-y-[var(--spacing-2)]">
                      <Radio
                        id="profileVisibility-public"
                        name="profileVisibility"
                        value="public"
                        checked={privacySettings.profileVisibility === 'public'}
                        onChange={handlePrivacyChange}
                      >
                        Public <span className="text-sm text-[var(--text-secondary)]">(Visible to everyone)</span>
                      </Radio>
                      
                      <Radio
                        id="profileVisibility-contacts"
                        name="profileVisibility"
                        value="contacts"
                        checked={privacySettings.profileVisibility === 'contacts'}
                        onChange={handlePrivacyChange}
                      >
                        Contacts Only <span className="text-sm text-[var(--text-secondary)]">(Visible to people in your contacts)</span>
                      </Radio>
                      
                      <Radio
                        id="profileVisibility-private"
                        name="profileVisibility"
                        value="private"
                        checked={privacySettings.profileVisibility === 'private'}
                        onChange={handlePrivacyChange}
                      >
                        Private <span className="text-sm text-[var(--text-secondary)]">(Only visible to you)</span>
                      </Radio>
                    </div>
                  </FormGroup>
                  
                  <Divider />
                  
                  <FormGroup>
                    <h3 className="font-medium mb-[var(--spacing-2)]">Activity and Data</h3>
                    <div className="space-y-[var(--spacing-2)]">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">Allow Data Collection</span>
                          <p className="text-sm text-[var(--text-secondary)]">
                            Allow us to collect usage data to improve your experience
                          </p>
                        </div>
                        <Switch
                          name="allowDataCollection"
                          checked={privacySettings.allowDataCollection}
                          onChange={handlePrivacyChange}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">Show Activity Status</span>
                          <p className="text-sm text-[var(--text-secondary)]">
                            Show when you are active on the platform
                          </p>
                        </div>
                        <Switch
                          name="showActivityStatus"
                          checked={privacySettings.showActivityStatus}
                          onChange={handlePrivacyChange}
                        />
                      </div>
                    </div>
                  </FormGroup>
                  
                  <div className="flex justify-end space-x-[var(--spacing-2)]">
                    <Button type="button" variant="outline">Cancel</Button>
                    <Button type="submit" variant="primary">Save Changes</Button>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Tabs.Panel>
          
          {/* Theme Settings Panel */}
          <Tabs.Panel>
            <Card className="mt-[var(--spacing-4)]">
              <Card.Header>Appearance Settings</Card.Header>
              <Card.Body>
                <form onSubmit={handleThemeSubmit} className="space-y-[var(--spacing-4)]">
                  <FormGroup>
                    <FormLabel htmlFor="colorScheme">Color Scheme</FormLabel>
                    <div className="space-y-[var(--spacing-2)]">
                      <Radio
                        id="colorScheme-system"
                        name="colorScheme"
                        value="system"
                        checked={themeSettings.colorScheme === 'system'}
                        onChange={handleThemeChange}
                      >
                        System <span className="text-sm text-[var(--text-secondary)]">(Follow system preference)</span>
                      </Radio>
                      
                      <Radio
                        id="colorScheme-light"
                        name="colorScheme"
                        value="light"
                        checked={themeSettings.colorScheme === 'light'}
                        onChange={handleThemeChange}
                      >
                        Light
                      </Radio>
                      
                      <Radio
                        id="colorScheme-dark"
                        name="colorScheme"
                        value="dark"
                        checked={themeSettings.colorScheme === 'dark'}
                        onChange={handleThemeChange}
                      >
                        Dark
                      </Radio>
                    </div>
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="fontSize">Font Size</FormLabel>
                    <Select
                      id="fontSize"
                      name="fontSize"
                      value={themeSettings.fontSize}
                      onChange={handleThemeChange}
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </Select>
                  </FormGroup>
                  
                  <Divider />
                  
                  <FormGroup>
                    <h3 className="font-medium mb-[var(--spacing-2)]">Accessibility</h3>
                    <div className="space-y-[var(--spacing-2)]">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">Reduced Motion</span>
                          <p className="text-sm text-[var(--text-secondary)]">
                            Reduce or eliminate animations
                          </p>
                        </div>
                        <Switch
                          name="reducedMotion"
                          checked={themeSettings.reducedMotion}
                          onChange={handleThemeChange}
                        />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">High Contrast</span>
                          <p className="text-sm text-[var(--text-secondary)]">
                            Increase contrast for better visibility
                          </p>
                        </div>
                        <Switch
                          name="highContrast"
                          checked={themeSettings.highContrast}
                          onChange={handleThemeChange}
                        />
                      </div>
                    </div>
                  </FormGroup>
                  
                  <div className="flex justify-end space-x-[var(--spacing-2)]">
                    <Button type="button" variant="outline">Cancel</Button>
                    <Button type="submit" variant="primary">Save Changes</Button>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </div>
  );
};

export default Settings;