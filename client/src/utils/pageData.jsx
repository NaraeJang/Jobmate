import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdChecklist } from 'react-icons/md';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';

export const keywordsList = [
  {
    id: 1,
    title: `Application Tracking`,
    context: `Keep tabs on every job you apply for.`,
    icon: <MdChecklist />,
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
    context: `Explore the extensive list of companies you've applied to.`,
    icon: <MdOutlineScreenSearchDesktop />,
  },
];

// context: `View a comprehensive list of companies you've applied to.`,
