import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaListCheck } from 'react-icons/fa6';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';

export const keywordsList = [
  {
    id: 1,
    title: `Application Tracking`,
    context: `Application Tracking`,
    icon: <FaListCheck />,
  },
  {
    id: 2,
    title: `Stage Management`,
    context: `Easily edit and update your progress.`,
    icon: <AiOutlineEdit />,
  },
  {
    id: 3,
    title: `Company Insights`,
    context: `View a comprehensive list of companies you've applied to.`,
    icon: <MdOutlineScreenSearchDesktop />,
  },
];
