"use client";

import { useState } from "react";
import {
    CustomButton,
    CustomCard,
    CustomInput,
    CustomBadge,
    CustomAlert,
} from "@/components/ui";

export default function ComponentsShowcase() {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#CCCCFF] to-[#6495ED] bg-clip-text text-transparent">
                        Component Library Showcase
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Featuring Periwinkle (#CCCCFF) and Cornflower Blue (#6495ED)
                    </p>
                </header>

                <div className="space-y-12">
                    {/* Color Palette Section */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-6">Color Palette</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <CustomCard colorScheme="periwinkle" title="Periwinkle">
                                <div className="space-y-2">
                                    <p className="font-mono text-sm">Hex: #CCCCFF</p>
                                    <p className="font-mono text-sm">
                                        RGB: (204, 204, 255)
                                    </p>
                                    <div className="w-full h-24 bg-periwinkle rounded-lg mt-4"></div>
                                </div>
                            </CustomCard>
                            <CustomCard colorScheme="cornflower" title="Cornflower Blue">
                                <div className="space-y-2">
                                    <p className="font-mono text-sm">Hex: #6495ED</p>
                                    <p className="font-mono text-sm">
                                        RGB: (100, 149, 237)
                                    </p>
                                    <div className="w-full h-24 bg-cornflower-blue rounded-lg mt-4"></div>
                                </div>
                            </CustomCard>
                        </div>
                    </section>

                    {/* Buttons Section */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-6">Buttons</h2>
                        <CustomCard>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-3">
                                        Periwinkle Buttons
                                    </h3>
                                    <div className="flex flex-wrap gap-4">
                                        <CustomButton variant="periwinkle" size="sm">
                                            Small
                                        </CustomButton>
                                        <CustomButton variant="periwinkle" size="md">
                                            Medium
                                        </CustomButton>
                                        <CustomButton variant="periwinkle" size="lg">
                                            Large
                                        </CustomButton>
                                        <CustomButton
                                            variant="periwinkle"
                                            size="md"
                                            disabled
                                        >
                                            Disabled
                                        </CustomButton>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-3">
                                        Cornflower Blue Buttons
                                    </h3>
                                    <div className="flex flex-wrap gap-4">
                                        <CustomButton variant="cornflower" size="sm">
                                            Small
                                        </CustomButton>
                                        <CustomButton variant="cornflower" size="md">
                                            Medium
                                        </CustomButton>
                                        <CustomButton variant="cornflower" size="lg">
                                            Large
                                        </CustomButton>
                                        <CustomButton
                                            variant="cornflower"
                                            size="md"
                                            disabled
                                        >
                                            Disabled
                                        </CustomButton>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-3">
                                        Other Variants
                                    </h3>
                                    <div className="flex flex-wrap gap-4">
                                        <CustomButton variant="solid">Solid</CustomButton>
                                        <CustomButton variant="bordered">
                                            Bordered
                                        </CustomButton>
                                        <CustomButton variant="light">Light</CustomButton>
                                    </div>
                                </div>
                            </div>
                        </CustomCard>
                    </section>

                    {/* Cards Section */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-6">Cards</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <CustomCard
                                title="Periwinkle Card"
                                colorScheme="periwinkle"
                                footer={
                                    <CustomButton variant="periwinkle" size="sm">
                                        Action
                                    </CustomButton>
                                }
                            >
                                <p>
                                    This card uses the periwinkle color scheme with a
                                    soft, calming appearance.
                                </p>
                            </CustomCard>
                            <CustomCard
                                title="Cornflower Card"
                                colorScheme="cornflower"
                                footer={
                                    <CustomButton variant="cornflower" size="sm">
                                        Action
                                    </CustomButton>
                                }
                            >
                                <p>
                                    This card showcases the cornflower blue color with
                                    a vibrant look.
                                </p>
                            </CustomCard>
                            <CustomCard
                                title="Default Card"
                                colorScheme="default"
                                footer={
                                    <CustomButton variant="solid" size="sm">
                                        Action
                                    </CustomButton>
                                }
                            >
                                <p>
                                    This is a standard card without custom color
                                    schemes.
                                </p>
                            </CustomCard>
                        </div>
                    </section>

                    {/* Input Fields Section */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-6">Input Fields</h2>
                        <CustomCard>
                            <div className="space-y-4">
                                <CustomInput
                                    label="Periwinkle Input"
                                    placeholder="Type something..."
                                    colorScheme="periwinkle"
                                    value={inputValue}
                                    onChange={setInputValue}
                                />
                                <CustomInput
                                    label="Cornflower Input"
                                    placeholder="Enter your email..."
                                    type="email"
                                    colorScheme="cornflower"
                                />
                                <CustomInput
                                    label="Default Input"
                                    placeholder="Default style..."
                                    colorScheme="default"
                                />
                                <CustomInput
                                    label="Disabled Input"
                                    placeholder="Cannot edit..."
                                    disabled
                                />
                            </div>
                        </CustomCard>
                    </section>

                    {/* Badges Section */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-6">Badges</h2>
                        <CustomCard>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-3">
                                        Periwinkle Badges
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        <CustomBadge variant="periwinkle" size="sm">
                                            Small
                                        </CustomBadge>
                                        <CustomBadge variant="periwinkle" size="md">
                                            Medium
                                        </CustomBadge>
                                        <CustomBadge variant="periwinkle" size="lg">
                                            Large
                                        </CustomBadge>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-3">
                                        Cornflower Badges
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        <CustomBadge variant="cornflower" size="sm">
                                            Small
                                        </CustomBadge>
                                        <CustomBadge variant="cornflower" size="md">
                                            Medium
                                        </CustomBadge>
                                        <CustomBadge variant="cornflower" size="lg">
                                            Large
                                        </CustomBadge>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-3">
                                        Other Variants
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        <CustomBadge variant="solid">Solid</CustomBadge>
                                        <CustomBadge variant="bordered">
                                            Bordered
                                        </CustomBadge>
                                        <CustomBadge variant="flat">Flat</CustomBadge>
                                    </div>
                                </div>
                            </div>
                        </CustomCard>
                    </section>

                    {/* Alerts Section */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-6">Alerts</h2>
                        <div className="space-y-4">
                            <CustomAlert type="periwinkle" title="Periwinkle Alert">
                                This is an informational alert using the periwinkle
                                color scheme. Perfect for calm, informative messages.
                            </CustomAlert>
                            <CustomAlert type="cornflower" title="Cornflower Alert">
                                This alert uses the cornflower blue color, ideal for
                                highlighting important information.
                            </CustomAlert>
                            <CustomAlert type="info" title="Info Alert">
                                Standard informational alert with default blue styling.
                            </CustomAlert>
                            <CustomAlert type="success" title="Success Alert">
                                Operation completed successfully!
                            </CustomAlert>
                            <CustomAlert type="warning" title="Warning Alert">
                                Please review this information carefully.
                            </CustomAlert>
                            <CustomAlert type="error" title="Error Alert">
                                An error occurred. Please try again.
                            </CustomAlert>
                        </div>
                    </section>

                    {/* Interactive Demo Section */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-6">
                            Interactive Demo
                        </h2>
                        <CustomCard colorScheme="periwinkle" title="Component Interaction">
                            <div className="space-y-4">
                                <p>
                                    Try interacting with these components to see how
                                    they work together:
                                </p>
                                <div className="space-y-3">
                                    <CustomInput
                                        label="Your Name"
                                        placeholder="Enter your name..."
                                        colorScheme="periwinkle"
                                    />
                                    <CustomInput
                                        label="Your Email"
                                        placeholder="email@example.com"
                                        type="email"
                                        colorScheme="cornflower"
                                    />
                                </div>
                                <div className="flex gap-3 pt-4">
                                    <CustomButton
                                        variant="periwinkle"
                                        onClick={() => alert("Periwinkle clicked!")}
                                    >
                                        Submit
                                    </CustomButton>
                                    <CustomButton variant="cornflower">
                                        Cancel
                                    </CustomButton>
                                </div>
                            </div>
                        </CustomCard>
                    </section>
                </div>

                <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
                    <p>
                        Component Library built with Next.js 16, React 19, HeroUI,
                        and Tailwind CSS
                    </p>
                </footer>
            </div>
        </div>
    );
}
