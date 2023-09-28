import { metadata } from "~/app/layout";

export default function HomePage() {
  return (
    <main className="flex flex-col bg-gray-800 h-screen">
        <div className="h-1/4 w-full"></div>

        <div className="flex h-1/2 w-full flex-row items-center">
            <div className="text-center basis-1/2">
                <h1 className="bg-gradient-to-r from-blue-600 to-green-900 text-transparent bg-clip-text text-9xl">
                    { metadata.title as string }
                </h1>
                <p>{ metadata.description }</p>
            </div>
            <div
                className="inline-block h-full min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
            <div className="text-center basis-1/2">
                <p>something on right</p>
            </div>
        </div>

        <div className="h-1/4 w-full"></div>
    </main>
  );
}
