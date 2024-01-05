import Cardstyle from '../../styles/Card.module.css';
import Image from 'next/image';

export default function Cards({ obj }) {
  return (
    <div className={Cardstyle.Card_component}>
      <Image src={obj?.Url} alt={obj.title} width={25} height={25} />
      <h2 className={Cardstyle.Card_heading}>{obj?.title}</h2>
      <div className={Cardstyle.Card_description}>{obj?.description}</div>
    </div>
  );
}

