import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { memo } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PreloadResources from "./components/PreloadResources";
import "./App.css";
import "./lib/critical.css"; // Import critical CSS

// Create a QueryClient for React Query with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes (previously called cacheTime)
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

// Memoize routes that don't change frequently
const MemoizedRoutes = memo(() => (
  <Routes>
    <Route path="/" element={<Index />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
));
MemoizedRoutes.displayName = 'MemoizedRoutes';

// Background noise component - separate for better performance
const BackgroundNoise = memo(() => (
  <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-[-1]"></div>
));
BackgroundNoise.displayName = 'BackgroundNoise';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Preload critical resources */}
      <PreloadResources>
        {/* Background noise overlay for texture */}
        <BackgroundNoise />
        
        {/* Toast notifications */}
        <Toaster />
        <Sonner />
        
        {/* App routes */}
        <BrowserRouter>
          <MemoizedRoutes />
        </BrowserRouter>
      </PreloadResources>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
