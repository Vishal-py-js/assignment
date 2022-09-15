import React from 'react'
import Card from '../../components/dashboard-project'
import "./dashboard.css"
import { useSelector } from 'react-redux';

function Dashboard() {

    const projects = useSelector(state => state.projects.projects)

    return (
        <div className='cont'>
            <div className='dashboard'>
                {
                    projects.map(project => (
                        
                        <Card 
                            key={project.projectId}
                            key1="ProjectID" value1={project.projectId} 
                            key2="Project Name" value2={project.projectName}
                            key3="Budget" value3={project.budget}
                            key4="End Date" value4={project.endDate}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard