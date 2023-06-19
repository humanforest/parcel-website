export default function LegalsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="py-10">
      <div className="container py-4">{children}</div>
    </section>
  )
}
