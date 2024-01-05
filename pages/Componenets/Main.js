import styles from '../../styles/Main.module.css';
import Image from 'next/image'
 // Adjust the path to correctly reference the image

export default function Main() {
  return (
    
    <div className={styles.main_component}>
      
      <Image className={styles.main_conatiner}
      src="/employee.png"
      width={400}
      height={400}
      alt="Picture of the author"
      />
        <div className={styles.subcontainer}>
        <div className={styles.heading}>
         Experience Seamless Hiring
      </div>
      <h3 className={styles.main_content}>“Connecting Global Companies with the Best Indian Talent”</h3>
      <div className={styles.main_content}>STACKKAROO is a hiring platform that picks the best of IT & Non-IT fields as well as web development, digital marketing, data science, business development, human resource, content writing, advertising and much more in India. Their communication skills, fit for culture, and ability to be ethical for global work will be assessed.</div>
      <button className={styles.main_btn}>
        Job opening
      </button>
        </div>
      
      </div>
    
  
    
   
    
  );
}

