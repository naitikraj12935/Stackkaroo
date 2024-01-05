
import T from '../../styles/TalentCard.module.css'
export default function TalentCard({obj}) {
  return (
    <div className={T.container} >
      <div className={T.heading}>{obj.num}</div>
      <div className={T.title}>{obj.title}</div>
      <div className={T.description}>{obj.description}</div>
    </div>
  )
}


