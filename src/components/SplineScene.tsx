import MinecraftCreeper from "@/components/MinecraftCreeper"

export default function SplineScene() {
  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        backgroundImage: `url(https://cdn.poehali.dev/projects/4d77f338-ff1f-46fe-afbb-d7f43bb123d9/files/783afb0a-f8be-48f3-b7a9-554d0a1c3b70.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <MinecraftCreeper />
    </div>
  )
}