"use client"

import { Bell, Lock, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
          <p className="text-purple-200">Manage your preferences and account settings</p>
        </div>

        <div className="space-y-6">
          <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription className="text-purple-200">Configure how you receive updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="text-white">
                  Email Notifications
                </Label>
                <Switch id="email-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications" className="text-white">
                  Push Notifications
                </Label>
                <Switch id="push-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sms-notifications" className="text-white">
                  SMS Notifications
                </Label>
                <Switch id="sms-notifications" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Security
              </CardTitle>
              <CardDescription className="text-purple-200">Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Change Password</Button>
              <Button variant="outline" className="w-full bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
                Enable Two-Factor Authentication
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Preferences
              </CardTitle>
              <CardDescription className="text-purple-200">Customize your experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="text-white">
                  Dark Mode
                </Label>
                <Switch id="dark-mode" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-tracking" className="text-white">
                  Auto-Track Packages
                </Label>
                <Switch id="auto-tracking" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
