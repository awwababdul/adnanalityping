
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { User, Settings, Bookmark, FileText, UploadCloud, Clock, Bell, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ProfilePage: React.FC = () => {
  const { user, profile, loading, signOut, updateProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [notificationPreferences, setNotificationPreferences] = useState({
    email: true,
    push: true,
    sms: false,
  });

  useEffect(() => {
    if (!loading && !user) {
      navigate('/sign-in');
    }

    if (profile) {
      setFullName(profile.full_name || '');
      setEmail(profile.email || '');
      setPhone(profile.phone || '');
      setNotificationPreferences(profile.notification_preferences || {
        email: true,
        push: true,
        sms: false,
      });
    }
  }, [user, profile, loading, navigate]);

  const handleUpdateProfile = async () => {
    try {
      setIsUpdating(true);
      
      await updateProfile({
        full_name: fullName,
        phone,
        notification_preferences: notificationPreferences,
      });
      
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Update failed",
        description: "There was an error updating your profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="container max-w-lg mx-auto px-4 py-16 flex justify-center items-center min-h-screen">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const navigationItems = [
    { label: 'Profile', icon: <User className="w-5 h-5" />, value: 'profile' },
    { label: 'Favorites', icon: <Bookmark className="w-5 h-5" />, value: 'favorites' },
    { label: 'Documents', icon: <FileText className="w-5 h-5" />, value: 'documents' },
    { label: 'Services', icon: <Clock className="w-5 h-5" />, value: 'services' },
    { label: 'Notifications', icon: <Bell className="w-5 h-5" />, value: 'notifications' },
  ];

  return (
    <div className="container max-w-lg mx-auto px-4 py-16 pb-24">
      <Helmet>
        <title>My Profile | Adnan Ali Typing</title>
        <meta name="description" content="Manage your profile and account settings" />
      </Helmet>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-center mb-2">My Account</h1>
        <p className="text-gray-600 text-center">
          Manage your profile, services, and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="mb-8">
        <TabsList className="grid grid-cols-5 mb-6">
          {navigationItems.map((item) => (
            <TabsTrigger key={item.value} value={item.value} className="flex flex-col gap-1 py-2">
              <span className="mx-auto">{item.icon}</span>
              <span className="text-xs">{item.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Update your personal details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input
                  id="full-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  value={email}
                  readOnly
                  disabled
                  className="bg-gray-100"
                />
                <p className="text-xs text-gray-500">
                  Email cannot be changed. Contact support for assistance.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                />
              </div>
              
              <div className="space-y-4 pt-4">
                <h3 className="font-medium">Notification Preferences</h3>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-gray-500">
                      Receive updates and alerts via email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={notificationPreferences.email}
                    onCheckedChange={(checked) => 
                      setNotificationPreferences({
                        ...notificationPreferences,
                        email: checked
                      })
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <p className="text-sm text-gray-500">
                      Receive alerts on your device
                    </p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={notificationPreferences.push}
                    onCheckedChange={(checked) => 
                      setNotificationPreferences({
                        ...notificationPreferences,
                        push: checked
                      })
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    <p className="text-sm text-gray-500">
                      Receive important updates via SMS
                    </p>
                  </div>
                  <Switch
                    id="sms-notifications"
                    checked={notificationPreferences.sms}
                    onCheckedChange={(checked) => 
                      setNotificationPreferences({
                        ...notificationPreferences,
                        sms: checked
                      })
                    }
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button 
                className="w-full" 
                onClick={handleUpdateProfile}
                disabled={isUpdating}
              >
                {isUpdating ? 'Updating...' : 'Save Changes'}
              </Button>
              
              <Button 
                variant="destructive" 
                className="w-full" 
                onClick={handleSignOut}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="favorites">
          <Card>
            <CardHeader>
              <CardTitle>Saved Favorites</CardTitle>
              <CardDescription>
                Services and documents you've saved for quick access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Bookmark className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
                <p className="text-gray-500 mb-4">
                  Save services you're interested in for quick access later
                </p>
                <Button onClick={() => navigate('/services')}>
                  Browse Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>My Documents</CardTitle>
              <CardDescription>
                Upload and manage your documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <UploadCloud className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">No documents uploaded</h3>
                <p className="text-gray-500 mb-4">
                  Upload documents for your service applications
                </p>
                <Button onClick={() => navigate('/upload-documents')}>
                  Upload Documents
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>My Services</CardTitle>
              <CardDescription>
                Track your ongoing and completed services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">No active services</h3>
                <p className="text-gray-500 mb-4">
                  You don't have any ongoing or completed services
                </p>
                <Button onClick={() => navigate('/services')}>
                  Explore Services
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Stay updated with important information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Bell className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">No notifications</h3>
                <p className="text-gray-500 mb-4">
                  You're all caught up! No new notifications
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
