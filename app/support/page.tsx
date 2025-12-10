"use client"

import { Mail, Phone, MessageCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"

export default function SupportPage() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      value: "+1 (800) 463-3339",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions via email",
      value: "support@fedex.com",
      action: "Send Email",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      value: "Available 24/7",
      action: "Start Chat",
    },
  ]

  const faqItems = [
    {
      question: "How can I track my package?",
      answer:
        "You can track your package using the tracking number provided at the time of shipping. Enter it on our tracking page or use our mobile app.",
    },
    {
      question: "What are your delivery times?",
      answer:
        "Delivery times vary by service type. Express overnight delivers next business day, while ground shipping takes 1-5 business days.",
    },
    {
      question: "How do I schedule a pickup?",
      answer:
        "You can schedule a pickup through our website, mobile app, or by calling our customer service line. Pickups are available Monday through Friday.",
    },
    {
      question: "What items cannot be shipped?",
      answer:
        "Hazardous materials, perishable items, and prohibited items cannot be shipped. Check our shipping guidelines for a complete list.",
    },
    {
      question: "How do I file a claim?",
      answer:
        "Claims can be filed online through your account dashboard or by contacting customer service within 60 days of shipment.",
    },
  ]

  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            FedEx{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Support Center
            </span>
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            We're here to help you with all your shipping needs. Get expert assistance from our dedicated support team.
          </p>
        </div>

        <div className="mb-12 animate-slide-in-up">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"></div>
            <img
              src="/images/customer-support.jpg"
              alt="FedEx customer support team helping customers"
              className="relative rounded-3xl shadow-2xl hover-lift w-full h-auto max-h-96 object-cover"
            />
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="glass-effect-dark border-purple-500/30 text-center hover-lift animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">{method.title}</CardTitle>
                <CardDescription className="text-purple-200">{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-semibold text-lg text-white">{method.value}</p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-effect-dark border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">Send us a Message</CardTitle>
              <CardDescription className="text-purple-200">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="bg-white/20 text-white placeholder-white/60 border-white/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="bg-white/20 text-white placeholder-white/60 border-white/30"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/20 text-white placeholder-white/60 border-white/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="bg-white/20 text-white placeholder-white/60 border-white/30"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you"
                  className="min-h-[120px] bg-white/20 text-white placeholder-white/60 border-white/30"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-purple-200">Find answers to common questions about our services</p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index} className="glass-effect-dark border-purple-500/30">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-white mb-2">{item.question}</h3>
                    <p className="text-purple-200 text-sm">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <Card className="mt-12 glass-effect-dark border-purple-500/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Clock className="h-5 w-5" />
              Support Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-white">Phone Support</h4>
                <p className="text-sm text-purple-200">Monday - Friday: 8AM - 8PM</p>
                <p className="text-sm text-purple-200">Saturday: 9AM - 5PM</p>
                <p className="text-sm text-purple-200">Sunday: Closed</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Live Chat</h4>
                <p className="text-sm text-purple-200">Available 24/7</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Email Support</h4>
                <p className="text-sm text-purple-200">Response within 24 hours</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Emergency</h4>
                <p className="text-sm text-purple-200">24/7 for urgent issues</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
