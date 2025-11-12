"use client";

import { Button } from "@heroui/react";
import { ReactNode } from "react";

interface CustomButtonProps {
    children: ReactNode;
    variant?: "periwinkle" | "cornflower" | "solid" | "bordered" | "light";
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

export function CustomButton({
    children,
    variant = "solid",
    size = "md",
    onClick,
    disabled = false,
    className = "",
}: CustomButtonProps) {
    const color: "default" | "primary" | "secondary" = "default";
    let customClass = className;

    if (variant === "periwinkle") {
        customClass = `${className} bg-periwinkle text-black hover:opacity-80`;
    } else if (variant === "cornflower") {
        customClass = `${className} bg-cornflower-blue text-white hover:opacity-80`;
    }

    return (
        <Button
            color={color}
            variant={variant === "periwinkle" || variant === "cornflower" ? "solid" : variant}
            size={size}
            onClick={onClick}
            disabled={disabled}
            className={customClass}
        >
            {children}
        </Button>
    );
}
