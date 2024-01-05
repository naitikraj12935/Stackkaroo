import style from '../../styles/Hero.module.css';
import Cards from './Cards';
const data=[
    {
        Url:'/comp1.png',
        title:'Talent Matchmaker',
        description:'STACKKAROO is a platform for identifying Indian talent for global companies seeking remote workers. It considers skills, experience, preferences, availability to find the best match.'
    },
    {
        Url:'/comp2.png',
        title:'Easy Hiring',
        description:'We help with hiring, including interviews, negotiations, contracts, and onboarding. Indian talent and the company receive support during recruitment.'
    },
    {
        Url:'/comp3.png',
        title:'Affordability',
        description:'The company pays a fee for talent hire based on salary and role difficulty. The talent is not charged a fee.'
    },
    {
        Url:'/comp4.png',
        title:'Long-Term Relationship',
        description:'STACKKAROO maintains good talent-org relationships by providing feedback, performance appraisal, career development, and settling disputes.'
    }
]

export default function Hero() {
  return (
    <div className={style.Hero_component}>
     
     <h1 className={style.Hero_heading}>We are Best Because</h1>
     <div className={style.Hero_body}>
     {data.map((item, index) => (
        <Cards obj={item} key={index} />
      ))}
      </div>
      
    </div>
  )
}
