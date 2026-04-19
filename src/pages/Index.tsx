import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import DonateShop from "@/components/DonateShop"

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        <section
          className="relative rounded-4xl mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full overflow-hidden"
          style={{ minHeight: 420 }}
        >
          {/* Space background */}
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

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 px-8 md:px-16 py-12">

            {/* Blazes */}
            <div className="flex items-center gap-4 md:gap-8 shrink-0">
              <img src="https://minecraft.wiki/images/Blaze.png" alt="Ифрит" className="w-32 h-32 md:w-44 md:h-44 object-contain drop-shadow-lg" style={{ imageRendering: "pixelated" }} />
              <img src="https://minecraft.wiki/images/Blaze_JE3_BE2.png" alt="Ифрит" className="w-32 h-32 md:w-44 md:h-44 object-contain drop-shadow-lg" style={{ imageRendering: "pixelated" }} />
              <img src="https://minecraft.wiki/images/Blaze.png" alt="Ифрит" className="w-32 h-32 md:w-44 md:h-44 object-contain drop-shadow-lg opacity-70" style={{ imageRendering: "pixelated", transform: "scaleX(-1)" }} />
            </div>

            {/* Info */}
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
                    <span
                      className="text-white/90 text-sm font-medium"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {label === "IP адрес" ? (
                        <button
                          onClick={() => navigator.clipboard.writeText("d2.atlantix.me:25063")}
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

      <div className="max-w-[1200px] mx-auto px-4 md:px-0 mt-12">
        <DonateShop />
      </div>

      <Footer />
    </div>
  )
}

export default Index