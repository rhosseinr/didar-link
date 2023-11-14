"use client";

import Image from "next/image";
import SectionTemplate from "./SectionTemplate";
import myLoader from "@/config/Loader";

const people = [
  {
    name: "محمد صدر",
    role: "برنامه‌نویس اندروید - iOS",
    imageUrl: "/images/team/mohammad.jpg",
  },
  {
    name: "الهام نصیری",
    role: "برنامه‌نویس فرانت",
    imageUrl: "/images/team/elham.jpg",
  },
  {
    name: "احسان حیدریان",
    role: "برنامه‌نویس پایتون - django",
    imageUrl: "/images/team/ehsan.jpg",
  },
  {
    name: "حسین رحیمی",
    role: "برنامه‌نویس وب",
    imageUrl: "/images/team/hossein.jpg",
  },
  {
    name: "منصور فیروزه",
    role: "گرافیک - وب",
    imageUrl: "/images/team/mansor.jpg",
  },
  {
    name: "سعید گلستانفر",
    role: "برنامه‌نویس بک‌اند",
    imageUrl: "/images/team/saeid.jpg",
  },
  {
    name: "نیلوفر نیلی‌پور",
    role: "عکاس و تولید محتوا",
    imageUrl: "/images/team/nilofar.jpg",
  },
  {
    name: "مهشید خواجویی",
    role: "فروش و مارکتینگ",
    imageUrl: "/images/team/mahshid.jpg",
  },
  {
    name: "جای شما در تیم ما خالی است",
    role: "تماس بگیرید",
    imageUrl: "/images/team/new.jpg",
  },
];

const Teams = () => {
  return (
    <SectionTemplate color="level4" title="تیم دیدار‌لینک">
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {people.map((person) => (
          <li key={person.name}>
            <div className="md:h-32 h-48 shadow-sm hover:shadow-md flex-col md:flex-row bg-neutral-200/50 dark:bg-neutral-950/50 rounded-xl p-4 flex items-center gap-4">
              <Image
                className="h-16 w-16 object-cover rounded-full shadow-sm"
                src={person.imageUrl}
                alt="avatar"
                width={64}
                height={64}
                loader={myLoader}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-100">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold leading-6 text-orange-600">
                  {person.role}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SectionTemplate>
  );
};

export default Teams;
