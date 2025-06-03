"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Youtube, Music, Phone, MessageCircle, ArrowUp, Star, Zap } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HimtiLinktree() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      name: "Instagram HIMTI",
      url: "https://www.instagram.com/himti_ua?igsh=MXY2NTJiYWI2Z2U0Yw==",
      icon: Instagram,
      gradient: "from-violet-600 via-pink-600 to-orange-500",
      description: "Latest updates & behind the scenes",
      followers: "2.5K",
      verified: true,
    },
    {
      name: "YouTube HIMTI",
      url: "https://www.youtube.com/@himtiunair",
      icon: Youtube,
      gradient: "from-red-500 via-red-600 to-red-700",
      description: "Educational content & tech talks",
      followers: "1.2K",
      verified: true,
    },
    {
      name: "TikTok HIMTI",
      url: "https://www.tiktok.com/@himti_ua?_t=ZS-8wlUrcXpys5&_r=1",
      icon: Music,
      gradient: "from-slate-900 via-slate-800 to-black",
      description: "Fun tech content & tutorials",
      followers: "850",
      verified: false,
    },
  ]

  const contactLinks = [
    {
      name: "Media Partner",
      url: "tel:+6281231830086",
      icon: Phone,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      description: "+62 812-3183-0086",
      subtitle: "Business & Partnerships",
    },
    {
      name: "LINE Official",
      url: "https://line.me/ti/p/@543rxtej",
      icon: MessageCircle,
      gradient: "from-green-500 via-green-600 to-emerald-600",
      description: "@543rxtej",
      subtitle: "Quick Support & Info",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-[15%] left-[10%] w-96 h-96 bg-gradient-to-r from-blue-600/40 to-cyan-500/40 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-[60%] right-[5%] w-80 h-80 bg-gradient-to-r from-violet-600/40 to-purple-500/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-[10%] left-[20%] w-72 h-72 bg-gradient-to-r from-pink-600/40 to-rose-500/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-70"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-lg">
        {/* Modern Header */}
        <div className="text-center mb-12">
          {/* Logo Section */}
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto mb-8">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 rounded-full blur-2xl opacity-60 animate-pulse scale-110"></div>

            {/* Main Container */}
            <div className="relative w-full h-full">
              {/* Outer Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 rounded-full p-1">
                <div className="w-full h-full bg-white rounded-full p-3">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                    <Image
                      src="https://yt3.googleusercontent.com/ytc/AIdro_lMVzWna2d9etetXLPV39J3MosIUgeK_OwKLbfAd4ll-x0=s900-c-k-c0x00ffffff-no-rj"
                      alt="HIMTI Logo"
                      fill
                      sizes="(max-width: 768px) 144px, (max-width: 1024px) 160px, 176px"
                      priority
                      className="object-cover rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML =
                            '<div class="w-full h-full bg-gradient-to-br from-blue-500 to-violet-600 rounded-full flex items-center justify-center"><span class="text-white font-bold text-4xl">HIMTI</span></div>'
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <div
                className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-xl animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
          </div>

          {/* Title Section */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
              HIMTI UNAIR
            </h1>

            {/* Status Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-xl px-6 py-3 rounded-full shadow-lg border border-white/30">
              <div className="relative">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm font-semibold text-slate-700">Active Community</span>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <span className="text-sm text-slate-600">1,5k+ Members</span>
            </div>

            <p className="text-slate-200 text-sm leading-relaxed max-w-sm mx-auto">
              Himpunan Mahasiswa Teknik Informatika
              <br />
              <span className="font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Universitas Airlangga
              </span>
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4 mb-10">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Connect With Us</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
          </div>

          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <Card
                key={index}
                className="group hover:scale-[1.02] transition-all duration-500 border-0 overflow-hidden bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl"
              >
                <CardContent className="p-0 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-r ${link.gradient}`}></div>
                  </div>

                  {/* Accent Border */}
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${link.gradient}`}></div>

                  <Button
                    asChild
                    className="w-full h-auto p-6 bg-transparent hover:bg-white/50 text-left justify-start border-0 rounded-lg transition-all duration-300"
                    variant="ghost"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                      <div className="flex items-center space-x-4 w-full">
                        {/* Icon */}
                        <div className="relative">
                          <div
                            className={`p-4 rounded-2xl bg-gradient-to-r ${link.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          {/* Notification */}
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-bold text-slate-800 text-lg truncate">{link.name}</h3>
                            {link.verified && (
                              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-slate-600 mb-1 line-clamp-1">{link.description}</p>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-semibold text-slate-800">{link.followers}</span>
                            <span className="text-xs text-slate-500">followers</span>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Contact Section */}
        <div className="space-y-4 mb-10">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Get In Touch</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto"></div>
          </div>

          {contactLinks.map((link, index) => {
            const IconComponent = link.icon
            return (
              <Card
                key={index}
                className="group hover:scale-[1.02] transition-all duration-500 border-0 overflow-hidden bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl"
              >
                <CardContent className="p-0 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-r ${link.gradient}`}></div>
                  </div>

                  {/* Accent Border */}
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${link.gradient}`}></div>

                  <Button
                    asChild
                    className="w-full h-auto p-6 bg-transparent hover:bg-white/50 text-left justify-start border-0 rounded-lg transition-all duration-300"
                    variant="ghost"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                      <div className="flex items-center space-x-4 w-full">
                        {/* Icon */}
                        <div
                          className={`p-4 rounded-2xl bg-gradient-to-r ${link.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-slate-800 text-lg truncate mb-1">{link.name}</h3>
                          <p className="text-sm text-slate-600 mb-1 line-clamp-1">{link.description}</p>
                          <p className="text-xs text-slate-500 font-medium">{link.subtitle}</p>
                        </div>

                        {/* Arrow */}
                        <div className="text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Modern Footer */}
        <div className="text-center space-y-6">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg">
            <p className="text-xs text-slate-600 leading-relaxed">
              Connecting students, building futures in Information Technology
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <span className="text-xs text-slate-500">Made with</span>
              <span className="text-red-500 animate-pulse text-sm">❤️</span>
              <span className="text-xs text-slate-500">by HIMTI Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {mounted && showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white rounded-full shadow-xl transition-all duration-300 z-50 backdrop-blur-xl border border-white/20"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
