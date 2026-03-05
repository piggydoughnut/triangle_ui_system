"use client"

import type { ComponentEntry } from "@/lib/registry"
import { ComponentPreview } from "@/showcase/component-preview"
import { PropsTable } from "@/showcase/props-table"
// Import all components for live previews
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Toggle } from "@/components/ui/toggle"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { SearchBar } from "@/components/ui/search-bar"
import { IconBox } from "@/components/ui/icon-box"
import { ArrowRight, Bold, Italic } from "lucide-react"

// Map slug to live preview renders
function getPreview(slug: string, exampleIndex: number): React.ReactNode {
  const previews: Record<string, React.ReactNode[]> = {
    button: [
      // Variants
      <div key="variants" className="flex flex-wrap gap-3">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="link">Link</Button>
      </div>,
      // Sizes
      <div key="sizes" className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>,
      // With Icon
      <Button key="icon" variant="accent" size="xl">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>,
    ],
    input: [
      <Input key="default" placeholder="Enter your email" />,
      <Input key="search" variant="search" placeholder="Search" />,
      <div key="label" className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="name@example.com" />
      </div>,
      <Input key="disabled" disabled placeholder="Disabled input" />,
    ],
    textarea: [
      <Textarea key="default" placeholder="Type your message here." />,
      <div key="label" className="grid w-full gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Type your message here." />
      </div>,
    ],
    label: [
      <Label key="default" htmlFor="name">Your name</Label>,
    ],
    badge: [
      <div key="variants" className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="accent">Accent</Badge>
      </div>,
    ],
    card: [
      <Card key="default" className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content with any elements inside.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>,
    ],
    separator: [
      <div key="horizontal" className="space-y-4 w-full max-w-sm">
        <p>Content above</p>
        <Separator />
        <p>Content below</p>
      </div>,
    ],
    switch: [
      <div key="default" className="flex items-center space-x-2">
        <Switch id="notifications" />
        <Label htmlFor="notifications">Enable notifications</Label>
      </div>,
    ],
    toggle: [
      <Toggle key="default" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>,
      <Toggle key="outline" variant="outline" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>,
    ],
    alert: [
      <div key="variants" className="space-y-4 w-full">
        <Alert>
          <AlertTitle>Default</AlertTitle>
          <AlertDescription>This is a default alert message.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong.</AlertDescription>
        </Alert>
        <Alert variant="success">
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Operation completed successfully.</AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>Please review before continuing.</AlertDescription>
        </Alert>
      </div>,
    ],
    skeleton: [
      <div key="default" className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>,
    ],
    avatar: [
      <div key="default" className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/polkadot-fellows.png" alt="Polkadot" />
          <AvatarFallback>PD</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </div>,
    ],
    dialog: [
      <Dialog key="default">
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>This action cannot be undone.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Continue</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    ],
    popover: [
      <Popover key="default">
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
        </PopoverContent>
      </Popover>,
    ],
    select: [
      <Select key="default">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="cherry">Cherry</SelectItem>
        </SelectContent>
      </Select>,
    ],
    tabs: [
      <Tabs key="default" defaultValue="account" className="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p className="text-sm text-muted-foreground pt-2">Make changes to your account here.</p>
        </TabsContent>
        <TabsContent value="password">
          <p className="text-sm text-muted-foreground pt-2">Change your password here.</p>
        </TabsContent>
      </Tabs>,
    ],
    tooltip: [
      <TooltipProvider key="default">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    ],
    "icon-box": [
      <div key="sizes" className="flex items-end gap-4">
        <IconBox size="sm"><span className="material-icons-round" style={{ fontSize: 20 }}>star</span></IconBox>
        <IconBox size="md"><span className="material-icons-round" style={{ fontSize: 32 }}>star</span></IconBox>
        <IconBox size="lg"><span className="material-icons-round" style={{ fontSize: 48 }}>star</span></IconBox>
      </div>,
    ],
    "search-bar": [
      <SearchBar key="default" />,
    ],
    "dropdown-menu": [
      <DropdownMenu key="default">
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    ],
  }

  return previews[slug]?.[exampleIndex] ?? null
}

export function ComponentPageClient({ component }: { component: ComponentEntry }) {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-h2 font-serif font-normal mb-2">{component.name}</h1>
        <p className="text-muted-foreground text-body-lg">{component.description}</p>
      </div>

      <div className="space-y-8">
        <h2 className="text-h4 font-serif font-normal">Examples</h2>
        {component.examples.map((example, i) => (
          <div key={i}>
            <h3 className="text-base font-medium mb-3">{example.title}</h3>
            <ComponentPreview code={example.code}>
              {getPreview(component.slug, i)}
            </ComponentPreview>
          </div>
        ))}
      </div>

      {component.props.length > 0 && (
        <div>
          <h2 className="text-h4 font-serif font-normal mb-4">Props</h2>
          <PropsTable props={component.props} />
        </div>
      )}
    </div>
  )
}
