"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Search, Package, Shield, Clock, Globe, Star, ArrowRight, Zap, Users, Award } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      router.push(`/tracking?number=${encodeURIComponent(trackingNumber)}`)
    }
  }

  const features = [
    {
      icon: Package,
      title: "Express Delivery",
      description: "Fast and reliable shipping worldwide",
    },
    {
      icon: Shield,
      title: "Secure Handling",
      description: "Your packages are safe with us",
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Track your package every step of the way",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Worldwide delivery network",
    },
  ]

  const stats = [
    { number: "220+", label: "Countries", icon: Globe },
    { number: "99.5%", label: "On-time Rate", icon: Clock },
    { number: "24/7", label: "Support", icon: Shield },
    { number: "5M+", label: "Packages Daily", icon: Package },
  ]

  const testimonials = [
    {
      name: "Small Business Owner",
      role: "Craft Supplies Store",
      image: "/images/fedex-customer-support-team-helping-customers.jpg",
      quote:
        "FedEx has been instrumental in growing my business. Their reliable service helps me reach customers worldwide.",
    },
    {
      name: "Remote Worker",
      role: "Freelance Designer",
      image: "/images/fedex-leadership-team-professional-portraits.jpg",
      quote: "Working from home means I need reliable shipping for my client deliveries. FedEx never lets me down.",
    },
    {
      name: "E-commerce Entrepreneur",
      role: "Online Retailer",
      image: "/images/fedex-ground-delivery-truck-in-suburban-neighborho.jpg",
      quote: "The efficiency and tracking capabilities make FedEx my go-to choice for all my shipping needs.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10"></div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-flex items-center gap-2 bg-purple-500/15 backdrop-blur-sm rounded-full px-4 py-2 text-purple-300 text-sm mb-6 border border-purple-500/30 hover-scale cursor-pointer">
                <Star className="w-4 h-4 fill-purple-400 text-purple-400" />
                <span>Trusted by millions worldwide</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight text-balance">
                {t("welcomeTitle")}
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed mb-8 text-balance">{t("welcomeSubtitle")}</p>

              <div className="glass-card-dark p-6 rounded-2xl border-purple-500/20 hover-lift">
                <h3 className="text-lg font-semibold text-white mb-4">{t("trackPackage")}</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="text"
                    placeholder={t("trackingPlaceholder")}
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="flex-1 bg-white/10 backdrop-blur-sm text-white placeholder-slate-400 border-white/20 h-12 focus:border-purple-500 focus:ring-purple-500/50"
                    onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                  />
                  <Button
                    onClick={handleTrack}
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 h-12 px-6 font-semibold btn-smooth"
                    disabled={!trackingNumber.trim()}
                  >
                    <Search className="w-4 h-4 mr-2" />
                    {t("trackButton")}
                  </Button>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift group">
                <Image
                  src="/fedex-delivery-truck-with-packages-in-motion.jpg"
                  alt="FedEx delivery operations with packages and logistics"
                  width={800}
                  height={600}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  priority
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="glass-card-dark p-6 rounded-xl hover:border-purple-500/40">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FedEx?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Trusted by millions worldwide for reliable delivery services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glass-card-dark hover-lift animate-fade-in group border-slate-700/50 hover:border-purple-500/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Logistics Network */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-white mb-6">
                Global{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Logistics Network
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Our extensive network ensures your packages reach their destination efficiently, no matter where in the
                world.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card-dark p-6 rounded-xl hover-lift border-purple-500/20">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-lg">
                      <Globe className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">220+</div>
                      <div className="text-sm text-slate-400">Countries</div>
                    </div>
                  </div>
                </div>
                <div className="glass-card-dark p-6 rounded-xl hover-lift border-purple-500/20">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-lg">
                      <Zap className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-sm text-slate-400">Operations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <Image
                  src="/global-logistics-network-map-with-shipping-routes.jpg"
                  alt="Global logistics network with world map and shipping routes"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-slate-300">Real stories from real customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="glass-card-dark hover-lift animate-fade-in border-slate-700/50 hover:border-purple-500/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-purple-500/30">
                      <Image
                        src={`/placeholder.svg?height=56&width=56&query=Customer profile avatar`}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 italic leading-relaxed">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Service Excellence */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <Image
                  src="/modern-warehouse-with-staff-and-automated-systems.jpg"
                  alt="Modern FedEx warehouse with automated systems and staff"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-white mb-6">
                Professional{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Service Excellence
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Our trained professionals are dedicated to providing exceptional service at every step of your shipping
                journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 glass-card-dark rounded-lg hover-lift border-purple-500/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white">Expert customer service team</span>
                </div>
                <div className="flex items-center gap-3 p-4 glass-card-dark rounded-lg hover-lift border-purple-500/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white">Industry-leading reliability</span>
                </div>
                <div className="flex items-center gap-3 p-4 glass-card-dark rounded-lg hover-lift border-purple-500/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white">Secure handling guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card-dark p-12 rounded-3xl text-center border-purple-500/30 hover-lift">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Ship Your Package?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Create an account and start shipping with confidence today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-lg px-8 h-12 btn-smooth"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/testimonials">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-white hover:bg-white/10 text-lg px-8 h-12 bg-transparent btn-smooth"
                >
                  Read Customer Reviews
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
