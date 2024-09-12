import { motion, AnimationControls } from "framer-motion";
import { FeatureCard } from "../ui/FeatureCard";
import {
    CheckCircle,
    Calendar,
    Video,
    Lock,
    BarChart,
    Settings,
} from "lucide-react";

interface FeaturesSectionProps {
    controls: AnimationControls;
}

export function FeaturesSection({ controls }: FeaturesSectionProps) {
    const features = [
        {
            icon: CheckCircle,
            title: "All-in-One Solution",
            description:
                "Comprehensive healthcare management system for patients, admins, and doctors.",
        },
        {
            icon: Calendar,
            title: "Smart Appointment Booking",
            description:
                "Effortless scheduling with Google Calendar synchronization and automated reminders.",
        },
        {
            icon: Video,
            title: "Virtual Consultations",
            description:
                "Seamless online appointments with integrated Stripe payments for convenience.",
        },
        {
            icon: Lock,
            title: "Secure &amp; Compliant",
            description:
                "Robust user authentication and data management to ensure privacy and security.",
        },
        {
            icon: BarChart,
            title: "Powerful Analytics",
            description:
                "Data-driven insights to optimize your practice and improve patient care.",
        },
        {
            icon: Settings,
            title: "Customizable Settings",
            description:
                "Tailor the system to fit your unique practice needs and workflows.",
        },
    ];

    return (
        <section id="features" className="py-20 px-4 bg-muted/50">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2663EA] to-[#4A90E2]">
                        Powerful Features
                    </span>{" "}
                    for Modern Healthcare
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <FeatureCard
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
