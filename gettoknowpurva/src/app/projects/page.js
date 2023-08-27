"use client"

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import { Typography, Card, CardContent } from '@mui/material';

const projects = [
  {
    name: 'GatorJobs',
    info: 'Created a streamlined job search platform connecting students and employers for efficient job matching.',
    background: '#005f73',
    text: '#fff',
    icon: <CodeIcon sx={{ fontSize: 26 }} />
  },
  {
    name: 'VR Engine',
    info: 'Leveraged 3D and VR technology to develop immersive experiences, expanding perspectives by creating interactive exercises in VR.',
    background: '#0a9396',
    text: '#fff',
    icon: <ViewInArIcon sx={{ fontSize: 26 }} />
  },
  {
    name: 'Autograder Plugin',
    info: 'Developed a software plugin for streamlined grading in programming courses, automating code testing to ensure passing validations and enhancing efficiency.',
    background: '#94d2bd',
    text: '#fff',
    icon: <TerminalIcon sx={{ fontSize: 26 }} />
  },
  {
    name: 'Store DB Design',
    info: 'Developed highly scalable and optimized database architecture for a Store Management System, ensuring efficient data access and utilization.',
    background: '#EE9B00',
    text: '#fff',
    icon: <StorageIcon sx={{ fontSize: 26 }} />
  }, {
    name: 'Histopathologic Cancer Detection',
    info: 'Developed classifiers (SVM, CNN, KNN) to identify metastatic cancer in lymph node scans, differentiating cancerous and non-cancerous cells with high accuracy',
    background: '#CA6702',
    text: '#fff',
    icon: <QueryStatsIcon sx={{ fontSize: 26 }} />
  },
  {
    name: 'Blossom',
    info: 'Designed the frontend for a mental health app, focusing on optimal human-computer interaction principles.',
    background: '#AE2012',
    text: '#fff',
    icon: <ImportantDevicesIcon sx={{ fontSize: 26 }} />
  },
  {
    name: 'Visa-Wiz',
    info: 'Leveraged data visualization to analyze H-1B visa impacts on job prospects, salary trends, success rates, and labor dynamics, aiding informed decisions for candidates.',
    background: '#751A1D',
    text: '#fff',
    icon: <ImportantDevicesIcon sx={{ fontSize: 26 }} />
  },
];

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      {projects.map((project, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{
                width: 50,
                height: 50,
                backgroundColor: 'white',
                color: project.background,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid',
                borderColor: project.background,
                boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)',
              }}
            >
              {project.icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '10px', px: 2 }}>
            <Card
              sx={{
                backgroundColor: project.background,
                color: project.text,
                boxShadow: '0 6px 10px rgba(0, 0, 0, 0.3)',
                maxWidth: 400,
                marginLeft: index % 2 !== 0 ? 'auto' : 'inherit',
                marginRight: index % 2 === 0 ? 'auto' : 'inherit',
              }}
            >
              <CardContent>
                <Typography variant="h6" component="span">
                  {project.name}
                </Typography>
                <Typography sx={{ marginTop: '8px', fontSize: '17px', }}>{project.info}</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

