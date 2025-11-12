"use client";

import { Card, Button, Link } from "@heroui/react";

interface Advertisement {
    id: string;
    title: string;
    description: string;
    linkText: string;
    linkUrl: string;
    type: "course" | "book";
}

const advertisements: Advertisement[] = [
    {
        id: "1",
        title: "Advanced React Patterns",
        description: "Master modern React with our comprehensive course",
        linkText: "Learn More",
        linkUrl: "#",
        type: "course",
    },
    {
        id: "2",
        title: "TypeScript Mastery Guide",
        description: "The complete guide to TypeScript development",
        linkText: "Get the Book",
        linkUrl: "#",
        type: "book",
    },
    {
        id: "3",
        title: "Full-Stack Development Pro",
        description: "Build production-ready applications from scratch",
        linkText: "Enroll Now",
        linkUrl: "#",
        type: "course",
    },
];

export function AdvertisementBanner() {
    return (
        <div className="w-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 py-4 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        📚 Our Products
                    </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {advertisements.map((ad) => (
                        <Card
                            key={ad.id}
                            className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
                        >
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                                        {ad.type === "course" ? "📖 Course" : "📕 Book"}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                                    {ad.title}
                                </h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {ad.description}
                                </p>
                                <Button
                                    as={Link}
                                    href={ad.linkUrl}
                                    color="primary"
                                    size="sm"
                                    className="w-full"
                                >
                                    {ad.linkText}
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
