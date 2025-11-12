"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import { ReactNode } from "react";

interface CustomCardProps {
    title?: string;
    children: ReactNode;
    footer?: ReactNode;
    colorScheme?: "periwinkle" | "cornflower" | "default";
    className?: string;
}

export function CustomCard({
    title,
    children,
    footer,
    colorScheme = "default",
    className = "",
}: CustomCardProps) {
    let cardClass = className;

    if (colorScheme === "periwinkle") {
        cardClass = `${className} bg-periwinkle/20 border-2 border-periwinkle`;
    } else if (colorScheme === "cornflower") {
        cardClass = `${className} bg-cornflower-blue/20 border-2 border-cornflower-blue`;
    }

    return (
        <Card className={cardClass}>
            {title && (
                <CardHeader>
                    <h3 className="text-lg font-semibold">{title}</h3>
                </CardHeader>
            )}
            <CardBody>{children}</CardBody>
            {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
    );
}
