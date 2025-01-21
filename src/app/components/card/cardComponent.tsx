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
  const { setSelectedGender, setSelectedSpecialty } = useFilter();

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
    onGenderSelect(gender);
  };

  const handleSpecialtyChange = (specialty: string) => {
    setSelectedSpecialty(specialty);
    onSpecialtySelect(specialty);
  };

  const genders = ["خانم", "آقا"];
  const specialties = [
    "گفتاردرمانی",
    "کودکان",
    "عفونی",
    "زنان",
    "قلب",
    "تغذیه",
    "ارتوپدی",
    "گوارش",
    "جراحی عمومی",
    "چشم",
    "طب نوزادی",
  ];

  return (
    <div className={styles.card}>
      <div className={styles.title}>جنسیت پزشک</div>
      <ul>
        {genders.map((gender) => (
          <li key={gender}>
            <a onClick={() => handleGenderChange(gender)}>{gender}</a>
          </li>
        ))}
      </ul>
      <div>
        <div className={styles.title}>تخصص پزشک</div>
        <ul>
          {specialties.map((specialty) => (
            <li key={specialty}>
              <a onClick={() => handleSpecialtyChange(specialty)}>
                {specialty}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
