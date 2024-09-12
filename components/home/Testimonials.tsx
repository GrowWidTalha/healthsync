import { motion } from "framer-motion";
import { TestimonialCard } from "../ui/TestimonialCard";

interface TestimonialsSectionProps {
    controls: any;
}

export function TestimonialsSection({ controls }: TestimonialsSectionProps) {
    const testimonials = [
        {
            name: "Dr. Emily Chen",
            role: "General Practitioner",
            quote: "Healthsync has revolutionized my practice. The streamlined appointment management and virtual consultation features have saved me countless hours.",
        },
        {
            name: "Mark Johnson",
            role: "Clinic Administrator",
            quote: "The analytics provided by Healthsync have been invaluable in optimizing our clinic's operations and improving patient satisfaction.",
        },
        {
            name: "Dr. Sarah Patel",
            role: "Pediatrician",
            quote: "I love how easy it is to write prescriptions and share them securely with patients. Healthsync has made my workflow so much more efficient.",
        },
    ];

    return (
        <section id="testimonials" className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Trusted by{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2663EA] to-[#4A90E2]">
                        Healthcare Professionals
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <TestimonialCard {...testimonial} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
