import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"

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
          className="relative rounded-4xl py-7 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">
            +
          </div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">
            +
          </div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>

          <div className="px-6 md:px-40">
            <div className="flex items-center justify-center mb-3.5 md:gap-11">
              <div className="flex flex-col items-center">
                <img
                  src="https://minecraft.wiki/images/Blaze.png"
                  alt="Ифрит"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="https://minecraft.wiki/images/Blaze_JE3_BE2.png"
                  alt="Ифрит спрайт"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>

              <div className="flex flex-col items-center">
                <img
                  src="https://minecraft.wiki/images/Blaze.png"
                  alt="Ифрит зеркало"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain opacity-70"
                  style={{ imageRendering: "pixelated", transform: "scaleX(-1)" }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-5xl">
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm">Сервер</span>
                <span className="text-foreground font-mono text-sm">SunCraft</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm">Версия</span>
                <span className="text-foreground font-mono text-sm">Minecraft Java 1.19.3</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm">О сервере</span>
                <span className="text-foreground font-mono text-sm">
                  Уютный сервер для настоящих игроков. Строй, воюй, развивайся — и поддержи любимый проект донатом.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index
