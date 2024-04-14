import Hero from "@/components/Hero"
import ProductSection from "@/components/Product/ProductSection";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense>
      <Hero />
      <ProductSection />
    </Suspense>
  );
}
