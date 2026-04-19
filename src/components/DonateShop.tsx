import { useState, useEffect, useRef } from "react"
import Icon from "@/components/ui/icon"

interface DonateItem {
  id: string
  name: string
  price: number
  color: string
  emoji: string
  perks: string[]
}

const ITEMS: DonateItem[] = [
  {
    id: "vip",
    name: "VIP",
    price: 99,
    color: "#4ade80",
    emoji: "⭐",
    perks: ["Зелёный ник", "Доступ к /fly", "Приоритет на вход", "Kit VIP раз в 3 дня"],
  },
  {
    id: "premium",
    name: "Premium",
    price: 249,
    color: "#FFD700",
    emoji: "👑",
    perks: ["Золотой ник", "Доступ к /fly + /speed", "Kit Premium раз в 2 дня", "Свой варп", "Частица вокруг игрока"],
  },
  {
    id: "god",
    name: "God",
    price: 499,
    color: "#f97316",
    emoji: "🔥",
    perks: ["Огненный ник", "Все команды VIP + Premium", "Kit God каждый день", "Зайти на полном сервере", "Особый эффект входа", "/nick — сменить имя"],
  },
  {
    id: "crystals",
    name: "100 кристаллов",
    price: 59,
    color: "#60a5fa",
    emoji: "💎",
    perks: ["100 внутриигровых кристаллов", "Трать в магазине сервера", "Не сгорают"],
  },
  {
    id: "crystals_big",
    name: "500 кристаллов",
    price: 249,
    color: "#a78bfa",
    emoji: "💠",
    perks: ["500 внутриигровых кристаллов", "Бонус +50 кристаллов", "Трать в магазине сервера", "Не сгорают"],
  },
  {
    id: "case",
    name: "Кейс удачи",
    price: 79,
    color: "#fb7185",
    emoji: "🎁",
    perks: ["Случайный редкий предмет", "Шанс на донат-привилегию", "Открыть на сервере"],
  },
]

interface CartItem {
  item: DonateItem
  qty: number
}

const MOUNTAIN_BG = "https://cdn.poehali.dev/projects/4d77f338-ff1f-46fe-afbb-d7f43bb123d9/files/6c48ff1a-2856-458e-9d2b-7254a9885759.jpg"

export default function DonateShop() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [nickname, setNickname] = useState("")
  const [showFloatingCart, setShowFloatingCart] = useState(false)
  const shopRef = useRef<HTMLElement>(null)
  const cartRef = useRef<HTMLDivElement>(null)

  const DA_URL = "https://www.donationalerts.com/r/Dima4060"

  const handlePay = () => {
    if (cart.length === 0) return
    const itemsText = cart.map(c => `${c.item.emoji} ${c.item.name}${c.qty > 1 ? ` x${c.qty}` : ""}`).join(", ")
    const comment = nickname.trim()
      ? `Ник: ${nickname.trim()} | ${itemsText}`
      : itemsText
    const url = `${DA_URL}?amount=${totalPrice}&comment=${encodeURIComponent(comment)}`
    window.open(url, "_blank")
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowFloatingCart(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (shopRef.current) observer.observe(shopRef.current)
    return () => observer.disconnect()
  }, [])

  const addToCart = (item: DonateItem) => {
    setCart(prev => {
      const existing = prev.find(c => c.item.id === item.id)
      if (existing) return prev.map(c => c.item.id === item.id ? { ...c, qty: c.qty + 1 } : c)
      return [...prev, { item, qty: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(c => c.item.id !== id))
  }

  const scrollToCart = () => {
    cartRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const totalItems = cart.reduce((s, c) => s + c.qty, 0)
  const totalPrice = cart.reduce((s, c) => s + c.item.price * c.qty, 0)

  return (
    <>
      {/* Floating cart button */}
      <div
        className="fixed bottom-8 right-8 z-50 transition-all duration-300"
        style={{
          opacity: showFloatingCart ? 1 : 0,
          transform: showFloatingCart ? "scale(1) translateY(0)" : "scale(0.8) translateY(20px)",
          pointerEvents: showFloatingCart ? "auto" : "none",
        }}
      >
        <button
          onClick={scrollToCart}
          className="relative flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-semibold font-mono shadow-lg hover:scale-105 transition-all duration-200 hover:shadow-[0_0_24px_hsl(var(--primary)/0.6)]"
        >
          <Icon name="ShoppingCart" size={20} />
          <span className="hidden sm:inline">Корзина</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Shop section */}
      <section ref={shopRef} className="mx-4 md:mx-0 mb-0">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
              Донат-магазин
            </h2>
            <p className="text-muted-foreground font-mono text-sm mt-1">Выбери привилегии и поддержи сервер</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ITEMS.map(item => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 hover:border-primary/50 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl">{item.emoji}</span>
                <div>
                  <h3 className="font-bold font-mono text-xl" style={{ color: item.color }}>{item.name}</h3>
                  <p className="text-foreground font-mono text-lg font-semibold">{item.price} ₽</p>
                </div>
              </div>

              <ul className="space-y-1 flex-1">
                {item.perks.map(perk => (
                  <li key={perk} className="flex items-start gap-2 text-sm font-mono text-muted-foreground">
                    <span style={{ color: item.color }} className="mt-0.5">✦</span>
                    {perk}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => addToCart(item)}
                className="w-full py-2.5 rounded-xl font-semibold font-mono text-sm transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                style={{ background: item.color, color: "#111" }}
              >
                <Icon name="Plus" size={16} />
                В корзину
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart section with mountain background */}
      <div ref={cartRef} className="relative mt-8 mx-4 md:mx-0 rounded-3xl overflow-hidden mb-8">
        {/* BG */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${MOUNTAIN_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px) brightness(0.4)",
            transform: "scale(1.05)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(20,10,5,0.5) 0%, rgba(20,10,5,0.85) 100%)" }} />

        {/* Content */}
        <div className="relative z-10 p-6 md:p-10">
          <h3 className="text-foreground font-bold font-mono text-2xl mb-6 flex items-center gap-3">
            <Icon name="ShoppingCart" size={22} />
            Ваша корзина
          </h3>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-4xl mb-3">🛒</p>
              <p className="text-muted-foreground font-mono text-sm">Корзина пуста — добавьте привилегии выше</p>
            </div>
          ) : (
            <>
              <div className="space-y-3 mb-6">
                {cart.map(({ item, qty }) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl px-4 py-3 border border-white/10"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <p className="font-mono font-semibold" style={{ color: item.color }}>{item.name}</p>
                        <p className="text-muted-foreground font-mono text-xs">× {qty} шт.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-foreground font-mono font-bold">{item.price * qty} ₽</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-red-400 transition-colors"
                      >
                        <Icon name="X" size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <div>
                  <label className="text-muted-foreground font-mono text-sm block mb-2">Ник на сервере (необязательно)</label>
                  <input
                    type="text"
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                    placeholder="Введи свой ник..."
                    className="w-full sm:w-72 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-muted-foreground font-mono text-sm">Итого к оплате</p>
                    <p className="text-foreground font-mono font-bold text-3xl">{totalPrice} ₽</p>
                  </div>
                  <button
                    onClick={handlePay}
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold font-mono text-lg hover:scale-105 transition-all duration-200 hover:shadow-[0_0_28px_hsl(var(--primary)/0.6)] flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    Оплатить через DonationAlerts <Icon name="ArrowUpRight" size={20} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}