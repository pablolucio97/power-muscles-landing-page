import { CSSProperties } from 'react';
import Image from 'next/image'
import Link from 'next/link'


interface LogoProps {
    imageUrl: string;
    size?: 'small' | 'medium' | 'large'
    style?: CSSProperties;
    className?: string;
    url?: string;
}

export function Logo({
    imageUrl,
    url = '/',
    size,
    style,
    className
}: LogoProps) {
    return (
        <Link href={url} passHref>
            <Image
                src={imageUrl}
                alt='logo'
                width={size === 'large' ? 72 : size === 'small' ? 40
                    : 56}
                height={size === 'large' ? 72 : size === 'small' ? 40
                    : 56}
                className={className}
                style={style}
                quality={100}
            />
        </Link>
    )
}