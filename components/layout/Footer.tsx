import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-muted py-12 px-4">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-semibold mb-4">Product</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-[#2663EA]"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-[#2663EA]"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-[#2663EA]"
                            >
                                Integrations
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/about"
                                className="text-muted-foreground hover:text-[#2663EA]"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-[#2663EA]"
                            >
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="text-muted-foreground hover:text-[#2663EA]"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-[#2663EA]"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-[#2663EA]"
                            >
                                Help Center
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-[#2663EA]"
                            >
                                API Docs
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/privacypolicy"
                                className="text-muted-foreground hover:text-[#2663EA]"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-[#2663EA]"
                            >
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-[#2663EA]"
                            >
                                HIPAA Compliance
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 text-center text-muted-foreground">
                © {new Date().getFullYear()} Healthsync. All rights reserved.
            </div>
        </footer>
    );
}
