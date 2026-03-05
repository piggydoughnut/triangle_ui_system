"use client"

import { Separator } from "@/components/ui/separator"
import { SearchBar } from "@/components/ui/search-bar"

const results = [
  "hackathon app",
  "hackathon app 1",
  "hackathon app 2",
  "hackathon app 3",
]

export function SearchingViewMobile() {
  return (
    <div className="flex flex-col h-full">
      {/* Search header */}
      <div className="flex items-center gap-2 px-4 pt-3 pb-2">
        <SearchBar defaultValue="Ha" />
        <button className="text-sm text-foreground font-medium shrink-0">Cancel</button>
      </div>

      {/* Results */}
      <div className="flex-1 px-4">
        {results.map((result, i) => (
          <div key={result}>
            <div className="py-3">
              <span className="text-sm font-semibold">{result}</span>
            </div>
            {i < results.length - 1 && <Separator />}
          </div>
        ))}
      </div>
    </div>
  )
}

export function SearchingViewDesktop() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* Search bar */}
      <div className="flex items-center gap-3 mb-8">
        <SearchBar defaultValue="Ha" className="h-12 px-4" />
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium shrink-0">
          Cancel
        </button>
      </div>

      {/* Results header */}
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        Results
      </h2>

      {/* Results list */}
      <div className="rounded-xl border divide-y">
        {results.map((result) => (
          <div key={result} className="px-4 py-3 hover:bg-secondary/50 transition-colors cursor-pointer">
            <span className="text-sm font-semibold">{result}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
