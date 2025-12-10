"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  email: string
  fullName: string
  username: string
  phoneNumber: string
  address: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => boolean
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const DEMO_USER: User = {
  email: "wisdomgeoffrey73@gmail.com",
  fullName: "Wisdom Geoffrey",
  username: "wisdomgeoffrey",
  phoneNumber: "+447538811282",
  address: "42 Oxford Street, London, United Kingdom",
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const savedUser = localStorage.getItem("fedex-user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const login = (email: string, password: string): boolean => {
    if (email === "wisdomgeoffrey73@gmail.com" && password === "wisdomgeo66") {
      setUser(DEMO_USER)
      localStorage.setItem("fedex-user", JSON.stringify(DEMO_USER))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("fedex-user")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
