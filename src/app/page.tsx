import BlogList from "@/components/blog/BlogList";
import HomePage from "@/components/homePage/HomePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
         <HomePage/>
      </div>    
    </main>
  )
}
