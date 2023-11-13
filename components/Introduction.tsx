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
          تخصص و علاقه خود به همکاری یافتند و گروه نرم افزاری دیدارلینک را بصورت
          رسمی تشکیل دادند. با عضویت چهارمین نفر در این گروه اولین پروژه تیم در
          حوزه خدمات پزشکی با همکاری بیمارستان سعدی اصفهان کلید خورد و مسیر پیش
          روی دیدار‌لینک روشنتر از گذشته نمایان شد تا با انگیزه ای بیش از پیش
          راه خودش رو ادامه بده.
        </p>
        <h2 className="mx-auto bg-orange-600 text-white rounded-xl px-8 py-2">
          We code ideas, You monetize codes
        </h2>
      </div>
      <Image
        src="/images/info.png"
        alt="logo"
        width={256}
        loader={myLoader}
        height={256}
        className="mx-auto"
      />
    </SectionTemplate>
  );
};
