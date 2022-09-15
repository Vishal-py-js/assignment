import axios from 'axios'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import "./pdfReport.css"

function PdfReport() {
    // const[file, setFile] = useState()
    // const[fileName, setFileName] = useState("")

    const projects = useSelector(state => state.projects.projects)
    let pdfData = []

    projects.map(project => {
        pdfData.push({
            projectId: project.projectId,
            projectName: project.projectName,
            budget: project.budget
        })
    })


    // const saveFile = (e) => {
    //     setFile(e.target.files[0]);
    //     setFileName(e.target.files[0].name);
    //   };

    const savePdf = async() => {
        const element = document.getElementById("pdf")
        console.log(element);
        const pdf = new jsPDF()
        const ele = await html2canvas(element)
        console.log(ele);
        html2canvas(element)
        .then(async(canvas) => {
            pdf.addImage(canvas, 'JPEG', 10, 0, 200, 200)
            pdf.save("projects.pdf")
            
        
            axios.post("http://localhost:8000/upload", JSON.stringify(pdfData))
            .then(res=>{
                console.log(res.data);
            })
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
                    <button >Sign</button>
                    <button onClick={savePdf}>Generate PDF</button>
                </div>
            </div>
        </div>
    )
}

export default PdfReport