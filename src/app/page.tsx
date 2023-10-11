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
        <div className="relative z-50 flex items-center flex-col gap-3 w-full max-w-6xl text-left sm:text-center px-4 sm:px-0">
          <h1 className="text-white text-3xl font-bold tracking-wider">Tenha mais tempo de qualidade com seu filho</h1>
          <p className="text-zinc-200 sm:w-1/2">O kit de acessórios para bike que faltava para você e seu filho construírem memórias inesquecíveis.</p>
          {/* <p className="text-zinc-200 sm:w-1/2">É isso que faltava para você começar a colecionar momentos junto com o seu filho, momentos que nem você e nem ele irão esquecer!</p> */}
        </div>
      </header>
      <main className="bg-zinc-100">
        <Section className="py-12 px-4 sm:px-0">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-3xl font-semibold tracking-wider">Com o kit My Way, você vai ter</h2>
            <p className="text-zinc-600">O kit pensado para trazer seu filho para mais perto de você</p>
          </div>
          <div className="grid grid-cols-3 gap-3 flex-wrap">
            <Card
              title="Segurança em primeiro lugar"
              paragraph="O kit conta com capacete, joelheira, cotoveleira, farol noturno + lanterna LED!"
            />
            <Card
              title="Livre de preocupações"
              paragraph="Deixe o seu filho se divertir sem precisar fiscalizar a brincadeira dele."
            />
            <Card
              title="Menos videogame"
              paragraph="Esse conjunto é a chave para seu filho passar menos tempo na frente das telas e vocês passarem mais tempo juntos."
            />
            {/* <Card
              title="Lorem ipsum"
              paragraph="Dolor sit amet, consectetur adipiscing elit"
            /> */}
          </div>
        </Section>
        <Section className="py-0 sm:py-12 px-4 sm:px-0">
          <Image
            src="/images/bg3.png"
            alt="Foto de fundo principal"
            width={1200}
            height={500}
            className="rounded-xl"
          />
          {/* <div className="w-full sm:h-32 flex flex-col sm:grid sm:grid-cols-2 mt-8 sm:mt-16">
            <div className="w-full h-32 sm:h-full bg-white border border-zinc-300 rounded-xl"></div>
            <div className="w-full h-32 sm:h-full bg-white border border-zinc-300 sm:border-l-0 rounded-xl"></div>
          </div> */}
        </Section>
        <Section className="py-6 sm:py-12 px-4 sm:px-0">
          <HeroFlex
            description=""
            title="- Videogame e + Tempo de qualidade"
            imagePath={1}
            cta="Quero evitar esses problemas"
            href={"/"}
          >
            <div className="flex flex-col gap-2 text-zinc-600">
              <p>Os 7 primeiros anos de vida são essenciais para a construção da saúde física e mental de qualquer criança.</p>
              <p>E os impactos das telas nesse período causam problemas emocionais, psicológicos e físicos que a maioria das vezes são levados para toda vida.</p>
              <p>Essa é a sua chance de evitar esses problemas e estabelecer hábitos saudáveis para o seu filho.</p>
            </div>
          </HeroFlex>
        </Section>
        <Section className="py-6 sm:py-12 px-4 sm:px-0">
          <HeroFlex
            description=""
            title="O tempo passa num piscar de olhos"
            imagePath={1}
            cta="Não quero perder mais tempo"
            href={"/"}
            reverse={true}
          >
            <div className="flex flex-col gap-2 text-zinc-600">
              <p>Eu <strong>não quero que você se arrependa</strong> de não ter colecionado mais memórias com seu filho.</p>
              <p>Tenho certeza que quando seu filho era bebê você se doava por completo para ele. </p>
              <p>Saiba que a presença do pai na infância de seu filho é tão fundamental quanto nos primeiros anos de vida<strong> E não quero que você se arrependa</strong> daqui a um tempo <strong>ao olhar para a infância do seu filho</strong> e perceber que a sua falta de hábitos <strong>o impediu de colecionar boas memórias</strong> com você.</p>
              <p>Pare de adiar momentos que não voltarão mais...</p>
            </div>
          </HeroFlex>
        </Section>
        <Section className="py-6 sm:py-12 px-4 sm:px-0">
          <HeroFlex
            title="Esse kit é ideal para quem?"
            description="O kit é ideal para pais que:"
            imagePath={1}
            cta="Não quero perder mais tempo"
            href={"/"}
          >
            <div className="flex flex-col gap-2 text-zinc-600">
              <p>✔️ Não querem ter <strong>filhos ansiosos e hiperativos</strong>.</p>
              <p>✔️ Querem que o filho tenha mais <strong>memórias com o pai</strong>.</p>
              <p>✔️ Precisam disputar a atenção do filho com <strong>videogames</strong>.</p>
              <p>✔️ Querem aproveitar melhor a <strong>infância dos filhos</strong>.</p>
              <p>✔️ Querem que os filhos se <strong>divirtam com segurança</strong>.</p>
              <p>✔️ <strong>Valorizam</strong> o exercício físico.</p>
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