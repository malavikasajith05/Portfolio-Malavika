import { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between px-16 py-5 text-amber-950 bg-transparent-/100 backdrop-blur-lg border-b border-white/20 shadow-lg">
      {/* Logo */}
      <a
        href="#home"
        className="bg-gradient-to-r from-amber-800 to-amber-500 bg-clip-text text-transparent text-3xl font-semibold "
      >
        Malavika Sajith
      </a>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-10">
        <a
          href="#hero"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>About Me</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      {/* Desktop Social Links */}
      <ul className="hidden md:flex gap-10">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a
            href="https://www.linkedin.com/in/malavika-sajith05/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-black-400 hover:opacity-100">
          <a
            href="https://github.com/malavikasajith05/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed right-0 top-[84px] z-50 flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-gray-800 bg-amber-800 p-12 text-white">
          <ul className="flex flex-col gap-8">
            <a
              href="#hero"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#tech"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>About Me</li>
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>

          {/* Mobile Social Links */}
          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <a
                href="https://www.linkedin.com/in/malavika-sajith05/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-black-400 hover:opacity-100">
              <a
                href="https://github.com/malavikasajith05/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


