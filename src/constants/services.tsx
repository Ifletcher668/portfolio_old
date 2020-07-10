import React from 'react';
import { FaCode, FaSketch, FaAndroid } from 'react-icons/fa';

const services: Service[] = [
    {
        icon: <FaCode className='service-icon' />,
        title: 'web development',
        text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
    },
    {
        icon: <FaSketch className='service-icon' />,
        title: 'web design',
        text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
    },
    {
        icon: <FaAndroid className='service-icon' />,
        title: 'app design',
        text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
    },
];

export default services;
