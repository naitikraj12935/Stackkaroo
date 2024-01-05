
import temp from '../../styles/Template.module.css'

export default function Benchmarkcomp({obj}) {
  return (
    <div className={temp.bench}>
      <li className={temp.li}>
     
      
      </li>
      <div className={temp.combine}>
      <div className={temp.title}>{obj.title}</div>
      <div className={temp.description}>{obj.description}</div>
      </div>
      
    </div>
  )
}
