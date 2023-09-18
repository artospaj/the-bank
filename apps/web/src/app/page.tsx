import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-1 flex-col items-center justify-center bg-gradient-to-b from-gray-500 to-gray-800 md:flex-row ">
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-8xl font-extrabold text-transparent">
          Bank Brew
        </h1>

        <h2 className="bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-2xl font-extrabold text-transparent">
          Today, tomorrow in the future
        </h2>
      </div>

      <div className="flex flex-1 items-center justify-center border-gray-400 md:border-l-2">
        <UserButton
          showName
          appearance={{
            elements: {
              avatarBox: "h-20 w-20",
              userButtonBox: "flex flex-col-reverse ",
              userButtonOuterIdentifier: "text-2xl text-gray-300",
            },
          }}
        />
      </div>
    </main>
  );
}
