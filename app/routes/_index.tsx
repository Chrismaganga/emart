import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-cyan-900 h-screen"> 
      <h1 className="text-3xl font-bold underline">
    codelovers!
  </h1>
  </div>
      
  );
}
