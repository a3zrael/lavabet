import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper";
import useWindowSize from "../../hooks/useWindowSize.js";
import axios from "axios";

import styles from "./CreateAcc.module.scss";
import classNames from "classnames";
import "swiper/css";
import "swiper/css/navigation";

import Button from "../../baseComponents/Button/Button.jsx";
import Input from "../../baseComponents/Input/Input.jsx";
import CustomSelect from "../../baseComponents/CustomSelect/CustomSelect.jsx";
import TextArea from "../../baseComponents/TextArea/TextArea.jsx";
import CardSlider from "../../baseComponents/CardSlider/CardSlider.jsx";
import { arrayData, list } from "./CreateAcc.data.js";

import img1 from "./img/img1.svg";
import logo1 from "./img/logo1.png";

const CreateAcc = () => {
  const size = useWindowSize();

  const [userData, setUserData] = useState({
    email: "",
    pass: "",
    passport: "",
  });

  async function submitForm(e) {
    e.preventDefault();

    try {
      const { data, status } = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        {
          email: userData.email,
          password: userData.pass,
          username: userData.email,
          passport: userData.passport,
        }
      );

      // let result = await response.json();
      if (status === 200 || status === 201) {
        localStorage.setItem("access_token", data.jwt);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  }

  const textAnimationX = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.9 },
    }),
  };

  const textAnimationY = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.6 },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className={styles.section_screen}
    >
      <div className={styles.section_inner}>
        <div className={styles.wrap}>
          <div className={styles.circle} />
          <motion.h3
            variants={textAnimationX}
            custom={0}
            className={styles.section_title}
          >
            Create an account
          </motion.h3>
          <motion.form
            variants={textAnimationY}
            custom={0}
            className={styles.section_title}
            onSubmit={submitForm}
          >
            <div className={styles.form_wrap}>
              <div className={styles.section_form}>
                <Input
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  type="text"
                  placeholder="Username"
                />
                <Input
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      pass: e.target.value,
                    }))
                  }
                  type="password"
                  placeholder="Password"
                />
                {/* <div className={styles.section_select}>
                  <CustomSelect
                    options={list}
                    classNamePrefix="custom_select_acc"
                  />
                </div> */}
                <Input
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      passport: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="Your passport"
                />
              </div>
              <TextArea />
              <div className={styles.section_checkbox}>
                <Input type="checkbox" className="checkbox" />
                <label>I readed and agree terms & coditions</label>
              </div>
              <Button type="submit" value="Sign up" className={styles.btn} />
            </div>
          </motion.form>
        </div>
        <h3 className={styles.section_title_slider}>See you at the:</h3>
        <Swiper
          className={classNames("mySwiper", styles.wrapper)}
          slidesPerView={size.width < 764 ? 1 : 2}
          spaceBetween={30}
          modules={[Pagination, Navigation]}
          grabCursor
          pagination={{
            type: "progressbar",
          }}
          navigation
        >
          {arrayData.map((element, index) => (
            <SwiperSlide>
              <CardSlider date="26 апреля 2022" logo={logo1} img={img1} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default CreateAcc;
