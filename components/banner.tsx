"use client"

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import { useState } from 'react';

const ScrollBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    // const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 50; // Adjust this value as per your requirement
            const shouldShowBanner = window.scrollY > scrollThreshold;
            setShowBanner(shouldShowBanner);
        };

        // Add event listener to track scroll position
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Clean up the event listener
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (showBanner) {
            // Add a short delay before applying the animation class
            const timeout = setTimeout(() => {
                setShowBanner((prev) => prev && true); // Ensures that the banner remains visible
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [showBanner]);

    if (!showBanner) {
        return null; // Don't render the banner if showBanner is false
    }

    return (
        <div className={`fixed inset-x-0 bottom-0 transition-transform duration-1000 ease-in-out ${showBanner ? 'translate-y-0' : 'translate-y-full'
            }`}>
            <div className="fixed inset-x-0 bottom-0">
                <div className="flex flex-1 gap-x-6 bg-forest-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                    <div className="flex flex-1 justify-end gap-40 drop-shadow-lg">
                        <Link
                            href="/application"
                            className={buttonVariants({ variant: "primary", size: "xl" })}
                        >
                            Sign Up
                        </Link>
                        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollBanner;