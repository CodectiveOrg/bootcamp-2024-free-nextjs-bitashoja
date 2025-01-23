import React from "react";
import { doctors } from "@/app/search/models/doctors";
import { notFound } from "next/navigation";
import { DoctorModel } from "@/app/search/models/doctor.model";
import Image from "next/image";
import styles from "./doctorPage.module.css";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteWhatsappFill from "@/icons/MingcuteWhatsappFill";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props): Promise<JSX.Element> {
  const doctor = await getDoctor(params.id);

  /* doctors.find((x) => x.id === params.id);*/

  if (!doctor) {
    return notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          width={50}
          height={50}
          src={`https://cdn.paziresh24.com${doctor.image}`}
          alt={doctor.name}
          className={styles.image}
        />
        <div className={styles.details}>
          <h3>{doctor.name}</h3>
          <p>{doctor.brief}</p>
          <div className={styles.rating}>
            <span>⭐ {doctor.averageRating.toFixed(1)}</span>
            <span>({doctor.totalVotes} رای)</span>
          </div>
          <div>
            پذیرش24 بیش از 3 سال و 2 ماه افتخار میزبانی از صفحه اختصاصی{" "}
            {doctor.name} را داشته است.
          </div>
          <p>
            این اطلاعات با هدف تسهیل در یافتن اعضای جامعه پزشکی و در راستای
            اجرای قانون انتشار و دسترسی آزاد به اطلاعات مصوب مجلس شورای اسلامی
            ارائه شده است.
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <p>مبلغ ویزیت: 200,000 تومان</p>
        <div>
          <MingcuteTelegramFill />
          <MingcuteWhatsappFill />
        </div>
        <div className={styles.contact}>
          <h2>نوبت‌دهی اینترنتی</h2>
          <p>برای دریافت نوبت اینترنتی، روی دکمه زیر کلیک کنید.</p>
          <button>دریافت نوبت</button>
        </div>
        <div className={styles.address}>
          <h2>آدرس و شماره تلفن</h2>
          <button>{doctor.address}</button>
          <button>شماره تلفن: 021-12345678</button>
        </div>
      </div>
    </div>
  );
}

async function getDoctor(id: string): Promise<DoctorModel | undefined> {
  return new Promise((resolve) => {
    setTimeout((): void => {
      const result = doctors.find((x) => x.id === id);
      resolve(result);
    }, 1000);
  });
}
