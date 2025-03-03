import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Convert() {
	// Membuat array untuk titik menu dengan id yang unik
	const menuDots = [{ id: "dot-1" }, { id: "dot-2" }, { id: "dot-3" }];

	return (
		<section className="py-16 bg-gray-50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Heading & Subheading */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Convert more customers with one platform
					</h2>
					<p className="max-w-3xl mx-auto text-gray-600">
						With Unbounce&apos;s no-code, AI-powered tools at your fingertips,
						you can launch, A/B test, and optimize landing pages on your own, in
						a single platform.
					</p>
				</div>

				{/* Feature Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Card 1 */}
					<div className="bg-white rounded-lg overflow-hidden shadow-sm">
						<div className="h-64 relative bg-pink-100">
							<Image
								src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000"
								alt="Drag and drop website builder interface"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-pink-200 bg-opacity-50">
								<div className="relative h-full flex items-center justify-center">
									<div className="bg-white rounded-lg w-3/4 h-3/5 shadow-lg overflow-hidden border border-gray-200 flex flex-col">
										<div className="bg-gray-800 p-2 flex items-center gap-1">
											<div className="w-2 h-2 rounded-full bg-red-500" />
											<div className="w-2 h-2 rounded-full bg-yellow-500" />
											<div className="w-2 h-2 rounded-full bg-green-500" />
											<div className="flex-grow" />
											<div className="flex space-x-1">
												{menuDots.map((dot) => (
													<div
														key={dot.id}
														className="w-1 h-1 rounded-full bg-gray-400"
													/>
												))}
											</div>
										</div>
										<div className="flex-grow p-2 flex">
											<div className="w-1/2 h-full flex flex-col justify-center p-2">
												<div className="text-lg font-bold">Join our</div>
												<div className="text-lg font-bold">webinar</div>
											</div>
											<div className="w-1/2 h-full bg-gray-100 relative">
												<Image
													src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000"
													alt="People in a meeting"
													fill
													className="object-cover"
												/>
												<div className="absolute inset-0 border-2 border-dashed border-blue-400 m-2" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="p-6 bg-gray-50">
							<h3 className="text-xl font-bold text-gray-800 mb-2">
								Launch landing pages faster, accelerate results
							</h3>
							<p className="text-gray-600 mb-6">
								Every marketer can effortlessly create personalized,
								high-converting campaigns in record time—no designers or
								developers needed.
							</p>
							<Link
								href="#"
								className="flex items-center text-gray-800 font-medium hover:text-blue-600 transition-colors group"
							>
								Create your page{" "}
								<ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Link>
						</div>
					</div>

					{/* Card 2 */}
					<div className="bg-white rounded-lg overflow-hidden shadow-sm">
						<div className="h-64 relative bg-green-100">
							<Image
								src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
								alt="A/B testing visualization"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-green-200 bg-opacity-50">
								<div className="relative h-full flex items-center justify-center">
									<div className="absolute top-10 left-10">
										<div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-lg font-bold">
											A
										</div>
									</div>
									<div className="absolute top-8 right-12">
										<div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-lg font-bold">
											B
										</div>
									</div>
									<div className="bg-white rounded-lg w-3/4 h-1/2 shadow-lg flex flex-col justify-between p-4">
										<div className="flex items-center space-x-2">
											<div className="w-2 h-2 rounded-full bg-gray-300" />
											<div className="w-16 h-2 bg-gray-300 rounded" />
										</div>
										<div className="flex items-center space-x-2">
											<div className="w-2 h-2 rounded-full bg-gray-300" />
											<div className="w-20 h-2 bg-gray-300 rounded" />
										</div>
										<div className="flex items-center space-x-2">
											<div className="w-2 h-2 rounded-full bg-blue-500" />
											<div className="w-24 h-2 bg-blue-500 rounded" />
										</div>
										<div className="flex items-center space-x-2">
											<div className="w-2 h-2 rounded-full bg-gray-300" />
											<div className="w-16 h-2 bg-gray-300 rounded" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="p-6 bg-gray-50">
							<h3 className="text-xl font-bold text-gray-800 mb-2">
								Own your experiments, maximize conversions
							</h3>
							<p className="text-gray-600 mb-6">
								Quickly create new landing page variants, launch A/B tests with
								one click, and optimize with AI-powered insights, all in one
								place.
							</p>
							<Link
								href="#"
								className="flex items-center text-gray-800 font-medium hover:text-blue-600 transition-colors group"
							>
								Start A/B testing{" "}
								<ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Link>
						</div>
					</div>

					{/* Card 3 */}
					<div className="bg-white rounded-lg overflow-hidden shadow-sm">
						<div className="h-64 relative bg-yellow-100">
							<Image
								src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=1000"
								alt="Marketing analytics visualization"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 bg-yellow-200 bg-opacity-50">
								<div className="relative h-full flex items-center justify-center">
									<div className="absolute top-4 right-6 transform rotate-12">
										<div className="w-12 h-8 bg-teal-300 rounded-lg" />
									</div>
									<div className="absolute top-8 left-6 transform -rotate-6">
										<div className="w-24 h-12 bg-pink-300 rounded-lg flex items-center justify-center p-1">
											<div className="w-full h-full bg-white rounded border border-dashed border-gray-400" />
										</div>
									</div>
									<div className="absolute bottom-6 right-10">
										<div className="w-10 h-10 rounded-full overflow-hidden">
											<Image
												src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000"
												alt="Profile"
												width={40}
												height={40}
												className="object-cover"
											/>
										</div>
									</div>
									<div className="absolute bottom-12 left-12">
										<div className="w-10 h-10 rounded-full overflow-hidden">
											<Image
												src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000"
												alt="Profile"
												width={40}
												height={40}
												className="object-cover"
											/>
										</div>
									</div>
									<div className="absolute top-20 right-16">
										<div className="bg-white rounded-lg border border-dashed border-blue-500 p-2 flex items-center gap-2">
											<div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
												+
											</div>
											<span className="text-sm font-medium text-blue-700">
												Add variant
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="p-6 bg-gray-50">
							<h3 className="text-xl font-bold text-gray-800 mb-2">
								Simplify CRO, get the most out of your marketing
							</h3>
							<p className="text-gray-600 mb-6">
								Stay ahead of the competition by using AI optimization to
								automatically send visitors to the page where they&apos;re most
								likely to convert.
							</p>
							<Link
								href="#"
								className="flex items-center text-gray-800 font-medium hover:text-blue-600 transition-colors group"
							>
								Optimize effortlessly{" "}
								<ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
