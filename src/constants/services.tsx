import React from 'react';
import { GiBookshelf, GiTiedScroll, GiDrum } from 'react-icons/gi';
import { BsMusicNoteBeamed } from 'react-icons/bs';

const services: Service[] = [
    {
        icon: <GiBookshelf className='service-icon' />,
        title: 'Blogs',
        text: `Musings and short updates on my life, my philosophy, my humble understanding.`,
        type: 'writing',
        url: 'blogs/',
    },
    {
        icon: <GiTiedScroll className='service-icon' />,
        title: 'Poetry',
        text: `I publish poetry to untangle the often difficult truths of past experiences.`,
        type: 'writing',
        url: 'poetry/',
    },
    {
        icon: <BsMusicNoteBeamed className='service-icon' />,
        title: 'Aterrima',
        text: `My band, Aterrima, in which I play drums and write lyrics. We are currently writing and recording music`,
        type: 'music',
        url: 'aterrima',
    },
    {
        icon: <GiDrum className='service-icon' />,
        title: 'Drum Transcripts',
        text: `Transcribing drums is one of the best ways to learn the instrument; sharing transcripts I've made is just plain fun`,
        type: 'music',
        url: 'transcripts',
    },
];

export default services;
