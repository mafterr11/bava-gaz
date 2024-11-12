import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative mt-[9.6rem] h-screen w-screen bg-hero bg-cover bg-center bg-no-repeat">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-[#0D0C0BA6]" />
      {/* Hero container */}
      <div className="flex pt-40 flex-col items-center justify-center xl:flex-row xl:justify-evenly xl:px-20 2xl:px-0">
        <div className="relative z-30 text-center font-nunitoSans">
          <h3 className="mb-3 font-semibold text-orange">Bava Gaz Construct</h3>
          <h1 className="mb-6 px-2 md:max-xl:px-7 xl:max-w-3xl">
            Instalații Gaz, Electrice, Sanitare, Automatizări, Consultanță,
            Proiectare
          </h1>
          <Link href="">
            <Button>
              <span>+40.755.313.662</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
