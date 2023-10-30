import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

import Modal from "../../baseComponents/Modal/Modal.jsx";
import Button from "../../baseComponents/Button/Button.jsx";
import ScrollWins from "./ScrollWins/ScrollWins.jsx";
import Input from "../../baseComponents/Input/Input.jsx";

import styles from "./Header.module.scss";

import logo from "./img/Logo.svg";
import { list, colorStyles } from "./Header.data.js";

const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const [userData, setUserData] = useState({});
  const access_token = localStorage.getItem("access_token");
  const [inputVal, setInputVal] = useState({
    email: "",
    pass: "",
  });

  useEffect(() => {
    if (access_token) {
      getUser();
    }
  }, []);

  async function getUser() {
    const { data, status } = await axios.get(
      "http://localhost:1337/api/users/me",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    if (status === 200 || status === 201) {
      setUserData(data);
    }
  }

  async function authorization() {
    try {
      const { data, status } = await axios.post(
        "http://localhost:1337/api/auth/local/",
        {
          identifier: inputVal.email,
          password: inputVal.pass,
        }
      );

      // let result = await response.json();
      if (status === 200 || status === 201) {
        localStorage.setItem("access_token", data.jwt);
        setUserData(data.user);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  }
  console.log(userData);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.box__left}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <p className={styles.title}>Enjoy and earn</p>
        </div>
        <div className={styles.box__right}>
          <div className={styles.lang}>
            <Select
              options={list}
              defaultValue={list[0]}
              classNamePrefix="custom_select_header"
              // styles={colorStyles}
              isSearchable={false}
            />
          </div>

          <Button
            value="Log in"
            className={styles.section_btn}
            onClick={() => setModalActive(true)}
          />
        </div>
      </div>
      <div className={styles.container__scroll}>
        <ScrollWins />
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        {userData?.email ? (
          <div className={styles.authorization__box}>
            <p className={styles.authorization__title}>User info</p>
            <p className={styles.authorization__text}>
              email: {userData?.email}
            </p>
            <p className={styles.authorization__text}>
              passport: {userData?.passport}
            </p>
          </div>
        ) : (
          <>
            <p className={styles.modal__title}>Log in</p>
            <div className={styles.modal_box}>
              <Input
                onChange={(e) =>
                  setInputVal((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder={"email"}
              />
              <Input
                onChange={(e) =>
                  setInputVal((prev) => ({ ...prev, pass: e.target.value }))
                }
                placeholder={"password"}
              />
              <Button
                type="submit"
                value="Log in"
                className={styles.modal__btn}
                onClick={authorization}
              />
            </div>
          </>
        )}
      </Modal>
    </header>
  );
};

export default Header;
