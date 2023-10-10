import { ReactNode } from 'react'
import Image from 'next/image'

interface HeroFlexProps {
    children: ReactNode
    title: string
    description: string
    imagePath: number
    reverse?: boolean
    cta: string
    href: String
}

export default function HeroFlex({ children, reverse, description, imagePath, title, cta, href }: HeroFlexProps) {
    return (
        <div className={`flex flex-col sm:flex-row items-center ${reverse && 'sm:flex-row-reverse'}`}>
            <div className="sm:w-1/2 flex flex-col justify-center gap-2">
                <h2 className={`title text-2xl sm:text-3xl font-extrabold text-black tracking-wide`}>{title}</h2>
                <p className="text-zinc-600 sm:text-lg">{description}</p>
                {children}
                <div className="mt-4 mb-6 sm:mt-2 w-full flex">
                    <a className="bg-black shadow-xl text-white py-3 text-sm font-semibold tracking-wide text-center w-72 rounded-md" href={`${href}`}>{cta}</a>
                </div>
            </div>
            <div className={`flex sm:w-1/2 ${reverse ? 'justify-start' : 'justify-end'}`}>
                <Image
                    src={`/images/hero/${imagePath}.png`}
                    alt="Imagem da imersão Pedro Lucca"
                    width={450}
                    height={450}
                    className="rounded-xl"
                />
            </div>
        </div>
    )
}