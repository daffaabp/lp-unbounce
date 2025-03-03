import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-white py-12 px-6 md:px-10">
			<div className="max-w-7xl mx-auto">
				{/* Logo */}
				<div className="mb-12">
					<Link href="/">
						<Image
							src="/unbounce-logo-circle.svg"
							alt="Unbounce"
							width={40}
							height={40}
							className="h-10 w-10"
						/>
					</Link>
				</div>

				{/* Footer Links */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
					{/* Product Column */}
					<div>
						<h3 className="text-gray-900 font-medium mb-4">Product</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/landing-pages"
									className="text-gray-600 hover:text-blue-600"
								>
									Landing pages
								</Link>
							</li>
							<li>
								<Link
									href="/ab-testing"
									className="text-gray-600 hover:text-blue-600"
								>
									A/B testing
								</Link>
							</li>
							<li>
								<Link
									href="/ai-optimization"
									className="text-gray-600 hover:text-blue-600"
								>
									AI optimization
								</Link>
							</li>
							<li>
								<Link
									href="/ai-copywriting"
									className="text-gray-600 hover:text-blue-600"
								>
									AI copywriting
								</Link>
							</li>
							<li>
								<Link
									href="/integrations"
									className="text-gray-600 hover:text-blue-600"
								>
									Integrations
								</Link>
							</li>
							<li>
								<Link
									href="/popups-sticky-bars"
									className="text-gray-600 hover:text-blue-600"
								>
									Popups and sticky bars
								</Link>
							</li>
							<li>
								<Link
									href="/features"
									className="text-gray-600 hover:text-blue-600"
								>
									Features
								</Link>
							</li>
							<li>
								<Link
									href="/landing-page-templates"
									className="text-gray-600 hover:text-blue-600"
								>
									Landing page templates
								</Link>
							</li>
							<li>
								<Link
									href="/ai-copywriting-templates"
									className="text-gray-600 hover:text-blue-600"
								>
									AI copywriting templates
								</Link>
							</li>
							<li>
								<Link
									href="/compare"
									className="text-gray-600 hover:text-blue-600"
								>
									How we compare
								</Link>
							</li>
							<li>
								<Link
									href="/security"
									className="text-gray-600 hover:text-blue-600"
								>
									Product security
								</Link>
							</li>
						</ul>
					</div>

					{/* Solutions Column */}
					<div>
						<h3 className="text-gray-900 font-medium mb-4">Solutions</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/ecommerce"
									className="text-gray-600 hover:text-blue-600"
								>
									Ecommerce
								</Link>
							</li>
							<li>
								<Link
									href="/saas"
									className="text-gray-600 hover:text-blue-600"
								>
									SaaS
								</Link>
							</li>
							<li>
								<Link
									href="/agency"
									className="text-gray-600 hover:text-blue-600"
								>
									Agency
								</Link>
							</li>
							<li>
								<Link
									href="/small-businesses"
									className="text-gray-600 hover:text-blue-600"
								>
									Small businesses
								</Link>
							</li>
							<li>
								<Link
									href="/b2b-marketing"
									className="text-gray-600 hover:text-blue-600"
								>
									B2B marketing
								</Link>
							</li>
							<li>
								<Link
									href="/professional-services"
									className="text-gray-600 hover:text-blue-600"
								>
									Professional services
								</Link>
							</li>
							<li>
								<Link href="/ppc" className="text-gray-600 hover:text-blue-600">
									PPC
								</Link>
							</li>
							<li>
								<Link
									href="/social-ads"
									className="text-gray-600 hover:text-blue-600"
								>
									Social ads
								</Link>
							</li>
							<li>
								<Link
									href="/email-marketing"
									className="text-gray-600 hover:text-blue-600"
								>
									Email marketing
								</Link>
							</li>
							<li>
								<Link
									href="/lead-generation"
									className="text-gray-600 hover:text-blue-600"
								>
									Lead generation
								</Link>
							</li>
						</ul>
					</div>

					{/* Company Column */}
					<div>
						<h3 className="text-gray-900 font-medium mb-4">Company</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/about"
									className="text-gray-600 hover:text-blue-600"
								>
									About Unbounce
								</Link>
							</li>
							<li>
								<Link
									href="/partner-program"
									className="text-gray-600 hover:text-blue-600"
								>
									Partner program
								</Link>
							</li>
							<li>
								<Link
									href="/careers"
									className="text-gray-600 hover:text-blue-600"
								>
									Careers
								</Link>
							</li>
						</ul>
					</div>

					{/* Resources Column */}
					<div>
						<h3 className="text-gray-900 font-medium mb-4">Resources</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/marketing-resources"
									className="text-gray-600 hover:text-blue-600"
								>
									Marketing resources
								</Link>
							</li>
							<li>
								<Link
									href="/blog"
									className="text-gray-600 hover:text-blue-600"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href="/integrate-with-us"
									className="text-gray-600 hover:text-blue-600"
								>
									Integrate with us
								</Link>
							</li>
							<li>
								<Link
									href="/builder-demo"
									className="text-gray-600 hover:text-blue-600"
								>
									Unbounce builder demo
								</Link>
							</li>
							<li>
								<Link
									href="/how-to-build-landing-page"
									className="text-gray-600 hover:text-blue-600"
								>
									How to build a landing page
								</Link>
							</li>
							<li>
								<Link
									href="/landing-page-basics"
									className="text-gray-600 hover:text-blue-600"
								>
									Landing page basics
								</Link>
							</li>
							<li>
								<Link
									href="/landing-page-examples"
									className="text-gray-600 hover:text-blue-600"
								>
									Landing page examples
								</Link>
							</li>
						</ul>
					</div>

					{/* Get in touch Column */}
					<div>
						<h3 className="text-gray-900 font-medium mb-4">Get in touch</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/contact"
									className="text-gray-600 hover:text-blue-600"
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="/login"
									className="text-gray-600 hover:text-blue-600"
								>
									Log in
								</Link>
							</li>
							<li>
								<Link
									href="/help-center"
									className="text-gray-600 hover:text-blue-600"
								>
									Help center
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
					<div className="text-gray-500 text-sm mb-4 md:mb-0">
						© Unbounce All rights reserved.
					</div>

					<div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
						<Link
							href="/security"
							className="text-gray-500 hover:text-gray-700 text-sm"
						>
							Security
						</Link>
						<Link
							href="/privacy-policy"
							className="text-gray-500 hover:text-gray-700 text-sm"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms-of-service"
							className="text-gray-500 hover:text-gray-700 text-sm"
						>
							Terms of Service
						</Link>
						<Link
							href="/ccpa"
							className="text-gray-500 hover:text-gray-700 text-sm"
						>
							CCPA
						</Link>
						<Link
							href="/gdpr"
							className="text-gray-500 hover:text-gray-700 text-sm"
						>
							GDPR
						</Link>

						<div className="flex items-center space-x-4 ml-2">
							<Link
								href="https://twitter.com/unbounce"
								aria-label="Twitter"
								className="text-gray-500 hover:text-gray-700"
							>
								<Twitter size={18} />
							</Link>
							<Link
								href="https://linkedin.com/company/unbounce"
								aria-label="LinkedIn"
								className="text-gray-500 hover:text-gray-700"
							>
								<Linkedin size={18} />
							</Link>
							<Link
								href="https://facebook.com/unbounce"
								aria-label="Facebook"
								className="text-gray-500 hover:text-gray-700"
							>
								<Facebook size={18} />
							</Link>
							<Link
								href="https://instagram.com/unbounce"
								aria-label="Instagram"
								className="text-gray-500 hover:text-gray-700"
							>
								<Instagram size={18} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
