import React from 'react';
import { GiBookshelf, GiTiedScroll, GiDrum } from 'react-icons/gi';
import { BsMusicNoteBeamed } from 'react-icons/bs';

const services: Service[] = [
    {
        icon: <GiBookshelf className='service-icon' />,
        title: 'Blogs',
        text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
        type: 'writing',
        url: 'blogs/',
    },
    {
        icon: <GiTiedScroll className='service-icon' />,
        title: 'Poetry',
        text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
        type: 'writing',
        url: 'poetry/',
    },
    {
        icon: <BsMusicNoteBeamed className='service-icon' />,
        title: 'Aterrima',
        text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
        type: 'music',
        url: 'aterrima',
    },
    {
        icon: <GiDrum className='service-icon' />,
        title: 'Drum Transcripts',
        text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
        type: 'music',
        url: 'transcripts',
    },
];

export default services;
