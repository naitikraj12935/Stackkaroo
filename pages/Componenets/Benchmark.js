import pro from '../../styles/Procss.module.css'

import temp from '../../styles/Template.module.css'
const data=[
    {
        title:'Comprehensive Talent Evaluation',
        description:'STACKKAROO evaluates talents. Covers communication skills, technical know-how & cultural fit.'
    },
    {
        title:'Ensure Smooth Talent and Client Transition',
        description:'We know talented workers and client needs smooth transitions. So, the platform provides thorough trainings to all talents for day one readiness.'
    },
    {
        title:'Rigorous Evaluation Process',
        description:'STACKKAROO reviews key areas, tough eval, clients get skilled specialists.'
    },
    {
        title:'Unlocking Top-Rate Talents',
        description:'With STACKKAROO, clients get top-rate talents ready to hit the ground running.'
    },
    {
        title:'Competent Education System',
        description:'India has a good education system producing many highly qualified workers. Emphasis is placed on STEM education.'
    },
    {
        title:'A Vast Talent Base',
        description:'Moreover, India s populous nation fosters talent, fuels innovation. Thanks to diversity, Indians offer different viewpoints, solutions to problems.'
    },
    {
        title:'Strong Work Mentality',
        description:'Secondly, Indians are hardworking, resilient, and quick learners when it comes to new technologies.'
    },
    {
        title:'Affordability',
        description:'The low cost of Indian labor is attractive to corporate entities. Technology giants cannot compromise on service quality even at competitive rates.'
    }
]
import Benchmarkcomp from "./Benchmarkcomp"

export default function Benchmark() {
  return (
    <div className={temp.bench_container}>
    <h1 className={pro.heading}>Talents from Stackkaroo sets the Benchmark</h1>
    <h2 className={pro.about}>We choose the Best for your Company</h2>
    <div className={temp.bind}>
        {
          data.map((item,index)=>(
            <Benchmarkcomp obj={item} key={index}/>
          ))
        }
    </div>
      
    </div>
  )
}
