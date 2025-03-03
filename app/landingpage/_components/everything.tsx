import { Trophy } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Everything() {
	return (
		<section className="py-16 bg-gray-50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Everything you need to A/B test in one place
					</h2>
					<p className="max-w-3xl mx-auto text-gray-600">
						Use no-code tools to quickly build page variants, launch A/B tests,
						and get clear results that help you drive more conversions with a
						single platform.
					</p>
				</div>

				{/* Main Content */}
				<div className="flex flex-col lg:flex-row items-start gap-8">
					{/* Left side: 3 text boxes */}
					<div className="w-full lg:w-2/5 space-y-12">
						{/* Box 1 */}
						<div className="space-y-3">
							<h3 className="text-2xl font-bold text-gray-800">
								No developer, no problem
							</h3>
							<p className="text-gray-600">
								With built-in A/B testing, you can quickly build new variants,
								launch tests, and analyze results with a few clicks and without
								asking for help.
							</p>
						</div>

						{/* Box 2 */}
						<div className="space-y-3">
							<h3 className="text-2xl font-bold text-gray-800">
								Experiment limitlessly
							</h3>
							<p className="text-gray-600">
								Create unlimited page variants to test everything from headlines
								and images to calls to action so you never miss an opportunity
								to optimize.
							</p>
						</div>

						{/* Box 3 */}
						<div className="space-y-3">
							<h3 className="text-2xl font-bold text-gray-800">
								Test with confidence
							</h3>
							<p className="text-gray-600">
								Optimize on the fly by using confidence intervals and real-time
								reporting to clearly identify winning variants so you can make
								data-backed decisions.
							</p>
						</div>
					</div>

					{/* Right side: Illustration */}
					<div className="w-full lg:w-3/5 relative">
						<div className="relative h-[500px]">
							{/* Yellow card (Variant A) */}
							<div className="absolute left-0 top-0 z-10 w-[70%] h-[45%] bg-yellow-300 rounded-xl overflow-hidden">
								<div className="absolute top-6 left-6">
									<div className="h-4 w-20 bg-white rounded opacity-80 mb-2" />
									<div className="h-4 w-28 bg-white rounded opacity-80" />
								</div>
								<div className="absolute top-6 right-8 h-16 w-16 bg-orange-300 rounded-lg" />
								<div className="absolute bottom-6 left-6 h-6 w-16 bg-pink-200 rounded-full" />
								<div className="absolute right-8 bottom-0 w-[40%] h-[90%] relative">
									<Image
										src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1000&auto=format&fit=crop"
										alt="Sunglasses on yellow background"
										fill
										className="object-contain"
									/>
								</div>
							</div>

							{/* Yellow label */}
							<div className="absolute left-12 top-[45%] z-20 bg-yellow-400 text-yellow-900 px-4 py-2 font-medium rounded-md">
								Variant A
							</div>

							{/* Green card (Variant B) */}
							<div className="absolute right-0 top-[20%] z-20 w-[70%] h-[45%] bg-green-400 rounded-xl overflow-hidden">
								<div className="absolute top-8 left-8">
									<div className="h-5 w-5 bg-white rounded-full mb-2" />
									<div className="h-4 w-32 bg-white rounded opacity-80 mb-2" />
									<div className="h-4 w-24 bg-white rounded opacity-80" />
								</div>
								<div className="absolute bottom-8 left-8 h-6 w-20 bg-white rounded-full" />
								<div className="absolute right-8 top-[10%] w-[40%] h-[80%] relative">
									<Image
										src="https://images.unsplash.com/photo-1604077137850-c6d2e2a44cce?q=80&w=1000&auto=format&fit=crop"
										alt="Person with glasses"
										fill
										className="object-contain"
									/>
								</div>
							</div>

							{/* Green label */}
							<div className="absolute right-12 top-[15%] z-30 bg-green-500 text-white px-4 py-2 font-medium rounded-md">
								Variant B
							</div>

							{/* White background card */}
							<div className="absolute left-[15%] top-[40%] z-0 w-[60%] h-[40%] bg-white rounded-xl shadow-sm overflow-hidden">
								<div className="absolute top-8 left-8 flex space-x-8">
									<div className="h-5 w-5 bg-gray-200 rounded-full" />
									<div className="h-5 w-5 bg-gray-200 rounded-full" />
									<div className="h-5 w-5 bg-gray-200 rounded-full" />
								</div>
								<div className="absolute top-20 left-8">
									<div className="h-3 w-40 bg-gray-200 rounded mb-3" />
									<div className="h-3 w-32 bg-gray-200 rounded" />
								</div>
							</div>

							{/* Trophy */}
							<div className="absolute right-0 bottom-0 z-30">
								<div className="relative w-40 h-40">
									<div className="absolute right-4 bottom-4 w-32 h-32 text-green-400">
										<Trophy
											size={128}
											className="text-green-400 fill-green-300"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
