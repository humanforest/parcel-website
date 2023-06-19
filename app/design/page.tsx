"use client"

import { useState } from "react"
import { BellRing, Camera, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function Page() {
  const [buttonVariant, setButtonVariant] =
    useState<ButtonProps["variant"]>("primary")
  const [buttonRounded, setButtonRounded] =
    useState<ButtonProps["rounded"]>("full")
  const [buttonShadow, setButtonShadow] = useState(false)
  const [buttonIcon, setButtonIcon] = useState(false)

  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ]
  return (
    <>
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div className="space-y-2">
            <h2 className="mb-2 text-base font-semibold leading-7 text-gray-900">
              Buttons
            </h2>
            <div className="flex flex-row items-center justify-between space-x-2">
              <Label htmlFor="button-shadow">Shadow</Label>
              <Switch
                id="button-shadow"
                onCheckedChange={() => setButtonShadow(!buttonShadow)}
                checked={buttonShadow}
              />
            </div>
            <div className="flex flex-row items-center justify-between space-x-2">
              <Label htmlFor="button-variant">Variant</Label>
              <Select onValueChange={(value: any) => setButtonVariant(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Primary" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="primary">Primary</SelectItem>
                  <SelectItem value="secondary">Secondary</SelectItem>
                  <SelectItem value="danger">Danger</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="informative">Informative</SelectItem>
                  <SelectItem value="outline">Outline</SelectItem>
                  <SelectItem value="ghost">Ghost</SelectItem>
                  <SelectItem value="link">Link</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-row items-center justify-between space-x-2">
              <Label htmlFor="button-variant">Rounded</Label>
              <Select onValueChange={(value: any) => setButtonRounded(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Full" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="xs">XS</SelectItem>
                  <SelectItem value="sm">SM</SelectItem>
                  <SelectItem value="md">MD</SelectItem>
                  <SelectItem value="lg">LG</SelectItem>
                  <SelectItem value="xl">XL</SelectItem>
                  <SelectItem value="full">Full</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-row items-center justify-between space-x-2">
              <Label htmlFor="button-shadow">Icon</Label>
              <Switch
                id="button-shadow"
                onCheckedChange={() => setButtonIcon(!buttonIcon)}
                checked={buttonIcon}
              />
            </div>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <h3 className="text-md col-span-full font-semibold leading-5 text-gray-900">
              Primary
            </h3>
            <div className="col-span-full flex flex-col items-start space-y-4">
              <div className={"flex items-center"}>
                <span className={"mr-2 font-mono"}>XS</span>
                <Button
                  variant={buttonVariant}
                  size={"xs"}
                  rounded={buttonRounded}
                  shadow={buttonShadow}
                >
                  {buttonIcon && <Camera size={16} className={"mr-2"} />}
                  Button text
                </Button>
              </div>
              <div className={"flex items-center"}>
                <span className={"mr-2 font-mono"}>SM</span>
                <Button
                  variant={buttonVariant}
                  size={"sm"}
                  rounded={buttonRounded}
                  shadow={buttonShadow}
                >
                  {buttonIcon && <Camera size={20} className={"mr-2"} />}
                  Button text
                </Button>
              </div>
              <div className={"flex items-center"}>
                <span className={"mr-2 font-mono"}>MD</span>
                <Button
                  variant={buttonVariant}
                  size={"md"}
                  rounded={buttonRounded}
                  shadow={buttonShadow}
                >
                  {buttonIcon && <Camera size={20} className={"mr-2"} />}
                  Button text
                </Button>
              </div>
              <div className={"flex items-center"}>
                <span className={"mr-2 font-mono"}>LG</span>
                <Button
                  variant={buttonVariant}
                  size={"lg"}
                  rounded={buttonRounded}
                  shadow={buttonShadow}
                >
                  {buttonIcon && <Camera size={20} className={"mr-2"} />}
                  Button text
                </Button>
              </div>
              <div className={"flex items-center"}>
                <span className={"mr-2 font-mono"}>XL</span>
                <Button
                  variant={buttonVariant}
                  size={"xl"}
                  rounded={buttonRounded}
                  shadow={buttonShadow}
                >
                  {buttonIcon && <Camera size={24} className={"mr-2"} />}
                  Button text
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Inputs
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              cupiditate laboriosam fugiat.
            </p>
          </div>

          <div className="max-w-2xl space-y-10 md:col-span-2">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Default Input</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Typography
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              cupiditate laboriosam fugiat.
            </p>
          </div>

          <div className="max-w-2xl space-y-10 md:col-span-2">
            <div className="prose">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Taxing Laughter: The Joke Tax Chronicles
              </h1>
              <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                The People of the Kingdom
              </h2>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                The Joke Tax
              </h3>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                People stopped telling jokes
              </h4>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The king, seeing how much happier his subjects were, realized
                the error of his ways and repealed the joke tax.
              </p>
              <blockquote className="mt-6 border-l-2 pl-6 italic">
                "After all," he said, "everyone enjoys a good joke, so it's only
                fair that they should pay for the privilege."
              </blockquote>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Cards
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              cupiditate laboriosam fugiat.
            </p>
          </div>

          <div className="max-w-2xl space-y-10 md:col-span-2">
            <Card className={cn("w-[380px]")}>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div>
                  {notifications.map((notification, index) => (
                    <div
                      key={index}
                      className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                      <span className="bg-forest flex h-2 w-2 translate-y-1 rounded-full" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {notification.title}
                        </p>
                        <p className="text-wood-500 text-sm">
                          {notification.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Check className="mr-2 h-4 w-4" /> Mark all as read
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Framework</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                          <SelectContent position="popper">
                            <SelectItem value="next">Next.js</SelectItem>
                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                            <SelectItem value="astro">Astro</SelectItem>
                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                          </SelectContent>
                        </SelectTrigger>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
