import React from 'react'
import {Header} from '../titles/titles'
import {Link} from 'gatsby'
import {GiBookshelf, GiTiedScroll, GiDrum} from 'react-icons/gi'
import {BsMusicNoteBeamed} from 'react-icons/bs'

const services: Service[] = [
    {
        icon: <GiBookshelf className="service-icon" />,
        title: 'Blogs',
        text: `Musings and short updates on my life, my philosophy, my humble understanding.`,
        type: 'writing',
        url: 'blogs/',
    },
    {
        icon: <GiTiedScroll className="service-icon" />,
        title: 'Poetry',
        text: `I publish poetry to untangle the often difficult truths of past experiences.`,
        type: 'writing',
        url: 'poetry/',
    },
    {
        icon: <BsMusicNoteBeamed className="service-icon" />,
        title: 'Aterrima',
        text: `My band, Aterrima, in which I play drums and write lyrics. We are currently writing and recording music`,
        type: 'music',
        url: 'aterrima',
    },
    {
        icon: <BsMusicNoteBeamed className="service-icon" />,
        title: 'Weald and Woe',
        text: `"And into the forest I go, to lose my mind and find my soul." - John Muir `,
        type: 'music',
        url: 'weald-and-woe',
    },
    {
        icon: <GiDrum className="service-icon" />,
        title: 'Drum Transcripts',
        text: `Transcribing drums is one of the best ways to learn the instrument; sharing transcripts I've made is just plain fun`,
        type: 'music',
        url: 'transcripts',
    },
]

interface IServices extends IProps {
    type: string
    children: React.ReactNode
}

const Services: React.FC<IServices> = (props: IServices) => {
    const {type, title, children} = props

    return (
        <>
            <Header title={title || 'services'} center={true} value={1} major />
            {children}
            <section className="section-center services-center">
                {services
                    .filter(service => service.type === type)
                    .map((service, idx) => {
                        const {icon, title, text, url} = service
                        return (
                            <Link
                                to={`${
                                    type === 'writing' ? /writing/ : /music/
                                }${url}`}
                            >
                                <article key={idx} className="card">
                                    {icon}
                                    <h4>{title}</h4>
                                    <div className="underline"></div>
                                    <p>{text}</p>
                                </article>
                            </Link>
                        )
                    })}
            </section>
        </>
    )
}

export default Services
