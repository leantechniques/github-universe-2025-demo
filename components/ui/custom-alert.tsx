"use client";

import { Card, CardBody } from "@heroui/react";
import { ReactNode } from "react";

interface CustomAlertProps {
    children: ReactNode;
    type?: "periwinkle" | "cornflower" | "info" | "success" | "warning" | "error";
    title?: string;
    className?: string;
}

export function CustomAlert({
    children,
    type = "info",
    title,
    className = "",
}: CustomAlertProps) {
    let alertClass = "border-l-4 ";

    switch (type) {
        case "periwinkle":
            alertClass += "bg-periwinkle/20 border-periwinkle";
            break;
        case "cornflower":
            alertClass += "bg-cornflower-blue/20 border-cornflower-blue";
            break;
        case "info":
            alertClass += "bg-blue-50 border-blue-500";
            break;
        case "success":
            alertClass += "bg-green-50 border-green-500";
            break;
        case "warning":
            alertClass += "bg-yellow-50 border-yellow-500";
            break;
        case "error":
            alertClass += "bg-red-50 border-red-500";
            break;
    }

    return (
        <Card className={`${alertClass} ${className}`}>
            <CardBody>
                {title && <h4 className="font-semibold mb-2">{title}</h4>}
                <div>{children}</div>
            </CardBody>
        </Card>
    );
}
