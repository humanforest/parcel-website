import Footer from "@/components/footer"
import { SiteHeader } from "@/components/site-header"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
