import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white w-full">
      {/* ScrollyCanvas owns its 500vh scroll container; Overlay sits inside its sticky viewport */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>

      {/* Experience section */}
      <div className="relative z-20">
        <Experience />
      </div>

      {/* Projects grid */}
      <div className="relative z-20 bg-[#121212]">
        <Projects />
      </div>
    </main>
  );
}

