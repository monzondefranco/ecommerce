import Hero from "@/app/components/Hero"
import ProductSection from "@/app/components/Product/ProductSection";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense>
      <Hero />
      <ProductSection />
    </Suspense>
  );
}
