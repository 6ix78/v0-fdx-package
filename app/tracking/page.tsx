"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Search, Package, MapPin, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TrackingMap } from "@/components/tracking-map"
import { useLanguage } from "@/contexts/language-context"

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingData, setTrackingData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const { t } = useLanguage()
  const searchParams = useSearchParams()

  useEffect(() => {
    const number = searchParams.get("number")
    if (number && number !== trackingNumber) {
      setTrackingNumber(number)

      setIsLoading(true)
      setError("")

      setTimeout(() => {
        if (number === "FX847392156AF") {
          setTrackingData({
            trackingNumber: number,
            status: "inTransit",
            from: "Kaboul - 587, Karte Se Kabul, 1001, Afghanistan",
            to: "19a Naguru E Rd, Kampala, Uganda",
            receiver: "PEDRO MIGUEL",
            estimatedDelivery: "1-10 September 2025",
            timeline: [
              {
                date: "1 September 2025",
                time: "9:00 AM",
                status: "Package Left Origin",
                location: "Kabul, Afghanistan",
                completed: true,
              },
              {
                date: "2 September 2025",
                time: "2:30 PM",
                status: "In Transit",
                location: "Dubai International Hub",
                completed: true,
              },
              {
                date: "4 September 2025",
                time: "Expected 11:00 AM",
                status: "Customs Clearance",
                location: "Entebbe International Airport, Uganda",
                completed: false,
              },
              {
                date: "6 September 2025",
                time: "Expected 3:00 PM",
                status: "Out for Delivery",
                location: "Kampala Distribution Center",
                completed: false,
              },
              {
                date: "1-10 September 2025",
                time: "By End of Day",
                status: "Delivered",
                location: "19a Naguru E Rd, Kampala",
                completed: false,
              },
            ],
          })
        } else if (number === "FX123456789PE" || number.includes("FX")) {
          setTrackingData({
            trackingNumber: number,
            status: "inTransit",
            from: "Westchester, New York City, USA",
            to: "Av larco 740 vista alegre - victor larco, Trujillo Peru",
            receiver: "Ivan Humberto",
            estimatedDelivery: "2-5 August 2025",
            timeline: [
              {
                date: "22 July 2025",
                time: "10:30 AM",
                status: "Package Left Origin",
                location: "Westchester, NY",
                completed: true,
              },
              {
                date: "23 July 2025",
                time: "2:15 PM",
                status: "Shipped",
                location: "JFK International Airport, NY",
                completed: true,
              },
              {
                date: "25 July 2025",
                time: "8:45 AM",
                status: "In Transit",
                location: "Lima, Peru Distribution Center",
                completed: true,
              },
              {
                date: "26 July 2025",
                time: "Expected 11:00 AM",
                status: "Out for Delivery",
                location: "Trujillo Distribution Center",
                completed: false,
              },
              {
                date: "2-5 August 2025",
                time: "By End of Day",
                status: "Delivered",
                location: "Av larco 740 vista alegre",
                completed: false,
              },
            ],
          })
        } else {
          setError("Tracking number not found. Please check and try again.")
          setTrackingData(null)
        }
        setIsLoading(false)
      }, 1500)
    }
  }, [searchParams, trackingNumber])

  const handleTrack = async (number: string = trackingNumber) => {
    if (!number.trim()) return

    setIsLoading(true)
    setError("")

    setTimeout(() => {
      if (number === "FX847392156AF") {
        setTrackingData({
          trackingNumber: number,
          status: "inTransit",
          from: "Kaboul - 587, Karte Se Kabul, 1001, Afghanistan",
          to: "19a Naguru E Rd, Kampala, Uganda",
          receiver: "PEDRO MIGUEL",
          estimatedDelivery: "1-10 September 2025",
          timeline: [
            {
              date: "1 September 2025",
              time: "9:00 AM",
              status: "Package Left Origin",
              location: "Kabul, Afghanistan",
              completed: true,
            },
            {
              date: "2 September 2025",
              time: "2:30 PM",
              status: "In Transit",
              location: "Dubai International Hub",
              completed: true,
            },
            {
              date: "4 September 2025",
              time: "Expected 11:00 AM",
              status: "Customs Clearance",
              location: "Entebbe International Airport, Uganda",
              completed: false,
            },
            {
              date: "6 September 2025",
              time: "Expected 3:00 PM",
              status: "Out for Delivery",
              location: "Kampala Distribution Center",
              completed: false,
            },
            {
              date: "1-10 September 2025",
              time: "By End of Day",
              status: "Delivered",
              location: "19a Naguru E Rd, Kampala",
              completed: false,
            },
          ],
        })
      } else if (number === "FX123456789PE" || number.includes("FX")) {
        setTrackingData({
          trackingNumber: number,
          status: "inTransit",
          from: "Westchester, New York City, USA",
          to: "Av larco 740 vista alegre - victor larco, Trujillo Peru",
          receiver: "Ivan Humberto",
          estimatedDelivery: "2-5 August 2025",
          timeline: [
            {
              date: "22 July 2025",
              time: "10:30 AM",
              status: "Package Left Origin",
              location: "Westchester, NY",
              completed: true,
            },
            {
              date: "23 July 2025",
              time: "2:15 PM",
              status: "Shipped",
              location: "JFK International Airport, NY",
              completed: true,
            },
            {
              date: "25 July 2025",
              time: "8:45 AM",
              status: "In Transit",
              location: "Lima, Peru Distribution Center",
              completed: true,
            },
            {
              date: "26 July 2025",
              time: "Expected 11:00 AM",
              status: "Out for Delivery",
              location: "Trujillo Distribution Center",
              completed: false,
            },
            {
              date: "2-5 August 2025",
              time: "By End of Day",
              status: "Delivered",
              location: "Av larco 740 vista alegre",
              completed: false,
            },
          ],
        })
      } else {
        setError("Tracking number not found. Please check and try again.")
        setTrackingData(null)
      }
      setIsLoading(false)
    }, 1500)
  }

  const mapData =
    trackingData?.trackingNumber === "FX847392156AF"
      ? {
          origin: {
            lat: 34.5553,
            lng: 69.2075,
            name: "Kabul, Afghanistan",
          },
          destination: {
            lat: 0.3476,
            lng: 32.5825,
            name: "Kampala, Uganda",
          },
          currentLocation: {
            lat: 25.2048,
            lng: 55.2708,
            name: "Dubai International Hub",
          },
        }
      : {
          origin: {
            lat: 40.9584,
            lng: -73.7781,
            name: "Westchester, NY",
          },
          destination: {
            lat: -8.1116,
            lng: -79.029,
            name: "Trujillo, Peru",
          },
          currentLocation: {
            lat: -12.0464,
            lng: -77.0428,
            name: "Lima Distribution Center",
          },
        }

  return (
    <div className="min-h-screen gradient-bg-dark py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-down">
          <h1 className="text-4xl font-bold text-white">{t("trackPackage")}</h1>
          <p className="text-purple-200 mt-2">Enter your tracking number to see real-time updates</p>
        </div>

        <Card
          className="mb-8 glass-effect-dark border-purple-500/30 hover-lift animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder={t("trackingPlaceholder")}
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder-white/80 focus:border-purple-500 focus:ring-purple-500/50"
                  onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                />
              </div>
              <Button
                onClick={() => handleTrack()}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12 px-8 btn-smooth"
                disabled={isLoading || !trackingNumber.trim()}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Tracking...</span>
                  </div>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    {t("trackButton")}
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {error && (
          <Alert
            variant="destructive"
            className="mb-8 glass-effect-dark border-red-500/30 bg-red-900/20 animate-slide-down"
          >
            <AlertDescription className="text-red-300">{error}</AlertDescription>
          </Alert>
        )}

        {trackingData && (
          <div className="space-y-8">
            <Card className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-5 w-5" />
                  {t("packageDetails")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <p className="text-sm font-medium text-purple-200">{t("trackingNumber")}</p>
                    <p className="text-lg font-mono font-bold">{trackingData.trackingNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-200">{t("status")}</p>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30 mt-1">
                      {t(trackingData.status as any)}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-200">{t("from")}</p>
                    <p className="text-sm">{trackingData.from}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-200">{t("to")}</p>
                    <p className="text-sm">{trackingData.to}</p>
                    <p className="text-xs text-pink-300 mt-1">Receiver: {trackingData.receiver}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-purple-500/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-green-400" />
                      <span className="text-sm font-medium text-green-300">
                        {t("estimatedDelivery")}: {trackingData.estimatedDelivery}
                      </span>
                    </div>
                    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Package className="h-4 w-4 text-yellow-400" />
                        <span className="text-sm font-semibold text-yellow-300">
                          Delivery Fee: {trackingData.trackingNumber === "FX847392156AF" ? "$750" : "$125"}
                        </span>
                      </div>
                      <p className="text-xs text-yellow-200">
                        This fee covers final mile delivery, customs clearance, local handling, and ensures compliance
                        with destination country regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  Live Package Location
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Real-time tracking of your package journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TrackingMap {...mapData} />
              </CardContent>
            </Card>

            <Card
              className="glass-effect-dark text-white border-purple-500/30 hover-lift animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  {t("trackingDetails")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingData.timeline.map((event: any, index: number) => (
                    <div key={index} className="relative flex items-start space-x-4 animate-fade-in">
                      {index < trackingData.timeline.length - 1 && (
                        <div className="absolute left-2 top-6 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-purple-500/20"></div>
                      )}

                      <div className="flex-shrink-0 relative">
                        <div
                          className={`h-4 w-4 rounded-full border-2 ${
                            event.completed
                              ? "bg-green-500 border-green-500 animate-glow-pulse"
                              : index === trackingData.timeline.findIndex((e: any) => !e.completed)
                                ? "bg-blue-500 border-blue-500 animate-pulse"
                                : "bg-white/20 border-purple-300"
                          }`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className={`text-sm font-medium ${event.completed ? "text-white" : "text-purple-300"}`}>
                            {event.status}
                          </p>
                          <div className="text-right">
                            <p className="text-xs text-purple-200">{event.date}</p>
                            <p className="text-xs text-purple-300">{event.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 mt-1">
                          <MapPin className="h-3 w-3 text-purple-400" />
                          <p className="text-xs text-purple-200">{event.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
