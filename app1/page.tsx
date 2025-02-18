import Hello from "./components/hello";

console.log("im Server component")
export default function Home() {
  return (
    <>
   <h1 className="text-3xl text-center">Welcome to Nextjs!</h1>
   <Hello />
    </>
  );
}
