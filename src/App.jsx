import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import CardforPriceData from './createCard'



function App() {
  const priceData = [
    {
      plan:"FREE",
      price:"0",
      user:"Single User",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited private projects",
      isPrivateProjects:true,
      support:"Dedicated Phone Support",
      isSupport:false,
      subDomain:"Free Subdomain",
      isSubDomain:false,
      reports:"Monthly Status Reports",
      isReports:false,

    },
    {
      plan:"PLUS",
      price:"9",
      user:"5 Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited private projects",
      isPrivateProjects:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:false,


    },
    {
      plan:"PRO",
      price:"49",
      user:"Unlimited Users",
      isUser:true,
      storage:"50GB Storage",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited private projects",
      isPrivateProjects:true,
      support:"Dedicated Phone Support",
      isSupport:true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:true,


    },
  ]

  return (
    <>
    <div className="Container" style={{gap:'2px'}}>
      <div className='row'>
   { priceData.map((e, i) => {
    return <CardforPriceData data={e} key={i} />
  })}
  </div></div>
    </>
  )
}

export default App
