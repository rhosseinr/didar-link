"use client";

import SectionTemplate from "./SectionTemplate";
import ImageContainer from "./ImageWrapper";

export const Target = () => {
  return (
    <SectionTemplate title="اهداف دیدار لینک" color="level2">
      <ImageContainer
        src="/images/target.png"
        alt="logo"
        width={256}
        height={256}
        className="mx-auto h-64 w-64"
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
        <h2 className="mx-auto text-orange-800 border border-orange-800 dark:text-orange-500 dark:border-orange-500 rounded-full px-4 py-1">
          حلقه این ارتباط گم نمی‌شود؛ بزرگتر می‌شود
        </h2>
      </div>
    </SectionTemplate>
  );
};
