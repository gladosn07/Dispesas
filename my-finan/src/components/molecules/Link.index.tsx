import NextLink from 'next/link'
import { InputHTMLAttributes, ReactNode } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    children: ReactNode
    href: string
}

export const Link = ({ children, href, ...props }:Props ) => {
    return (
        <div>
            <NextLink href={href} {...props}>
                <a>
                    {children}
                </a>
            </NextLink>
        </div>
    )
}