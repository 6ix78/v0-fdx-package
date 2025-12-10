"use client"

import { useEffect, useRef } from "react"
import { MapPin, Navigation } from "lucide-react"

interface TrackingMapProps {
  origin: { lat: number; lng: number; name: string }
  destination: { lat: number; lng: number; name: string }
  currentLocation: { lat: number; lng: number; name: string }
}

export function TrackingMap({ origin, destination, currentLocation }: TrackingMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mapRef.current) {
      console.log("Map initialized with:", { origin, destination, currentLocation })
    }
  }, [origin, destination, currentLocation])

  return (
    <div className="space-y-4">
      <div
        ref={mapRef}
        className="w-full h-96 bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 rounded-lg relative overflow-hidden border border-gray-200 shadow-inner"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(34, 139, 34, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(70, 130, 180, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 60% 20%, rgba(255, 248, 220, 0.3) 0%, transparent 30%),
            linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 25%, #f5fffa 50%, #f0fff0 75%, #e0f6ff 100%)
          `,
        }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: "none" }}>
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="absolute inset-0">
          {/* Mountain ranges */}
          <div className="absolute" style={{ left: "10%", top: "60%", width: "30%", height: "20%" }}>
            <div className="w-full h-full bg-gradient-to-t from-green-200/40 to-gray-300/60 rounded-full blur-sm"></div>
          </div>
          <div className="absolute" style={{ left: "70%", top: "40%", width: "25%", height: "30%" }}>
            <div className="w-full h-full bg-gradient-to-t from-green-100/30 to-gray-400/50 rounded-full blur-sm"></div>
          </div>

          {/* Water bodies */}
          <div className="absolute" style={{ left: "45%", top: "70%", width: "20%", height: "15%" }}>
            <div className="w-full h-full bg-blue-200/60 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Origin */}
        <div className="absolute flex flex-col items-center z-10" style={{ left: "15%", top: "70%" }}>
          <div className="relative">
            <MapPin className="h-8 w-8 text-green-600 fill-green-500 drop-shadow-lg" />
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-green-600/30 rounded-full blur-sm"></div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg text-xs font-medium shadow-lg mt-2 border border-gray-200">
            <div className="text-green-700 font-semibold">{origin.name}</div>
            <div className="text-gray-500 text-xs">Origin</div>
          </div>
        </div>

        {/* Current Location */}
        <div className="absolute flex flex-col items-center z-10" style={{ left: "60%", top: "40%" }}>
          <div className="relative">
            <div className="absolute inset-0 h-10 w-10 bg-blue-500/20 rounded-full animate-ping"></div>
            <div className="relative bg-blue-600 rounded-full p-2 shadow-lg">
              <Navigation className="h-6 w-6 text-white animate-pulse" />
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-blue-600/40 rounded-full blur-sm"></div>
          </div>
          <div className="bg-blue-600 text-white px-3 py-2 rounded-lg text-xs font-medium shadow-lg mt-2 border border-blue-500">
            <div className="font-semibold">{currentLocation.name}</div>
            <div className="text-blue-100 text-xs">Current Location</div>
          </div>
        </div>

        {/* Destination */}
        <div className="absolute flex flex-col items-center z-10" style={{ left: "85%", top: "75%" }}>
          <div className="relative">
            <MapPin className="h-8 w-8 text-red-600 fill-red-500 drop-shadow-lg" />
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-red-600/30 rounded-full blur-sm"></div>
          </div>
          <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg text-xs font-medium shadow-lg mt-2 border border-gray-200">
            <div className="text-red-700 font-semibold">{destination.name}</div>
            <div className="text-gray-500 text-xs">Destination</div>
          </div>
        </div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="30%" stopColor="#3b82f6" />
              <stop offset="70%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
            <filter id="routeShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.3" />
            </filter>
          </defs>
          <path
            d="M 15% 70% Q 35% 20% 60% 40% T 85% 75%"
            stroke="url(#routeGradient)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="8,4"
            filter="url(#routeShadow)"
            className="animate-pulse"
          />
          {/* Flight path markers */}
          <circle cx="35%" cy="30%" r="2" fill="#3b82f6" className="animate-pulse" />
          <circle cx="60%" cy="40%" r="3" fill="#8b5cf6" className="animate-pulse" />
          <circle cx="75%" cy="55%" r="2" fill="#ef4444" className="animate-pulse" />
        </svg>

        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 max-w-xs">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <h3 className="font-semibold text-sm text-gray-800">Live Tracking</h3>
          </div>
          <p className="text-xs text-gray-600 mb-2">Real-time package location</p>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <Navigation className="h-3 w-3" />
            <span>Updated 2 minutes ago</span>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200">
          <div className="text-xs text-gray-600 mb-1">Estimated Distance</div>
          <div className="text-sm font-semibold text-gray-800">~6,420 km</div>
        </div>
      </div>

      {/* Location details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-green-600" />
            <span className="font-medium text-green-800">Origin</span>
          </div>
          <p className="text-sm text-green-700 mt-1">{origin.name}</p>
          <p className="text-xs text-green-600 mt-1">Departure Point</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Navigation className="h-5 w-5 text-blue-600" />
              <div className="absolute inset-0 h-5 w-5 bg-blue-600 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="font-medium text-blue-800">Current Location</span>
          </div>
          <p className="text-sm text-blue-700 mt-1">{currentLocation.name}</p>
          <p className="text-xs text-blue-600 mt-1">In Transit</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-red-600" />
            <span className="font-medium text-red-800">Destination</span>
          </div>
          <p className="text-sm text-red-700 mt-1">{destination.name}</p>
          <p className="text-xs text-red-600 mt-1">Final Delivery</p>
        </div>
      </div>
    </div>
  )
}
