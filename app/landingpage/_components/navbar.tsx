"use client";

import {
	BarChart,
	BarChart2,
	Briefcase,
	Cloud,
	Database,
	Headphones,
	HelpCircle,
	Layers,
	Layout,
	Mail,
	Megaphone,
	MessageCircle,
	MessageSquare,
	MousePointer,
	PenTool,
	Search,
	Settings,
	ShoppingCart,
	Star,
	Store,
	Target,
	Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	const toggleDropdown = (dropdown: string) => {
		setOpenDropdown(openDropdown === dropdown ? null : dropdown);
	};

	return (
		<header className="relative bg-white">
			<div className="flex items-center justify-between px-6 py-4">
				{/* Logo */}
				<div className="flex-shrink-0">
					<Link href="/" className="block">
						<Image
							src="/unbounce-logo.svg"
							alt="Unbounce"
							width={152}
							height={36}
							className="h-9 w-auto"
						/>
					</Link>
				</div>

				{/* Navigation Links */}
				<nav className="hidden lg:flex items-center space-x-8">
					<div className="relative group">
						<button
							type="button"
							className={`flex items-center font-medium border-b-2 ${openDropdown === "product" ? "text-blue-600 border-blue-600" : "text-gray-700 hover:text-gray-900 border-transparent"}`}
							onClick={() => toggleDropdown("product")}
						>
							Product
							<svg
								className="ml-1 h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								role="img"
								aria-label="Dropdown arrow"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
					</div>
					<div className="relative group">
						<button
							type="button"
							className={`flex items-center font-medium border-b-2 ${openDropdown === "solutions" ? "text-blue-600 border-blue-600" : "text-gray-700 hover:text-gray-900 border-transparent"}`}
							onClick={() => toggleDropdown("solutions")}
						>
							Solutions
							<svg
								className="ml-1 h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								role="img"
								aria-label="Dropdown arrow"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
					</div>

					<Link
						href="/pricing"
						className="text-gray-700 hover:text-gray-900 font-medium"
					>
						Pricing
					</Link>
					<div className="relative group">
						<button
							type="button"
							className={`flex items-center font-medium border-b-2 ${openDropdown === "resources" ? "text-blue-600 border-blue-600" : "text-gray-700 hover:text-gray-900 border-transparent"}`}
							onClick={() => toggleDropdown("resources")}
						>
							Resources
							<svg
								className="ml-1 h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								role="img"
								aria-label="Dropdown arrow"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
					</div>

					<Link
						href="/contact"
						className="text-gray-700 hover:text-gray-900 font-medium"
					>
						Contact
					</Link>
				</nav>

				{/* Right side buttons */}
				<div className="flex items-center space-x-4">
					<button
						type="button"
						className="p-2 text-gray-700 hover:text-gray-900"
					>
						<Search size={20} />
					</button>

					<Link
						href="/login"
						className="px-5 py-2 border border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-50 transition-colors"
					>
						Log In
					</Link>

					<Link
						href="/trial"
						className="px-5 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
					>
						Start My Free Trial
					</Link>
				</div>
			</div>

			{/* Product Dropdown */}
			{openDropdown === "product" && (
				<div className="absolute left-0 right-0 mt-1 bg-white shadow-lg z-50 py-8 px-6 border-t border-gray-100">
					<div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
						<div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-10">
							<div className="flex space-x-3">
								<div className="flex-shrink-0">
									<Layout className="h-6 w-6 text-gray-700" />
								</div>
								<div>
									<h3 className="font-medium text-gray-900">Landing pages</h3>
									<p className="mt-1 text-sm text-gray-600">
										Build pages with smart features that get more sales and
										signups.
									</p>
								</div>
							</div>

							<div className="flex space-x-3">
								<div className="flex-shrink-0">
									<PenTool className="h-6 w-6 text-gray-700" />
								</div>
								<div>
									<h3 className="font-medium text-gray-900">AI copywriting</h3>
									<p className="mt-1 text-sm text-gray-600">
										Instantly generate copy for your pages, ads, emails, and
										more.
									</p>
								</div>
							</div>

							<div className="flex space-x-3">
								<div className="flex-shrink-0">
									<BarChart2 className="h-6 w-6 text-gray-700" />
								</div>
								<div>
									<h3 className="font-medium text-gray-900">A/B testing</h3>
									<p className="mt-1 text-sm text-gray-600">
										A/B test your landing pages without a designer, developer,
										or deep pockets.
									</p>
								</div>
							</div>

							<div className="flex space-x-3">
								<div className="flex-shrink-0">
									<Database className="h-6 w-6 text-gray-700" />
								</div>
								<div>
									<h3 className="font-medium text-gray-900">Integrations</h3>
									<p className="mt-1 text-sm text-gray-600">
										Connect your favorite marketing tools and add extra
										functionality.
									</p>
								</div>
							</div>

							<div className="flex space-x-3">
								<div className="flex-shrink-0">
									<Target className="h-6 w-6 text-gray-700" />
								</div>
								<div>
									<h3 className="font-medium text-gray-900">AI optimization</h3>
									<p className="mt-1 text-sm text-gray-600">
										Automatically send visitors to their best-match landing
										page.
									</p>
								</div>
							</div>

							<div className="flex space-x-3">
								<div className="flex-shrink-0">
									<Layers className="h-6 w-6 text-gray-700" />
								</div>
								<div>
									<h3 className="font-medium text-gray-900">Templates</h3>
									<p className="mt-1 text-sm text-gray-600">
										Get started fast with hundreds of industry-optimized
										templates.
									</p>
								</div>
							</div>

							<div className="flex space-x-3">
								<div className="flex-shrink-0">
									<MessageSquare className="h-6 w-6 text-gray-700" />
								</div>
								<div>
									<h3 className="font-medium text-gray-900">
										Popups and sticky bars
									</h3>
									<p className="mt-1 text-sm text-gray-600">
										Create popups and sticky bars that grab your visitors&apos;
										attention.
									</p>
								</div>
							</div>

							<div className="flex space-x-3">
								<div className="flex-shrink-0">
									<Settings className="h-6 w-6 text-gray-700" />
								</div>
								<div>
									<h3 className="font-medium text-gray-900">Features</h3>
									<p className="mt-1 text-sm text-gray-600">
										Discover everything you can do behind-the-scenes.
									</p>
								</div>
							</div>
						</div>

						<div className="col-span-4 bg-gray-50 p-6 rounded-lg">
							<h3 className="text-lg font-medium text-gray-900">
								Scale even faster with Professional Services
							</h3>
							<p className="mt-2 text-sm text-gray-600">
								Accelerate your workflow and acquisition of leads, sales, and
								sign-ups with personalized onboarding, landing page creation,
								and conversion-focused consults.
							</p>
							<a
								href="/professional-services"
								className="mt-4 inline-block text-blue-600 font-medium border-b-2 border-blue-600"
							>
								Learn more
							</a>
							<div className="mt-4">
								<Image
									src="/professional-services.jpg"
									alt="Professional Services"
									width={300}
									height={200}
									className="rounded-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Solutions Dropdown */}
			{openDropdown === "solutions" && (
				<div className="absolute left-0 right-0 mt-1 bg-white shadow-lg z-50 py-8 px-6 border-t border-gray-100">
					<div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
						{/* By industry section */}
						<div className="col-span-4">
							<h3 className="text-lg font-medium text-gray-900 mb-6">
								By industry
							</h3>

							<div className="space-y-4">
								<Link
									href="/solutions/agencies"
									className="flex items-center space-x-3 group"
								>
									<Megaphone className="h-5 w-5 text-gray-700 group-hover:text-blue-600" />
									<span className="font-medium text-gray-900 group-hover:text-blue-600">
										Agencies
									</span>
								</Link>

								<Link
									href="/solutions/ecommerce"
									className="flex items-center space-x-3 group"
								>
									<ShoppingCart className="h-5 w-5 text-gray-700 group-hover:text-blue-600" />
									<span className="font-medium text-gray-900 group-hover:text-blue-600">
										Ecommerce
									</span>
								</Link>

								<Link
									href="/solutions/saas"
									className="flex items-center space-x-3 group"
								>
									<Cloud className="h-5 w-5 text-gray-700 group-hover:text-blue-600" />
									<span className="font-medium text-gray-900 group-hover:text-blue-600">
										SaaS
									</span>
								</Link>

								<Link
									href="/solutions/small-businesses"
									className="flex items-center space-x-3 group"
								>
									<Store className="h-5 w-5 text-gray-700 group-hover:text-blue-600" />
									<span className="font-medium text-gray-900 group-hover:text-blue-600">
										Small businesses
									</span>
								</Link>

								<Link
									href="/solutions/b2b-marketing"
									className="flex items-center space-x-3 group"
								>
									<BarChart className="h-5 w-5 text-gray-700 group-hover:text-blue-600" />
									<span className="font-medium text-gray-900 group-hover:text-blue-600">
										B2B marketing
									</span>
								</Link>

								<Link
									href="/solutions/service-specialists"
									className="flex items-center space-x-3 group"
								>
									<Briefcase className="h-5 w-5 text-gray-700 group-hover:text-blue-600" />
									<span className="font-medium text-gray-900 group-hover:text-blue-600">
										Service specialists
									</span>
								</Link>
							</div>
						</div>

						{/* By use case section */}
						<div className="col-span-4">
							<h3 className="text-lg font-medium text-gray-900 mb-6">
								By use case
							</h3>

							<div className="space-y-4">
								<Link
									href="/solutions/ppc"
									className="flex items-center space-x-3 group"
								>
									<MousePointer className="h-5 w-5 text-gray-700 group-hover:text-blue-600" />
									<span className="font-medium text-gray-900 group-hover:text-blue-600">
										PPC
									</span>
								</Link>

								<Link
									href="/solutions/social-ads"
									className="flex items-center space-x-3 group"
								>
									<MessageCircle className="h-5 w-5 text-gray-700 group-hover:text-blue-600" />
									<span className="font-medium text-gray-900 group-hover:text-blue-600">
										Social ads
									</span>
								</Link>

								<Link
									href="/solutions/email-marketing"
									className="flex items-center space-x-3 group"
								>
									<Mail className="h-5 w-5 text-gray-700 group-hover:text-blue-600" />
									<span className="font-medium text-gray-900 group-hover:text-blue-600">
										Email marketing
									</span>
								</Link>

								<Link
									href="/solutions/lead-generation"
									className="flex items-center space-x-3 group"
								>
									<Star className="h-5 w-5 text-gray-700 group-hover:text-blue-600" />
									<span className="font-medium text-gray-900 group-hover:text-blue-600">
										Lead generation
									</span>
								</Link>
							</div>
						</div>

						{/* Flexible limits section */}
						<div className="col-span-4 bg-gray-50 p-6 rounded-lg">
							<h3 className="text-lg font-medium text-gray-900 mb-3">
								Flexible limits and extra support
							</h3>
							<p className="text-sm text-gray-600 mb-4">
								Our Concierge plans scale to any amount of traffic and
								conversions—and with hands-on training and support, you have
								everything you need to keep your business growing.
							</p>

							<Link
								href="/concierge"
								className="inline-block text-blue-600 font-medium border-b-2 border-blue-600 mb-6"
							>
								Learn more
							</Link>

							<div className="mt-4">
								<Image
									src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop"
									alt="Unbounce Concierge service"
									width={320}
									height={180}
									className="rounded-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Resources Dropdown */}
			{openDropdown === "resources" && (
				<div className="absolute left-0 right-0 mt-1 bg-white shadow-lg z-50 py-8 px-6 border-t border-gray-100">
					<div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
						{/* The essentials section */}
						<div className="col-span-4">
							<h3 className="text-lg font-medium text-gray-900 mb-6">
								The essentials
							</h3>

							<div className="space-y-6">
								<div>
									<h4 className="font-medium text-gray-900">
										What is a landing page?
									</h4>
									<p className="mt-1 text-sm text-gray-600">
										Start converting more of your traffic with our complete
										guide to landing pages.
									</p>
								</div>

								<div>
									<h4 className="font-medium text-gray-900">
										Landing page examples
									</h4>
									<p className="mt-1 text-sm text-gray-600">
										Use this collection of Unbounce-built examples to inspire
										your next campaign.
									</p>
								</div>

								<div>
									<h4 className="font-medium text-gray-900">
										Conversion benchmark report
									</h4>
									<p className="mt-1 text-sm text-gray-600">
										Get insights from over 57 million landing page conversions
										across various industries.
									</p>
								</div>
							</div>
						</div>

						{/* Learn with Unbounce section */}
						<div className="col-span-4">
							<h3 className="text-lg font-medium text-gray-900 mb-6">
								Learn with Unbounce
							</h3>

							<div className="space-y-6">
								<div className="flex items-center space-x-3">
									<HelpCircle className="h-5 w-5 text-gray-700" />
									<span className="font-medium text-gray-900">Help center</span>
								</div>

								<div className="flex items-center space-x-3">
									<Headphones className="h-5 w-5 text-gray-700" />
									<span className="font-medium text-gray-900">
										Unprompted podcast
									</span>
								</div>

								<div className="flex items-center space-x-3">
									<Video className="h-5 w-5 text-gray-700" />
									<span className="font-medium text-gray-900">
										Video library
									</span>
								</div>
							</div>
						</div>

						{/* Marketing resources section */}
						<div className="col-span-4">
							<h3 className="text-lg font-medium text-gray-900 mb-3">
								Marketing resources ✨
							</h3>
							<p className="text-sm text-gray-600 mb-4">
								Learn to build high-converting marketing campaigns with our
								resource library.
							</p>

							<Link
								href="/marketing-resources"
								className="inline-block text-blue-600 font-medium border-b-2 border-blue-600 mb-6"
							>
								Visit our marketing resources
							</Link>

							<div className="mt-2">
								<Image
									src="/conversion-benchmark-report-2024.jpg"
									alt="Conversion Benchmark Report 2024"
									width={320}
									height={180}
									className="rounded-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Navbar;
