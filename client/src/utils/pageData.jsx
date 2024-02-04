// keywords list
import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdChecklist } from 'react-icons/md';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';
//dashboard links
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { GrShieldSecurity } from 'react-icons/gr';

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

export const dashboardLinks = [
  {
    text: 'overview',
    path: '.',
    icon: <IoBarChartSharp />,
  },
  {
    text: 'all jobs',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    text: 'add job',
    path: 'add-job',
    icon: <AiOutlineFileAdd />,
  },
  {
    text: 'profile',
    path: 'profile',
    icon: <FiUser />,
  },
  {
    text: 'admin',
    path: 'admin',
    icon: <GrShieldSecurity />,
  },
];

// context: `View a comprehensive list of companies you've applied to.`,
