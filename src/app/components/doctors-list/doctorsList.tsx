// components/DoctorList.tsx
import { doctors } from "@/app/search/models/doctors";
import Image from "next/image";
import styles from "./doctorsList.module.css";
import { useFilter } from "@/app/components/filter/FilterContext";
import Link from "next/link";

const DoctorList = () => {
  const { selectedGender, selectedSpecialty } = useFilter();

  const filteredDoctors = doctors.filter((doctor) => {
    const genderMatch = !selectedGender || doctor.gender === selectedGender;
    const specialtyMatch =
      !selectedSpecialty || doctor.specialty.includes(selectedSpecialty);
    return genderMatch && specialtyMatch;
  });

  return (
    <div className={styles.container}>
      {filteredDoctors.map((doctor) => (
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
              <Link href={`/doctor/${doctor.id}`}>نوبت آنلاین</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
