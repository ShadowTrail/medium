import Image from "next/image"
import {AiOutlineSearch} from 'react-icons/ai'
import { MdHeight, MdMarkEmailUnread } from 'react-icons/md'
import ReplitLogo from '../static/replit.png'
import TutorialImg from "../static/tutorial.jpg"
import CPLogo from "../static/cp.png"
import Qazi from "../static/qazi.jpg"
import JSLogo from "../static/jsLogo.png";

const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2rem] p-[2rem]`,
  accentedButton: `flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full`,
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full`,
  searchInput: `border-none outline-none bg-none w-full`,
  authorContainer: `my-[2rem]`,
  authorImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authorName: `font-semibold mb-[.2rem] mt-[1rem] `,
  authorFollowing: `text-[#787878]`,
  authorActions: `flex gap-[.6rem] my-[1rem]`,
  actionButton: "bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm",
  articleContentWrapper: `flex items-center justify-center cursor-pointer my-[1rem] ` ,
  articleContent: `flex-[4]`,
  recommendationContainer:``,
  recommendationsAuthorContainer: `flex items-center gap-[.6rem]`,
  recommendationsAuthorImageContainer: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  recommendationsAuthorName: `text-sm`,
  recommendationsArticleTitle: `font-bold`,
  recommendationsThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
  recommendationsThumbnail: `object-cover`,
};
const Recommendations = ({ author }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get unlimited access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          placeholder="Search"
          type="text"
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.authorImageContainer}>
          <Image src={Qazi} height={100} width={100} />
        </div>
        <div className={styles.authorName}>Huang Shiyii</div>
        <div className={styles.authorFollowing}>1M followers</div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}>
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>

      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More from Medium</div>
        <div className={styles.articlesContainer}>
            {recommendedPosts.map(post=> (
          <div className={styles.articleContentWrapper}>
            <div className={styles.articleContent}>

              <div className={styles.recommendationsAuthorContainer}>
                <div className={styles.recommendationsAuthorImageContainer}>
                  <Image src={post.author.image} height={100} width={100} />
                </div>
                <div className={styles.recommendationsAuthorName}> {post.author.name} </div>
              </div>
              <div className={styles.recommendationsArticleTitle}>
                {post.title}
              </div>
            </div>
            <div className={styles.recommendationsThumbnailContainer}>
              <Image
                className={styles.recommendationsThumbnail}
                src={post.image}
                height={50}
                width={50}
              />
            </div>
           
          </div>
          ) )}
        </div>
      </div>

    </div>
  );
}

export default Recommendations 

const recommendedPosts=[
{
  title: 'How to waste time?',
  image: ReplitLogo,
  author:{
    name: 'Clever Pogrammer',
    image: CPLogo
  }
},
{
  title: 'Time Wastage Guide 2023',
  image: TutorialImg,
  author:{
    name: 'Shiyii',
    image: Qazi
  }
},
{
  title: '10 Tips On Boosting Time Wastage',
  image: JSLogo,
  author:{
    name: 'Clever Pogrammer',
    image: CPLogo
  }
},

]