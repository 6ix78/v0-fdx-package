"use client"

import { ArrowLeft, Package, Truck, Weight, Ruler, DollarSign } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreatePackagePage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <Package className="h-8 w-8 text-purple-400" />
            <h1 className="text-4xl font-bold text-white">Create New Shipment</h1>
          </div>
          <p className="text-purple-200">Fill in the details to create a new package shipment</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Sender Information */}
          <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Sender Information</CardTitle>
              <CardDescription className="text-purple-200">Details of the person sending the package</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="sender-name" className="text-white mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="sender-name"
                    placeholder="Enter full name"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Label htmlFor="sender-email" className="text-white mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="sender-email"
                    type="email"
                    placeholder="Enter email address"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Label htmlFor="sender-phone" className="text-white mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="sender-phone"
                    placeholder="Enter phone number"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Label htmlFor="sender-address" className="text-white mb-2 block">
                    Address
                  </Label>
                  <Input
                    id="sender-address"
                    placeholder="Enter address"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recipient Information */}
          <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Recipient Information</CardTitle>
              <CardDescription className="text-purple-200">Details of the person receiving the package</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="recipient-name" className="text-white mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="recipient-name"
                    placeholder="Enter full name"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Label htmlFor="recipient-email" className="text-white mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="recipient-email"
                    type="email"
                    placeholder="Enter email address"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Label htmlFor="recipient-phone" className="text-white mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="recipient-phone"
                    placeholder="Enter phone number"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Label htmlFor="recipient-address" className="text-white mb-2 block">
                    Address
                  </Label>
                  <Input
                    id="recipient-address"
                    placeholder="Enter address"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Package Details */}
          <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Package Details</CardTitle>
              <CardDescription className="text-purple-200">
                Information about the package contents and specifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="description" className="text-white mb-2 block">
                  Package Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe the contents of your package"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="weight" className="text-white mb-2 block flex items-center gap-2">
                    <Weight className="h-4 w-4" />
                    Weight (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="0.00"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Label htmlFor="dimensions" className="text-white mb-2 block flex items-center gap-2">
                    <Ruler className="h-4 w-4" />
                    Dimensions (LxWxH cm)
                  </Label>
                  <Input
                    id="dimensions"
                    placeholder="30x25x15"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <Label htmlFor="value" className="text-white mb-2 block flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Declared Value ($)
                  </Label>
                  <Input
                    id="value"
                    type="number"
                    placeholder="0.00"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Selection */}
          <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Shipping Service
              </CardTitle>
              <CardDescription className="text-purple-200">Select your preferred shipping service</CardDescription>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder="Select a service..." />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="express" className="text-white">
                    FedEx Express - Next Business Day
                  </SelectItem>
                  <SelectItem value="ground" className="text-white">
                    FedEx Ground - 3-5 Business Days
                  </SelectItem>
                  <SelectItem value="international" className="text-white">
                    FedEx International Priority - 2-3 Business Days
                  </SelectItem>
                  <SelectItem value="economy" className="text-white">
                    FedEx International Economy - 5-7 Business Days
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link href="/dashboard" className="flex-1">
              <Button variant="outline" className="w-full bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
                Cancel
              </Button>
            </Link>
            <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Create Shipment
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
