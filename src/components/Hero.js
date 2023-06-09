import Image from "next/image"
import HeroImage from "../assets/img/cyberpunk-hero.png"

export default function Hero() {
  return (
    <>
      <main className="bg-black h-screen flex items-center justify-around pl-12 pr-12 pb-16">
        <div className="text-white text-center flex flex-col gap-4">
          <h1 className="font-extrabold text-[48px] leading-tight">MERGULHE NO UNIVERSO DE CYBERPUNK</h1>
          <h3>Desde o enredo original de Cyberpunk 2077 e sua emocionante expansão de suspense e espionagem Phantom Liberty até a premiada série de anime Cyberpunk:</h3>
          <p>Mercenários — são inúmeras histórias para descobrir na mortal megalópole de Night City.</p>
        </div>
        <Image src={HeroImage} width={400} height={400} alt="hero image" style={{ objectFit: "contain" }} />
      </main>
    </>
  )
}