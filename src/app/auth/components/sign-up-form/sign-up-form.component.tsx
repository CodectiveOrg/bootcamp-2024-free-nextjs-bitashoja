"use client";

import { FormEvent, ReactElement } from "react";
import Link from "next/link";

import { ButtonComponent } from "@/app/components/button/button.component";
import CardComponent from "@/app/components/card/card.module.css";
import NormalInputComponent from "@/app/components/normal-input/normal-input.component";
import PasswordInputComponent from "@/app/components/password-input/password-input.comonent";

import MingcuteUser3Line from "@/icons/MingcuteUser3Line";

import styles from "@/app/auth/styles/auth-form.module.css";

export default function SignInFormComponent(): ReactElement {
  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
  };

  return (
    <div className={styles["auth-form"]}>
      <CardComponent onGenderSelect={() => {}} onSpecialtySelect={() => {}}>
        <div className={styles["card-content"]}>
          <div className={styles.writings}>
            <h1>ورود!</h1>
            <form onSubmit={formSubmitHandler}>
              <NormalInputComponent
                label="نام کاربری"
                type="text"
                name="username"
                prefixIcon={<MingcuteUser3Line />}
              />
              <PasswordInputComponent
                label="رمز عبور"
                name="password"
                autoComplete="current-password"
              />
              <ButtonComponent variant="primary">ورود</ButtonComponent>
            </form>
            <div className={styles["change-form"]}>
              قبلاً ثبت‌نام نکردید؟
              {` `}
              <Link href="/auth/sign-up">ثبت‌نام کنید</Link>.
            </div>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
