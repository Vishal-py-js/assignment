import axios from 'axios'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../components/Button'

import "./pdfReport.css"
import generatePDF from './reportGenerator'

function PdfReport() {
    // const[file, setFile] = useState()
    // const[fileName, setFileName] = useState("")

    const projects = useSelector(state => state.projects.projects)
    let pdfData = []

    projects.map(project => {
        pdfData.push({
            projectId: project.projectId,
            projectName: project.projectName,
            budget: project.budget,
            siteAddress: project.siteAddress,
            projectStatus: project.projectStatus
        })
    })

    const savePdf = async() => {
        const element = document.getElementById("pdf")
        console.log(element);
        const pdf = new jsPDF()
        const ele = await html2canvas(element)
        console.log(ele);

        generatePDF(pdfData)
        axios.post("http://localhost:8000/upload", JSON.stringify(pdfData))
        .then(res=>{
            console.log(res.data);
        })
        
    }


    return (
        <div className='table' >
            <h3>Project Details</h3>
            <div className='tbl'>
                <table className='table-cont' id="pdf">
                    <tbody>
                    <tr>
                        <th>ProjectID</th>
                        <th>Project Name</th>
                        <th>Budget ₹ Crore</th>
                    </tr>
                    {
                        projects.map(project => (
                            <tr key={project.projectId}>
                                <td>{project.projectId}</td>
                                <td>{project.projectName}</td>
                                <td>{project.budget}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <div className='buttons'>
                    <Button text="Sign" />
                    <Button handleClick={savePdf} text="Generate PDF" />
                </div>
            </div>
        </div>
    )
}

export default PdfReport