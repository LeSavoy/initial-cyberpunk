import Image from "next/image"
import Logo from "../assets/img/cyberpunk-logo.png"

export default function Navbar () {
  return (
    <div>
      <header>
        <nav className="flex h-20 bg-[#fcee09] items-center justify-around">
          <div>
            <Image src={Logo} width={250} height={250} alt="logo"/>
          </div>

          <div>
            <ul className="flex text-[#050a0e] gap-10 uppercase cursor-pointer font-extrabold text-lg">
              <li class="navbar">Showcase</li>
              <li>Docs</li>
              <li>Blog</li>
              <li>Analytics</li>
            </ul>
          </div>

          <div>
            <button className="text-[#050a0e] hover:text-[#fcee09] hover:bg-[#050a0e] ease-in-out delay-75 bg-[#fcee09] outline-none border-[#050a0e]  border-2 w-36 h-10 uppercase font-extrabold">Chain</button>
          </div>
          
        </nav>
      </header>
    </div>
    
  )
}