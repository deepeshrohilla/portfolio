import Image from "next/image";
import style from "../assets/css/hero.module.css";
import userImg from "../assets/images/user.jpg";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className={style.heroContainer}>
      <Image src={userImg} alt="Deepesh Rohilla" />
      <h1>Deepesh Rohilla</h1>
      <h3>Full Stack Developer</h3>
      <div className={style.socialMediaLinks}>
        <Link
          href="https://www.linkedin.com/in/deepesh-rohilla-880311199"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
        <Link href="https://github.com/deepeshrohilla" target="_blank">
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link href="https://in.pinterest.com/deepeshrohilla211" target="_blank">
          <i className="fa-brands fa-pinterest-p"></i>
        </Link>
      </div>
    </div>
  );
};
