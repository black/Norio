import { ThemeToggle } from "@/components/theme-toggle"
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b">
       <ThemeToggle />
    </header>
  )
}