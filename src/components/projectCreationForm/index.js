import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProject } from '../../redux/projects/actions'
import Button from '../Button'
import Input from '../Input'
import "./create.css"

function CreateProject({setCreateForm}) {

    const dispatch = useDispatch()

    const[projectId, setProjectId] = useState("")
    const[projectName, setProjectName] = useState("")
    const[projectManager, setprojectManager] = useState("")
    const[startDate, setstartDate] = useState("")
    const[siteAddress, setsiteAddress] = useState("")
    const[railwayStation, setrailwayStation] = useState("")
    const[budget, setbudget] = useState("")
    const[endDate, setendDate] = useState("")
    const[supplier1, setsupplier1] = useState("")
    const[contactPerson, setcontactPerson] = useState("")
    const[phone, setphone] = useState("")
    const[email, setemail] = useState("")
    const[projectStatus, setprojectStatus] = useState("")

    const handleProjectId = (e) => {
        setProjectId(e.target.value)
    }

    const handleProjectName = (e) => {
        setProjectName(e.target.value)
    }

    const handleProjectManager = (e) => {
        setprojectManager(e.target.value)
    }

    const handleProjectstart = (e) => {
        setstartDate(e.target.value)
    }

    const handleAddress = (e) => {
        setsiteAddress(e.target.value)
    }

    const handleRailway = (e) => {
        setrailwayStation(e.target.value)
    }

    const handleBudget = (e) => {
        setbudget(e.target.value)
    }

    const handleEnd = (e) => {
        setendDate(e.target.value)
    }

    const handleSupplier = (e) => {
        setsupplier1(e.target.value)
    }

    const handleContactPerson = (e) => {
        setcontactPerson(e.target.value)
    }

    const handlePhone = (e) => {
        setphone(e.target.value)
    }

    const handleEmail = (e) => {
        setemail(e.target.value)
    }

    const handleStatus = (e) => {
        setprojectStatus(e.target.value)
    }

    const handleForm = () => {
        setCreateForm(false)
    }

    const handleSubmit = () => {
        dispatch(createProject({
            projectId: projectId,
            projectName: projectName,
            projectManager: projectManager,
            startDate: startDate,
            siteAddress: siteAddress,
            railwayStation: railwayStation,
            budget: budget,
            endDate: endDate,
            supplier1: supplier1,
            contactPerson: contactPerson,
            phone: phone,
            email: email,
            projectStatus: projectStatus
        }))
        setCreateForm(false)
    }

    return (
        <div className='container'>
            <div className='form-container'>
                <h4 onClick={handleForm}>back</h4>
                <div className='sub-cont'>
                <h2>CREATE PROJECT</h2>
                    <Input label="Project Id" handleChange={handleProjectId}/>
                    <Input label="Project Name" handleChange={handleProjectName}/>
                    <Input label="Project Manager" handleChange={handleProjectManager}/>
                    <Input label="Start Date" handleChange={handleProjectstart}/>
                    <Input label="Site Address" handleChange={handleAddress}/>
                    <Input label="Railway Station" handleChange={handleRailway}/>
                    <Input label="Budget" handleChange={handleBudget}/>

                    <Input label="End Date" handleChange={handleEnd}/>
                    <Input label="Supplier 1" handleChange={handleSupplier}/>
                    <Input label="Contact Person" handleChange={handleContactPerson}/>
                    <Input label="Phone" handleChange={handlePhone}/>
                    <Input label="Email" handleChange={handleEmail}/>
                    <Input label="Status" handleChange={handleStatus}/>
                    <Button handleClick={handleSubmit} text="CREATE"/>
                </div>
            </div>
        </div>
    )
}

export default CreateProject