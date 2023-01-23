import { MediumContext } from "@/context/MediumContext";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";

const styles = {
    wrapper: `w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll`,
    title: `my-[2rem] font-bold text-3xl`,
    smallField: `flex w-full justify-between gap-[1rem]`,
    fieldTitle: `flex-1 text-end`,
    inputContainer: `flex-[5] h-min border-2 border-[#787878]`,
    inputField: `w-full border-0 outline-none bg-transparent`,
    accentedButton:`rounded-full bg-black text-white py-2 px-4`,
}

const PostModal = () => {
    const { currentUser } = useContext(MediumContext)

    const [title, setTitle] = useState('')
    const [brief, setBrief] = useState("");
    const [category, setCategory] = useState("");
   
    const [postLength, setPostLength] = useState("");
    const [bannerImage, setBannerImage] = useState("");
    const [content, setContent] = useState("");

    const addPostToFirebase = async event =>{
        event.preventDefault()
        await addDoc(collection(db, 'articles'),{
            bannerImage: bannerImage,
            body: content,
            category: category,
            brief: brief,
            title: title,
            author: currentUser.email,
            postedOn:serverTimestamp(),
            postLength: Number(postLength)
        })
    }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Create a New Post</div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Title</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Brief</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={brief}
            onChange={(event) => setBrief(event.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Banner Image URL</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={bannerImage}
            onChange={(event) => setBannerImage(event.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>
          Estimated Read Length <br/>(in minutes)
        </span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={postLength}
            onChange={(event) => setPostLength(event.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Article Text</span>
        <span className={styles.inputContainer}>
          <textarea
            className={styles.inputField}
            type="text"
            rows={12}
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </span>
      </div>
      <button onClick={addPostToFirebase} className={styles.accentedButton}>
        Submit
      </button>
    </div>
  );
}

export default PostModal