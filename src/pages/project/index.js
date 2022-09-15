import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Card from '../../components/dashboard-project'
import StatusCard from '../../components/project-status-card'
import "./project.css"


function Project() {

  const projects = useSelector(state => state.projects.projects)

  const {projectId} = useParams()
  
  const projectDetails = projects.find(proj => proj.projectId.toString()===projectId) 

  return (
    <div className='project-container'>
        <div className='project'>
            <Card  
                key1="ProjectID" value1={projectDetails.projectId} 
                key2="Project Name" value2={projectDetails.projectName}
                key3="Project Manager" value3={projectDetails.projectManager}
                key4="Start Date" value4={projectDetails.startDate}
            />
            <Card 
                key1="Site Address" value1={projectDetails.siteAddress}
                key2="Railway Station" value2={projectDetails.railwayStation}
                key3="Budget" value3={projectDetails.budget}
                key4="End Date" value4={projectDetails.endDate}
            />
            <Card 
                key1="Supplier 1" value1={projectDetails.supplier1}
                key2="Contact Person" value2={projectDetails.contactPerson}
                key3="Phone" value3={projectDetails.phone}
                key4="email" value4={projectDetails.email}
              />
            <StatusCard key1="Project Status" value1={projectDetails.projectStatus}/>
        </div>
    </div>
  )
}

export default Project