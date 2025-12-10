"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { LogOut, User, Package, Settings, FileText, History } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LanguageSwitcher } from "./language-switcher"
import { useAuth } from "@/contexts/auth-context"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

interface HeaderProps {
  onMenuClick?: () => void
  showMenuButton?: boolean
}

export function Header({ onMenuClick, showMenuButton = false }: HeaderProps) {
  const { user, logout, isAuthenticated } = useAuth()
  const { t } = useLanguage()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <header className="glass-card-dark border-b border-purple-500/30 shadow-lg sticky top-0 z-50 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 hover-scale group">
              <div className="flex items-center">
                <Image
                  src="/fedex-logo.png"
                  alt="FedEx Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto group-hover:brightness-110 transition-all duration-300"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            {!isAuthenticated && (
              <Link href="/login">
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium btn-smooth">
                  Login
                </Button>
              </Link>
            )}

            {isAuthenticated && (
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-white/10 hover-scale">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-gradient-to-br from-purple-600 to-purple-700 text-white">
                          {user?.fullName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 glass-card-dark border-purple-500/30" align="end" forceMount>
                    <div className="flex items-center gap-2 p-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-gradient-to-br from-purple-600 to-purple-700 text-white">
                          {user?.fullName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium text-white">{user?.fullName}</p>
                        <p className="text-xs text-slate-400">@{user?.username}</p>
                        <p className="text-xs text-slate-400">{user?.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator className="bg-slate-700/50" />
                    <Link href="/dashboard">
                      <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
                        <Package className="mr-2 h-4 w-4" />
                        Dashboard
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/dashboard/packages">
                      <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
                        <Package className="mr-2 h-4 w-4" />
                        My Packages
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/dashboard/history">
                      <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
                        <History className="mr-2 h-4 w-4" />
                        Package History
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/create-package">
                      <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
                        <FileText className="mr-2 h-4 w-4" />
                        Create Package
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/dashboard/profile">
                      <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/dashboard/settings">
                      <DropdownMenuItem className="text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator className="bg-slate-700/50" />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10 cursor-pointer transition-colors"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      {t("logout")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
