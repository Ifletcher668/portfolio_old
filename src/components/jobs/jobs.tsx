import React, {useState} from 'react'
import {Title} from '../titles/titles'
import {FaAngleDoubleRight} from 'react-icons/fa'
import {graphql, useStaticQuery} from 'gatsby'

const query = graphql`
    {
        allStrapiProjects(sort: {fields: strapiId, order: DESC}) {
            nodes {
                project
                date
                link_to_project
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

const Jobs: React.FC<IProps> = (props: IProps) => {
    const [value, setValue] = useState<number>(0)

    const data = useStaticQuery(query)

    const {
        allStrapiProjects: {nodes: projects},
    }: {allStrapiProjects: {[key: string]: Node[]}} = data

    const {project, description, date, link_to_project} = projects[value]

    return (
        <section className="section jobs">
            <Title title="projects" />
            <div className="jobs-center">
                <div className="btn-container">
                    {projects.map(({project}, idx) => {
                        return (
                            <button
                                key={idx}
                                className={`job-btn ${
                                    idx === value && 'active-btn'
                                }`}
                                onClick={() => setValue(idx)}
                            >
                                {project}
                            </button>
                        )
                    })}
                </div>
                <article className="job-info">
                    <a href={link_to_project} target="_blank">
                        <h3>{project}</h3>
                    </a>

                    <p className="job-date">{date}</p>
                    {description.map(({sentence}, idx) => {
                        return (
                            <div key={idx} className="job-desc">
                                <FaAngleDoubleRight className="job-icon" />
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
