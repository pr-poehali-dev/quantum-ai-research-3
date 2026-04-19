import { useState } from "react"
import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import DonateShop from "@/components/DonateShop"

const BG = "hsl(25 30% 6%)"

function SectionDivider() {
  return (
    <div className="relative h-20 -my-1 pointer-events-none" style={{ zIndex: 10 }}>
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,0 C300,80 900,80 1200,0 L1200,80 L0,80 Z" fill={BG} />
      </svg>
    </div>
  )
}

const Index = () => {
  const [copied, setCopied] = useState(false)

  const copyIP = () => {
    navigator.clipboard.writeText("d2.atlantix.me:25063")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full min-h-screen py-0 bg-background">

      {/* Hero */}
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>
      </div>

      {/* Divider hero → info */}
      <div className="relative h-20 pointer-events-none overflow-hidden -mt-4" style={{ backdropFilter: "blur(0px)" }}>
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(20,12,6,0.6) 50%, ${BG} 100%)`, backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }} />
      </div>

      {/* Server info */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-0">
        <section
          className="relative rounded-4xl mx-0 overflow-hidden"
          style={{ minHeight: 420 }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(https://cdn.poehali.dev/projects/4d77f338-ff1f-46fe-afbb-d7f43bb123d9/files/2b96d394-3478-4b42-8890-ffe59ff28041.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.55)",
            }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(20,10,5,0.7) 0%, rgba(10,5,20,0.4) 100%)" }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: `linear-gradient(to bottom, transparent, ${BG})` }} />

          <div className="relative z-10 flex flex-col items-start gap-8 px-8 md:px-16 py-12">
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight" style={{ fontFamily: "'Montserrat', sans-serif", textShadow: "0 0 30px rgba(255,180,0,0.5)" }}>
                SunCraft
              </h2>

              <div className="flex flex-col gap-3">
                {[
                  { label: "Версия", value: "Minecraft Java 1.19.3" },
                  { label: "IP адрес", value: "d2.atlantix.me:25063" },
                  { label: "О сервере", value: "Уютный сервер для настоящих игроков. Строй, воюй, развивайся!" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest mt-0.5 shrink-0" style={{ color: "#FFD700", fontFamily: "'Montserrat', sans-serif", minWidth: 80 }}>{label}</span>
                    <span className="text-white/90 text-sm font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {label === "IP адрес" ? (
                        <button
                          onClick={copyIP}
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 rounded-lg transition-all duration-200 font-mono text-sm font-bold tracking-wider"
                          title="Нажми чтобы скопировать"
                        >
                          {value}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                        </button>
                      ) : value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Divider info → shop */}
      <div className="relative h-20 pointer-events-none overflow-hidden -mt-4">
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(20,12,6,0.6) 50%, ${BG} 100%)`, backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }} />
      </div>

      {/* Donate shop */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-0">
        <DonateShop />
      </div>

      {/* Divider shop → footer */}
      <div className="relative h-20 pointer-events-none overflow-hidden -mt-4">
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(20,12,6,0.6) 50%, hsl(25 25% 10%) 100%)`, backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }} />
      </div>

      <Footer />

      {/* Copied toast */}
      <div
        className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 pointer-events-none"
        style={{ opacity: copied ? 1 : 0, transform: `translateX(-50%) translateY(${copied ? 0 : 12}px)` }}
      >
        <div className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-mono font-semibold text-sm shadow-lg flex items-center gap-2">
          ✓ IP скопирован!
        </div>
      </div>

    </div>
  )
}

export default Index