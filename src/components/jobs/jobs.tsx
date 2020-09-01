import React, { useState } from 'react';
import { Title } from '../titles/titles';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const query = graphql`
    {
        allStrapiProjects(sort: { fields: strapiId, order: DESC }) {
            nodes {
                project
                date
                description {
                    sentence
                }
            }
        }
    }
`;
type Description = {
    sentence: string;
};

type Node = {
    project: string;
    description: Description[];
    date: string;
};

const Jobs: React.FC<IProps> = (props: IProps) => {
    const [value, setValue] = useState<number>(0);

    const data = useStaticQuery(query);

    const {
        allStrapiProjects: { nodes: projects },
    }: { allStrapiProjects: { [key: string]: Node[] } } = data;

    const { project, description, date } = projects[value];

    return (
        <section className='section jobs'>
            <Title title='projects' />
            <div className='jobs-center'>
                <div className='btn-container'>
                    {projects.map(({ project }, idx) => {
                        return (
                            <button
                                key={idx}
                                className={`job-btn ${idx === value && 'active-btn'}`}
                                onClick={() => setValue(idx)}>
                                {project}
                            </button>
                        );
                    })}
                </div>
                <article className='job-info'>
                    <h3>{project}</h3> {/*// TODO: Make this a link to the project */}
                    <p className='job-date'>{date}</p>
                    {description.map(({ sentence }, idx) => {
                        return (
                            <div key={idx} className='job-desc'>
                                <FaAngleDoubleRight className='job-icon' />
                                <p>{sentence}</p>
                            </div>
                        );
                    })}
                </article>
            </div>
        </section>
    );
};

export default Jobs;
