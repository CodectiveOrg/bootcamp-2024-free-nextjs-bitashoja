// components/DoctorList.tsx
import { doctors } from "@/app/search/models/doctors";
import Image from "next/image";
import styles from "./doctersList.module.css"; // وارد کردن استایل‌ها

const DoctorList = () => {
  return (
    <div className={styles.container}>
      {doctors.map((doctor) => (
        <div className={styles.doctorbox} key={doctor.id}>
          <div className={styles.doctorimage}>
            <Image
              width={150}
              height={150}
              src={`https://cdn.paziresh24.com${doctor.image}`}
              alt={doctor.name}
            />
            <div className={styles.doctortitle}>
              <h3>{doctor.name}</h3>
              <p>{doctor.brief}</p>
              <p>
                ⭐ {doctor.averageRating.toFixed(1)} | {doctor.totalVotes} رای
              </p>
            </div>
          </div>
          <div className={styles.doctorinfo}>
            <p>{doctor.address}</p>
            <div className={styles.doctorbuttons}>
              <button>نوبت آنلاین</button>
              <button>نوبت‌دهی اینترنتی</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
