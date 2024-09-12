import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
    const formUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSdX2n98Ty9YsM2ZOoBqpTcNg0SdNCUOmU0H8OFKQzG5-eDXUA/viewform";
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-[#2663EA]">
                    <Image
                        src={"/websiteLogo.png"}
                        alt="logo"
                        height={32}
                        width={162}
                        className="h-10 max-w-md object-cover cursor-pointer"
                    />
                </Link>
                <nav className="hidden md:flex space-x-6">
                    <Link
                        href="#features"
                        className="text-muted-foreground hover:text-[#2663EA]"
                    >
                        Features
                    </Link>
                    <Link
                        href="#testimonials"
                        className="text-muted-foreground hover:text-[#2663EA]"
                    >
                        Testimonials
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-muted-foreground hover:text-[#2663EA]"
                    >
                        Pricing
                    </Link>
                </nav>
                <Button className="bg-[#2663EA] text-white hover:bg-[#2663EA]/90">
                    <Link
                        href={formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book a Demo
                    </Link>
                </Button>
            </div>
        </header>
    );
}
