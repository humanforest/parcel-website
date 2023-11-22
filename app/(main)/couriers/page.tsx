import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import ScrollableSections from "@/components/scroll"

export const metadata = {
  title: "Couriers",
}

const faqs = [
  {
    id: 1,
    question: "Requirements?",
    answer: [
      " Age: +18",
      " Forest user account: Download the app for e-Bikes below.",
      {
        text: "iOS",
        link: "https://example.com/download",
      },
      {
        text: "Android",
        link: "https://example.com/download",
      },
      " Equipment: You must have your own helmet and backpack (minimum size 35cm x 26cm x 25cm).",
      " Smartphone",
      " UK bank account",
    ],
  },
  {
    id: 2,
    question: "Documents",
    answer: [
      " Proof of ID",
      " Proof of address: You can provide a driving license, bank statement, or utilities bill (please provide a unique document, different from your proof of ID).",
      " Right to work in the UK: Provide a passport, visa, or immigration status document.",
    ],
  },
]

const benefits = [
  {
    title: "Earn More",
    description: "Fast bikes that reach up to 25km/hr",
  },
  {
    title: "Work that suits you",
    description: "Full flexibility on working hours",
  },
  {
    title: "Paid weekly",
    description: "Recieve your earnings weekly",
  },
  {
    title: "Help the planet",
    description: "Every ride you do saves on CO2",
  },
  {
    title: "Be fully supported",
    description: "Real human support while you work",
  },
]

