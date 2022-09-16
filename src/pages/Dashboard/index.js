import React, { useState } from 'react'
import Card from '../../components/dashboard-project'
import "./dashboard.css"
import { useSelector } from 'react-redux';
import Button from '../../components/Button';

function Dashboard() {

    const[createForm, setCreateForm] = useState(false)

    const projects = useSelector(state => state.projects.projects)

    const handleForm = () => {
        setCreateForm(true)
    }

    return (
        <div className='cont'>
            <Button className="button" text="Create New Project"/>
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