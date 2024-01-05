
import Image from "next/image"
import Pstyle from '../../styles/ProcessCard.module.css'
export default function ProcessCard({obj}) {
  return (
    <div className={Pstyle.process_conatiner}>
      <Image src={obj.img} alt='' height={35} width={35} className={Pstyle.Bordering}/>
      <h1 className={Pstyle.heading}>{obj.title}</h1>
      <div className={Pstyle.description}>{obj.description}</div>
    </div>
  )
}
