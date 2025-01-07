"use client";

import React, { createContext, useState, useContext } from "react";

// تعریف نوع داده‌های کانتکست
interface FilterContextType {
  selectedGender: string | null;
  setSelectedGender: (gender: string | null) => void;
  selectedSpecialty: string | null;
  setSelectedSpecialty: (specialty: string | null) => void;
}

// مقدار اولیه کانتکست
const defaultFilterContext: FilterContextType = {
  selectedGender: null,
  setSelectedGender: () => {},
  selectedSpecialty: null,
  setSelectedSpecialty: () => {},
};

// ایجاد کانتکست با نوع مشخص
const FilterContext = createContext<FilterContextType>(defaultFilterContext);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(
    null,
  );

  return (
    <FilterContext.Provider
      value={{
        selectedGender,
        setSelectedGender,
        selectedSpecialty,
        setSelectedSpecialty,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
