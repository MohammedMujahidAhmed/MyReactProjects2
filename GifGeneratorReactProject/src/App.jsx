import { RandomGifs } from "./components/RandomGifs";
import { TagsGifs } from "./components/TagsGifs";

export default function App() {
  
  return (
    <div className="flex flex-col items-center min-h-screen background w-screen">
      <div className="bg-white w-[95%] text-center m-3 rounded-md font-bold text-xl p-2">RANDOM GIFS</div>
      <RandomGifs/>
      <TagsGifs/>
    </div>
  );
}
