import React from 'react'
import { useSelector } from 'react-redux'
import LineDemo from '../../components/Chart'

function ChartPage() {

    const projects = useSelector(state=>state.projects.projects)
    const budget = []
    const projectId = []

    projects.map(proj => {
        budget.push(proj.budget)
        projectId.push(proj.projectId)
    })

    return (
        <div className='chart-data'>
            <LineDemo budget={budget} projectId={projectId}/>
        </div>
    )
}

export default ChartPage