export default function Page() {
  return (
    <div className="bg-white ">
      <div className="relative bg-forest-800 pb-20">
        <div className="top-24 mx-auto max-w-full px-6 sm:h-[685px] sm:grid-cols-1 lg:grid lg:h-[657px] lg:grid-cols-12 lg:gap-x-8  lg:px-28">
          {/* Images */}

          <div className="xs:pt-6 order-2 flex items-center justify-center lg:absolute lg:inset-0 lg:left-1/2 lg:order-1 lg:col-span-5 lg:-mr-8">
            <div className="relative aspect-square  h-[317px] w-[317px] rounded-full  lg:h-[529px] lg:w-[529px]">
              <img src="/Images/Hero1Bike.png" alt="pie_chart" className="" />

              <div className="absolute -left-8 top-8 z-10 h-[35%] w-[35%]">
                <div
                  className="bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url("/Images/Layer_1.png")`,
                    width: "70%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div>
                <div className="absolute -bottom-12 -right-8 z-10 h-[40%] w-[40%]">
                  <div
                    className="bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url("/Images/Frame_2470.png")`,
                      width: "70%",
                      paddingBottom: "100%",
                    }}
                  />
                </div>
                <div className="z-9 absolute -bottom-8 right-0  h-[40%] w-[40%]">
                  <div
                    className="bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url("/Images/Vector_140.png")`,
                      width: "70%",
                      paddingBottom: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text */}

          <div className="order-1 flex  sm:gap-10 sm:pb-32 lg:order-2 lg:col-span-7 lg:py-48 xl:col-span-6">
            <div className="mx-auto pt-10 lg:mx-0">
              <h1 className="text-2xl font-bold tracking-tight text-white lg:text-5xl  ">
                Deliver with Forest Parcel
              </h1>

              <p className="mt-6 text-lg text-gray-100">
                Complete Jobs when it&apos;s convenient for you
              </p>
              <div className="mb-12 mt-10 flex">
                <Link
                  href="/application"
                  className={buttonVariants({
                    variant: "primary",
                    size: "xl",
                    className:
                      "border-b-4 text-lg w-48 h-[60px] px-4 hidden lg:flex",
                  })}
                >
                  Apply Now
                </Link>
                <div className="xs:flex lg:hidden">
                  <Link
                    href="/application"
                    className={buttonVariants({
                      size: "xl",
                      className:
                        "border-b-4 bg-wood-50 text-wood-900 hover:bg-sky-100 text-lg mr-4",
                    })}
                  >
                    Apply Now
                  </Link>

                  <Link
                    href="/application"
                    className={buttonVariants({
                      variant: "primary",
                      size: "xl",
                    })}
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}

      <div className="mt-20 bg-white">
        <div className="mx-auto max-w-full px-6 lg:px-28">
          <div className="text-center">
            <h1 className="justify-center text-3xl font-bold tracking-tight text-wood-900 lg:text-5xl">
              Join Our Delivery Team Today
            </h1>
            <p className="mt-6 text-lg leading-8 text-wood-700">
              Join us today and start enjoying the perks of being a valued
              member of our delivery network.
            </p>
          </div>
          <div className="scroll scroll-left w-full overflow-x-auto scroll-smooth whitespace-nowrap">
            <div className="flex items-center space-x-12 lg:justify-center">
              <div className="my-16 lg:grid lg:grid-cols-6 lg:gap-10">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className={`mr-4 inline-block w-80 items-center rounded-3xl border-2 border-b-4 border-forest-900 p-4 lg:mr-0 lg:flex lg:w-auto lg:flex-col lg:p-6 ${
                      index === 3
                        ? "mr-4  w-80 lg:col-span-3 lg:ml-40 lg:w-auto"
                        : index === 4
                        ? "mr-4 w-80 lg:col-span-3 lg:mr-40 lg:w-auto "
                        : "lg:col-span-2"
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      <img
                        src="/Images/Group_624720.png"
                        alt="pie_chart"
                        className="h-[80px] w-[74.53px] "
                      />
                    </div>
                    <h2 className="mt-2 text-center font-bold">{item.title}</h2>
                    <p className="text-md mt-2 text-center text-wood-700 ">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Section */}

      <div className="relative hidden h-[335vh] bg-white sm:block">
        <ScrollableSections />
      </div>

      {/* Testimonials */}

      <div className="relative bg-forest-800">
        <div className="px-6 pt-16 text-center lg:px-28">
          <h1 className="items-center justify-center text-3xl font-bold tracking-tight text-wood-0 lg:text-5xl">
            Testimonials
          </h1>
        </div>
        <div className="overflow-hidden whitespace-nowrap ">
          <div className="relative mx-auto -ml-16 flex items-center justify-center pb-6 pt-14 text-center lg:-ml-0 lg:pb-12">
            <div>
              <img
                className="inline-block w-[160px] p-2 lg:w-[320px] "
                src="/Images/Testimonial1.png"
                alt="/"
              />
              <div className="relative inline-block aspect-square p-2 ">
                <img
                  className="inline-block h-[210px] w-[210px] p-2 lg:h-[432px] lg:w-[432px]"
                  src="/Images/Testimonial2.png"
                  alt="/"
                />
                <div className="absolute -left-10 -top-20 z-10 w-full lg:-top-40">
                  <div
                    className="bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url("/Images/MusaSmith.png")`,
                      width: "60%",
                      paddingBottom: "100%",
                    }}
                  />
                </div>
                <div className="z-9 absolute left-12 top-8  h-[25%] w-[25%] lg:left-20 lg:top-14">
                  <div
                    className="bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url("/Images/Vector_141.png")`,
                      width: "70%",
                      paddingBottom: "100%",
                    }}
                  />
                </div>

                <div className="absolute -bottom-52 left-16 z-10 hidden  w-full lg:flex ">
                  <div
                    className="bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url("/Images/testimonial.png")`,
                      width: "60%",
                      paddingBottom: "100%",
                    }}
                  />
                </div>
              </div>
              <img
                className="inline-block w-[160px] p-2 lg:w-[320px] "
                src="/Images/Testimonial3.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className="mx-4 pb-6 lg:hidden">
          <p className="text-center text-lg font-normal italic text-wood-50 ">
            &quot;I truly appreciate the effort and attention Forest Parcel puts into
            gathering feedback from users. It shows a genuine commitment to
            improving the service for everyone involved.&quot;
          </p>
        </div>
      </div>

      {/* eBikes */}

      <div className="relative bg-white ">
        <div className="mx-auto mt-12 max-w-full px-6 lg:mb-16 lg:mt-24 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-28">
          <div className=" xs:pt-32 order-2 items-center lg:absolute lg:inset-0 lg:left-1/2 lg:order-1 lg:col-span-5 lg:flex ">
            <div className="relative aspect-square w-[342px] rounded-full lg:w-[529px] ">
              <img
                className="h-[327px] w-[327px] rounded-full bg-contain bg-center bg-no-repeat lg:h-[529px] lg:w-[529px]"
                style={{
                  backgroundImage: `url("Images/eBike1.png")`,
                }}
              />
              <div className="left-25 absolute top-0 z-10 h-[35%] w-[35%]">
                <div
                  className="bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url("/Images/Frame_2470.png")`,
                    width: "70%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div>
                <div className="absolute -bottom-20 -right-24 z-10 h-[70%] w-[70%] lg:-bottom-32 lg:-right-32">
                  <div
                    className="bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url("/Images/bike.png")`,
                      width: "70%",
                      paddingBottom: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 flex pb-24 pt-10 sm:pb-32 lg:order-2 lg:col-span-7 lg:px-0 xl:col-span-6">
            <div className="mx-auto max-w-full lg:mx-0">
              <div className="col-span-2 flex">
                <h3 className="rounded-full border-4 border-forest-100 bg-forest-100 px-2 font-bold text-forest-500">
                  eBikes
                </h3>
              </div>

              <h1 className="pb-4 text-3xl font-bold tracking-tight text-wood-900 sm:mt-10 lg:text-5xl">
                No Bike? No Problem.
              </h1>
              <p className="pb-4 text-lg font-normal leading-7 text-wood-700">
                The best way to move around the city. Our whole fleet is
                electric and we are committed to reducing emissions in our
                cities.
              </p>
              <div className="mt-4 flex gap-2 whitespace-nowrap">
                <div className="flex flex-col rounded-3xl border-2 border-b-4 border-forest-900 bg-cassia-200 p-4 ">
                  <h2 className="mt-2 text-2xl font-bold leading-7">3,000+</h2>
                  <p>Electric Bikes</p>
                </div>

                <div className="flex flex-col rounded-3xl border-2 border-b-4 border-forest-900 p-4 ">
                  <h2 className="mt-2 text-2xl font-bold leading-7">
                    Up to 50%
                  </h2>
                  <p>Discount in minute bundles</p>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/application"
                  className={buttonVariants({
                    variant: "primary",
                    size: "xl",
                    className: "border-b-4 text-lg w-48 h-[60px] px-4",
                  })}
                >
                  Apply Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}

      <div className="bg-white px-6 lg:px-28 ">
        <div className="mx-auto mb-16 max-w-full rounded-3xl  border-2 border-b-8 border-forest-900   p-6 lg:px-[72px] lg:py-10">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-wood-900 sm:mt-10 lg:text-center lg:text-5xl">
            What do I need to start using ForestParcel?
          </h1>
          <p className="mt-6  text-lg font-normal leading-8 text-wood-700 lg:text-center">
            Be sure to have the following information ready:
          </p>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:mt-16 lg:grid-cols-2 xl:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.id} className="mb-10 lg:p-4">
                <h2 className="mb-4 text-xl font-bold text-forest-900 lg:mb-2">
                  {faq.question}
                </h2>
                <ul className="list-inside list-disc text-lg text-wood-700 lg:pt-4">
                  {faq.answer.map((item, index) => (
                    <li key={index} className="mt-4 flex">
                      {typeof item === "object" ? (
                        <a
                          href={item.link}
                          className="-mt-3 inline-flex pl-10 text-forest-500 hover:underline"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <>
                          <img
                            src="/Images/check.png"
                            alt="check"
                            className="mr-4 mt-0.5 aspect-square h-6 w-6"
                          />
                          {item}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 pb-6 text-lg font-normal leading-8 text-wood-700 lg:text-center">
            If you have any questions, please contact us at{" "}
            <a
              href="mailto:parcel@humanforest.co.uk"
              className="text-green-700 underline "
            >
              parcel@humanforest.co.uk
            </a>
          </p>
          <div className="flex gap-x-6 lg:mb-16 lg:mt-10 lg:justify-center">
            <Link
              href="/application"
              className={buttonVariants({
                variant: "primary",
                size: "xl",
                className: "border-b-4 text-lg w-48 h-[60px] px-4",
              })}
            >
              Apply Now!
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="relative bg-forest-800 ">
        <div className="mx-auto grid max-w-full px-6 lg:px-28">
          <div className="order-2 grid lg:order-1 lg:text-center">
            <h1 className="mt-10 justify-center text-3xl font-bold tracking-tight text-wood-0 lg:mt-12 lg:text-5xl lg:leading-[62px] ">
              Boost your delivery service. <br />
              Start using ForestParcel today.
            </h1>
            <p className="mt-6 pb-10 text-lg leading-8 text-wood-0 lg:pb-12">
              Get started with a free account. Sign up now and start delivering
              parcels in no time.
            </p>
            <div className="flex gap-x-6 lg:justify-center">
              <Link
                href="/application"
                className={buttonVariants({
                  variant: "primary",
                  size: "xl",
                  className: "border-b-4 text-lg w-48 h-[60px] px-4",
                })}
              >
                Apply Now!
              </Link>
            </div>
          </div>
          <div className="order-1 grid lg:order-2 lg:justify-items-center">
            <div className="relative inline-flex h-[200px] w-[342px] items-center justify-center  lg:h-[366px] lg:w-[633px]">
              <div className="absolute -top-4 h-[45%] w-[45%]">
                <div
                  className="bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url("/Images/cloud.png")`,
                    width: "40%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div className="absolute bottom-20 left-10 h-[30%] w-[30%]">
                <div
                  className="bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url("/Images/Layer_1.png")`,
                    width: "60%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div className="absolute h-[65%] w-[65%]">
                <div
                  className="bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url("/Images/bike.png")`,
                    width: "100%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div className="absolute -right-4 bottom-16 h-[30%] w-[30%]">
                <div
                  className="bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url("/Images/CuteTree.png")`,
                    width: "60%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <></>
    </div>
  )
}
