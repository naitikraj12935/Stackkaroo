
import Treestyle from '../../styles/Tree.module.css';

export default function Tree({ obj }) {
  
  return (
    <div className={Treestyle[obj.con]}>
      <button className={Treestyle.btn1}>{obj.title}</button>
      <div className={Treestyle.main_arrow}></div>
      <button className={Treestyle.btn2}>{obj.item1}</button>
      <button className={Treestyle.btn3}>{obj.item2}</button>
      <button className={Treestyle.btn4}>{obj.item3}</button>
      <button className={Treestyle.btn5}>{obj.item4}</button>
      <button className={Treestyle.btn6}>{obj.item5}</button>

      <div className={Treestyle.arrow1}></div>
      <div className={Treestyle.arrow2}></div>
      <div className={Treestyle.arrow3}></div>
      <div className={Treestyle.arrow4}></div>
      <div className={Treestyle.arrow5}></div>
    </div>
  );
}

