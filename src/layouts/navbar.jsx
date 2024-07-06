import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Package2, Search, ShoppingCart } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <DesktopNav />
        <SearchBar />
        <div className="flex items-center gap-4">
          <UserMenu />
          <ShoppingCartIcon />
        </div>
        <MobileNav />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const DesktopNav = () => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
    <NavItem
      to="/"
      className="flex items-center gap-2 text-lg font-semibold md:text-base"
    >
      <Package2 className="h-6 w-6" />
      <span className="sr-only">Acme Inc</span>
    </NavItem>
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.title}
      </NavItem>
    ))}
  </nav>
);

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <NavItem
          to="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </NavItem>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.title}
          </NavItem>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const ShoppingCartIcon = () => (
  <Button variant="secondary" size="icon" className="rounded-full">
    <ShoppingCart className="h-5 w-5" />
    <span className="sr-only">Shopping Cart</span>
  </Button>
);

const SearchBar = () => (
  <div className="relative flex-1 mx-4">
    <input
      type="text"
      placeholder="Search..."
      className="w-full px-4 py-2 border rounded-full"
    />
    <Button variant="secondary" size="icon" className="absolute right-2 top-1/2 transform -translate-y-1/2">
      <Search className="h-5 w-5" />
      <span className="sr-only">Search</span>
    </Button>
  </div>
);

const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )
    }
  >
    {children}
  </NavLink>
);

export default Layout;