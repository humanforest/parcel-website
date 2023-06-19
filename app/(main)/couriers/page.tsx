import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export const metadata = {
  title: "Couriers",
}

export default function Page() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Boost your delivery.
            <br />
            Start using our app today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/application"
              className={buttonVariants({ variant: "primary", size: "xl" })}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
