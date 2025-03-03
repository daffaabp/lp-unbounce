import Image from "next/image";
import React from "react";

// Define integration platform logos
const integrations = [
	{
		name: "Google Analytics",
		logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg",
		width: 50,
		height: 50,
	},
	{
		name: "HubSpot",
		logo: "https://cdn.worldvectorlogo.com/logos/hubspot-2.svg",
		width: 50,
		height: 50,
	},
	{
		name: "Marketo",
		logo: "https://cdn.worldvectorlogo.com/logos/marketo.svg",
		width: 50,
		height: 50,
	},
	{
		name: "Segment",
		logo: "https://cdn.worldvectorlogo.com/logos/segment-1.svg",
		width: 50,
		height: 50,
	},
	{
		name: "Salesforce",
		logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
		width: 50,
		height: 50,
	},
	{
		name: "GitHub",
		logo: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
		width: 50,
		height: 50,
	},
	{
		name: "Zapier",
		logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
		width: 50,
		height: 50,
	},
	{
		name: "Intercom",
		logo: "https://cdn.worldvectorlogo.com/logos/intercom-1.svg",
		width: 50,
		height: 50,
	},
	{
		name: "Slack",
		logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
		width: 50,
		height: 50,
	},
	{
		name: "CallRail",
		logo: "https://cdn.worldvectorlogo.com/logos/callrail.svg",
		width: 85,
		height: 30,
	},
];

export default function Seamlessly() {
	return (
		<section className="py-16 bg-gray-50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
						Seamlessly integrate with your stack
					</h2>
					<p className="max-w-3xl mx-auto text-gray-600">
						Accurate data—where and when you need it. Unbounce landing pages
						connect seamlessly with popular marketing platforms like Salesforce
						and Hubspot—and with Zapier and webhooks, we plug into... well, just
						about anything.
					</p>
				</div>

				{/* Integration Logos */}
				<div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
					{integrations.map((integration) => (
						<div
							key={integration.name}
							className="flex items-center justify-center"
						>
							<div
								className="relative"
								style={{ width: integration.width, height: integration.height }}
							>
								<Image
									src={integration.logo}
									alt={`${integration.name} logo`}
									width={integration.width}
									height={integration.height}
									style={{ objectFit: "contain" }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
