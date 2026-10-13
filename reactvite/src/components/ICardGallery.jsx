// import React from 'react'
import ICard from './ICard'
function IcardGalary() {
    const data1=[{
        name:"Sanyam Agarwal",
        roll:"2023",
        college:"Abes Eng",
        branch:"cse",
        image:""
    },
    {
        name:"John Doe",
        roll:"2024",
        college:"Abes Eng",
        branch:"cse",
        image:""
    },
    {
        name:"Satyam Kumar Yadav",
        roll:"2023",
        college:"Abes Eng",
        branch:"cse",
        image:""
    }
]
  return (
    <div>
      {/* <ICard name="Sanyam Agarwal"
       roll="2023" 
       college="Abes Eng" 
       branch="cse" 
       image="">

       </ICard> */}
    
        <ICard data={data1[0]}/>
        <ICard data={data1[1]}/>
        <ICard data={data1[2]}/>
    </div>
  )
}

export default IcardGalary