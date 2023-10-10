export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-wood-50">
      <div className="flex-1">{children}</div>
    </div>
  )
}
