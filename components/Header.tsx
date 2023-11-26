import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="bg-white fixed w-full z-10 ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-lg font-semibold leading-6"
          >
            <Image className="h-8 w-auto" src="/logo.png" alt="logo.png" width={100} height={50} />
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-10">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-lg font-semibold leading-6 text-gray-700"
          >
            About
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="text-lg font-semibold leading-6 text-gray-700"
          >
            Projects
          </Link>
          <Link
            to="works"
            spy={true}
            smooth={true}
            duration={500}
            className="text-lg font-semibold leading-6 text-gray-700"
          >
            Works
          </Link>
          <Link
            to="activities"
            spy={true}
            smooth={true}
            duration={500}
            className="text-lg font-semibold leading-6 text-gray-700"
          >
            Activities
          </Link>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            duration={500}
            className="text-lg font-semibold leading-6 text-gray-700"
          >
            Activities
          </Link>
          <a
            href="https://github.com/yejwoo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold leading-6 text-gray-700"
          >
            <FaGithub className="mt-1 text-lg" />
          </a>
        </div>
      </nav>
    </header>
  );
}
