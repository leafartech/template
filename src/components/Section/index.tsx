import { ReactNode } from "react"

interface SectionProps {
    children: ReactNode
    className?: string
    classNameSection?: string
}

export default function Section({ children, className, classNameSection }: SectionProps) {
    return (
        <section className={`w-full flex justify-center items-center ${classNameSection}`}>
            <div className={`w-full max-w-6xl ${className}`}>
                {children}
            </div>
        </section>
    )
}