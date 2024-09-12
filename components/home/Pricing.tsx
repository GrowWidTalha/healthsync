import { AnimationControls, motion } from "framer-motion";
import { PricingCard } from "../ui/PricingCard";

interface PricingSectionProps {
    controls: AnimationControls;
}

export function PricingSection({ controls }: PricingSectionProps) {
    return (
        <section id="pricing" className="py-20 px-4 bg-muted/50">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Simple,{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2663EA] to-[#4A90E2]">
                        Transparent Pricing
                    </span>
                </h2>
                <motion.div
                    className="max-w-md mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.5 }}
                >
                    <PricingCard />
                </motion.div>
            </div>
        </section>
    );
}
