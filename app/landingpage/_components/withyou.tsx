import { Heart } from "lucide-react";
import React from "react";

export default function WithYou() {
	return (
		<>
			{/* Support Section - Light Background */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="flex flex-col items-center text-center">
						{/* Heart Icon */}
						<div className="mb-6">
							<Heart className="h-16 w-16 text-blue-600 stroke-2" fill="none" />
						</div>

						{/* Heading */}
						<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
							We&apos;re with you all the way
						</h2>

						{/* Description */}
						<p className="max-w-3xl text-lg text-gray-600 mb-10">
							Don&apos;t just grow—grow smarter. We&apos;ve got an award-winning
							customer success team, an active community of supportive
							marketers, and loads of educational resources to help you grow
							your business the right way.
						</p>

						{/* Buttons */}
						<div className="flex flex-wrap justify-center gap-4">
							<a
								href="/basics"
								className="px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-sm hover:bg-gray-100 transition-colors"
							>
								Learn the basics
							</a>
							<a
								href="/resources"
								className="px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-sm hover:bg-gray-100 transition-colors"
							>
								Explore our resources
							</a>
							<a
								href="/support"
								className="px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-sm hover:bg-gray-100 transition-colors"
							>
								Get support
							</a>
							<a
								href="/demo"
								className="px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-sm hover:bg-gray-100 transition-colors"
							>
								Request a demo
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Two Column CTA Section - Blue Background */}
			<section className="py-16 bg-blue-600 text-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="grid md:grid-cols-2 gap-16">
						{/* Left Column - Start Building */}
						<div>
							<div className="h-1 w-12 bg-orange-300 mb-8" />
							<h3 className="text-3xl md:text-4xl font-bold mb-6">
								Start building pages for free
							</h3>
							<p className="text-blue-100 mb-8">
								Build landing pages, popups, and sticky bars with your free
								14-day trial. Cancel anytime.
							</p>
							<a
								href="/trial"
								className="inline-block px-8 py-4 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-blue-600 transition-colors"
							>
								Start my free trial
							</a>
						</div>

						{/* Right Column - Scale Marketing */}
						<div>
							<div className="h-1 w-12 bg-orange-300 mb-8" />
							<h3 className="text-3xl md:text-4xl font-bold mb-6">
								Scale your marketing without limits
							</h3>
							<p className="text-blue-100 mb-8">
								Work directly with a dedicated team of conversion experts to get
								the best possible return on your marketing budget.
							</p>
							<a
								href="/demo"
								className="inline-block px-8 py-4 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-blue-600 transition-colors"
							>
								Request a demo
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
