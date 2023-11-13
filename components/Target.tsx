"use client";

import Image from "next/image";
import SectionTemplate from "./SectionTemplate";
import myLoader from "@/config/Loader";

export const Target = () => {
  return (
    <SectionTemplate title="اهداف دیدار لینک" color="level2">
      <Image
        src="/images/target.png"
        alt="logo"
        width={256}
        loader={myLoader}
        height={256}
        className="mx-auto"
      />
      <div className="flex flex-col gap-4">
        <p>
          گروه نرم افزاری ما سعی می کند با تخصص خود در حوزه علم نرم افزار پلی
          بسازد برای کسب و کارهای مختلف تا ضمن ساده سازی مسیر ارتباط کسب و کارها
          با مشتریان آن‌ها را همواره در دسترس و در رضایت دوجانبه قرار دهد. صرفه
          جویی در وقت و سرمایه و انرژی کاربران محصولات ما و تماشای لبخند رضایت
          آن‌ها هدف اصلی ماست. گروه دیدار‌لینک از تحقق این هدف لذت می برد و روزی
          خود را در رضایت شما جستجو می کند. همچنین ما پذیرای ایده های شما هستیم
          تا با نگاه کارشناسی و مهندسی به تحقق آن‌ها جامه عمل بپوشانیم
        </p>
        <h2 className="mx-auto bg-orange-600 text-white rounded-xl px-8 py-2">
          حلقه این ارتباط گم نمی‌شود؛ بزرگتر می‌شود
        </h2>
      </div>
    </SectionTemplate>
  );
};
