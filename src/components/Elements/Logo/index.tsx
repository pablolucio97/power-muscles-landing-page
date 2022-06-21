import { CSSProperties } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import { Container } from './styles';

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
        <Container
            size={size}
            style={style}
            className={className}
        >
            <Link href={url} passHref>
                <Image
                    src={imageUrl}
                    alt='logo'
                    width={48}
                    height={48}
                />
            </Link>

        </Container>
    )
}