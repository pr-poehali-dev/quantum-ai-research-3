import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const CDN_BASE = "https://cdn.poehali.dev/templates/meet-jack"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/0 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 text-transparent">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.poehali.dev/projects/4d77f338-ff1f-46fe-afbb-d7f43bb123d9/files/ec7d939e-b914-4e8d-ad92-04150023243a.jpg"
            alt="SunCraft"
            width={36}
            height={36}
            className="rounded-full"
            style={{ imageRendering: "pixelated" }}
          />
          <span className="font-bold text-lg" style={{ fontFamily: "var(--font-montserrat)", color: "#FFD700" }}>SunCraft</span>
        </div>

        <div className="flex items-center gap-2">
          <a href="#contact">
            <Button
              className="bg-primary text-primary-foreground rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              style={{ paddingLeft: "24px", paddingRight: "16px" }}
            >
              Задонатить <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}