import Image from "next/image";
import style from "../assets/css/aboutme.module.css";
import Link from "next/link";

export const AboutMe = () => {
  return (
    <div className={style.aboutMeContainer}>
      <h2>About Me</h2>
      <ul>
        <li>
          <strong>Full Name:</strong>
          <span>Deepesh Rohilla</span>
        </li>
        <li>
          <strong>Phone:</strong>
          <span>
            <Link href="tel:+918426934278">+91 8426934278</Link>
          </span>
        </li>
        <li>
          <strong>Email:</strong>
          <span>
            <Link href="mailto:deepeshrohilla211@gmail.com">
              deepeshrohilla211@gmail.com
            </Link>
          </span>
        </li>
        <li>
          <strong>Address:</strong>
          <span>Alwar, Rajasthan</span>
        </li>
      </ul>
      <h3>Hello There!</h3>
      <p>
        There live the blind texts far from the countries Vokalia and
        Consonantia, there live the blind texts. Separated they live in
        bookmarksgrove there live the blind texts far from the countries.
      </p>
      <p>
        Far far away, behind the word mountains, Quos quia provident
        consequuntur culpa facere ratione maxime commodi voluptates id repellat
        velit eaque aspernatur expedita. Possimus itaque adipisci there live the
        blind texts from the countries Vokalia and Consonantia, there live the
        blind texts. Quos quia provident consequuntur culpa facere ratione
        maxime commodi voluptates id repellat velit eaque aspernatur expedita.
        Possimus itaque adipisci.
      </p>
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
