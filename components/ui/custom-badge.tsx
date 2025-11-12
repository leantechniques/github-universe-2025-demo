"use client";

import { Chip } from "@heroui/react";
import { ReactNode } from "react";

interface CustomBadgeProps {
    children: ReactNode;
    variant?: "periwinkle" | "cornflower" | "solid" | "bordered" | "flat";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function CustomBadge({
    children,
    variant = "solid",
    size = "md",
    className = "",
}: CustomBadgeProps) {
    let customClass = className;

    if (variant === "periwinkle") {
        customClass = `${className} bg-periwinkle text-black`;
    } else if (variant === "cornflower") {
        customClass = `${className} bg-cornflower-blue text-white`;
    }

    return (
        <Chip
            variant={variant === "periwinkle" || variant === "cornflower" ? "solid" : variant}
            size={size}
            className={customClass}
        >
            {children}
        </Chip>
    );
}
