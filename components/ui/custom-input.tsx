"use client";

import { Input } from "@heroui/react";

interface CustomInputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: "text" | "email" | "password" | "number";
    colorScheme?: "periwinkle" | "cornflower" | "default";
    disabled?: boolean;
    className?: string;
}

export function CustomInput({
    label,
    placeholder,
    value,
    onChange,
    type = "text",
    colorScheme = "default",
    disabled = false,
    className = "",
}: CustomInputProps) {
    let customClass = className;

    if (colorScheme === "periwinkle") {
        customClass = `${className} focus-within:border-periwinkle`;
    } else if (colorScheme === "cornflower") {
        customClass = `${className} focus-within:border-cornflower-blue`;
    }

    return (
        <Input
            label={label}
            placeholder={placeholder}
            value={value}
            onValueChange={onChange}
            type={type}
            disabled={disabled}
            className={customClass}
        />
    );
}
