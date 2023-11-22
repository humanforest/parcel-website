const navigation = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Cookie Policy", href: "/cookie-policy" },
]

export default function Footer() {
  return (
    <footer className="bg-forest-800">
      <div className="mx-auto max-w-full overflow-hidden px-6 py-12 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 flex columns-3 justify-center gap-x-4 sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-wood-0 underline hover:text-green-200"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <p className="mt-10 text-center text-xs leading-5 text-wood-0">
          &copy; 2023 Human Forest Limited. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
