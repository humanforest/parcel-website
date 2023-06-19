export default function DesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="py-10">
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  )
}
