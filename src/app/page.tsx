import { AlliedBrands } from "@/components/allied-brands";
import { Hero } from "@/components/hero/";
import { Products } from "@/components/products/";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Products />
      <AlliedBrands />
    </main>
  );
}
