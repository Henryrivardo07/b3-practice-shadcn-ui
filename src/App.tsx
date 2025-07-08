import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container py-6">
        <AppRoutes />
      </main>
      <Toaster />
    </div>
  );
}

export default App;
