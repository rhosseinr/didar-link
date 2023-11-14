"use client";

import Image from "next/image";
import SectionTemplate from "./SectionTemplate";
import myLoader from "@/config/Loader";

export const Introduction = () => {
  return (
    <SectionTemplate title="معرفی" color="level1">
      <div className="flex flex-col gap-4">
        <p>
          در بهار سال 1395 جمعی از دوستان و هم دانشگاهیان خوش ذوق و تشنه کسب و
          کارهای نو در کافی شاپ یکی از هتل های شهر اصفهان دور یک میز جمع شدند تا
          ایده های خلاقانه خودشون رو در جمعی امن به اشتراک بذارن. اون دیدار
          طولانی بیشتر از اون چیزی که فکرشو می‌کردن ادامه پیدا کرد و تا سه هفته
          متوالی تکرار شد. در نهایت سه نفر از این دوستان حلقه ارتباطی عمیق تر در
          تخصص و علاقه خود به همکاری یافتند و گروه نرم‌افزاری دیدار‌لینک را
          بصورت رسمی تشکیل دادند. با عضویت چهارمین نفر در این گروه اولین پروژه
          تیم در حوزه خدمات پزشکی با همکاری بیمارستان سعدی اصفهان کلید خورد و
          مسیر پیش روی دیدار‌لینک روشنتر از گذشته نمایان شد تا با انگیزه ای بیش
          از پیش راه خودش رو ادامه بده.
        </p>
        <h2 className="mx-auto text-orange-800 border border-orange-800 dark:text-orange-500 dark:border-orange-500 rounded-full px-4 py-1">
          We code ideas, You business them
        </h2>
      </div>
      <Image
        src="/images/info.png"
        alt="logo"
        width={256}
        loader={myLoader}
        height={256}
        className="mx-auto h-64 w-64"
      />
    </SectionTemplate>
  );
};
