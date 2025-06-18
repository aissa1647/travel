import Home1 from "@/app/cmpntHome/Home1";
import Camp from "@/app/cmpntHome/Camp";
import Guide from "@/app/cmpntHome/Guide";
import Featurs from "@/app/cmpntHome/Featurs";
import Getapp from "@/app/cmpntHome/Getapp";

export default function Home() {
  return (
    <section>
      <div className="w-[90%] mx-auto">
        <Home1 />
        <Camp />
        <Guide />
        <Featurs />
      </div>
      <div>
        <Getapp />
      </div>
    </section>
  );
}
