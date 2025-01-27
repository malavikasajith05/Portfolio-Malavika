import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Tech from "./components/Tech"


function App() {
  return (
    <>
      {/* Full-screen background */}
      <div className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-blue-100">

        <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
          <Navbar />
          <Hero />
          <Tech />
          <Projects />
          <Contact />
        </main>

      </div>
    </>
  );
}
  

  
export default App
