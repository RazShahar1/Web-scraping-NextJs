import  {JSDOM}  from 'jsdom'
import { NextApiRequest, NextApiResponse } from 'next'


const getinfo= async (req:NextApiRequest, res:NextApiResponse)=>{
    const respose = await fetch('https://www.hotels.co.il/hotelsmain/hotels/specialdeals.cfm?loc=7')
    const html = await respose.text()
    

    const dom =new JSDOM(html)
    const document =dom.window.document

    const info = document.querySelector(".hc_info")?.textContent
    console.log('info',info);
   res.status(200).json({info})
   }
   export default getinfo;