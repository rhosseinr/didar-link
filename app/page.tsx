import { Products } from "@/components/Products";
import { MainContent } from "@/components/MainContent";
import { Introduction } from "@/components/Introduction";
import { Target } from "@/components/Target";
import { ContactUs } from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <MainContent />
      <Introduction />
      <Target />
      <Products />
      <ContactUs />
      <div className="svg-bg-1"></div>
      <div className="svg-bg-2"></div>
      <div className="svg-bg-3"></div>
      <div className="svg-bg-4"></div>
    </>
  );
}
