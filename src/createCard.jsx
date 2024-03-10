import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

 function CardforPriceData({data})
{
    return <>
    <div className="col-4">
    <Card className="col-12">
        <Card.Body>
            <Card.Header> 
                <p className='text-muted' style={{textAlign:'center'}}>{data.plan}</p>
                <h2>${data.price}/month</h2>
            </Card.Header>
            <Card.Text>
                <ul className="fa-ul">
                <li className={data.isUser?"":"text-muted"}><span className="fa-li"><i className={data.isUser?"fas fa-check":"fas fa-times"}></i></span>{data.user}</li>
                <li className={data.isStorage?"":"text-muted"}><span className="fa-li"><i className={data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{data.storage}</li>
                <li className={data.isPublicProjects?"":"text-muted"}><span className="fa-li"><i className={data.isPublicProjects?"fas fa-check":"fas fa-times"}></i></span>{data.publicProjects}</li>
                <li className={data.isCommunityAccess?"":"text-muted"}><span className="fa-li"><i className={data.isCommunityAccess?"fas fa-check":"fas fa-times"}></i></span>{data.communityAccess}</li>
                <li className={data.isPrivateProjects?"":"text-muted"}><span className="fa-li"><i className={data.isPrivateProjects?"fas fa-check":"fas fa-times"}></i></span>{data.privateProjects}</li>
                <li className={data.isSupport?"":"text-muted"}><span className="fa-li"><i className={data.isSupport?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>
                <li className={data.isSubDomain?"":"text-muted"}><span className="fa-li"><i className={data.isSubDomain?"fas fa-check":"fas fa-times"}></i></span>{data.subDomain}</li>
                <li className={data.isReports?"":"text-muted"}><span className="fa-li"><i className={data.isReports?"fas fa-check":"fas fa-times"}></i></span>{data.reports}</li>
                </ul>
            </Card.Text>
            <Button color="primary">Button</Button>
        </Card.Body>
    </Card></div>
    </>
}
export default CardforPriceData