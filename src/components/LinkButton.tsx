import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import React from 'react'

const linkButton = cva(
    'inline-flex items-center justify-center rounded font-semibold transition-colors',
    {
        variants: {
            intent: {
                primary: 'bg-brand text-white hover:bg-blue-700',
                secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
            },
            size: {
                sm: 'px-3 py-1 text-sm',
                md: 'px-4 py-2 text-base',
                lg: 'px-6 py-3 text-lg',
            },
        },
        defaultVariants: {
            intent: 'primary',
            size: 'md',
        },
    }
)

type LinkButtonProps = VariantProps<typeof linkButton> & {
    href: string
    className?: string
    children: React.ReactNode
}

export default function LinkButton({ href, intent, size, className, children }: LinkButtonProps) {
    return (
        <Link href={href} className={linkButton({ intent, size, className })}>
            {children}
        </Link>
    )
}