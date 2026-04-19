const CDN_BASE = "https://cdn.poehali.dev/templates/meet-jack"

export default function RotatingTextAccent() {
  const text = "✦ SunCraft ✦ 1.19.3 "

  return (
    <div className="absolute bottom-20 right-8 w-28 h-28 md:w-36 md:h-36">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={`${CDN_BASE}/circular-logo.svg`} alt="Logo" className="w-12 h-12 md:w-16 md:h-16" />
        </div>

        <div className="absolute inset-0 animate-spin-slow">
          <svg className="w-full h-full" viewBox="0 0 120 120">
            <defs>
              <path id="circle" d="M 60,60 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
            </defs>
            <text fontSize="10" fill="white" fontWeight="600" letterSpacing="2">
              <textPath href="#circle" startOffset="0%">
                {text.repeat(3)}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}