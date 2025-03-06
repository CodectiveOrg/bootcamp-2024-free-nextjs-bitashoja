import { ReactElement } from "react";

import SignUpFormComponent from "@/app/auth/components/sign-up-form/sign-up-form.component";
import styles from "./page.module.css";

export default function SignUpPage(): ReactElement {
  return (
    <div className={styles.container}>
      <SignUpFormComponent />
    </div>
  );
}
