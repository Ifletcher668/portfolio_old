import React, {useState} from 'react'
import {Title} from '../Titles'
import {FaAngleDoubleRight} from 'react-icons/fa'
import {graphql, useStaticQuery} from 'gatsby'

const query = graphql`
    query GET_PROJECTS {
        strapi {
            projects(sort: "date:desc") {
                project
                link_to_project
                date
                description {
                    sentence
                }
            }
        }
    }
`

type Description = {
    sentence: string
}

type Node = {
    project: string
    link_to_project: string
    description: Description[]
    date: string
}

const Jobs = () => {
    const [value, setValue] = useState<number>(0)

    const data = useStaticQuery(query)
    const {
        strapi: {projects},
    }: {[key: string]: {[key: string]: Node[]}} = data

    const {project, description, date, link_to_project} = projects[value]

    return (
        <section className="section project">
            <Title title="projects" />
            <div className="projects-center">
                <div className="btn-container">
                    {projects.map(({project}, idx) => {
                        return (
                            <button
                                key={idx}
                                className={`project-btn ${
                                    idx === value && 'active-btn'
                                }`}
                                onClick={() => setValue(idx)}
                            >
                                {project}
                            </button>
                        )
                    })}
                </div>
                <article className="project-info">
                    <a href={link_to_project} target="_blank">
                        <h3>{project}</h3>
                    </a>

                    <p className="project-date">{date}</p>
                    {description.map(({sentence}, idx) => {
                        return (
                            <div key={idx} className="project-desc">
                                <FaAngleDoubleRight className="project-icon" />
                                <p>{sentence}</p>
                            </div>
                        )
                    })}
                </article>
            </div>
        </section>
    )
}

export default Jobs
