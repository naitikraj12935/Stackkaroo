
import TalentStyle from '../../styles/Talent.module.css'
import Tree from './Tree'

const items=[
  {
    title:'Software Development',
    item1:'Software Engineer',
    item2:'Frontend Developer',
    item3:'Backend Developer',
    item4:'Full Stack Developer',
    item5:'Mobile App Developer',
    con:'tree_component1'
  },
  {
    title:'Data Science & Analytics',
    item1:'Data Scientist',
    item2:'Data Analyst',
    item3:'Machine Learning Engineer',
    item4:'Business Intelligence Analyst',
    item5:'Data Engineer',
    con:'tree_component2'
  },
  {
    title:'Cyber Security',
    item1:'Information Security Analyst',
    item2:'Ethical Hacker',
    item3:'Security Engineer',
    item4:'Incident Responder',
    item5:'Cryptographer',
    con:'tree_component3'
  },
  {
    title:'Cloud Computing',
    item1:'Cloud Architect',
    item3:'DevOps Engineer',
    item4:'Solutions Architect',
    item2:'Cloud Engineer',
    item5:'Cloud Consultant',
    con:'tree_component4'
  },
  {
    title:'Sales & Marketing',
    item1:'Sales Representative',
    item2:'Marketing Manager',
    item3:'Digital Marketing Specialist',
    item4:'Brand Manager',
    item5:'Advertising Executive',
    con:'tree_component5'
  },
  {
    title:'Finance & Accounting',
    item1:'Accountant',
    item2:'Financial Analyst',
    item3:'Auditor',
    item4:'Tax Consultant',
    item5:'Treasury Manager',
    con:'tree_component6'
  }
  , {
    title:'Human Resources',
    item1:'HR Manager',
    item2:'Recruitment Specialist',
    item3:'Training and Development Manager',
    item4:'Compensation and Benefits Analyst',
    item5:'Employee Relations Manager',
    con:'tree_component7'
  }, {
    title:'Operations & Logistics',
    item1:'Operations Manager',
    item2:'Supply Chain Analyst',
    item3:'Logistics Coordinator',
    item4:'Inventory Manager',
    item5:'Procurement Specialist',
    con:'tree_component8'
  }
]
import pro from '../../styles/Procss.module.css'

export default function Talent() {
  return (
    <div className={TalentStyle.Talent_component}>
    
         <button className={TalentStyle.btn1}>
         Stackkaroo Talents
         </button>
         <div className={TalentStyle.arrow1}></div>
         <div className={TalentStyle.arrow2}></div>
         <div className={TalentStyle.arrow3}></div>
         <div className={TalentStyle.arrow4}></div>
         <button className={TalentStyle.btn2}>
         Talents based on IT and Non-IT
         </button>
         <button className={TalentStyle.btn3}>
         Talents based on Experience and Expertise
         </button>
         <div className={TalentStyle.arrow5}></div>
         <div className={TalentStyle.arrow6}></div>
         <div className={TalentStyle.arrow7}></div>
         <div className={TalentStyle.arrow8}></div>
         <button className={TalentStyle.btn4}>
         IT Talent Categories
         </button>
         <button className={TalentStyle.btn5}>
         Non-IT Talent Categories
         </button>
         {
          items.map((item,index)=>(
            <Tree obj={item} key={index} />
          ))
         }
         <div className={TalentStyle.bigarrow1}></div>
         <div className={TalentStyle.bigarrow2}></div>
         <div className={TalentStyle.sidearrow}></div>
         <button className={TalentStyle.btn6}>Beginner Level</button>
         <button className={TalentStyle.btn7}>Intermediate Level</button>
         <button className={TalentStyle.btn8}>Advance Level</button>
         <button className={TalentStyle.btn9}>Expert Level</button>
         <div className={TalentStyle.xarrow1}></div>
         <div className={TalentStyle.xarrow2}></div>
         <div className={TalentStyle.xarrow3}></div>
         <div className={TalentStyle.xarrow4}></div>
         <div className={TalentStyle.xarrow5}></div>
         <div className={TalentStyle.xarrow6}></div>
         <div className={TalentStyle.xarrow7}></div>
         <div className={TalentStyle.xarrow8}></div>
         <div className={TalentStyle.xarrow9}></div>
         <div className={TalentStyle.xarrow10}></div>
         <div className={TalentStyle.xarrow11}></div>
         <div className={TalentStyle.xarrow12}></div>
    </div>
  )
}
