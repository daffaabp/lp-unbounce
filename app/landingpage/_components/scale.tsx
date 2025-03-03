import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Scale() {
	return (
		<>
			{/* Scale Your Marketing Section */}
			<section className="py-20 bg-gray-900 text-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* Left Column - Text Content */}
						<div className="space-y-6">
							<h2 className="text-4xl md:text-5xl font-bold leading-tight">
								Scale your marketing without limits
							</h2>
							<p className="text-lg text-gray-300">
								Expert support. Seamless integrations. Maximum ROI.
								Unbounce&apos;s Concierge plans give you the power to quickly
								and efficiently scale your marketing to any number of
								conversions.
							</p>
							<a
								href="/concierge"
								className="inline-flex items-center text-white font-medium group"
							>
								<span>Learn about Concierge plans</span>
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</a>
						</div>

						{/* Right Column - Video Mockup */}
						<div className="relative">
							<div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-1">
								<div className="relative rounded-xl overflow-hidden bg-white">
									{/* Top UI Bar */}
									<div className="flex items-center justify-between bg-blue-500 p-3">
										<div className="flex items-center space-x-2">
											<div className="bg-white bg-opacity-30 rounded-full w-2 h-2" />
											<div className="bg-white bg-opacity-30 rounded-full w-2 h-2" />
										</div>
										<div className="flex items-center space-x-2">
											<div className="bg-white bg-opacity-30 rounded-full w-2 h-2" />
											<div className="bg-white bg-opacity-30 rounded-full w-2 h-2" />
											<div className="bg-white bg-opacity-30 rounded-full w-2 h-2" />
										</div>
									</div>

									{/* Main Content */}
									<div className="relative">
										{/* Travel Website Mockup */}
										<Image
											src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format"
											alt="Marketing dashboard"
											width={600}
											height={400}
											className="w-full"
										/>

										{/* Play Button Overlay */}
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="bg-blue-500 rounded-full p-4 cursor-pointer hover:bg-blue-600 transition-colors shadow-lg">
												<Play className="h-10 w-10 text-white" fill="white" />
											</div>
										</div>

										{/* Going Logo Overlay */}
										<div className="absolute bottom-4 right-4 bg-green-100 px-5 py-2 rounded-lg">
											<span className="text-green-800 font-bold text-2xl">
												Going<sup>™</sup>
											</span>
										</div>
									</div>

									{/* Bottom Section of Mockup */}
									<div className="p-4 bg-gray-50">
										<p className="text-gray-600 text-sm mb-3">
											Get real deals like this
										</p>
										<div className="flex space-x-3">
											{/* Destination Cards */}
											<div className="w-1/3 rounded-md overflow-hidden shadow-sm">
												<Image
													src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=300&auto=format"
													alt="Beach destination"
													width={100}
													height={75}
													className="w-full h-16 object-cover"
												/>
											</div>
											<div className="w-1/3 rounded-md overflow-hidden shadow-sm">
												<Image
													src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=300&auto=format"
													alt="Disney castle"
													width={100}
													height={75}
													className="w-full h-16 object-cover"
												/>
											</div>
											<div className="w-1/3 rounded-md overflow-hidden shadow-sm">
												<Image
													src="https://images.unsplash.com/photo-1569288063643-5d29ad6a7059?q=80&w=300&auto=format"
													alt="Italy street view"
													width={100}
													height={75}
													className="w-full h-16 object-cover"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Conversion Benchmark Report Section */}
			<section className="py-20 bg-indigo-50 relative overflow-hidden">
				{/* Blob decorations */}
				<div className="absolute -left-40 -bottom-40 w-96 h-96 bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-400 rounded-full opacity-50 blur-3xl" />
				<div className="absolute right-20 top-20 w-40 h-40 bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-400 rounded-full opacity-30 blur-xl" />
				<div className="absolute right-80 bottom-40 w-80 h-80 bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-400 rounded-full opacity-40 blur-2xl" />

				<div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						{/* Left Column - Circular Badge */}
						<div className="flex justify-center md:justify-end">
							<div className="relative w-64 h-64 md:w-80 md:h-80">
								<div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center p-1">
									<div className="w-full h-full rounded-full bg-white flex items-center justify-center p-6">
										<div className="text-center">
											<div className="text-xs md:text-sm font-semibold tracking-widest text-indigo-600 mb-1">
												CONVERSION RATE
											</div>
											<div className="flex justify-center mb-1">
												<svg
													viewBox="0 0 24 24"
													width="24"
													height="24"
													className="text-indigo-600"
													aria-label="Star symbol for conversion optimization"
												>
													<title>Conversion Rate Optimization Star Icon</title>
													<path
														fill="currentColor"
														d="M12 2L14.85 8.4L22 9.24L17 14.12L18.18 21.26L12 17.77L5.82 21.26L7 14.12L2 9.24L9.15 8.4L12 2Z"
													/>
												</svg>
											</div>
											<div className="text-xs md:text-sm font-semibold tracking-widest text-indigo-600">
												OPTIMIZATION
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column - Text Content */}
						<div className="space-y-6">
							<h2 className="text-4xl md:text-5xl font-bold text-gray-800">
								Conversion
								<br />
								Benchmark Report
							</h2>
							<p className="text-lg text-gray-600">
								Use insights from 57M+ conversions to maximize your own landing
								page results.
							</p>
							<a
								href="/benchmark-report"
								className="inline-flex items-center text-gray-800 font-medium group"
							>
								<span>Get the report</span>
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
