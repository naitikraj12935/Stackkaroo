import ProcessCard from "./ProcessCard"
import pro from '../../styles/Procss.module.css'
 import TalentCard from "./TalentCard"
const talents=[{
    num:'1',
    title:'Share the Job Description with us',
    description:'Talent Specialists will contact you within 2 working hours after you share the job description with us including roles, responsibilities, skills, experience, and budget.'
},
{
    num:'2',
    title:'Review and Shortlist the Matches',
    description:'From there, review and shortlist the best fit profiles shared by STACKKAROO. Company will search if suitable people are not found.'
},
{
    num:'3',
    title:'Interview and Hire the Best',
    description:'You can interview and hire in 48 hours. Additionally, you can hire top talent from India with 40% cost saving.'
}
,{
    num:'4',
    title:'Post Hiring Support',
    description:'Well also ensure smooth onboarding and support, such as contracts, replacement, retention, cancellation and work in your time zone.'
}

]

const data=[
    {
        img:'/list_8532959 1Profile.png',
        title:'Profile Screening and Shortlisting',
        description:'We evaluate applications based on minimum criteria, professional experience, and background checks of candidates.'
    },
    {
        img:'/language_484582 1Language.png',
        title:'Language Proficiency',
        description:'We use communication assessment test to assess candidates reading, writing, pronunciation, clarity, fluency, and speech speed.'
    },
    {
        img:'/mindset_10645906 1Aptitude.png',
        title:'Aptitude Evaluation',
        description:'We administer scientifically designed aptitude test to assess candidates reasoning & problem-solving abilities'
    },
    {
        img:'/computer_9330495 1Technical.png',
        title:'Technical Assessment',
        description:'We have developed challenging and advanced technical assessments tailored to specific roles, ensuring that only the most skilled candidates make it.'
    },
    {
        img:'/job-interview_1436764 1Panel.png',
        title:'Panel Interview',
        description:'Our talent acquisition experts conduct a final video interview in the presence of a representative from the hiring company. '
    }
]
export default function Process() {
  return (
    <div className={pro.container}>
     <div className={pro.line}></div>
    <h1 className={pro.heading}>Our Rigorous Hiring Process </h1>
    <h2 className={pro.about}>To make sure, our Talent get the Best Opportunities</h2>
    <div>
      {
        data.map((item,index)=>(
            <ProcessCard obj={item} key={index}/>
        ))
      }
      </div>
     
      <h1 className={pro.heading}>Hire Best Talents from Stackkaroo </h1>
      <h2 className={pro.about}>4 Easy Steps for Simple and Fast Hiring</h2>
      <div className={pro.card}>
        {
            talents.map((item,index)=>(
                 <TalentCard obj={item} key={index}/>
            ))
        }
      </div>
    </div>
  )
}
