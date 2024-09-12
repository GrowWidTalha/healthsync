"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FeaturesSection } from "@/components/home/Features";
import { TestimonialsSection } from "@/components/home/Testimonials";
import { PricingSection } from "@/components/home/Pricing";
import CTA from "@/components/home/CTA";
import Link from "next/link";

export default function LandingPage() {
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollThreshold = 100;
            setIsVisible(scrollY > scrollThreshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [isVisible, controls]);
    const formUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSdX2n98Ty9YsM2ZOoBqpTcNg0SdNCUOmU0H8OFKQzG5-eDXUA/viewform";

    return (
        <div className="min-h-screen bg-background">
            <main>
                <section className="pt-32 pb-20 px-4">
                    <div className="container mx-auto text-center">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Streamline Your Healthcare with{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2663EA] to-[#4A90E2]">
                                Healthsync
                            </span>
                        </motion.h1>
                        <motion.p
                            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            The all-in-one solution for efficient healthcare
                            management, appointment booking, and virtual
                            consultations.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row justify-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Button
                                asChild
                                className="bg-[#2663EA] text-white hover:bg-[#2663EA]/90 text-lg py-6 px-8"
                            >
                                <Link href={formUrl}>Start Free Trial</Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="text-lg py-6 px-8"
                            >
                                <Link href={formUrl}>Book a Demo</Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                <FeaturesSection controls={controls} />
                <TestimonialsSection controls={controls} />
                <PricingSection controls={controls} />
                <CTA />
            </main>
        </div>
    );
}
