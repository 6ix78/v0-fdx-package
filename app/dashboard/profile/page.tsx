"use client"

import { User, Mail, Phone, MapPin, Edit, AtSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

export default function ProfilePage() {
  const { user } = useAuth()

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-purple-200">Manage your account information</p>
        </div>

        <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Personal Information</CardTitle>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
            <CardDescription className="text-purple-200">Your account details and contact information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <User className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Full Name</p>
                  <p className="text-white font-medium">{user?.fullName}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <AtSign className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Username</p>
                  <p className="text-white font-medium">@{user?.username}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Address</p>
                  <p className="text-white font-medium">{user?.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <Phone className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone Number</p>
                  <p className="text-white font-medium">{user?.phoneNumber}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 md:col-span-2">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <MapPin className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Address</p>
                  <p className="text-white font-medium">{user?.address}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
