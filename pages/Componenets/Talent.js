import TalentStyle from '../../styles/Talent.module.css';
import Tree from './Tree';
import Image from 'next/image';

import pro from '../../styles/Procss.module.css';

export default function Talent() {
  return (
    <div className={TalentStyle.Talent_component}>
      { /* Adjust the styles directly in your CSS based on screen width using media queries */ }
      <Image src="/Left.png" height={1300} width={500} className={TalentStyle.img1} />
      <Image src="/Blank (1).png" height={1300} width={500} className={TalentStyle.img2} />
      <Image src="/Top.png" height={400} width={1050} className={TalentStyle.img3} />
      <div className={TalentStyle.responsiveContent}>
        <Image src='/it-talent.png' alt='' width={300} height={550} />
        <Image src='/Non-it.png' alt='' width={300} height={550} />
        <Image src='/Exprience.png' alt='' width={300} height={200} />
      </div>
    </div>
  );
}
