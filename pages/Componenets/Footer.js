import Cards from "./Cards"
import Foo from '../../styles/Footer.module.css'
import pro from '../../styles/Procss.module.css'
const items=[
    {
        Url:'/pricing_1728450 1.png',
        titile:'Simplifying Talent Hiring with Transparent Pricing',
        description:`We have a pricing system based on talent's skills, experience, role complexity, and duration. Companies are charged upon talent hiring, while talent is not charged. We offer discounts of 5% to 20% for prepaid amounts.`
    }
    ,{
        Url:'/job-interview_3135714 1.png',
        titile:'Tailored Pricing and Expert Consultation',
        description:'To find out our prices, fill out a form. Get email with subject "Access your PRICE CARD." Request a meeting to learn more about our services. We try to simplify offshore recruitment for global organizations to hire Indian Talent.'
    },{
        Url:'/customer-service_3322984 1.png',
        titile:'Other Services',
        description:'Cost of hiring Indian workers from us is lower with more people employed. Pay in advance for a discount of 2.5% to 7%. Local time zone staff have additional charges. High demand may require non-traditional hours.'
    },{
        Url:'/communicate_2343694 1.png',
        titile:'Contact Us',
        description:`Get Pricing based on Job Description. Provide the description and other info. We'll review and give the right budget. Schedule a free insightful call with our Talent Specialist.`
    }
]

export default function Footer() {
  return (
    <div className={Foo.component}>
    <h1 className={pro.heading}>Pricing</h1>
    <h2 className={pro.about}>Best Services at the Most Affordable Cost</h2>
    <div className={Foo.container}>
      {
        items.map((item,index)=>(
            <Cards obj={item} key={index}/>
        ))
      }
    </div>
    </div>
  )
}
