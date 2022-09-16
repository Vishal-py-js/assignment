import React, { useState } from 'react'
import Card from '../../components/dashboard-project'
import "./dashboard.css"
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import CreateProject from '../../components/projectCreationForm';

function Dashboard() {

    const[createForm, setCreateForm] = useState(false)

    const projects = useSelector(state => state.projects.projects)

    

    const handleForm = () => {
        setCreateForm(true)
        console.log(createForm);
    }

    return (
        <div className='cont'>
            {
                createForm?<CreateProject setCreateForm={setCreateForm}/>:""
            }
            <Button handleClick={handleForm} className="button" text="Create New Project"/>
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