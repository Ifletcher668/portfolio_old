import React from 'react';
import { FaCode, FaSketch, FaAndroid } from 'react-icons/fa';

const services: Service[] = [
    {
        icon: <FaCode className='service-icon' />,
        title: 'Blogs',
        text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
        type: 'writing',
    },
    {
        icon: <FaSketch className='service-icon' />,
        title: 'Writing',
        text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
        type: 'writing',
    },
    {
        icon: <FaCode className='service-icon' />,
        title: 'Aterrima',
        text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
        type: 'music',
    },
    {
        icon: <FaSketch className='service-icon' />,
        title: 'Drum Transcripts',
        text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
        type: 'music',
    },
];

export default services;
