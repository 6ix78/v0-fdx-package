"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Phone } from "lucide-react"
import Link from "next/link"
import { Package, MapPin, User, DollarSign, Calendar, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/contexts/auth-context"
import { useLanguage } from "@/contexts/language-context"

// Generate a realistic tracking code
function generateTrackingCode(): string {
  const prefix = "FX"
  const numbers = Math.floor(Math.random() * 900000000) + 100000000 // 9-digit number
  const suffix = ["US", "PE", "CA", "MX", "BR"][Math.floor(Math.random() * 5)]
  return `${prefix}${numbers}${suffix}`
}

export default function CreatePackagePage() {
  const { isAuthenticated, user } = useAuth()
  const { t } = useLanguage()
  const router = useRouter()

  const [formData, setFormData] = useState({
    senderName: "Jenifer Albert",
    senderAddress: "Kaboul - 587, Karte Se Kabul, 1001, Afghanistan",
    receiverName: "PEDRO MIGUEL",
    receiverAddress: "19a Naguru E Rd, Kampala, Uganda",
    receiverPhone: "+351 935 214 898",
    pickupStation: "FedEx Express International",
    deliveryFee: "750", // Updated default delivery fee from 340 to 750
    trackingCode: generateTrackingCode(),
    deliveryStartDate: "2025-09-01", // Updated year from 2024 to 2025
    deliveryEndDate: "2025-09-10", // Updated year from 2024 to 2025
  })

  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate package creation
    setTimeout(() => {
      setSuccess(true)
      setIsLoading(false)

      // Redirect to tracking page after 2 seconds
      setTimeout(() => {
        router.push(`/tracking?number=${formData.trackingCode}`)
      }, 2000)
    }, 1500)
  }

  if (success) {
    return (
      <div className="min-h-screen gradient-bg-dark flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md glass-effect-dark text-white border-green-500/30">
          <CardContent className="pt-6 text-center">
            <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <Package className="h-8 w-8 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Package Created Successfully!</h2>
            <p className="text-green-300 mb-4">Tracking Number: {formData.trackingCode}</p>
            <p className="text-purple-200 text-sm">Redirecting to tracking page...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Redirect users to contact support before creating packages */}
        <div className="mb-8 animate-slide-in-up">
          <h1 className="text-4xl font-bold text-white mb-2">Create New Package</h1>
          <p className="text-purple-200">Fill in the details to create a new shipment</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sender Information */}
            <Card className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-left">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  Sender Information
                </CardTitle>
                <CardDescription className="text-purple-100">Details of the person sending the package</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="senderName">Sender Name</Label>
                  <Input
                    id="senderName"
                    value={formData.senderName}
                    onChange={(e) => handleInputChange("senderName", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/80"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senderAddress">Sender Address</Label>
                  <Input
                    id="senderAddress"
                    value={formData.senderAddress}
                    onChange={(e) => handleInputChange("senderAddress", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/80"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Receiver Information */}
            <Card className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-right">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  Receiver Information
                </CardTitle>
                <CardDescription className="text-purple-100">
                  Details of the person receiving the package
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="receiverName">Receiver Name</Label>
                  <Input
                    id="receiverName"
                    value={formData.receiverName}
                    onChange={(e) => handleInputChange("receiverName", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/80"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="receiverAddress">Receiver Address</Label>
                  <Input
                    id="receiverAddress"
                    value={formData.receiverAddress}
                    onChange={(e) => handleInputChange("receiverAddress", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/80"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="receiverPhone">Receiver Phone</Label>
                  <Input
                    id="receiverPhone"
                    value={formData.receiverPhone}
                    onChange={(e) => handleInputChange("receiverPhone", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/80"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Shipping Details */}
            <Card
              className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-left"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-5 w-5" />
                  Shipping Details
                </CardTitle>
                <CardDescription className="text-purple-100">Package and service information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pickupStation">Pickup Station</Label>
                  <Select
                    value={formData.pickupStation}
                    onValueChange={(value) => handleInputChange("pickupStation", value)}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FedEx Express International">FedEx Express International</SelectItem>
                      <SelectItem value="FedEx Ground">FedEx Ground</SelectItem>
                      <SelectItem value="FedEx Overnight">FedEx Overnight</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deliveryFee">Delivery Fee ($)</Label>
                  <Input
                    id="deliveryFee"
                    value={formData.deliveryFee}
                    onChange={(e) => handleInputChange("deliveryFee", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/80"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trackingCode">Tracking Code</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="trackingCode"
                      value={formData.trackingCode}
                      className="bg-white/10 border-white/20 text-white placeholder-white/80"
                      readOnly
                    />
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      onClick={() => handleInputChange("trackingCode", generateTrackingCode())}
                    >
                      Generate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Schedule */}
            <Card
              className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-right"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  Delivery Schedule
                </CardTitle>
                <CardDescription className="text-purple-100">Expected delivery timeframe</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="deliveryStartDate">Delivery Start Date</Label>
                  <Input
                    id="deliveryStartDate"
                    type="date"
                    value={formData.deliveryStartDate}
                    onChange={(e) => handleInputChange("deliveryStartDate", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/80"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deliveryEndDate">Delivery End Date</Label>
                  <Input
                    id="deliveryEndDate"
                    type="date"
                    value={formData.deliveryEndDate}
                    onChange={(e) => handleInputChange("deliveryEndDate", e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/80"
                    required
                  />
                </div>
                <Alert className="bg-blue-500/20 border-blue-500/30">
                  <Calendar className="h-4 w-4" />
                  <AlertDescription className="text-blue-200">
                    Package will be delivered between {new Date(formData.deliveryStartDate).toLocaleDateString()} and{" "}
                    {new Date(formData.deliveryEndDate).toLocaleDateString()}
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>

          {/* Summary and Submit */}
          <Card
            className="mt-8 glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5" />
                Package Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <p className="text-sm text-purple-200">Total Cost</p>
                  <p className="text-2xl font-bold text-green-400">${formData.deliveryFee}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-purple-200">Service</p>
                  <p className="text-lg font-semibold">{formData.pickupStation}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-purple-200">Tracking Number</p>
                  <p className="text-lg font-mono font-bold text-purple-300">{formData.trackingCode}</p>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12 text-lg animate-pulse-glow"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Creating Package...</span>
                  </div>
                ) : (
                  <>
                    Create Package
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </form>

        {/* Instructions and Support Links */}
        <div className="mt-8">
          <Alert className="bg-amber-500/10 border-amber-500/30">
            <AlertDescription className="text-amber-200">
              All package creations must be processed by our support team to ensure proper configuration and compliance.
            </AlertDescription>
          </Alert>

          <div className="space-y-4 mt-4">
            <h3 className="font-semibold text-white">How to Create a Package:</h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
              <li>Browse delivery destinations</li>
              <li>Select your preferred destination</li>
              <li>Contact support to complete package creation</li>
              <li>Receive tracking number and shipment details</li>
            </ol>
          </div>

          <div className="space-y-3 mt-4">
            <Link href="/delivery-destinations" className="block">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12">
                View Delivery Destinations
                <ArrowLeft className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/support/contact-us" className="block">
              <Button
                variant="outline"
                className="w-full border-slate-600 text-white hover:bg-white/10 h-12 bg-transparent"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact Support Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
