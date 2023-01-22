import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function Card(props) {
     return <div style={{width:"900px",margin:"22px"}}>
      <div  style={{backgroundColor:"white",borderRadius:"6px 6px 0px 0px",height:"400px"}}>
        <img style={{margin:"26px 10px"}} src="/assets/cardimage1.svg"/>
      </div>
      <div  style={{backgroundColor:"#141414",borderRadius:"0px 0px 6px 6px",height:"100px"}}>
        <div style={{fontSize:"28px",margin:"6px"}}>The Brown Metro Movers</div>
        <div style={{display:"flex"}}>
        <div style={{margin:"4px 21px"}}><img src="/assets/price.svg"/></div>
        <div style={{marginLeft:"48px"}}><img src="/assets/addbag.svg"/></div>
        </div>
      </div>
     </div>
  }

  return (
    <div style={{backgroundColor:"black" ,width:"100%",height:"100p0x"}}>
      <div style={{display:"flex",justifyContent:"space-between",margin:"17px 20px"}}>
        <div style={{fontSize:"27px"}}>TANN TRIM</div>
        <div><img src="assets/headicon.svg"/></div>
      </div>
      <div style={{display:"flex",margin:"0% 31%",justifyContent:"space-between"}}>
        <div>Bags</div>
         <div>Travel</div>
          <div>Accesories</div>
           <div>Gifting</div>
            <div>Jewelery</div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",margin:"13px 44px",overflowX:"scroll"}}>
        <div><img src="/assets/bagimage.svg"/></div>
        <div><img src="/assets/bagimage.svg"/></div>
        <div><img src="/assets/bagimage.svg"/></div>
        <div><img src="/assets/bagimage.svg"/></div>
        <div><img src="/assets/bagimage.svg"/></div>
        <div><img src="/assets/bagimage.svg"/></div>
         <div><img src="/assets/bagimage.svg"/></div>
          <div><img src="/assets/bagimage.svg"/></div>
           <div><img src="/assets/bagimage.svg"/></div>

      </div>
      <div style={{margin:"37px"}}>Bags . Backpacks</div>
      <div style={{display:"flex"}}>
        <Card/>
        <Card/>
<Card/>

<Card/>

      </div>
    </div>
  )
}
