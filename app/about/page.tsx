import { Code } from "lucide-react";

const AboutPage = () => {
    return (
        <div className="p-6">
            <div className="flex items-center gap-x-3 mb-8">
                <div className={"p-2 w-fit rounded-md bg-violet-500/10"}>
                    <Code className={"w-10 h-10 text-violet-500"} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">About this Project</h2>
                    <p className="text-sm text-muted-foreground">created by Nikhil...</p>
                </div>
            </div>

            <div className="min-h-screen bg-gray-100">
                <div className="container mx-auto p-8">
                    <p className="text-gray-700 text-lg mb-4">
                        Welcome to{" "}
                        <span className="font-bold text-purple-500">SwiftBoard</span> –
                        Agile Project Management Platform
                    </p>
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Overview</h2>
                        <p>
                            SwiftBoard is a robust project management platform designed to
                            empower teams in their agile workflows. Built on Next.js 14,
                            React, Prisma, Tailwind, and MongoDb, SwiftBoard offers an array
                            of features for efficient task and project management. From user
                            authentication to board creation and activity logs, SwiftBoard
                            provides a comprehensive solution for seamless organization and
                            collaboration.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                        <ul className="list-disc pl-4">
                            <li>User authentication system for secure access.</li>
                            <li>
                                Create and manage multiple organizations or workspaces for
                                distinct project environments.
                            </li>
                            <li>Create boards effortlessly to initiate project workflows.</li>
                            <li>
                                Randomly select beautiful cover images using the Unsplash API.
                            </li>
                            <li>
                                Track and monitor organizational activities with a comprehensive
                                activity log.
                            </li>
                            <li>Rename or delete boards as needed.</li>
                            <li>Create, rename, delete, and reorder lists within boards.</li>
                            <li>
                                Enable drag & drop functionality for seamless list reordering.
                            </li>
                            <li>Copy lists for quick replication.</li>
                            <li>Create cards for detailed task management.</li>
                            <li>Add card descriptions for comprehensive information.</li>
                            <li>Rename, delete, and reorder cards within lists.</li>
                            <li>
                                Enable drag & drop functionality for flexible card reordering.
                            </li>
                            <li>Copy cards efficiently for quick replication.</li>
                            <li>
                                Keep track of card-specific activities with a dedicated activity
                                log.
                            </li>
                            <li>
                                Set board limits for each organization to maintain project
                                scalability.
                            </li>
                            <li>
                                Showcase SwiftBoard&apos;s features and benefits with a visually
                                appealing landing page.
                            </li>
                            <li>Utilize MongoDb for efficient data storage.</li>
                            <li>
                                Leverage Prisma as the ORM (Object-Relational Mapping) tool for
                                seamless database interaction.
                            </li>
                            <li>
                                Enjoy a visually appealing and responsive user interface crafted
                                with shadcnUI and TailwindCSS.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutPage;


