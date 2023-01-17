import SmallLogo from '../static/smallLogo.png'
import {HiOutlineHome} from 'react-icons/hi'
import {BiBookmarks} from 'react-icons/bi'
import {FiBell} from 'react-icons/fi'
import {RiArticleLine} from 'react-icons/ri'
import {BsPencilSquare} from 'react-icons/bs'
import Qazi from '../static/qazi.jpg'
import Image from 'next/image'
import Link from 'next/link'

const styles = {
  wrapper: `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]`,
  logoContainer: `cursor-pointer`,
  iconsContainer: `flex-1 flex flex-col justify-center gap-[1.5rem] text-2xl text-[#787878]`,
  divider: `border-b`,
  profileImgContainer: `w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center`,
  profileImg: `object-cover`,
};
const ReadersNav = () => {
  return (
    <div className={styles.wrapper}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <Image src={SmallLogo} />
        </div>
      </Link>
      <div className={styles.iconsContainer}>
          <HiOutlineHome />
          <FiBell />
          <BiBookmarks />
          <RiArticleLine />

          <div className={styles.divider}/>
          <BsPencilSquare />
      </div>
      <div className={styles.profileImgContainer}>
          <Image className={styles.profileImg}
          src={Qazi}
          />
      </div>
    </div>
  );
}

export default ReadersNav