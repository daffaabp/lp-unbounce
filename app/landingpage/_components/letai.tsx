import { PlusIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function LetAI() {
	return (
		<section className="py-16 bg-white">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
						Let AI and ML do the heavy lifting
					</h2>
					<p className="max-w-3xl mx-auto text-gray-600">
						Simplify your CRO and provide visitors with a better experience by
						using our AI tools and insights powered by over two billion
						conversions.
					</p>
				</div>

				{/* Main content */}
				<div className="grid md:grid-cols-2 gap-8 items-center">
					{/* Left side - Webinar cards display */}
					<div className="relative h-[500px]">
						{/* Main card - blue */}
						<div
							className="absolute z-10 top-0 left-0 bg-blue-100 rounded-lg overflow-hidden shadow-md"
							style={{ width: "70%" }}
						>
							<div className="p-5 bg-blue-500 text-white">
								<h3 className="font-bold">
									Achieve work-life balance with Simplify.
								</h3>
								<p className="text-sm">Oct 16, 22</p>
							</div>
							<div className="p-4 flex flex-col space-y-4">
								<div className="flex items-center space-x-2">
									<Image
										src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format"
										alt="Woman smiling"
										width={80}
										height={80}
										className="rounded-full"
									/>
									<div>
										<h4 className="font-semibold">About this webinar</h4>
										<p className="text-sm text-gray-600">
											Learn how to improve your work-life balance with Simplify
										</p>
									</div>
								</div>
								<button
									type="button"
									className="bg-orange-500 text-white text-center rounded-md py-2 px-4 text-sm font-medium"
								>
									Register for webinar
								</button>
							</div>
						</div>

						{/* Second card - green */}
						<div
							className="absolute z-20 top-[120px] right-0 bg-white rounded-lg overflow-hidden shadow-md"
							style={{ width: "60%" }}
						>
							<div className="p-5 bg-emerald-500 text-white">
								<div className="flex items-center space-x-2 mb-2">
									<div className="h-4 w-4 rounded-full bg-white flex items-center justify-center">
										<span className="text-emerald-500 text-xs font-bold">
											S
										</span>
									</div>
									<span className="text-sm font-medium">Simplify</span>
								</div>
								<h3 className="font-bold">How to get Started with Simplify</h3>
								<p className="text-sm">Oct 24, 23</p>
							</div>
							<div className="p-4">
								<button
									type="button"
									className="bg-emerald-500 text-white text-center rounded-md py-2 px-4 text-sm font-medium w-full"
								>
									Register now
								</button>
							</div>
							<Image
								src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=300&auto=format"
								alt="Man working on laptop"
								width={180}
								height={180}
								className="absolute right-0 bottom-0 rounded-bl-lg"
							/>
						</div>

						{/* Third card - orange/coral */}
						<div
							className="absolute z-30 top-[280px] left-[40px] bg-white rounded-lg overflow-hidden shadow-md"
							style={{ width: "65%" }}
						>
							<div className="p-5 bg-amber-400 text-gray-800">
								<div className="flex items-center space-x-2 mb-2">
									<div className="h-4 w-4 rounded-full bg-white flex items-center justify-center">
										<span className="text-amber-500 text-xs font-bold">S</span>
									</div>
									<span className="text-sm font-medium">Simplify</span>
								</div>
								<h3 className="font-bold">
									How to improve your project management
								</h3>
								<p className="text-sm">Oct 19, 23</p>
							</div>
							<div className="p-4">
								<button
									type="button"
									className="bg-blue-400 text-white text-center rounded-md py-2 px-4 text-sm font-medium w-full"
								>
									Register now
								</button>
							</div>
							<Image
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=300&auto=format"
								alt="Team collaborating"
								width={180}
								height={180}
								className="absolute right-0 bottom-0 rounded-bl-lg"
							/>
						</div>

						{/* Bottom form card */}
						<div
							className="absolute z-30 bottom-0 left-[60px] bg-pink-100 rounded-lg overflow-hidden shadow-md"
							style={{ width: "55%" }}
						>
							<div className="p-3">
								<h4 className="font-semibold text-sm">About this webinar</h4>
								<div className="space-y-2 mt-2">
									<input
										type="text"
										placeholder="Name"
										className="w-full p-2 rounded border border-gray-300 text-sm"
									/>
									<input
										type="email"
										placeholder="Email"
										className="w-full p-2 rounded border border-gray-300 text-sm"
									/>
									<button
										type="button"
										className="bg-blue-400 text-white text-center rounded-md py-2 px-4 text-sm font-medium w-full"
									>
										Register now
									</button>
								</div>
							</div>
						</div>

						{/* Avatar circles */}
						<div className="absolute top-0 left-0 h-10 w-10 rounded-full overflow-hidden border-2 border-white z-40">
							<Image
								src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format"
								alt="Profile 1"
								width={40}
								height={40}
							/>
						</div>
						<div className="absolute bottom-0 right-0 h-16 w-16 rounded-full overflow-hidden border-2 border-white z-40">
							<Image
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format"
								alt="Profile 2"
								width={64}
								height={64}
							/>
						</div>
						<div className="absolute top-[430px] left-[250px] h-14 w-14 rounded-full overflow-hidden border-2 border-white z-40">
							<Image
								src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format"
								alt="Profile 3"
								width={56}
								height={56}
							/>
						</div>
					</div>

					{/* Right side - Benefits */}
					<div className="space-y-12">
						{/* Benefit 1 */}
						<div>
							<div className="flex items-center mb-2">
								<div className="text-blue-500 text-3xl font-bold mr-2">
									+30%
								</div>
								<div className="flex text-green-400">
									<PlusIcon className="h-4 w-4" />
									<PlusIcon className="h-4 w-4 -ml-1" />
									<PlusIcon className="h-4 w-4 -ml-1" />
								</div>
							</div>
							<h3 className="text-2xl font-bold text-gray-800 mb-2">
								Convert more with a few clicks
							</h3>
							<p className="text-gray-600">
								Get more conversions with little to no effort by using AI
								optimization to automatically send visitors to the page where
								they&apos;re most likely to convert.
							</p>
						</div>

						{/* Benefit 2 */}
						<div>
							<h3 className="text-2xl font-bold text-gray-800 mb-2">
								Push for peak performance
							</h3>
							<p className="text-gray-600">
								Stay competitive using our conversion benchmarks, powered by
								machine learning, to see how your page performance stacks up
								against others in your industry.
							</p>
						</div>

						{/* Benefit 3 */}
						<div>
							<h3 className="text-2xl font-bold text-gray-800 mb-2">
								Get audience insights
							</h3>
							<p className="text-gray-600">
								Smart Traffic helps you identify new channel and audience
								opportunities so you don&apos;t waste time wondering how you can
								convert more leads, sales, and signups.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
