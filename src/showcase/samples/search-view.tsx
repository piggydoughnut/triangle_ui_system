"use client"

import { Separator } from "@/components/ui/separator"
import { SearchBar } from "@/components/ui/search-bar"
import { IconBox } from "@/components/ui/icon-box"
import { TicketAppIcon, W3SIcon } from "@/components/ui/icons"
import { MobileShell } from "@/showcase/mobile-shell"

function MdIcon({ name, size = 24 }: { name: string; size?: number }) {
  return (
    <span className="material-icons-round" style={{ fontSize: size }}>
      {name}
    </span>
  )
}

interface FavItem {
  name: string
  icon: React.ReactNode
  iconLg: React.ReactNode
}

interface ProductItem {
  name: string
  icon: React.ReactNode
}

const favorites: FavItem[] = [
  { name: "Planner", icon: <MdIcon name="format_list_bulleted" size={20} />, iconLg: <MdIcon name="format_list_bulleted" size={48} /> },
  { name: "Recent", icon: <MdIcon name="chat_bubble" size={20} />, iconLg: <MdIcon name="chat_bubble" size={48} /> },
  { name: "W3S", icon: <W3SIcon size={20} />, iconLg: <W3SIcon size={48} /> },
]

const products: ProductItem[] = [
  { name: "Gold", icon: <MdIcon name="toll" size={32} /> },
  { name: "Starweave", icon: <MdIcon name="star" size={32} /> },
  { name: "Ticket App", icon: <TicketAppIcon size={32} /> },
  { name: "Hack M3", icon: <MdIcon name="note_add" size={32} /> },
  { name: "Web3 Summit", icon: <W3SIcon size={32} /> },
]

export function SearchView() {
  return (
    <MobileShell url="polkadot.com/search">
      {/* Mobile layout */}
      <div className="@md:hidden flex flex-col flex-1">
        {/* Search bar */}
        <div className="pb-4 px-4" style={{ paddingTop: 10 }}>
          <SearchBar active={false} />
        </div>

        {/* Favorites */}
        <div className="px-4 pb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            Favorites
          </h3>
          <div className="flex gap-4">
            {favorites.map((fav) => (
              <div key={fav.name} className="flex flex-col items-center gap-2">
                <IconBox size="lg">
                  {fav.iconLg}
                </IconBox>
                <span className="text-xs text-muted-foreground">{fav.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* All Products */}
        <div className="px-4 flex-1">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
            All Products
          </h3>
          <div>
            {products.map((product, i) => (
              <div key={product.name}>
                <div className="flex items-center gap-4 py-4">
                  <IconBox size="md">
                    {product.icon}
                  </IconBox>
                  <span className="text-base font-semibold">{product.name}</span>
                </div>
                {i < products.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden @md:flex h-full min-h-[540px]">
        {/* Sidebar */}
        <aside className="w-60 border-r p-4 flex flex-col gap-6 shrink-0">
          <div>
            <SearchBar active={false} />
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Favorites
            </h3>
            <div className="space-y-1">
              {favorites.map((fav) => (
                <div key={fav.name} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer">
                  <IconBox size="sm">
                    {fav.icon}
                  </IconBox>
                  <span className="text-sm font-semibold">{fav.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              All Products
            </h3>
            <div className="space-y-1">
              {products.map((product) => (
                <div key={product.name} className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer">
                  <IconBox size="sm">
                    {product.icon}
                  </IconBox>
                  <span className="text-sm font-semibold">{product.name}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          <h1 className="text-h3 font-serif font-normal mb-2">Search</h1>
          <p className="text-muted-foreground mb-8">Find products, tools, and resources across the Polkadot ecosystem.</p>

          <div className="max-w-lg mb-8">
            <SearchBar placeholder="Search products, tools, and more..." className="h-12" />
          </div>

          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            Favorites
          </h2>
          <div className="flex gap-4 mb-8">
            {favorites.map((fav) => (
              <div key={fav.name} className="flex flex-col items-center gap-2 cursor-pointer group">
                <IconBox size="lg" className="group-hover:bg-foreground/90 transition-colors">
                  {fav.iconLg}
                </IconBox>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{fav.name}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            All Products
          </h2>
          <div className="grid grid-cols-2 gap-3 max-w-lg">
            {products.map((product) => (
              <div key={product.name} className="flex items-center gap-3 p-3 rounded-xl border hover:bg-secondary/50 transition-colors cursor-pointer">
                <IconBox size="md">
                  {product.icon}
                </IconBox>
                <span className="text-sm font-semibold">{product.name}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </MobileShell>
  )
}

// Aliases for samples page compatibility
export const SearchViewMobile = SearchView
export const SearchViewDesktop = SearchView
