"use client";
import React, { useState } from "react";
import "./style.scss";
import { useUser } from "@/app/store/user/store";
import Image from "next/image";
import userIcon from "@/public/userIcon.png";
import toast, { Toaster } from "react-hot-toast";
import Separator from "../../ui/separator/Separator";
import { useRouter } from "next/navigation";
import Link from "next/link";

const User = () => {
  const user = useUser((state) => state.user);
  const logOut = useUser((state) => state.logOut);
  const [isShowe, setIsShowe] = useState(false);
  const router = useRouter();
  const roles = user?.roles.map((role) => role.value);

  const changeShowe = () => {
    if (user?.email && user.id && user.token) setIsShowe((st) => !st);
  };
  const clickUser = () => {
    if (user?.email && user.id && user.token) {
    } else {
      router.push("/auth/login");
    }
  };

  const logOutkUser = () => {
    toast.success("user loguot");
    logOut();
    setIsShowe(false);
    router.push("/main");
  };

  return (
    <div
      className="MYuser"
      onMouseEnter={changeShowe}
      onMouseLeave={changeShowe}
      onClick={clickUser}
    >
      <div className="MYuser__image">
        <Image src={userIcon} alt="user icon" width={30} />
        <Toaster />
      </div>
      {isShowe ? (
        <div className="MYuser__content">
          <p className="MYuser__text">{user?.email}</p>
          <Separator type="HORIZONTAL" />
          {roles?.includes("ADMIN") ? (
            <Link className="adminPanel" href={"/adminPanel"}>
              <p>admin panel</p>
            </Link>
          ) : null}
          <div className="MYuser__out" onClick={logOutkUser}>
            log out
            <svg
              fill="#000000"
              height="800px"
              width="800px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 490.3 490.3"
              style={{ fill: "white", width: 20, height: 20 }}
            >
              <g>
                <g>
                  <path
                    d="M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3
			s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6
			c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1
			C27.9,58.95,0,86.75,0,121.05z"
                  />
                  <path
                    d="M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9
			c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63
			C380.6,325.15,380.6,332.95,385.4,337.65z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default User;
