import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Marketers() {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
						Why marketers love Unbounce
					</h2>
					<p className="max-w-3xl mx-auto text-lg text-gray-600">
						Unbounce is great for marketers across all industries and teams of
						any size (including solo marketers), but there are a few that really
						love Unbounce.
					</p>
				</div>

				{/* Cards Grid */}
				<div className="grid md:grid-cols-3 gap-8">
					{/* SaaS Businesses Card */}
					<div>
						{/* Image Container with Yellow Background */}
						<div className="bg-yellow-200 p-4 rounded-lg overflow-hidden">
							<div className="rounded-lg overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=500&auto=format"
									alt="SaaS marketer using phone and laptop"
									width={500}
									height={400}
									className="w-full h-60 object-cover"
								/>
							</div>
						</div>

						{/* Content */}
						<div className="p-6 pt-8 bg-gray-50">
							<h3 className="text-2xl font-bold text-gray-800 mb-4">
								SaaS businesses
							</h3>
							<p className="text-gray-600 mb-10">
								Quickly discover your best-performing lead gen campaigns. Build
								landing pages with hundreds of customizable templates and
								convert like crazy by optimizing on the fly, all without a
								developer.
							</p>
							<a
								href="/saas"
								className="inline-flex items-center text-gray-700 font-medium hover:text-gray-900 transition-colors group"
							>
								<span className="mr-2">For SaaS businesses</span>
								<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</a>
						</div>
					</div>

					{/* Ecommerce Stores Card */}
					<div>
						{/* Image Container with Green Background */}
						<div className="bg-emerald-200 p-4 rounded-lg overflow-hidden">
							<div className="rounded-lg overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&auto=format"
									alt="Ecommerce store owner using tablet"
									width={500}
									height={400}
									className="w-full h-60 object-cover"
								/>
							</div>
						</div>

						{/* Content */}
						<div className="p-6 pt-8 bg-gray-50">
							<h3 className="text-2xl font-bold text-gray-800 mb-4">
								Ecommerce stores
							</h3>
							<p className="text-gray-600 mb-10">
								Turn more clicks into sales by directing customers to custom
								landing pages instead of ecomm product pages (landing page
								visitors have been shown to convert and spend twice as much).
							</p>
							<a
								href="/ecommerce"
								className="inline-flex items-center text-gray-700 font-medium hover:text-gray-900 transition-colors group"
							>
								<span className="mr-2">For ecommerce stores</span>
								<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</a>
						</div>
					</div>

					{/* Marketing Agencies Card */}
					<div>
						{/* Image Container with Pink Background */}
						<div className="bg-pink-200 p-4 rounded-lg overflow-hidden">
							<div className="rounded-lg overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=500&auto=format"
									alt="Marketing agency team collaborating"
									width={500}
									height={400}
									className="w-full h-60 object-cover"
								/>
							</div>
						</div>

						{/* Content */}
						<div className="p-6 pt-8 bg-gray-50">
							<h3 className="text-2xl font-bold text-gray-800 mb-4">
								Marketing agencies
							</h3>
							<p className="text-gray-600 mb-10">
								Impress your clients by getting great results from every
								campaign. Create audience-specific landing pages for more
								conversions and use A/B testing to quickly find out what&apos;s
								working and maximize ROI.
							</p>
							<a
								href="/agencies"
								className="inline-flex items-center text-gray-700 font-medium hover:text-gray-900 transition-colors group"
							>
								<span className="mr-2">For marketing agencies</span>
								<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
