import Image from "next/image"
import Head from '../../styles/Header.module.css'

export default function Header() {
  return (
    <div className={Head.container}>
      <Image src='/Icon.png' alt="" width={25} height={25} className={Head.img1}/>
      <Image src="/Stackkaroo-removebg-preview 1.png" alt="" width={100} height={50}/>
    </div>
  )
}
