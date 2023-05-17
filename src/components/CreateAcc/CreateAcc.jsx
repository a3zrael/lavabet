import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./CreateAcc.module.scss";
import classNames from "classnames";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

import Button from "../../baseComponents/Button/Button.jsx";
import Input from "../../baseComponents/Input/Input.jsx";
import SelectComp from "../../baseComponents/Select/SelectComp.jsx";
import TextArea from "../../baseComponents/TextArea/TextArea.jsx";
import CardSlider from "../../baseComponents/CardSlider/CardSlider.jsx";
import { arrayData, list, colorStyles } from "./CreateAcc.data.js";

import img1 from "./img/img1.svg";
import logo1 from "./img/logo1.png";

const CreateAcc = () => {
  return (
    <section className={styles.section_screen}>
      <div className={styles.section_inner}>
        <div className={styles.wrap}>
          <div className={styles.circle} />
          <h3 className={styles.section_title}>Create an account</h3>
          <form>
            <div className={styles.section_form}>
              <Input type="text" placeholder="Username" />
              <Input type="password" placeholder="Password" />
              <div className={styles.section_select}>
                <SelectComp
                  options={list}
                  // defaultValue={list[0]}
                  styles={colorStyles}
                />
              </div>
              <Input type="text" placeholder="Your contacts" />
            </div>
            <TextArea />
            <div className={styles.section_checkbox}>
              <Input type="checkbox" />
              <label>I readed and agree terms & coditions</label>
            </div>
            <Button value="Sign up" className={styles.btn} />
          </form>
        </div>
        <h3 className={styles.section_title_slider}>See you at the:</h3>

        <Swiper
          className={classNames("mySwiper", styles.wrapper)}
          slidesPerView={2}
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
    </section>
  );
};

export default CreateAcc;
