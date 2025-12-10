"use client"

import { useState } from "react"
import { Star, Quote, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  rating: number
  quote: string
  metrics: string
  category: "enterprise" | "sme" | "individual"
}

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "enterprise" | "sme" | "individual">("all")

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "TechCorp International",
      image: "/professional-woman-in-business-attire.jpg",
      rating: 5,
      quote:
        "FedEx has transformed our logistics operations. Their real-time tracking and international expertise helped us reduce delivery times by 40% while improving customer satisfaction.",
      metrics: "40% faster delivery, 95% on-time rate",
      category: "enterprise",
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "E-commerce Owner",
      company: "Digital Marketplace Inc.",
      image: "/professional-man-glasses.png",
      rating: 5,
      quote:
        "The affordability and reliability of FedEx services helped our small business scale to 50 countries. Their customer support is exceptional.",
      metrics: "Expanded to 50 countries, 3x revenue growth",
      category: "sme",
    },
    {
      id: 3,
      name: "Amelia Rodriguez",
      role: "Logistics Manager",
      company: "GlobalShip Solutions",
      image: "/professional-woman-with-long-hair.jpg",
      rating: 5,
      quote:
        "Working with FedEx has been a game-changer. Their innovative solutions and dedicated support team ensure our operations run smoothly.",
      metrics: "98.7% on-time delivery, zero damage claims",
      category: "enterprise",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder & CEO",
      company: "Artisan Crafts Co.",
      image: "/professional-man-in-casual-business.jpg",
      rating: 5,
      quote:
        "FedEx made international shipping accessible to our small artisan business. We now ship to 30+ countries with confidence.",
      metrics: "30+ countries served, 4.9/5 customer rating",
      category: "sme",
    },
    {
      id: 5,
      name: "Jennifer Wallace",
      role: "VP Operations",
      company: "Fashion Forward Ltd.",
      image: "/professional-woman-ceo.jpg",
      rating: 5,
      quote:
        "The integration of FedEx services into our inventory management system has been seamless. Their API is robust and well-documented.",
      metrics: "99.2% system uptime, integrated 500+ SKUs",
      category: "enterprise",
    },
    {
      id: 6,
      name: "Tom Anderson",
      role: "Small Business Owner",
      company: "Eco-friendly Products",
      image: "/professional-man-outdoor.jpg",
      rating: 5,
      quote:
        "FedEx's sustainability initiatives align with our eco-conscious brand values. Their green shipping options are a game-changer.",
      metrics: "50% carbon footprint reduction, 100% sustainable shipping",
      category: "sme",
    },
    {
      id: 7,
      name: "Dr. Lisa Patel",
      role: "Director",
      company: "Medical Supply Network",
      image: "/professional-woman-doctor.jpg",
      rating: 5,
      quote:
        "FedEx's temperature-controlled shipping and compliance expertise are essential for our pharmaceutical operations. Trust and reliability are guaranteed.",
      metrics: "100% compliance, zero temperature deviations",
      category: "enterprise",
    },
    {
      id: 8,
      name: "Michael Roberts",
      role: "Online Seller",
      company: "Independent Merchant",
      image: "/professional-man-business-casual.jpg",
      rating: 5,
      quote:
        "Started my online business with FedEx and haven't looked back. Their affordable rates and reliable service are perfect for small sellers like me.",
      metrics: "10,000+ shipments, 99.5% satisfaction",
      category: "individual",
    },
    {
      id: 9,
      name: "Catherine Moore",
      role: "COO",
      company: "RetailMax Corporation",
      image: "/professional-woman-executive.jpg",
      rating: 5,
      quote:
        "FedEx's advanced analytics and reporting tools provide insights that help us optimize our supply chain continuously.",
      metrics: "35% cost savings, real-time visibility 24/7",
      category: "enterprise",
    },
    {
      id: 10,
      name: "James Wilson",
      role: "Marketplace Manager",
      company: "Multi-Channel Seller",
      image: "/professional-man-confident.jpg",
      rating: 5,
      quote:
        "Selling on multiple platforms is easy with FedEx. One account, multiple services, seamless integration across all marketplaces.",
      metrics: "5 platforms integrated, 1000+ monthly shipments",
      category: "sme",
    },
    {
      id: 11,
      name: "Elena Vasquez",
      role: "VP Shipping",
      company: "Premium Goods Distribution",
      image: "/professional-woman-executive.jpg",
      rating: 5,
      quote:
        "The white-glove service for high-value shipments is exceptional. FedEx treats our premium clients with the utmost care.",
      metrics: "$50M+ in goods shipped safely, zero incidents",
      category: "enterprise",
    },
    {
      id: 12,
      name: "Alex Thompson",
      role: "Freelance Seller",
      company: "Self-employed",
      image: "/professional-young-man.jpg",
      rating: 5,
      quote:
        "I rely on FedEx for shipping my handmade products internationally. Their service is consistent and their pricing is fair.",
      metrics: "500+ items shipped, 99% customer satisfaction",
      category: "individual",
    },
    {
      id: 13,
      name: "Rebecca Martinez",
      role: "Operations Manager",
      company: "Health & Wellness Co.",
      image: "/professional-woman-in-business-attire.jpg",
      rating: 5,
      quote:
        "FedEx's overnight shipping has been crucial for our health product deliveries. They understand the urgency and always deliver on time.",
      metrics: "99.8% next-day delivery success, 5000+ orders monthly",
      category: "enterprise",
    },
    {
      id: 14,
      name: "Kevin O'Brien",
      role: "Startup Founder",
      company: "Tech Gadgets Pro",
      image: "/professional-man-glasses.png",
      rating: 5,
      quote:
        "As a startup, we needed a reliable shipping partner that could grow with us. FedEx has been that partner from day one.",
      metrics: "Grew from 10 to 500 daily shipments in 12 months",
      category: "sme",
    },
    {
      id: 15,
      name: "Priya Sharma",
      role: "Director of Logistics",
      company: "BookWorld Distribution",
      image: "/professional-woman-with-long-hair.jpg",
      rating: 5,
      quote:
        "Managing book shipments across 80 countries requires precision. FedEx's tracking system gives us peace of mind and our customers confidence.",
      metrics: "80 countries, 2M+ books shipped annually",
      category: "enterprise",
    },
    {
      id: 16,
      name: "Daniel Foster",
      role: "Etsy Shop Owner",
      company: "Vintage Finds",
      image: "/professional-man-in-casual-business.jpg",
      rating: 5,
      quote:
        "FedEx has made it possible for my vintage shop to reach collectors worldwide. Their packaging guidance has been invaluable.",
      metrics: "International sales up 200%, zero damage claims",
      category: "individual",
    },
    {
      id: 17,
      name: "Olivia Campbell",
      role: "Chief Supply Officer",
      company: "Luxury Brands International",
      image: "/professional-woman-ceo.jpg",
      rating: 5,
      quote:
        "Shipping luxury goods requires exceptional care and security. FedEx delivers on both fronts consistently.",
      metrics: "$100M+ in luxury goods shipped, 100% security record",
      category: "enterprise",
    },
    {
      id: 18,
      name: "Ryan Miller",
      role: "Subscription Box Curator",
      company: "Monthly Delights",
      image: "/professional-man-outdoor.jpg",
      rating: 5,
      quote:
        "Our subscription model depends on reliable monthly deliveries. FedEx has never let us down, maintaining our 98% satisfaction rate.",
      metrics: "5,000 subscribers, 98% satisfaction rate",
      category: "sme",
    },
    {
      id: 19,
      name: "Dr. Ahmed Hassan",
      role: "Laboratory Director",
      company: "BioResearch Labs",
      image: "/professional-man-business-casual.jpg",
      rating: 5,
      quote:
        "FedEx's specialized handling of biological samples is impeccable. Their cold-chain logistics are second to none.",
      metrics: "10,000+ samples shipped, 100% integrity maintained",
      category: "enterprise",
    },
    {
      id: 20,
      name: "Sophie Laurent",
      role: "Boutique Owner",
      company: "Parisian Chic",
      image: "/professional-woman-executive.jpg",
      rating: 5,
      quote: "Shipping fashion from Paris to the US was daunting until we partnered with FedEx. Now it's seamless.",
      metrics: "Trans-Atlantic shipping, 3-day delivery guarantee",
      category: "sme",
    },
    {
      id: 21,
      name: "Brandon Lee",
      role: "Electronics Reseller",
      company: "Tech Deals Online",
      image: "/professional-man-confident.jpg",
      rating: 4,
      quote:
        "FedEx's insurance options give my customers confidence when buying expensive electronics. Great service overall.",
      metrics: "15,000+ devices shipped, 99% positive feedback",
      category: "individual",
    },
    {
      id: 22,
      name: "Isabella Romano",
      role: "Import/Export Manager",
      company: "Global Trade Solutions",
      image: "/professional-woman-ceo.jpg",
      rating: 5,
      quote:
        "Customs clearance can be complex, but FedEx's expertise makes it straightforward. They handle everything professionally.",
      metrics: "200+ countries, $500M+ in goods cleared",
      category: "enterprise",
    },
    {
      id: 23,
      name: "Nathan Brooks",
      role: "Furniture Maker",
      company: "Handcrafted Home",
      image: "/professional-young-man.jpg",
      rating: 5,
      quote:
        "Shipping custom furniture nationwide seemed impossible for a small workshop. FedEx Freight made it possible.",
      metrics: "300+ large items shipped, zero damage",
      category: "sme",
    },
    {
      id: 24,
      name: "Yuki Tanaka",
      role: "Operations Director",
      company: "Asian Imports Ltd.",
      image: "/professional-woman-in-business-attire.jpg",
      rating: 5,
      quote:
        "FedEx's Asia-Pacific network is unmatched. Our shipments from Tokyo to New York arrive consistently on schedule.",
      metrics: "Daily flights, 99.2% on-time performance",
      category: "enterprise",
    },
    {
      id: 25,
      name: "Lucas Schmidt",
      role: "Craft Beer Brewer",
      company: "Mountain Peak Brewery",
      image: "/professional-man-glasses.png",
      rating: 5,
      quote:
        "Shipping craft beer requires temperature control and speed. FedEx understands our product and delivers accordingly.",
      metrics: "10,000 cases monthly, perfect temperature control",
      category: "sme",
    },
    {
      id: 26,
      name: "Emma Watson",
      role: "Print on Demand Creator",
      company: "Creative Designs Studio",
      image: "/professional-woman-with-long-hair.jpg",
      rating: 5,
      quote:
        "Running a print-on-demand business means fast turnaround. FedEx's pickup service saves me hours every week.",
      metrics: "Daily pickups, 1000+ orders weekly",
      category: "individual",
    },
    {
      id: 27,
      name: "Carlos Mendez",
      role: "Automotive Parts Manager",
      company: "Premium Auto Parts",
      image: "/professional-man-in-casual-business.jpg",
      rating: 5,
      quote: "When a customer needs a part immediately, FedEx same-day delivery has saved countless deals for us.",
      metrics: "Same-day delivery 95% success, $2M+ saved",
      category: "enterprise",
    },
    {
      id: 28,
      name: "Hannah Cohen",
      role: "Bakery Owner",
      company: "Sweet Treats Delivered",
      image: "/professional-woman-executive.jpg",
      rating: 5,
      quote:
        "Shipping perishable baked goods seemed impossible. FedEx's overnight service has made our nationwide bakery dreams come true.",
      metrics: "5,000+ orders shipped, 99.5% freshness guarantee",
      category: "sme",
    },
    {
      id: 29,
      name: "Timothy Clark",
      role: "Antique Dealer",
      company: "Timeless Treasures",
      image: "/professional-man-outdoor.jpg",
      rating: 5,
      quote:
        "Valuable antiques require special care. FedEx's white-glove service treats each piece like the treasure it is.",
      metrics: "$5M+ in antiques shipped, zero claims",
      category: "individual",
    },
    {
      id: 30,
      name: "Zara Ali",
      role: "Cosmetics Entrepreneur",
      company: "Beauty by Zara",
      image: "/professional-woman-ceo.jpg",
      rating: 5,
      quote:
        "From local to national brand in 2 years, thanks to FedEx. Their small business support program was instrumental.",
      metrics: "From 10 to 10,000 orders monthly",
      category: "sme",
    },
    {
      id: 31,
      name: "George Patterson",
      role: "Wine Distributor",
      company: "Fine Wines Worldwide",
      image: "/professional-man-business-casual.jpg",
      rating: 5,
      quote:
        "Temperature-sensitive wine shipments are FedEx's specialty. Our bottles arrive in perfect condition every time.",
      metrics: "50,000 bottles annually, 100% satisfaction",
      category: "enterprise",
    },
    {
      id: 32,
      name: "Mia Rodriguez",
      role: "Jewelry Designer",
      company: "Artisan Jewels",
      image: "/professional-woman-with-long-hair.jpg",
      rating: 5,
      quote:
        "Shipping high-value jewelry internationally requires trust. FedEx's insurance and tracking give me complete peace of mind.",
      metrics: "$10M+ insured shipments, zero losses",
      category: "individual",
    },
    {
      id: 33,
      name: "William Chang",
      role: "CEO",
      company: "Global Electronics Corp",
      image: "/professional-man-confident.jpg",
      rating: 5,
      quote:
        "Our partnership with FedEx spans 15 years. They've been integral to our growth from regional to global leader.",
      metrics: "15 years partnership, 5M+ shipments",
      category: "enterprise",
    },
  ]

  const filteredTestimonials =
    selectedCategory === "all" ? testimonials : testimonials.filter((t) => t.category === selectedCategory)

  const stats = [
    { label: "Happy Customers", value: "5M+" },
    { label: "Countries Served", value: "220+" },
    { label: "On-time Rate", value: "99.5%" },
    { label: "Customer Rating", value: "4.8/5" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10"></div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-down">
            <div className="inline-flex items-center gap-2 bg-purple-500/15 backdrop-blur-sm rounded-full px-4 py-2 text-purple-300 text-sm mb-6 border border-purple-500/30 hover-scale cursor-pointer">
              <Star className="w-4 h-4 fill-purple-400 text-purple-400" />
              <span>Trusted by industry leaders</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight text-balance">
              Real Stories from Real{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Customers
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-8 text-balance max-w-3xl mx-auto">
              Discover how FedEx has transformed businesses worldwide with reliable shipping solutions and exceptional
              service
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="glass-card-dark p-6 rounded-xl hover:border-purple-500/40 text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-purple-500/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {["all", "enterprise", "sme", "individual"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as any)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                    : "glass-card-dark text-slate-300 hover:text-white hover:border-purple-500/40"
                }`}
              >
                {category === "all" && "All Customers"}
                {category === "enterprise" && "Enterprise"}
                {category === "sme" && "Small Business"}
                {category === "individual" && "Individual"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="glass-card-dark hover-lift animate-fade-in group border-slate-700/50 hover:border-purple-500/40 flex flex-col"
                style={{ animationDelay: `${(index % 6) * 0.1}s` }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Header with Avatar and Name */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-purple-500/30">
                      <Image
                        src={testimonial.image || "/placeholder.svg?height=64&width=64&query=professional avatar"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white truncate">{testimonial.name}</h4>
                      <p className="text-sm text-slate-400 truncate">{testimonial.role}</p>
                      <p className="text-xs text-purple-300 truncate">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="flex-1 mb-4">
                    <div className="flex gap-2 mb-2">
                      <Quote className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    </div>
                    <p className="text-slate-300 italic leading-relaxed text-sm">{testimonial.quote}</p>
                  </div>

                  {/* Metrics */}
                  <div className="pt-4 border-t border-purple-500/20">
                    <div className="flex items-center gap-2 text-xs">
                      <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-green-300 font-medium">{testimonial.metrics}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">No testimonials found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-pink-600/10"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="glass-card-dark p-12 rounded-3xl text-center border-purple-500/30 hover-lift">
            <h2 className="text-4xl font-bold text-white mb-4">Join Thousands of Satisfied Customers</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Experience the FedEx difference. Start shipping with confidence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-3 rounded-lg btn-smooth">
                Get Started Today
              </button>
              <button className="border border-slate-600 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg bg-transparent btn-smooth">
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
