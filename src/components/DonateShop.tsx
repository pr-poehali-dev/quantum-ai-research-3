import { useState } from "react"
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

export default function DonateShop() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

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

  const totalItems = cart.reduce((s, c) => s + c.qty, 0)
  const totalPrice = cart.reduce((s, c) => s + c.item.price * c.qty, 0)

  return (
    <section className="mx-4 md:mx-0 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-foreground text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
            Донат-магазин
          </h2>
          <p className="text-muted-foreground font-mono text-sm mt-1">Выбери привилегии и поддержи сервер</p>
        </div>
        <button
          onClick={() => setCartOpen(o => !o)}
          className="relative flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full font-semibold font-mono hover:scale-105 transition-all duration-200 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
        >
          <Icon name="ShoppingCart" size={18} />
          Корзина
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Cart */}
      {cartOpen && (
        <div className="mb-6 bg-card border border-border rounded-2xl p-6">
          <h3 className="text-foreground font-bold font-mono text-lg mb-4 flex items-center gap-2">
            <Icon name="ShoppingCart" size={18} /> Ваша корзина
          </h3>
          {cart.length === 0 ? (
            <p className="text-muted-foreground font-mono text-sm">Корзина пуста — добавьте привилегии ниже</p>
          ) : (
            <>
              <div className="space-y-3 mb-4">
                {cart.map(({ item, qty }) => (
                  <div key={item.id} className="flex items-center justify-between border-b border-border pb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <p className="text-foreground font-mono font-semibold">{item.name}</p>
                        <p className="text-muted-foreground font-mono text-xs">× {qty} шт.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
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
              <div className="flex items-center justify-between">
                <span className="text-foreground font-mono font-bold text-lg">Итого: {totalPrice} ₽</span>
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold font-mono hover:scale-105 transition-all duration-200 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] flex items-center gap-2">
                  Оплатить <Icon name="ArrowUpRight" size={16} />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ITEMS.map(item => (
          <div
            key={item.id}
            className="bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 hover:border-primary/50 transition-all duration-200"
            style={{ boxShadow: `0 0 0 0 ${item.color}` }}
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">{item.emoji}</span>
              <div>
                <h3 className="text-foreground font-bold font-mono text-xl" style={{ color: item.color }}>{item.name}</h3>
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
  )
}
