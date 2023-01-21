import Contributors from "../components/Contributors";
import DevRelPillars from "../components/DevRelPillars";
import Jobs from "../components/Jobs";
import MetaHead from "../components/MetaHead";
import Resources from "../components/Resources";
import Summary from "../components/Summary";
import CFP from "../components/CFP"
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <MetaHead />
      <Navbar />
      <Summary />
      <Jobs />
      <Resources />
      <DevRelPillars />
      <Contributors />
      <CFP />
    </>
  );
}
