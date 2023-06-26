import { Input } from "@/components/ui/input"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import TypeformEmbed from "@/components/ui/typeform"

const stats = [


  { id: 1, name: 'Download the app', value: 'Step One', image: 'https://freepngimg.com/thumb/smartphone/21604-1-smartphone-transparent-background.png' },
  { id: 2, name: 'Login', value: 'Step Two', image: 'https://freepngimg.com/thumb/smartphone/21604-1-smartphone-transparent-background.png' },
  { id: 3, name: 'Start Earning!', value: 'Step Three', image: 'https://freepngimg.com/thumb/smartphone/21604-1-smartphone-transparent-background.png' },

]


export const metadata = {
  title: "Apply now",
}

export default function Page() {
  return (<div>
    <div className="bg-forest-700">


      <div className="relative overflow-hidden">

        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-center text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto">
              Apply to get started
            </h1>
            <div className="mt-6 max-w-xl lg:mt-6 xl:col-end-1 xl:row-start-1">
              <Card className="">
                <TypeformEmbed />
              </Card>
            </div>
            <img
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>



    </div>

    <div className="bg-sky-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-autumn-900 sm:text-4xl">Whats Next?</h2>
            <p className="mt-4 text-lg leading-8 text-autumn-900">
              Follow these steps to start working!
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 overflow-hidden  text-center sm:grid-cols-1 lg:grid-cols-3 drop-shadow-lg">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-forest-600 flex flex-col rounded-2xl p-8">
                <img src={stat.image} alt={stat.name} className="mx-auto h-64 w-auto mb-4 mt-4" />
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </div>


  )
}
