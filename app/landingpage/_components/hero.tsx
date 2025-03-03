import {
	BarChart,
	LayoutGrid,
	Pencil,
	RefreshCw,
	Star,
	StarHalf,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero() {
	return (
		<div className="w-full bg-white">
			{/* Ratings Section */}
			<div className="max-w-6xl mx-auto pt-8 px-4 sm:px-6 flex flex-col items-center">
				<div className="flex flex-wrap justify-center gap-6 mb-10">
					{/* Google Rating */}
					<div className="flex items-center gap-2">
						<div className="w-6 h-6 bg-[#4285F4] rounded-full flex items-center justify-center text-white font-bold text-xs">
							G
						</div>
						<div className="flex items-center">
							<Star className="w-5 h-5 text-gray-700 fill-gray-700" />
							<Star className="w-5 h-5 text-gray-700 fill-gray-700" />
							<Star className="w-5 h-5 text-gray-700 fill-gray-700" />
							<Star className="w-5 h-5 text-gray-700 fill-gray-700" />
							<StarHalf className="w-5 h-5 text-gray-700 fill-gray-700" />
						</div>
						<span className="text-gray-700 font-medium">4.4 (359 reviews)</span>
					</div>

					{/* G2 Rating */}
					<div className="flex items-center gap-2">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-label="G2 Rating Icon"
						>
							<title>G2 Rating Icon</title>
							<path
								d="M12 0L14.59 8.26H23.41L16.41 13.39L19 21.66L12 16.53L5 21.66L7.59 13.39L0.59 8.26H9.41L12 0Z"
								fill="#FF492C"
							/>
						</svg>
						<div className="flex items-center">
							<Star className="w-5 h-5 text-gray-700 fill-gray-700" />
							<Star className="w-5 h-5 text-gray-700 fill-gray-700" />
							<Star className="w-5 h-5 text-gray-700 fill-gray-700" />
							<Star className="w-5 h-5 text-gray-700 fill-gray-700" />
							<StarHalf className="w-5 h-5 text-gray-700 fill-gray-700" />
						</div>
						<span className="text-gray-700 font-medium">4.5 (256 reviews)</span>
					</div>
				</div>

				{/* Main Heading */}
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-6">
					Launch faster. Convert more.
				</h1>

				{/* Subheading */}
				<p className="text-lg text-center text-gray-600 max-w-3xl mb-12">
					Generate more leads and sales with Unbounce, the leading landing page
					platform built for marketers and agencies. Leverage AI-driven insights
					powered by billions of conversions to deliver better results—without
					increasing your budget or team size.
				</p>

				{/* Features Section */}
				<div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
					{/* Feature 1 */}
					<div className="flex flex-col items-center">
						<div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
							<LayoutGrid className="w-8 h-8 text-gray-700" />
						</div>
						<span className="text-gray-700 text-center">
							Drag and drop
							<br />
							builder
						</span>
					</div>

					{/* Feature 2 */}
					<div className="flex flex-col items-center">
						<div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
							<svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-label="A/B Testing Icon"
							>
								<title>A/B Testing Icon</title>
								<rect
									x="3"
									y="3"
									width="18"
									height="18"
									rx="2"
									stroke="#4B5563"
									strokeWidth="2"
								/>
								<path
									d="M8 12H12M16 12H12M12 12V8M12 12V16"
									stroke="#4B5563"
									strokeWidth="2"
								/>
							</svg>
						</div>
						<span className="text-gray-700 text-center">
							No-code A/B
							<br />
							testing
						</span>
					</div>

					{/* Feature 3 */}
					<div className="flex flex-col items-center">
						<div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
							<Pencil className="w-8 h-8 text-gray-700" />
						</div>
						<span className="text-gray-700 text-center">
							AI
							<br />
							copywriting
						</span>
					</div>

					{/* Feature 4 */}
					<div className="flex flex-col items-center">
						<div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
							<BarChart className="w-8 h-8 text-gray-700" />
						</div>
						<span className="text-gray-700 text-center">
							Real-time
							<br />
							analytics
						</span>
					</div>

					{/* Feature 5 */}
					<div className="flex flex-col items-center">
						<div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
							<RefreshCw className="w-8 h-8 text-gray-700" />
						</div>
						<span className="text-gray-700 text-center">
							AI
							<br />
							optimization
						</span>
					</div>
				</div>

				{/* CTA Button */}
				<button
					type="button"
					className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md text-lg mb-12 transition duration-300"
				>
					Get pricing now
				</button>

				{/* Platform Preview Image */}
				<div className="w-full max-w-5xl relative">
					<Image
						src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
						alt="Unbounce Platform Preview"
						width={1200}
						height={800}
						className="rounded-lg shadow-2xl"
					/>
					<div className="absolute -top-10 left-0 bg-white rounded-lg p-2 shadow-md">
						<div className="flex items-center gap-2">
							<span className="font-bold text-green-600">A</span>
							<span className="text-sm text-gray-600">VARIANT A</span>
							<span className="text-sm text-green-600 font-bold">+30%</span>
						</div>
					</div>
					<div className="absolute top-12 left-0 bg-white rounded-lg p-2 shadow-md">
						<div className="flex items-center gap-2">
							<span className="font-bold text-yellow-500">B</span>
							<span className="text-sm text-gray-600">VARIANT B</span>
						</div>
					</div>
					<div className="absolute top-32 left-0 bg-white rounded-lg p-2 shadow-md">
						<div className="flex items-center gap-2">
							<span className="font-bold text-pink-500">C</span>
							<span className="text-sm text-gray-600">VARIANT C</span>
						</div>
					</div>
					<div className="absolute top-10 right-10 bg-white rounded-lg p-2 shadow-md">
						<div className="flex items-center gap-2">
							<span className="text-lg font-bold text-gray-800">+12%</span>
							<span className="text-sm text-gray-600">Page statistics</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
