// keywords list
import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdChecklist } from 'react-icons/md';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';
//dashboard links
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdAdminPanelSettings } from 'react-icons/md';

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
    text: 'add job',
    path: '.',
    icon: <FaWpforms />,
  },
  {
    text: 'all jobs',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    text: 'overview',
    path: 'overview',
    icon: <IoBarChartSharp />,
  },
  {
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
  {
    text: 'admin',
    path: 'admin',
    icon: <MdAdminPanelSettings />,
  },
];

// context: `View a comprehensive list of companies you've applied to.`,
