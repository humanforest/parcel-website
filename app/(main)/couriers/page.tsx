import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Couriers",
}

const faqs = [
  {
    id: 1,
    question: "Requirements?",
    answer: [
      " 18+ years old",
      " HumanForest user account. ",
      {
        text: "Download Here",
        link: "https://example.com/download",
      },
      " Smartphone",
      " UK bank account",
    ],
  },
  {
    id: 2,
    question: "Documents",
    answer: [
      " ID",
      " Proof of address (i.e. Driving licence, bank statement, utility bill)",
      " Right to work in the UK (Passport/Visa/birth certificate)",
    ],
  },
  {
    id: 3,
    question: "eMoped drivers also need",
    answer: [" Driving licence", " CBT certificate", " Personal SD&P"],
  },
]
export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative bg-forest-800">
        <div className="mx-auto max-w-full lg:grid lg:grid-cols-12 sm:grid-cols-1 lg:gap-x-8 lg:px-28 lg:h-[657px] sm:h-[685px] px-6  top-24">
          {/* Images */}

          <div className="lg:absolute order-2 lg:order-1 lg:col-span-5 lg:-mr-8 lg:inset-0 lg:left-1/2 lg:mr-0 xs:pt-6 flex items-center justify-center">
            <div className="relative lg:w-[529px]  lg:h-[529px] h-[317px] w-[317px]  aspect-square rounded-full">
              <img
                className="w-full h-full bg-contain bg-no-repeat bg-center rounded-full"
                style={{
                  backgroundImage: `url("Images/Ellipse_1.png")`,
                }}
              />
              <div className="absolute w-[35%] h-[35%] top-8 -left-8 z-10">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/Layer_1.png")`,
                    width: "70%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div>
                <div className="absolute w-[40%] h-[40%] -bottom-12 -right-8 z-10">
                  <div
                    className="bg-contain bg-no-repeat bg-center"
                    style={{
                      backgroundImage: `url("/Images/Frame_2470.png")`,
                      width: "70%",
                      paddingBottom: "100%",
                    }}
                  />
                </div>
                <div className="absolute w-[40%] h-[40%] right-0  -bottom-8 z-9">
                  <div
                    className="bg-contain bg-no-repeat bg-center"
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

          <div className="flex sm:gap-10  order-1 lg:order-2 sm:pb-32 lg:col-span-7 lg:py-48 xl:col-span-6">
            <div className="mx-auto lg:mx-0 pt-10">
              <h1 className="lg:text-5xl text-2xl font-bold tracking-tight text-white  ">
                Boost your delivery.
              </h1>
              <h1 className="lg:text-5xl text-2xl font-bold tracking-tight text-white lg:mt-4">
                Start using our app today.
              </h1>
              <p className="mt-6 text-lg text-gray-100">
                Ride with Forest and deliver parcels the smart way.
              </p>
              <div className="mt-10 mb-12 flex">
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
                <div className="lg:hidden xs:flex">
                  <Link
                    href="/application"
                    className={buttonVariants({
                      size: "xl",
                      className:
                        "border-b-4 bg-wood-50 text-wood-900 hover:bg-sky-100 mr-4",
                    })}
                  >
                    Start Your Delivery
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

      {/* Hero 2 */}

      <div className="relative bg-white">
        <div className="mx-auto max-w-full grid lg:grid-cols-12 lg:gap-x-8 lg:px-28 mt-16">
          {/* Images */}
          <div className="lg:col-span-5 lg:pl-8 xl:inset-0 xl:right-1/2 xl:mr-0 flex justify-center items-center">
            <div className="relative lg:w-[529px] w-[317px]  lg:h-[529px] h-[317px] aspect-square">
              <img
                className="w-full h-full bg-contain bg-no-repeat bg-center rounded-full"
                style={{
                  backgroundImage: `url("/Images/JoeMoped.png")`,
                }}
              />
              <div className="absolute w-[43%] h-[43%] lg:-top-14 lg:-right-4 -top-10 -right-8 z-10">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/Star_1.png")`,
                    width: "60%",
                    paddingBottom: "100%",
                  }}
                />
                <div className="relative">
                  <div className="absolute text-center lg:-top-[145px] lg:right-[120px] -top-[86px] right-[68px] text-white font-bold text-sm lg:text-xl -rotate-12">
                    More <br />
                    Comfort
                  </div>
                </div>
              </div>

              <div className="absolute w-[45%] h-[45%] bottom-0 left-0 z-10">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/CuteTree.png")`,
                    width: "60%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className=" px-6 mb-12 pt-10  sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pl-8 lg:pt-48 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="flex col-span-2">
                <h3 className="font-bold px-2 text-forest-500 border-4 border-forest-100 rounded-full bg-forest-100">
                  eMopeds
                </h3>
              </div>

              <h1 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight text-wood-900 sm:mt-10 sm:text-6xl">
                eMopeds are here!
              </h1>
              <p className="mt-4 text-lg leading-8 text-wood-700">
                Deliver with speed and comfort.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/application"
                  className={buttonVariants({
                    variant: "primary",
                    size: "xl",
                    className: "border-b-4 text-lg w-48 h-[60px] px-4",
                  })}
                >
                  Start Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}

      <div className="bg-white mt-16">
        <div className="mx-auto max-w-full px-6 lg:px-28">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl  font-bold tracking-tight text-wood-900 justify-center ">
              Join Our Delivery Team Today
            </h1>
            <p className="mt-6 text-lg leading-8 text-wood-700 ">
              Join us today and start enjoying the perks of being a valued
              member of our delivery network.
            </p>
          </div>

          <div
            id="slider"
            className="w-full h-full scroll whitespace-nowrap scroll-smooth overflow-x-auto scroll-left"
          >
            <div className="flex lg:items-center lg:justify-center mt-16 mb-16 gap-x-10">
              <div className="flex flex-col items-center border-2 border-forest-900 border-b-4 rounded-3xl p-6 w-72">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_272_101)">
                    <path
                      d="M28.0406 23.4156L24.2683 19.063H25.0995C26.499 19.063 27.2597 17.4678 26.3677 16.4118L23.0395 12.5011H23.6284C24.7922 12.5011 25.4277 11.2706 24.6828 10.4607L17.3055 2.44898C17.032 2.15291 16.6438 2 16.25 2C15.8563 2 15.468 2.15307 15.1945 2.45041L7.8243 10.4602C7.0811 11.2695 7.71493 12.5 8.87868 12.5H9.46547L6.13446 16.4102C5.2425 17.4711 6.00266 19.0625 7.40266 19.0625H8.23391L4.46157 23.4151C3.47172 24.6133 4.25315 26.4995 5.8118 26.4995L15.375 26.4508V29.125C15.375 29.6087 15.7725 30 16.256 30C16.7395 30 17.125 29.6063 17.125 29.125V26.5L26.6844 26.5007C28.2484 26.5 29.0742 24.6078 28.0406 23.4156ZM26.6844 24.7008L17.125 24.75V21.612L19.4935 19.2435C19.8353 18.9017 19.8353 18.3477 19.4935 18.0065C19.1517 17.6652 18.5977 17.6647 18.2565 18.0065L17.125 19.1391V11.625C17.125 11.1413 16.7336 10.7495 16.25 10.7495C15.7664 10.7495 15.375 11.1438 15.375 11.625V16.0005L14.325 14.6C14.0352 14.2117 13.4883 14.1352 13.1 14.425C12.7117 14.7148 12.6352 15.2617 12.925 15.65L15.375 18.9148V24.75L5.79922 24.7502C5.78865 24.7433 5.76035 24.7064 5.7534 24.6563C5.74817 24.6184 5.75597 24.5953 5.78587 24.5607L12.0695 17.3092L7.66822 17.309L13.2573 10.7465H9.9336L16.25 3.8778L22.5719 10.7465H19.2523L24.8359 17.309H20.4391L26.7227 24.5606C26.7477 24.5894 26.7585 24.6108 26.7526 24.6536C26.7391 24.7063 26.7117 24.7445 26.6844 24.7008Z"
                      fill="#002A24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_272_101">
                      <rect
                        width="24.5"
                        height="28"
                        fill="white"
                        transform="translate(4 2)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <h2 className="mt-2 text-center font-bold">Green Energy</h2>
                <p className="text-center">Every ride you do saves on CO2</p>
              </div>

              <div className="flex flex-col items-center border-2 border-forest-900 border-b-4 rounded-3xl p-6 w-72">
                <div>
                  <div className="text-center">
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: "inline-block" }}
                    >
                      <path
                        d="M17.19 6.40137C17.5794 6.40137 17.9381 6.61749 18.1175 6.96224L22.3919 15.1557C23.0044 14.9282 23.7087 14.8014 24.4 14.8014C27.4931 14.8014 30 17.3082 30 20.4014C30 23.4945 27.4931 26.0014 24.4 26.0014C21.3069 26.0014 18.8 23.4945 18.8 20.4014C18.8 18.5026 19.745 16.8226 21.1931 15.812L20.2656 14.0445L16.6125 20.7382C16.49 20.9614 16.2581 21.1014 16 21.1014H13.1562C12.8106 23.862 10.4569 26.0014 7.6 26.0014C4.50731 26.0014 2 23.4945 2 20.4014C2 17.3082 4.50731 14.762 7.6 14.762C8.25187 14.762 8.8775 14.9107 9.45937 15.1164L10.6187 12.7976L9.30187 10.6014H6.9C6.515 10.6014 6.2 10.2864 6.2 9.90137C6.2 9.51637 6.515 9.20137 6.9 9.20137H9.7C9.945 9.20137 10.1725 9.33043 10.2994 9.54262L11.7781 12.0014H19.1894L16.9756 7.80137H15.3C14.915 7.80137 14.6 7.48812 14.6 7.10137C14.6 6.71462 14.915 6.40137 15.3 6.40137H17.19ZM20.2 20.4014C20.2 22.7201 22.0419 24.6014 24.4 24.6014C26.7188 24.6014 28.6 22.7201 28.6 20.4014C28.6 18.0432 26.7188 16.2014 24.4 16.2014C23.9406 16.2014 23.5031 16.2757 23.0919 16.4114L25.0212 20.0732C25.2006 20.4189 25.0694 20.8389 24.7281 21.0226C24.3825 21.202 23.9231 21.0707 23.7787 20.7295L21.8537 17.0632C20.8475 17.8289 20.2 19.0407 20.2 20.4014ZM8.825 16.3851C8.44 16.267 8.02875 16.2014 7.56063 16.2014C5.28038 16.2014 3.36063 18.0432 3.36063 20.4014C3.36063 22.7201 5.28038 24.6014 7.56063 24.6014C9.6825 24.6014 11.4106 23.0876 11.7431 21.1014H7.8275C7.20187 21.1014 6.795 20.4057 7.075 19.8851L8.825 16.3851ZM14.7619 19.7014L11.4719 14.2195L8.73312 19.7014H14.7619ZM12.6181 13.4014L15.9694 18.9926L19.0187 13.4014H12.6181Z"
                        fill="#002A24"
                      />
                    </svg>
                  </div>

                  <h2 className="mt-2 text-center font-bold">Fast Bikes</h2>
                  <p className="text-center">Reach speeds of up to 25km/h</p>
                </div>
              </div>
              <div className="flex flex-col items-center border-2 border-forest-900 border-b-4 rounded-3xl p-6 w-72">
                <div>
                  <div className="text-center">
                    <svg
                      width="32"
                      height="33"
                      viewBox="0 0 25 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: "inline-block" }}
                    >
                      <g clip-path="url(#clip0_343_528)">
                        <path
                          d="M12.2336 5.25H12.2685C14.333 5.25 16.2044 6.45859 17.0499 8.34695C17.8909 10.2408 17.5411 12.4666 16.1535 13.9962C16.1535 13.9893 16.1535 14.003 16.1535 13.9962L16.625 14C17.5273 14 18.3695 13.5297 18.8409 12.7641C19.0859 12.0531 19.25 11.2984 19.25 10.5C19.25 6.63086 16.1191 3.5 12.25 3.5C8.38086 3.5 5.25 6.63086 5.25 10.5C5.25 12.7083 6.29562 14.6557 7.89523 15.9409C7.88594 15.8703 7.875 15.8211 7.875 15.75C7.88047 15.1375 8.04453 14.525 8.36172 14C6.96719 12.4688 6.60461 10.2539 7.4457 8.35078C8.29062 6.46406 10.1609 5.25 12.2336 5.25ZM2.625 12.25C3.11063 12.25 3.5 11.8617 3.5 11.375V10.5C3.5 5.67383 7.42383 1.75 12.25 1.75C17.0762 1.75 21 5.67383 21 10.5V11.375C21 13.7867 19.0367 15.75 16.625 15.75H14.875C14.875 14.7864 14.0886 14 13.125 14H11.375C10.4114 14 9.625 14.7864 9.625 15.75C9.625 16.7136 10.4114 17.5 11.375 17.5H16.625C20.0091 17.4932 22.7445 14.7585 22.75 11.375V10.5C22.75 4.70859 18.0398 0 12.25 0C6.46023 0 1.75 4.71023 1.75 10.5V11.375C1.75 11.8617 2.13992 12.25 2.625 12.25ZM17.2102 19.25H7.28984C3.26484 19.25 0 22.5148 0 26.5398C0 27.3492 0.652969 28 1.45797 28H23.0398C23.8492 28 24.5 27.3492 24.5 26.5398C24.5 22.5148 21.2352 19.25 17.2102 19.25ZM1.75766 26.25C1.90963 23.3291 4.33398 21 7.29203 21H17.2069C20.1649 21 22.5892 23.3291 22.7412 26.25H1.75766Z"
                          fill="#002A24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_343_528">
                          <rect width="24.5" height="28" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <h2 className="mt-2 text-center font-bold">
                    On Demand Support
                  </h2>
                  <p className="text-center">
                    Experts to answer every question
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}

      <div className="relative bg-forest-800 ">
        <div className="text-center pt-16 px-6 lg:px-28">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-wood-0 items-center justify-center">
            Testimonials
          </h1>
        </div>
        <div className="relative flex items-center justify-center mx-auto text-center pt-14 pb-12 lg:pb-24">
          <div
            id="slider"
            className="w-full h-full scroll whitespace-nowrap scroll-smooth scroll overflow-x-auto lg:overflow-visible"
          >
            <img
              className="w-[160px] lg:w-[320px] inline-block p-2 "
              src="/Images/JoeMoped.png"
              alt="/"
            />
            <div className="relative aspect-square inline-block p-2 ">
              <img
                className="w-[210px] h-[210px] lg:w-[432px] lg:h-[432px] inline-block p-2"
                src="/Images/JoeMoped.png"
                alt="/"
              />
              <div className="absolute w-full -top-20 left-0 lg:-top-40 z-10">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/Lynn.png")`,
                    width: "60%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div className="absolute w-[25%] h-[25%] left-12  top-8 lg:top-14 lg:left-20 z-9">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/Vector_141.png")`,
                    width: "70%",
                    paddingBottom: "100%",
                  }}
                />
              </div>

              <div className="hidden w-full -bottom-52 left-16 z-10  absolute lg:flex ">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/BoxFrame.png")`,
                    width: "60%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
            </div>
            <img
              className="w-[160px] lg:w-[320px] inline-block p-2 "
              src="/Images/JoeMoped.png"
              alt="/"
            />
          </div>
        </div>
        <p className="lg:hidden text-center font-normal italic text-wood-50 text-lg px-6 pb-16">
          “Lorem ipsum dolor sit amet consectetur. Eleifend convallis proin
          libero convallis amet id. Amet sem nec vel diam.”
        </p>
      </div>

      {/* eBikes */}

      <div className="relative bg-white">
        <div className="mx-auto max-w-full lg:grid lg:grid-cols-12 mt-12 lg:mb-16 lg:mt-24 px-6 lg:gap-x-8 lg:px-28">
          <div className=" lg:absolute order-2 lg:order-1 lg:col-span-5 lg:inset-0 lg:left-1/2 xs:pt-32 lg:flex items-center ">
            <div className="relative w-[342px] lg:w-[529px] aspect-square rounded-full ">
              <img
                className="w-[327px] h-[327px] lg:w-[529px] lg:h-[529px] bg-contain bg-no-repeat bg-center rounded-full"
                style={{
                  backgroundImage: `url("Images/eBike.png")`,
                }}
              />
              <div className="absolute w-[35%] h-[35%] top-0 left-25 z-10">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/Frame_2470.png")`,
                    width: "70%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div>
                <div className="absolute w-[70%] h-[70%] -bottom-20 -right-24 lg:-right-32 lg:-bottom-32 z-10">
                  <div
                    className="bg-contain bg-no-repeat bg-center"
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
          <div className="flex pb-24 pt-10 order-1 lg:order-2 sm:pb-32 lg:col-span-7 lg:px-0 xl:col-span-6">
            <div className="mx-auto max-w-full lg:mx-0">
              <div className="flex col-span-2">
                <h3 className="font-bold px-2 text-forest-500 border-4 border-forest-100 rounded-full bg-forest-100 mb-4">
                  eBikes
                </h3>
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-wood-900 sm:mt-10 lg:text-5xl pb-4">
                No Bike? No Problem.
              </h1>
              <p className="pb-4 font-normal text-lg leading-7 text-wood-700">
                The best way to move around the city. Our whole fleet is
                electric and we are committed to reducing emissions in our
                cities.
              </p>
              <div
                id="slider"
                className="w-full scroll whitespace-nowrap scroll-smooth overflow-x-auto scroll-left"
              >
                <div className="flex  gap-2 mt-4">
                  <div className="border-b-4 flex flex-col border-2 border-forest-900 bg-cassia-200 rounded-3xl p-4 ">
                    <h2 className="mt-2 text-2xl font-bold leading-7">
                      3,000+
                    </h2>
                    <p>Electric Bikes</p>
                  </div>

                  <div className="border-b-4  flex flex-col border-2 border-forest-900 rounded-3xl p-4 ">
                    <h2 className="mt-2 text-2xl font-bold leading-7">200+</h2>
                    <p>Electric Mopeds</p>
                  </div>
                  <div className="border-b-4 flex flex-col border-2 border-forest-900 rounded-3xl p-4 ">
                    <h2 className="mt-2 text-2xl font-bold leading-7">
                      Up to 50%
                    </h2>
                    <p>Discount in minute bundles</p>
                  </div>
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
                  Start Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}

      <div className="bg-white px-6 lg:px-28">
        <div className="mx-auto mb-16 max-w-full border-2 border-b-8 border-forest-900 rounded-3xl divide-x  px-6 py-6 lg:px-[72px] lg:py-10">
          <h1 className="text-3xl lg:text-center font-bold leading-9 tracking-tight text-wood-900 sm:mt-10 lg:text-5xl">
            What do I need to start using ForestParcel?
          </h1>
          <p className="mt-6 text-lg font-normal lg:text-center leading-8 text-wood-700">
            Be sure to have the following information ready:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:mt-16 mt-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="lg:p-4 mb-10">
                <h2 className="text-xl font-bold text-forest-900 lg:mb-2 mb-4">
                  {faq.question}
                </h2>
                <ul className="list-disc list-inside text-wood-700 text-lg lg:pt-4">
                  {faq.answer.map((item, index) => (
                    <li key={index} className="flex mt-4">
                      {typeof item === "object" ? (
                        <a
                          href={item.link}
                          className="text-forest-500 hover:underline pl-10 -mt-3"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <>
                          <img
                            src="/Images/check.png"
                            alt="check"
                            className="mr-4 mt-0.5 h-6 w-6 aspect-square"
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
          <div className="lg:mt-10 lg:mb-16 flex lg:justify-center gap-x-6">
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

      <div className="bg-forest-800 relative ">
        <div className="mx-auto max-w-full px-6 lg:px-28 grid">
          <div className="order-2 lg:order-1 grid lg:text-center">
            <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-wood-0 justify-center mt-10 lg:mt-12 lg:leading-[62px] ">
              Boost your delivery service. <br />
              Start using ForestParcel today.
            </h1>
            <p className="mt-6 text-lg leading-8 text-wood-0 pb-10 lg:pb-12">
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
          <div className="order-1 lg:order-2 grid lg:justify-items-center">
            <div className="inline-flex relative w-[342px] h-[200px] lg:w-[633px] lg:h-[366px]  justify-center items-center">
              <div className="absolute w-[45%] h-[45%] -top-4">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/cloud.png")`,
                    width: "40%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div className="absolute w-[30%] h-[30%] left-10 bottom-20">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/Layer_1.png")`,
                    width: "60%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div className="absolute w-[65%] h-[65%]">
                <div
                  className="bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/Images/bike.png")`,
                    width: "100%",
                    paddingBottom: "100%",
                  }}
                />
              </div>
              <div className="absolute w-[30%] h-[30%] -right-4 bottom-16">
                <div
                  className="bg-contain bg-no-repeat bg-center"
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
