"use client";
import { useFilter } from "@/app/components/filter/FilterContext";
import React from "react";
import styles from "./card.module.css";

interface Props {
  onGenderSelect: (gender: string) => void;
  onSpecialtySelect: (specialty: string) => void;
}

export default function CardComponent({
  onGenderSelect,
  onSpecialtySelect,
}: Props) {
  const { setSelectedGender } = useFilter();
  const { setSelectedSpecialty } = useFilter();
  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
    onGenderSelect(gender);
  };
  const handleSpecialtyChange = (specialty: string) => {
    setSelectedSpecialty(specialty);
    onSpecialtySelect(specialty);
  };
  return (
    <div className={styles.card}>
      <div className={styles.title}>جنسیت پزشک</div>
      <ul>
        <li>
          <a onClick={() => handleGenderChange("خانم")}>خانم</a>
        </li>
        <li>
          <a onClick={() => handleGenderChange("آقا")}>آقا</a>
        </li>
      </ul>
      <div>
        <div className={styles.title}>تخصص پزشک</div>
        <ul>
          <li>
            <a onClick={() => handleSpecialtyChange("گفتاردرمانی")}>
              گفتاردرمانی
            </a>
          </li>
          <li>
            <a onClick={() => handleSpecialtyChange("کودکان")}>کودکان</a>
          </li>
          <li>
            <a onClick={() => handleSpecialtyChange("عفونی")}>عفونی</a>
          </li>
          <li>
            <a onClick={() => handleSpecialtyChange("زنان")}>زنان</a>
          </li>
          <li>
            <a onClick={() => handleSpecialtyChange("قلب")}>قلب</a>
          </li>
          <li>
            <a onClick={() => handleSpecialtyChange("تغذیه")}>تغذیه</a>
          </li>
          <li>
            <a onClick={() => handleSpecialtyChange("ارتوپدی")}>ارتوپدی</a>
          </li>
          <li>
            <a onClick={() => handleSpecialtyChange("گوارش")}>گوارش</a>
          </li>
          <li>
            <a onClick={() => handleSpecialtyChange("جراحی عمومی")}>
              جراحی عمومی
            </a>
          </li>
          <li>
            <a onClick={() => handleSpecialtyChange("چشم")}> چشم </a>
          </li>
          <li>
            <a onClick={() => handleSpecialtyChange("طب نوزادی")}>طب نوزادی</a>
          </li>
          {/* سایر تخصص‌ها */}
        </ul>
      </div>
    </div>
  );
}
