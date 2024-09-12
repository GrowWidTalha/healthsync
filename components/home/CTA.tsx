import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA: React.FC = () => {
    const formUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSdX2n98Ty9YsM2ZOoBqpTcNg0SdNCUOmU0H8OFKQzG5-eDXUA/viewform";

    return (
        <section id="cta" className="py-20 px-4 bg-[#2663EA] text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Transform Your Healthcare Practice?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Join thousands of healthcare professionals who are already
                    benefiting from Healthsync&apos;s powerful features.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                        asChild
                        className="bg-white text-[#2663EA] hover:bg-white/90 text-lg py-6 px-8"
                    >
                        <Link
                            href={formUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Started
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="bg-transparent/10 text-white hover:bg-white/10 hover:text-white text-lg py-6 px-8"
                    >
                        <Link
                            href={formUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Schedule a Demo
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
