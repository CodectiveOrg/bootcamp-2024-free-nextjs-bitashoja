import React from "react";
import { doctors } from "@/app/search/models/doctors";
import { notFound } from "next/navigation";
import { DoctorModel } from "@/app/search/models/doctor.model";
import Image from "next/image";
import styles from "./doctorPage.module.css";
import SurveyForm from "@/app/components/survey-form/surveyForm";

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
        <div className={styles.personals}>
          <div className={styles.personal}>
            <Image
              width={50}
              height={50}
              src={`https://cdn.paziresh24.com${doctor.image}`}
              alt={doctor.name}
              className={styles.image}
            />
            <div>
              <h3>{doctor.name}</h3>
              <p>{doctor.brief}</p>
            </div>
          </div>
          <div className={styles.rating}>
            <span>⭐ {doctor.averageRating.toFixed(1)}</span>
            <span>({doctor.totalVotes} رای)</span>
          </div>
        </div>
        <div className={styles.details}>
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
        <div className={styles.comments}>
          <h4>نظرات در مورد {doctor.name}</h4>
          <SurveyForm />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.visits}>
          <div className={styles.visit}>
            <ul>
              <li>همین الان ویزیت آنلاین شوید</li>
            </ul>
            <h4>مبلغ ویزیت: 200,000 تومان</h4>
          </div>
          <hr />
          <div>
            <div className={styles.onlineVisit}>
              <span>ویزیت آنلاین در پیام رسان:</span>
              <div>
                <MingcuteTelegramFill />
                <MingcuteWhatsappFill />
              </div>
            </div>

            <p>تضمین بازپرداخت مبلغ ویزیت در صورت نارضایتی</p>
            <p>امکان برقراری تماس با پزشک وجود دارد</p>
            <p>تا سه روز میتوانید هر سوالی دارید از پزشک بپرسید</p>
            <button>شروع ویزیت با {doctor.name}</button>
          </div>
        </div>
        <div className={styles.contact}>
          <h4>نوبت‌دهی اینترنتی</h4>
          <p>برای دریافت نوبت اینترنتی، روی دکمه زیر کلیک کنید.</p>
          <button>دریافت نوبت</button>
        </div>
        <div className={styles.address}>
          <h4>آدرس و شماره تلفن</h4>
          <div className={styles.addressButton}>
            <div>{doctor.address}</div>
            <button>برنامه کاری پزشک</button>
            <button>شماره تلفن: 021-12345678</button>
            <button>مشاهده از روی نقشه و مسیریابی</button>
          </div>
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
