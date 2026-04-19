import { useEffect, useRef } from "react"

export default function MinecraftCreeper() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let angle = 0
    let frame: number
    const animate = () => {
      angle += 0.005
      const y = Math.sin(angle) * 18
      const rot = Math.sin(angle * 0.7) * 4
      el.style.transform = `translateY(${y}px) rotate(${rot}deg)`
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  const face = `
    ##  ##
    ##  ##
        
    ######
    # ## #
    ######
  `

  return (
    <div
      className="absolute inset-0 w-full h-full flex items-center justify-end pr-16 md:pr-32"
      style={{ pointerEvents: "none" }}
    >
      <div ref={containerRef} style={{ transition: "none", willChange: "transform" }}>
        <div className="relative" style={{ width: 160, height: 220 }}>
          {/* Head */}
          <div
            className="absolute"
            style={{
              top: 0,
              left: 20,
              width: 120,
              height: 120,
              position: "relative",
              transformStyle: "preserve-3d",
              transform: "rotateX(10deg) rotateY(-20deg)",
            }}
          >
            {/* Head front */}
            <div style={{
              position: "absolute", width: 120, height: 120,
              background: "#5a9a2e",
              backgroundImage: `
                repeating-linear-gradient(0deg, rgba(0,0,0,0.07) 0px, rgba(0,0,0,0.07) 15px, transparent 15px, transparent 30px),
                repeating-linear-gradient(90deg, rgba(0,0,0,0.07) 0px, rgba(0,0,0,0.07) 15px, transparent 15px, transparent 30px)
              `,
              boxShadow: "inset -8px -8px 0px rgba(0,0,0,0.25), inset 8px 8px 0px rgba(255,255,255,0.1)",
              imageRendering: "pixelated",
            }}>
              {/* Eyes */}
              <div style={{ position: "absolute", top: 28, left: 18, width: 24, height: 24, background: "#111", boxShadow: "inset 2px 2px 0 rgba(255,255,255,0.1)" }} />
              <div style={{ position: "absolute", top: 28, right: 18, width: 24, height: 24, background: "#111", boxShadow: "inset 2px 2px 0 rgba(255,255,255,0.1)" }} />
              {/* Mouth */}
              <div style={{ position: "absolute", top: 62, left: 36, width: 16, height: 16, background: "#111" }} />
              <div style={{ position: "absolute", top: 62, left: 36+16, width: 16, height: 16, background: "#111" }} />
              <div style={{ position: "absolute", top: 62+16, left: 18, width: 16, height: 16, background: "#111" }} />
              <div style={{ position: "absolute", top: 62+16, left: 18+16+16+16+16, width: 16, height: 16, background: "#111" }} />
              <div style={{ position: "absolute", top: 62+16+16, left: 18, width: 68, height: 16, background: "#111" }} />
            </div>
          </div>

          {/* Body */}
          <div style={{
            position: "absolute",
            top: 110,
            left: 10,
            width: 140,
            height: 90,
            background: "#4a8a24",
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 15px, transparent 15px, transparent 30px),
              repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 15px, transparent 15px, transparent 30px)
            `,
            boxShadow: "inset -10px -10px 0px rgba(0,0,0,0.3), inset 6px 6px 0px rgba(255,255,255,0.08)",
          }}>
            {/* Belly pattern */}
            <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 60, height: 70,
              background: "#3a7a18",
              backgroundImage: `repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 10px, transparent 10px, transparent 20px),
              repeating-linear-gradient(90deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 10px, transparent 10px, transparent 20px)`
            }} />
          </div>

          {/* Legs */}
          {[0, 1, 2, 3].map(i => (
            <div key={i} style={{
              position: "absolute",
              top: 194,
              left: 10 + (i < 2 ? i * 38 : (i === 2 ? 72 : 110)),
              width: 34,
              height: 32,
              background: i % 2 === 0 ? "#4a8a24" : "#3d7a1c",
              boxShadow: "inset -4px -4px 0px rgba(0,0,0,0.3)",
            }} />
          ))}

          {/* Glow effect */}
          <div style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(100,220,50,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: -1,
          }} />
        </div>

        {/* Shadow */}
        <div style={{
          width: 120,
          height: 16,
          margin: "8px auto 0",
          background: "radial-gradient(ellipse, rgba(0,0,0,0.35) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(4px)",
        }} />
      </div>
    </div>
  )
}
