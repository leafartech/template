interface CardProps {
    title: string
    paragraph: string
}

export default function Card({ paragraph, title }: CardProps) {
    return (
        <div className="bg-white shadow-xl flex flex-col items-center justify-center rounded-xl border border-zinc-200 px-6 py-12 text-center">
            <h3 className="text-xl font-medium  mb-2">{title}</h3>
            <p className="text-zinc-600">{paragraph}</p>
        </div>
    )
}