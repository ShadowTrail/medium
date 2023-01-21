import Image from "next/image"
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import Qazi from "../static/qazi.jpg";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Banner from "../static/banner.png";

const styles = {
  wrapper: `flex items-center justify-center flex-[3] border-1 border-r`,
  content: ` h-screen w-full p-[2rem]`,
  postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
  authorContainer: `flex gap-[1rem]`,
  authorImagerContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
  column: `flex-1 flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878]`,
  listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `gap-[.5rem]`,
  bannerContainer: `h-[18rem] w-full grid center overflow-hidden mb-[2rem]`,
  articleMainContainer: "flex flex-col gap-[1rem]",
  image: "object-cover",
  title: "font-bold text-3xl",
  subtitle: "font-mediumSerifItalic text-[1.4rem] text-[#292929]",
  articleText: "font-mediumSerif text-[1.4rem] text-[#292929]",
  
};
const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImagerContainer}>
              <Image
                className={"object-cover"}
                src={Qazi}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.column}>
              <div>Shiyii</div>
              <div className={styles.postDetails}>
                <span>June 15 • 7 min read • </span>
                <span className={styles.listenButton}>
                  <AiFillPlayCircle />
                  Listen
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.image}
              src={Banner}
              height={200}
              width={950}
            />
          </div>
          <h1 className={styles.title}>
            How to not waste time on useless coding zzz
          </h1>
          <h4 className={styles.subtitle}>
            <div>Anjali Burman, June 12, 2022</div>
            <div>Brief: Coding is just a waste of time.</div>
          </h4>
          <div className={styles.articleText}>
            I just wanna waste my time. I just wanna waste time. 'Cause I don't
            have anything better to do. I just wanna waste my time. I just wanna
            waste time. 'Cause I don't have anything better to do.I just wanna
            waste my time. I just wanna waste time. 'Cause I don't have anything
            better to do. I just wanna waste my time. I just wanna waste time.
            'Cause I don't have anything better to do. I just wanna waste my
            time. I just wanna waste time. 'Cause I don't have anything better
            to do.I just wanna waste my time. I just wanna waste time. 'Cause I
            don't have anything better to do.I just wanna waste my time. I just
            wanna waste time. 'Cause I don't have anything better to do.I just
            wanna waste my time. I just wanna waste time. 'Cause I don't have
            anything better to do. I just wanna waste my time. I just wanna
            waste time. 'Cause I don't have anything better to do.I just wanna
            waste my time. I just wanna waste time. 'Cause I don't have anything
            better to do.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleMain