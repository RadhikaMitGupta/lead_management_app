"use client";

import { useState } from "react";
import styles from "./login.module.css";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");

  const sendOtp = () => {
    if (phone.length === 10) {
      setStep("otp");
       
    }
  };

  const verifyOtp = () => {
    if (otp.length === 6) {
     redirect("/dashboard")
    }

  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login</h2>
        <p className={styles.subtitle}>
          {step === "phone"
            ? "Enter your mobile number"
            : "Enter OTP sent to your number"}
        </p>

        {step === "phone" ? (
          <>
             <input
              className={styles.input}
              type="name"
              placeholder="Enter Name"
              maxLength={30}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.input}
              type="tel"
              placeholder="Mobile Number"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className={styles.button} onClick={sendOtp}>
              Send OTP
            </button>
          </>
        ) : (
          <>
         
            <input
              className={styles.input}
              type="number"
              placeholder="Enter OTP"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className={styles.button} onClick={verifyOtp}>
              Verify OTP
            </button>

            <button
              className={styles.link}
              onClick={() => setStep("phone")}
            >
              Change number
            </button>
          </>
        )}
      </div>
    </div>
  );
}
