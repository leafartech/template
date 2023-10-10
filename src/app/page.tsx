import Card from "@/components/Card";
import HeroFlex from "@/components/HeroFlex";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center py-5">
        <Image
          src="/images/logo.png"
          alt="Logo My Way Adventure"
          width={120}
          height={10}
        />
      </div>
      <header className="header relative h-[500px] flex items-center justify-center">
        <div className="absolute bottom-0 left-0 z-10 w-full h-full bg-gradient-to-b from-black/0 to-black"></div>
        {/* <Image
          src="/images/bg.png"
          alt="Foto de fundo principal"
          layout="fill"
          objectFit="cover"
          className="border-y border-zinc-300"
        /> */}
        <div className="relative z-50 flex items-center flex-col gap-3 w-full max-w-6xl text-left sm:text-center px-4 sm:px-0">
          <h1 className="text-white text-3xl font-bold tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
          <p className="text-zinc-200 sm:w-1/2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
        </div>
      </header>
      <main className="bg-zinc-100">
        <Section className="py-12 px-4 sm:px-0">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-3xl font-semibold tracking-wider">Lorem ipsum dolor sit amet</h2>
            <p className="text-zinc-600">Dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="flex justify-center gap-3 flex-wrap">
            <Card
              title="Lorem ipsum"
              paragraph="Dolor sit amet, consectetur adipiscing elit"
            />
            <Card
              title="Lorem ipsum"
              paragraph="Dolor sit amet, consectetur adipiscing elit"
            />
            <Card
              title="Lorem ipsum"
              paragraph="Dolor sit amet, consectetur adipiscing elit"
            />
            <Card
              title="Lorem ipsum"
              paragraph="Dolor sit amet, consectetur adipiscing elit"
            />
          </div>
        </Section>
        <Section className="py-0 sm:py-12 px-4 sm:px-0">
          <Image 
            src="/images/bg2.png"
            alt="Foto de fundo principal"
            width={1200}
            height={500}
            className="rounded-xl"
          />
          <div className="w-full sm:h-32 flex flex-col sm:grid sm:grid-cols-2 mt-8 sm:mt-16">
            <div className="w-full h-32 sm:h-full bg-white border border-zinc-300 rounded-xl"></div>
            <div className="w-full h-32 sm:h-full bg-white border border-zinc-300 sm:border-l-0 rounded-xl"></div>
          </div>
        </Section>
        <Section className="py-6 sm:py-12 px-4 sm:px-0">
          <HeroFlex
            description="Do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            title="Lorem inpsum dolor sit amet"
            imagePath={1}
            cta="Lorem inpsum dolor sit"
            href={"/"}
          >
            <div className="flex flex-col gap-2 text-zinc-600">
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </HeroFlex>
        </Section>
        <Section className="py-6 sm:py-12 px-4 sm:px-0">
          <HeroFlex
            description="Do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            title="Lorem inpsum dolor sit amet"
            imagePath={1}
            reverse={true}
            cta="Lorem inpsum dolor sit"
            href={"/"}
          >
            <div className="flex flex-col gap-2 text-zinc-600">
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </HeroFlex>
        </Section>
        <Section className="py-6 sm:py-12 px-4 sm:px-0">
          <HeroFlex
            description="Do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            title="Lorem inpsum dolor sit amet"
            imagePath={1}
            cta="Lorem inpsum dolor sit"
            href={"/"}
          >
            <div className="flex flex-col gap-2 text-zinc-600">
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </HeroFlex>
        </Section>
        <Section className="py-6 sm:py-12 px-4 sm:px-0">
          <div className="w-full h-[450px] flex flex-col sm:grid sm:grid-cols-2">
            <div className="h-full bg-white rounded-xl border border-zinc-300">

            </div>
            <div className="h-full bg-white rounded-xl border border-zinc-300 sm:border-l-0">

            </div>
          </div>
        </Section>
        <Section className="py-12 px-4 sm:px-0">
          <div className="w-full h-[450px] bg-zinc-700 rounded-xl py-12 text-center">
            <h2 className="text-white text-3xl font-semibold">Lorem ipsum dolor</h2>
          </div>
        </Section>
        <Section classNameSection="border-y border-zinc-300">
          <div className="flex justify-center py-12">
            <Image
              src="/images/logo.png"
              alt="Logo My Way Adventure"
              width={120}
              height={10}
            />
          </div>
        </Section>
      </main>
      <footer className="py-12 w-full flex justify-center items-center bg-zinc-700 px-4 sm:px-0">
        <div className="w-full max-w-7xl flex flex-col justify-start">
          <h4 className="text-white text-xl">Central de atendimento</h4>                    
          <ul className="text-zinc-300 mt-4 flex flex-col gap-2">
            <li>
              <p className="text-sm ">SAC (Serviço de Atendimento ao Consumidor)</p>
            </li>
            <li>
              <p className="text-sm ">De segunda a sexta das 8:30 às 18:00</p>
            </li>
            <li>
              <p className="text-sm ">E-mail: contato@myway.com.br</p>
            </li>
            <li>
              <p className="text-sm ">WhatsApp: +55 (xx) yxxxx-xxxx</p>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}