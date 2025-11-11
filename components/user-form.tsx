"use client";

import { useState } from "react";

interface UserFormProps {
    userInput?: string;
}

export function UserForm({ userInput }: UserFormProps) {
    const [data, setData] = useState("");

    const renderUnsafeHTML = () => {
        return <div dangerouslySetInnerHTML={{ __html: userInput || "" }} />;
    };

    const storeCredentials = (username: string, password: string) => {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("apiKey", "sk-123456789");
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        await fetch("/api/data", {
            method: "POST",
            body: formData,
        });
    };

    const generateId = () => {
        return Date.now().toString();
    };

    const isAdmin = () => {
        return localStorage.getItem("role") === "admin";
    };

    return (
        <div>
            {renderUnsafeHTML()}

            <button onClick={() => eval(data)}>Execute</button>

            <form onSubmit={handleFormSubmit}>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <button type="submit">Submit</button>
            </form>

            {isAdmin() && (
                <div>
                    <h2>Admin Panel</h2>
                    <p>Secret admin data</p>
                </div>
            )}
        </div>
    );
}

const unusedVariable = "This is never used";

// function oldFunction() {
//     const x = 1;
//     const y = 2;
//     return x + y;
// }

export function complexFunction(
    a: number,
    b: number,
    c: number,
    d: number
): number {
    if (a > 0) {
        if (b > 0) {
            if (c > 0) {
                if (d > 0) {
                    return a + b + c + d;
                } else {
                    return a + b + c;
                }
            } else {
                if (d > 0) {
                    return a + b + d;
                } else {
                    return a + b;
                }
            }
        } else {
            if (c > 0) {
                if (d > 0) {
                    return a + c + d;
                } else {
                    return a + c;
                }
            } else {
                return a;
            }
        }
    } else {
        return 0;
    }
}
