
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavBarProps {
  transparent?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ transparent = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : transparent 
            ? 'bg-transparent' 
            : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-fraudbuster-darkBlue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">FB</span>
            </div>
            <span className="font-bold text-xl text-fraudbuster-darkBlue">FraudBuster</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium text-gray-700 hover:text-fraudbuster-darkBlue transition">Home</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    <span className="font-medium text-gray-700 hover:text-fraudbuster-darkBlue transition">Features</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-fraudbuster-blue/50 to-fraudbuster-purple/50 p-6 no-underline outline-none focus:shadow-md"
                            to="/features"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-fraudbuster-darkBlue">
                              Features Overview
                            </div>
                            <p className="text-sm leading-tight text-gray-600">
                              Explore all the powerful fraud detection capabilities of FraudBuster.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem to="/features#real-time" title="Real-Time Detection">
                        Identify suspicious activity as it happens
                      </ListItem>
                      <ListItem to="/features#explainable" title="Explainable AI">
                        Understand why activity was flagged
                      </ListItem>
                      <ListItem to="/features#sentiment" title="Sentiment Insights">
                        Analyze communication patterns
                      </ListItem>
                      <ListItem to="/features#privacy" title="Privacy First">
                        Keep your data secure
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/about" className="font-medium text-gray-700 hover:text-fraudbuster-darkBlue transition">About</Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-fraudbuster-darkBlue transition">Contact</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    <span className="font-medium text-gray-700 hover:text-fraudbuster-darkBlue transition">Legal</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[200px]">
                      <ListItem to="/legal" title="Legal Overview">
                        All legal documents
                      </ListItem>
                      <ListItem to="/privacy" title="Privacy Policy">
                        How we protect your data
                      </ListItem>
                      <ListItem to="/terms" title="Terms of Service">
                        Usage agreement
                      </ListItem>
                      <ListItem to="/security" title="Security">
                        Our security practices
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/login" className="font-medium text-gray-700 hover:text-fraudbuster-darkBlue transition">Login</Link>
            <Link to="/register">
              <Button className="button-primary">Register</Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block font-medium text-gray-700 hover:text-fraudbuster-darkBlue px-3 py-2 rounded-md">Home</Link>
            <Link to="/features" className="block font-medium text-gray-700 hover:text-fraudbuster-darkBlue px-3 py-2 rounded-md">Features</Link>
            <Link to="/about" className="block font-medium text-gray-700 hover:text-fraudbuster-darkBlue px-3 py-2 rounded-md">About</Link>
            <Link to="/contact" className="block font-medium text-gray-700 hover:text-fraudbuster-darkBlue px-3 py-2 rounded-md">Contact</Link>
            
            <div className="px-3 py-2">
              <div className="font-medium text-gray-700 mb-2">Legal</div>
              <div className="pl-4 space-y-2">
                <Link to="/legal" className="block text-gray-600 hover:text-fraudbuster-darkBlue py-1 text-sm">Legal Overview</Link>
                <Link to="/privacy" className="block text-gray-600 hover:text-fraudbuster-darkBlue py-1 text-sm">Privacy Policy</Link>
                <Link to="/terms" className="block text-gray-600 hover:text-fraudbuster-darkBlue py-1 text-sm">Terms of Service</Link>
                <Link to="/security" className="block text-gray-600 hover:text-fraudbuster-darkBlue py-1 text-sm">Security</Link>
              </div>
            </div>
            
            <Link to="/login" className="block font-medium text-gray-700 hover:text-fraudbuster-darkBlue px-3 py-2 rounded-md">Login</Link>
            <Link to="/register" className="block font-medium px-3 py-2">
              <Button className="w-full button-primary">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string; title: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBar;
