import React, { CSSProperties, ReactNode } from 'react';
import { CollapsibleTrigger, Container, Text } from './styles';

interface CollapsibleInfoProps {
    title: string;
    content: string;
    transitionTime?: number;
    titleStyle?: CSSProperties;
    contentStyle?: CSSProperties;
    contentContainerStyle?: CSSProperties
    titleClassName?: string;
    contentClassName?: string;
    contentContainerClassName?: string;
    openedTitleClassName?: string;
}

export function CollapsibleInfo({
    title,
    content,
    transitionTime = 200,
    titleStyle,
    contentStyle,
    contentContainerStyle,
    titleClassName,
    contentClassName,
    contentContainerClassName,
    openedTitleClassName
}: CollapsibleInfoProps) {
    return (
        <CollapsibleTrigger
            trigger={title}
            openedClassName={openedTitleClassName}
            transitionTime={transitionTime}
            triggerStyle={titleStyle || {
                cursor: 'pointer'
            }}
            triggerClassName={titleClassName}
            style={contentContainerStyle}
            className={contentContainerClassName}
        >
            <Container
             style={contentContainerStyle}
             className={contentContainerClassName}
            >
                <Text
                    style={contentStyle}
                    className={contentClassName}
                >
                    {content}
                </Text>
            </Container>
        </CollapsibleTrigger>
    )
}