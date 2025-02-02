"use client";

import React from "react";
import {
  FilterProvider,
  useFilter,
} from "@/app/components/filter/FilterContext";
import CardComponent from "@/app/components/card/cardComponent";
import DoctorList from "../components/docters-list/doctersList";
import styles from "./page.module.css";

export default function SearchPage() {
  const { setSelectedGender, setSelectedSpecialty } = useFilter();

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleSpecialtySelect = (specialty: string) => {
    setSelectedSpecialty(specialty);
  };

  return (
    <div className={styles.page}>
      <FilterProvider>
        <div className={styles.filters}>
          <CardComponent
            onGenderSelect={handleGenderSelect}
            onSpecialtySelect={handleSpecialtySelect}
          />
        </div>
        <DoctorList />
      </FilterProvider>
    </div>
  );
}
