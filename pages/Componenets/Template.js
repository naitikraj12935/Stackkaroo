
import temp from '../../styles/Template.module.css'
export default function Template({obj}) {
  return (
    <div className={temp.container}>
      <h1>{obj?.tittle}</h1>
    </div>
  )
}
