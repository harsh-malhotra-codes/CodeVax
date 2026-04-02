import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Product from "@/pages/Product";
import HireDevelopers from "@/pages/HireDevelopers";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/product" component={Product} />
      <Route path="/product/rental" component={Product} />
      <Route path="/product/ecommerce" component={Product} />
      <Route path="/product/elearning" component={Product} />
      <Route path="/product/travel" component={Product} />
      <Route path="/product/real-estate" component={Product} />
      <Route path="/product/logistics" component={Product} />
      <Route path="/career" component={HireDevelopers} />
      <Route path="/hire-developers" component={HireDevelopers} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
