"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const [mobilemenu, setmobilemenu] = useState(false);
  return (
    <div className={styles.general}>
      <div className={styles.firstbackground}>
        <div className={styles.madebyvictor}>
          MADE<span className={styles.by}>BY</span>VICTOR
        </div>
        <div className={styles.menu}>
          <a href="/" className={styles.home}>
            Home
          </a>
          <a href="#myresume" className={styles.myresume}>
            My Resume
          </a>
          <a href="#myworks" className={styles.myworks}>
            My Works
          </a>
          <a href="#contactme" className={styles.contactme}>
            Contact Me
          </a>
          <a href="https://github.com/vimonikhe">
            <Image
              src="/git.jpg"
              width="40"
              height="40"
              alt="gitt"
              className={styles.gitlogo}
            />
          </a>
        </div>
      </div>

      <div className={styles.firstbackground2}>
        <div className={styles.madebyvictor2}>
          MADE<span className={styles.by2}>BY</span>VICTOR
        </div>
        <div
          className={styles.mobilemenu}
          onClick={() => setmobilemenu(!mobilemenu)}
        >
          ☰
        </div>
        {mobilemenu && (
          <div className={styles.mobilemenulist}>
            <li>
              {" "}
              <a href="/" className={styles.home2}>
                Home
              </a>
            </li>

            <li>
              {" "}
              <a href="#myresume" className={styles.myresume2}>
                My Resume
              </a>
            </li>

            <li>
              {" "}
              <a href="#myworks" className={styles.myworks2}>
                My Works
              </a>
            </li>

            <li>
              {" "}
              <a href="#contactme" className={styles.contactme2}>
                Contact Me
              </a>
            </li>

            <li>
              <a href="https://github.com/vimonikhe">
                <Image
                  src="/git.jpg"
                  width="40"
                  height="40"
                  alt="gitt"
                  className={styles.gitlogo2}
                />
              </a>
            </li>
          </div>
        )}
      </div>

      <div className={styles.secondbackground}>
        <div className={styles.secondpage}>
          <div>
            <div className={styles.frontend}>Frontend</div>
            <div className={styles.web}>web</div>
            <div className={styles.developer}>
              developer<span style={{ color: "#e63946" }}> !👨🏽‍💻</span>
            </div>
            <div className={styles.hearfrommyclients}>Hear from my clients</div>
            <div className={styles.swiper}>
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                slidesperview={1}
                spaceBetween={5}
              >
                <SwiperSlide>
                  <div className={styles.swiperone}>
                    <div>
                      <div className={styles.swiperonea}>
                        It's fast and i really love my design
                      </div>
                      <div className={styles.swiperoneb}>CEO Dietpage</div>
                    </div>
                    <Image
                      src="/ceodietpage.jpg"
                      height="70"
                      width="70"
                      alt="dietpage"
                      className={styles.ceodietpage}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.swipertwo}>
                    <div>
                      <div className={styles.swipertwoa}>
                        I just went through the website, very smooth and
                        professional!
                      </div>
                      <div className={styles.swipertwob}>CEO Jfilms</div>
                    </div>
                    <Image
                      src="/ceojfilms.jpg"
                      height="70"
                      width="70"
                      alt="jfilms"
                      className={styles.ceojfilms}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.swiperthree}>
                    <div>
                      <div className={styles.swiperthreea}>
                        {"Guy's im impressed with my website, Great job"}
                      </div>
                      <div className={styles.swiperthreeb}>
                        Founder social monkey
                      </div>
                    </div>
                    <Image
                      src="/foundersocialmonkey.jpg"
                      height="70"
                      width="70"
                      alt="fsm"
                      className={styles.foundersocialmonkey}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={styles.randc}>
              <a href="#myresume" className={styles.myresumeee}>
                <div className={styles.myresumee}>My Resume</div>
              </a>
              <a href="#contactme">
                <button className={styles.contactmebtn}>CONTACT ME</button>
              </a>
            </div>
          </div>
          <Image
            src="/image.jpg"
            height="400"
            width="400"
            alt="image"
            className={styles.myimage}
          />
        </div>
      </div>
      <div className={styles.thirdbackground}>
        <div className={styles.thirdsection}>
          <Link href="https://drive.google.com/file/d/1VEREB6GmWoZJCKZ-KBkfV8GEIkJ_KJlX/view?usp=sharing">
            <div className={styles.downloadresumewrap}>
              <button id="myresume" className={styles.downloadresume}>
                Click to Download Resume
              </button>
            </div>
          </Link>
          <div className={styles.coreskills}>Core Skills</div>
          <div className={styles.skills}>
            HTML ┃ CSS ┃ JavaScript ┃ React.js ┃ Next.js ┃Typescript
          </div>
          <div id="myworks" className={styles.myworkss}>
            My Works
          </div>
          <div className={styles.myworksintro}>
            {"I've successfully built and deployed various Frontend web"}{" "}
            applications <span className={styles.explore}>....Explore</span>
          </div>
        </div>
      </div>
      <div className={styles.fourthbackground}>
        <div className={styles.fourthsection}>
          <Image
            src="/office.webp"
            height="250"
            width="250"
            alt="office"
            className={styles.office}
          />
          <div className={styles.officetext}>
            <div className={styles.officeintro}>
              {" I'll give your website a modern and professional look!"}
            </div>
            <p className={styles.officeparagraph}>
              I build modern responsive user interfaces focused on performance
              and usability. I will maximize my skills and ideas to make your
              goals and vision realistic. {"Let's"} connect and create a
              masterpiece together.
            </p>
          </div>
        </div>
        <div className={styles.fourthsectionb}>
          <div>
            <div className={styles.wannagivemea}>Wanna give me a</div>
            <div className={styles.try}>try?</div>
            <div className={styles.contactmebuttonwrap}>
              <button id="contactme" className={styles.contactmebutton}>
                Contact Me
              </button>
            </div>
            <div id="contactme" className={styles.socialsbox}>
              <p className={styles.phonenumber}>📞08112825969</p>
              <p className={styles.emailadd}>✉️ Vimonikhe94@gmail.com</p>
            </div>
          </div>
          <div>
            <p className={styles.sendusamessage}>send us a message</p>
            <div>
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Name"
                type="text"
                className={styles.name}
              />
            </div>
            <div>
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email"
                type="text"
                className={styles.email}
              />
            </div>
            <div>
              <input
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                placeholder="Phone"
                type="text"
                className={styles.phone}
              />
            </div>
            <div>
              <input
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                placeholder="Message"
                type="text"
                className={styles.message}
              />
            </div>
            <div>
              <button className={styles.submitbutton}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.madebyvictortwo}>
        © 2026 MADE<span className={styles.by}>BY</span>VICTOR
      </footer>
    </div>
  );
}
