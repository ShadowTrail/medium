import Image from 'next/image';
import Logo from '../static/logo.png'

const styles = {
   wrapper: 'flex justify-center gap-19 px-9 py-4 bg-[#FCC017]',
   content: 'max-w-7xl flex-1 flex justify-between gap-10',
   logoContainer: 'flex items-center flex-start',
   logo: 'cursor-pointer object-contain ',
   bannerNav: 'flex curspr-pointer items-center space-x-5',
   accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
};

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image 
          className={styles.logo} 
          src={Logo} 
          height={45} 
          width={180} 
          />
        </div>

        <div className={styles.bannerNav}>
          <div>Our Story</div>
          <div>Membership</div>
          <div>Sign in</div>
          <div className={styles.accentedButton}>Get Started</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar