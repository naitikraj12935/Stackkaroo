import Template from "./Template"
import temp from '../../styles/Template.module.css'

import pro from '../../styles/Procss.module.css'
import Benchmark from "./Benchmark"
const data=[
    {
        tittle:'Top 5% Specialized Talent Pool'
    }
    , {
        tittle:'Availability in various Time Zones'
    }
    , {
        tittle:'Fast and Seamless Hiring'
    }
    , {
        tittle:'Low Cost Advantage'
    },
    {
        tittle:'Simple Contracts'
    },
    {
        tittle:'Remote Onboarding and IT Support'
    },
    {
        tittle:'Easy Replace or Cancel'
    },
    {
        tittle:'Double the Retention Rate'
    }
]
export default function Benefits() {
  return (
    <div className={temp.Benifite_component}>
    <h1 className={pro.heading}>Benefits of Choosing Stackkaroo for Hiring Talents</h1>
    <h2 className={pro.about}>Range of Benefits for all firms, Financial and Non-Financial</h2>
    <div className={temp.Benifite_container}>
      {data.map((item,index)=>(
        <Template obj={item} key={index}/>
      ))}
    </div>
    <Benchmark/>
    <h1 className={pro.heading}>Talent Categories</h1>
    <h2 className={pro.about}>Categorizing Talents based on IT, Non-IT, Experience and Expertise</h2>
    </div>
  )
}
