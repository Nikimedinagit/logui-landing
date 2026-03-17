import { ThemeProvider } from "./components/theme-provider"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Gestion from "@/components/Gestion"
import Servicios from "@/components/Servicios"
import Clientes from "@/components/Clientes"
import Nosotros from "@/components/Nosotros"
import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        
        <Navbar />

        <main className="flex flex-col">
          <Hero />
          <Gestion />
          <Servicios />
          <Clientes />
          <Nosotros />
          <Contacto />
        </main>

          <Footer />
        
      </div>
    </ThemeProvider>
  )
}

export default App