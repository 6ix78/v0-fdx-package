"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useSearchParams } from "next/navigation"
import { Mail, Phone, Clock, Send } from "lucide-react"

export default function ContactUsPage() {
  const searchParams = useSearchParams()
  const destination = searchParams.get("destination")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: destination ? `Package Creation to ${destination}` : "Package Inquiry",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: destination ? `Package Creation to ${destination}` : "Package Inquiry",
          message: "",
        })
        setSubmitSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="min-h-screen gradient-bg-dark py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Support Team</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Our team is here to help you create packages and answer any questions about our shipping services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="glass-card-dark border-slate-700 hover-lift">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-slate-400 mb-4">+1 (800) 463-3339</p>
              <p className="text-sm text-slate-500">Available 24/7</p>
            </CardContent>
          </Card>

          <Card className="glass-card-dark border-slate-700 hover-lift">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-slate-400 mb-4">support@fedex.com</p>
              <p className="text-sm text-slate-500">Response within 2 hours</p>
            </CardContent>
          </Card>

          <Card className="glass-card-dark border-slate-700 hover-lift">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
              <p className="text-slate-400 mb-2 text-sm">Mon - Fri: 8:00 AM - 8:00 PM</p>
              <p className="text-slate-400 text-sm">Sat - Sun: 9:00 AM - 5:00 PM</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="glass-card-dark border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Send us a Message</CardTitle>
            <CardDescription className="text-slate-300">
              Fill out the form below and our support team will get back to you shortly
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                  <Send className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">
                  Thank you for contacting us. Our support team will review your request and get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="John Doe"
                      className="bg-white/10 border-white/20 text-white placeholder-white/80"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                      className="bg-white/10 border-white/20 text-white placeholder-white/80"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="bg-white/10 border-white/20 text-white placeholder-white/80"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="How can we help?"
                      className="bg-white/10 border-white/20 text-white placeholder-white/80"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe your inquiry or package creation request..."
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder-white/80 resize-none"
                    required
                  />
                </div>

                {destination && (
                  <Alert className="bg-blue-500/10 border-blue-500/30">
                    <AlertDescription className="text-blue-200">
                      <strong>Destination:</strong> You're creating a package to {destination}. Our team will help you
                      complete this shipment.
                    </AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
