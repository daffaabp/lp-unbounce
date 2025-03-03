import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Launch() {
	// Membuat array dengan ID unik untuk dots pagination
	const paginationDots = [
		{ id: "dot-1" },
		{ id: "dot-2" },
		{ id: "dot-3" },
		{ id: "dot-4" },
		{ id: "dot-5" },
		{ id: "dot-6" },
		{ id: "dot-7" },
	];

	return (
		<section className="py-16 bg-white">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Launch tailored pages in a few clicks
					</h2>
					<p className="max-w-3xl mx-auto text-gray-600">
						Unbounce&apos;s drag-and-drop editor has everything you need to
						build and personalize high-converting landing pages quickly and
						easily, with the flexibility to customize to your heart&apos;s
						content.
					</p>
				</div>

				{/* Builder Preview */}
				<div className="relative mb-20">
					<div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
						<Plus className="w-8 h-8 text-blue-600" />
					</div>
					<div className="absolute -right-6 top-1/4 transform -translate-y-1/2">
						<Plus className="w-8 h-8 text-blue-600" />
					</div>
					<div className="mx-auto relative max-w-4xl shadow-2xl rounded-lg overflow-hidden">
						<div className="bg-gray-800 text-white p-2 flex items-center">
							<div className="bg-white rounded-full w-6 h-6 flex items-center justify-center mr-4">
								<span className="text-gray-800 font-bold text-xs">U</span>
							</div>
							<div className="flex space-x-2 border-r border-gray-700 pr-4">
								<div className="px-4 py-1 text-sm bg-gray-700 rounded">
									Overview
								</div>
								<div className="px-4 py-1 text-sm bg-gray-900 rounded">
									Variant A
								</div>
							</div>
							<div className="flex-grow" />
							<div className="flex space-x-2">
								<button
									type="button"
									className="bg-blue-600 text-white px-4 py-1 text-sm rounded"
								>
									Save
								</button>
								<button
									type="button"
									className="bg-gray-700 text-white px-4 py-1 text-sm rounded"
								>
									Preview
								</button>
							</div>
						</div>
						<div className="flex">
							<div className="bg-gray-800 text-white p-2 flex flex-col items-center space-y-6 w-14">
								<span className="text-xs">Contents</span>
								<div className="rounded bg-gray-700 p-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>Section tool</title>
										<rect
											x="3"
											y="3"
											width="18"
											height="18"
											rx="2"
											stroke="white"
											strokeWidth="2"
										/>
									</svg>
								</div>
								<div className="rounded bg-gray-700 p-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>Box tool</title>
										<rect
											x="5"
											y="5"
											width="14"
											height="14"
											rx="1"
											stroke="white"
											strokeWidth="2"
										/>
									</svg>
								</div>
								<div className="rounded bg-gray-700 p-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>Text tool</title>
										<path
											d="M4 6h16M4 12h16M4 18h10"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</div>
								<div className="rounded bg-green-500 p-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>Image tool</title>
										<rect
											x="3"
											y="3"
											width="18"
											height="18"
											rx="2"
											stroke="white"
											strokeWidth="2"
										/>
										<circle cx="8.5" cy="8.5" r="1.5" fill="white" />
										<path
											d="M21 15L16 10L5 21"
											stroke="white"
											strokeWidth="2"
										/>
									</svg>
								</div>
								<div className="rounded bg-gray-700 p-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>Form tool</title>
										<rect
											x="3"
											y="3"
											width="18"
											height="18"
											rx="2"
											stroke="white"
											strokeWidth="2"
										/>
										<path
											d="M7 7h10M7 12h10M7 17h4"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</div>
								<div className="rounded bg-gray-700 p-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>Button tool</title>
										<rect
											x="3"
											y="8"
											width="18"
											height="8"
											rx="2"
											stroke="white"
											strokeWidth="2"
										/>
									</svg>
								</div>
								<div className="rounded bg-gray-700 p-1">
									<svg
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>Code tool</title>
										<path
											d="M16 18L22 12L16 6M8 6L2 12L8 18"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</div>
							<div className="flex-grow bg-gradient-to-br from-yellow-200 to-pink-200 p-8">
								<div className="flex items-center mb-8">
									<div className="bg-pink-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-2">
										S
									</div>
									<span className="text-gray-800 font-bold">Simplify</span>
								</div>
								<h1 className="text-4xl font-bold text-gray-800 mb-2">
									How to get
								</h1>
								<h1 className="text-4xl font-bold text-gray-800 mb-2">
									started with
								</h1>
								<h1 className="text-4xl font-bold text-gray-800 mb-8">
									Simplify
								</h1>

								<div className="mb-8">
									<button
										type="button"
										className="bg-white rounded-full py-2 px-6 text-gray-800 font-medium shadow-md border border-gray-200"
									>
										Register for webinar
									</button>
								</div>

								<div className="absolute right-32 top-1/2 transform -translate-y-8">
									<div className="relative w-48 h-48 rounded-diamond overflow-hidden border-4 border-white shadow-lg">
										<Image
											src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2488&auto=format&fit=crop"
											alt="Woman working on laptop"
											layout="fill"
											objectFit="cover"
											className="rounded-diamond"
										/>
									</div>
									<div className="absolute -top-12 -right-8 w-12 h-12 transform rotate-45 bg-pink-300 rounded-lg" />
									<div className="absolute -bottom-4 -left-4 w-12 h-12 transform rotate-45 bg-white rounded-lg border border-gray-200" />
								</div>
							</div>
							<div className="bg-white p-2 border-l border-gray-200 w-10 flex flex-col items-center justify-start gap-4">
								<div className="pt-4">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>Layout menu</title>
										<path
											d="M4 6h16M4 12h16M4 18h16"
											stroke="#374151"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</div>
								<div className="mt-12">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>Add element</title>
										<circle
											cx="12"
											cy="12"
											r="10"
											stroke="#2563EB"
											strokeWidth="2"
										/>
										<path
											d="M12 8v8M8 12h8"
											stroke="#2563EB"
											strokeWidth="2"
											strokeLinecap="round"
										/>
									</svg>
								</div>
							</div>
						</div>
						<div className="bg-white py-2 flex justify-center space-x-1">
							{paginationDots.map((dot) => (
								<div
									key={dot.id}
									className="w-1 h-1 rounded-full bg-gray-400"
								/>
							))}
						</div>
					</div>
				</div>

				{/* Three Column Features */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Column 1 */}
					<div className="border-l-4 border-pink-400 pl-6">
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Create pages without building from scratch
						</h3>
						<p className="text-gray-600">
							Get the boost you need to build pages in record time with
							Unbounce&apos;s drag-and-drop builder and customizable,
							conversion-optimized templates.
						</p>
					</div>

					{/* Column 2 */}
					<div className="border-l-4 border-green-400 pl-6">
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Give customers what they&apos;re looking for
						</h3>
						<p className="text-gray-600">
							Use dynamic text replacement to better engage and convert visitors
							by aligning your landing page with the keywords your customers are
							searching for.
						</p>
					</div>

					{/* Column 3 */}
					<div className="border-l-4 border-yellow-400 pl-6">
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Customize your pages to match your vision
						</h3>
						<p className="text-gray-600">
							Custom code gives you the flexibility and control you need to
							match your brand standards and create the right look and feel for
							every campaign.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
