import { Card } from "@/components/ui/card"
import TypeformEmbed from "@/components/ui/typeform"

const stats = [
  {
    id: 1,
    name: "Download the app",
    value: "Step One",
    image: "https://i.ibb.co/0Qq2FWy/Step1.png",
  },
  {
    id: 2,
    name: "Login",
    value: "Step Two",
    image: "https://i.ibb.co/j4nBF0W/StepTwo.png",
  },
  {
    id: 3,
    name: "Start Earning!",
    value: "Step Three",
    image: "https://i.ibb.co/vwHpfm3/Step-Three.png",
  },
]

export const metadata = {
  title: "Apply now",
}

export default function Page() {
  return (
    <div>
      <div className="bg-forest-700">
        <div className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-center text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto">
                Apply to get started
              </h1>
              <div className="mt-6 max-w-xl lg:mt-6 xl:col-end-1 xl:row-start-1">
                <Card className="drop-shadow-xl">
                  <TypeformEmbed />
                </Card>
              </div>
              <div className="mt-10 drop-shadow-2xl aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36">
                <img
                  src="https://www.intelligenttransport.com/wp-content/uploads/HumanForest-5.jpg"
                  alt=""
                  width={1280}
                  height={1024}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </div>

      <div className="bg-sky-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-autumn-900 sm:text-4xl">
                Whats Next?
              </h2>
              <p className="mt-4 text-lg leading-8 text-autumn-900">
                Follow these steps to start working!
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 overflow-hidden  text-center drop-shadow-lg sm:grid-cols-1 lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col rounded-2xl bg-forest-500 p-8 drop-shadow-md"
                >
                  <img
                    src={stat.image}
                    alt={stat.name}
                    className="mx-auto my-4 h-80 w-auto"
                  />
                  <dt className="text-sm font-semibold leading-6 text-wood-100">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://pbs.twimg.com/card_img/1672134575324110849/wg8gPEIY?format=jpg&name=large"
          className="bg-forest-50 opacity-50"
          alt=""
        />
      </div>
    </div>
  )
}
