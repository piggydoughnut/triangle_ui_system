export interface ComponentProp {
  name: string
  type: string
  default?: string
  description: string
}

export interface ComponentExample {
  title: string
  code: string
}

export interface ComponentEntry {
  name: string
  slug: string
  description: string
  props: ComponentProp[]
  examples: ComponentExample[]
}

export const registry: ComponentEntry[] = [
  {
    name: "Button",
    slug: "button",
    description: "A versatile button component with multiple variants and sizes, including Polkadot accent styling.",

    props: [
      { name: "variant", type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "accent"', default: '"default"', description: "Visual style of the button" },
      { name: "size", type: '"default" | "sm" | "lg" | "xl" | "icon"', default: '"default"', description: "Size of the button" },
      { name: "asChild", type: "boolean", default: "false", description: "Merge props onto child element instead of rendering a button" },
    ],
    examples: [
      {
        title: "Variants",
        code: `<div className="flex flex-wrap gap-3">
  <Button>Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="accent">Accent</Button>
  <Button variant="link">Link</Button>
</div>`,
      },
      {
        title: "Sizes",
        code: `<div className="flex flex-wrap items-center gap-3">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">Extra Large</Button>
</div>`,
      },
      {
        title: "With Icon",
        code: `<Button variant="accent" size="xl">
  Get Started <ArrowRight className="ml-2 h-4 w-4" />
</Button>`,
      },
    ],
  },
  {
    name: "Input",
    slug: "input",
    description: "A styled text input with full-width mobile-first design and 44px touch targets.",

    props: [
      { name: "type", type: "string", default: '"text"', description: "HTML input type" },
      { name: "variant", type: '"default" | "search"', default: '"default"', description: "Visual style — search uses pill shape with muted background" },
      { name: "className", type: "string", description: "Additional CSS classes" },
    ],
    examples: [
      {
        title: "Default",
        code: `<Input placeholder="Enter your email" />`,
      },
      {
        title: "Search",
        code: `<Input variant="search" placeholder="Search" />`,
      },
      {
        title: "With Label",
        code: `<div className="grid w-full max-w-sm gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="name@example.com" />
</div>`,
      },
      {
        title: "Disabled",
        code: `<Input disabled placeholder="Disabled input" />`,
      },
    ],
  },
  {
    name: "Textarea",
    slug: "textarea",
    description: "A multi-line text input component.",

    props: [
      { name: "className", type: "string", description: "Additional CSS classes" },
    ],
    examples: [
      {
        title: "Default",
        code: `<Textarea placeholder="Type your message here." />`,
      },
      {
        title: "With Label",
        code: `<div className="grid w-full gap-1.5">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Type your message here." />
</div>`,
      },
    ],
  },
  {
    name: "Label",
    slug: "label",
    description: "An accessible label component built on Radix UI.",

    props: [
      { name: "htmlFor", type: "string", description: "ID of the associated form element" },
    ],
    examples: [
      {
        title: "Default",
        code: `<Label htmlFor="name">Your name</Label>`,
      },
    ],
  },
  {
    name: "Badge",
    slug: "badge",
    description: "Small status indicators with Polkadot accent variant.",

    props: [
      { name: "variant", type: '"default" | "secondary" | "destructive" | "outline" | "accent"', default: '"default"', description: "Visual style" },
    ],
    examples: [
      {
        title: "Variants",
        code: `<div className="flex flex-wrap gap-2">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="accent">Accent</Badge>
</div>`,
      },
    ],
  },
  {
    name: "Card",
    slug: "card",
    description: "A container component for grouping related content.",

    props: [
      { name: "className", type: "string", description: "Additional CSS classes" },
    ],
    examples: [
      {
        title: "Default",
        code: `<Card className="w-full max-w-sm">
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
</Card>`,
      },
    ],
  },
  {
    name: "Separator",
    slug: "separator",
    description: "A visual divider between content sections.",

    props: [
      { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Direction of the separator" },
      { name: "decorative", type: "boolean", default: "true", description: "Whether purely decorative" },
    ],
    examples: [
      {
        title: "Horizontal",
        code: `<div className="space-y-4">
  <p>Content above</p>
  <Separator />
  <p>Content below</p>
</div>`,
      },
    ],
  },
  {
    name: "Switch",
    slug: "switch",
    description: "A toggle switch for binary choices.",

    props: [
      { name: "checked", type: "boolean", description: "Controlled checked state" },
      { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Change handler" },
      { name: "disabled", type: "boolean", description: "Disabled state" },
    ],
    examples: [
      {
        title: "Default",
        code: `<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>`,
      },
    ],
  },
  {
    name: "Toggle",
    slug: "toggle",
    description: "A two-state button that can be toggled on and off.",

    props: [
      { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual style" },
      { name: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "Size" },
      { name: "pressed", type: "boolean", description: "Controlled pressed state" },
    ],
    examples: [
      {
        title: "Default",
        code: `<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>`,
      },
      {
        title: "Outline",
        code: `<Toggle variant="outline" aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>`,
      },
    ],
  },
  {
    name: "Alert",
    slug: "alert",
    description: "Feedback messages with semantic variants including success and warning.",

    props: [
      { name: "variant", type: '"default" | "destructive" | "success" | "warning"', default: '"default"', description: "Visual style" },
    ],
    examples: [
      {
        title: "Variants",
        code: `<div className="space-y-4 w-full">
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
</div>`,
      },
    ],
  },
  {
    name: "Skeleton",
    slug: "skeleton",
    description: "A placeholder loading animation.",

    props: [
      { name: "className", type: "string", description: "Additional CSS classes for sizing" },
    ],
    examples: [
      {
        title: "Default",
        code: `<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`,
      },
    ],
  },
  {
    name: "Avatar",
    slug: "avatar",
    description: "A circular image component with fallback initials.",

    props: [
      { name: "className", type: "string", description: "Additional CSS classes" },
    ],
    examples: [
      {
        title: "Default",
        code: `<div className="flex gap-4">
  <Avatar>
    <AvatarImage src="https://github.com/polkadot.png" alt="Polkadot" />
    <AvatarFallback>PD</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
</div>`,
      },
    ],
  },
  {
    name: "Dialog",
    slug: "dialog",
    description: "A modal dialog overlay built on Radix UI.",

    props: [
      { name: "open", type: "boolean", description: "Controlled open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Open change handler" },
    ],
    examples: [
      {
        title: "Default",
        code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
      },
    ],
  },
  {
    name: "Popover",
    slug: "popover",
    description: "A floating content panel triggered by a button.",

    props: [
      { name: "open", type: "boolean", description: "Controlled open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Open change handler" },
    ],
    examples: [
      {
        title: "Default",
        code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium leading-none">Dimensions</h4>
      <p className="text-sm text-muted-foreground">
        Set the dimensions for the layer.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
      },
    ],
  },
  {
    name: "Select",
    slug: "select",
    description: "A dropdown select menu with search and grouping.",

    props: [
      { name: "value", type: "string", description: "Controlled value" },
      { name: "onValueChange", type: "(value: string) => void", description: "Value change handler" },
    ],
    examples: [
      {
        title: "Default",
        code: `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="cherry">Cherry</SelectItem>
  </SelectContent>
</Select>`,
      },
    ],
  },
  {
    name: "Tabs",
    slug: "tabs",
    description: "Tab navigation for switching between content panels.",

    props: [
      { name: "value", type: "string", description: "Controlled active tab" },
      { name: "onValueChange", type: "(value: string) => void", description: "Tab change handler" },
      { name: "defaultValue", type: "string", description: "Default active tab" },
    ],
    examples: [
      {
        title: "Default",
        code: `<Tabs defaultValue="account" className="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p className="text-sm text-muted-foreground pt-2">
      Make changes to your account here.
    </p>
  </TabsContent>
  <TabsContent value="password">
    <p className="text-sm text-muted-foreground pt-2">
      Change your password here.
    </p>
  </TabsContent>
</Tabs>`,
      },
    ],
  },
  {
    name: "Tooltip",
    slug: "tooltip",
    description: "A popup displaying information on hover.",

    props: [
      { name: "content", type: "ReactNode", description: "Tooltip content" },
      { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: "Preferred side" },
    ],
    examples: [
      {
        title: "Default",
        code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
      },
    ],
  },
  {
    name: "Icon Box",
    slug: "icon-box",
    description: "A square container for icons with foreground/background color inversion. Three sizes for mobile favorites, product lists, and desktop sidebars.",

    props: [
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size variant — sm (32px), md (44px), lg (72px)" },
      { name: "className", type: "string", description: "Additional CSS classes" },
    ],
    examples: [
      {
        title: "Sizes",
        code: `<div className="flex items-end gap-4">
  <IconBox size="sm"><span className="material-icons-round" style={{ fontSize: 20 }}>star</span></IconBox>
  <IconBox size="md"><span className="material-icons-round" style={{ fontSize: 32 }}>star</span></IconBox>
  <IconBox size="lg"><span className="material-icons-round" style={{ fontSize: 48 }}>star</span></IconBox>
</div>`,
      },
    ],
  },
  {
    name: "Search Bar",
    slug: "search-bar",
    description: "A composed search input with icon, text field, and clear button in a pill-shaped container.",

    props: [
      { name: "defaultValue", type: "string", description: "Initial value of the input" },
      { name: "placeholder", type: "string", default: '"Search"', description: "Placeholder text" },
      { name: "onClear", type: "() => void", description: "Callback when clear button is clicked" },
      { name: "onChange", type: "(value: string) => void", description: "Callback when input value changes" },
      { name: "className", type: "string", description: "Additional CSS classes" },
    ],
    examples: [
      {
        title: "Default",
        code: `<SearchBar />`,
      },
    ],
  },
  {
    name: "Dropdown Menu",
    slug: "dropdown-menu",
    description: "A menu of actions triggered by a button.",

    props: [
      { name: "open", type: "boolean", description: "Controlled open state" },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "Open change handler" },
    ],
    examples: [
      {
        title: "Default",
        code: `<DropdownMenu>
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
</DropdownMenu>`,
      },
    ],
  },
]

export function getComponentBySlug(slug: string): ComponentEntry | undefined {
  return registry.find((c) => c.slug === slug)
}
