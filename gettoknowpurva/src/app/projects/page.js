"use client"

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TopicIcon from '@mui/icons-material/Topic';
import TimelineDot from '@mui/lab/TimelineDot';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import TimelineIcon from '@mui/icons-material/Timeline';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import { Typography, Card, CardContent } from '@mui/material';

const projects = [
  {
    name: 'VR Engine',
    info: 'Leveraged 3D and VR technology to develop immersive experiences, expanding perspectives by creating interactive exercises in VR.',
    background: '#083547',
    text: '#fff',
    icon: <ViewInArIcon sx={{ fontSize: 26 }} />
  },
  {
    name: 'GatorJobs',
    info: 'Created a streamlined job search platform connecting students and employers for efficient job matching.',
    background: '#005F73',
    text: '#fff',
    icon: <CodeIcon sx={{ fontSize: 26 }} />
  },
  {
    name: 'STEM Data Consolidation',
    info: 'Automated STEM student data consolidation script using Python, resulting in 70% faster processing.',
    background: '#0A9396',
    text: '#fff',
    icon: <TopicIcon sx={{ fontSize: 26 }} />
  },
  {
    name: 'Autograder Plugin',
    info: 'Developed a software plugin for streamlined grading in programming courses, automating code testing to ensure passing validations and enhancing efficiency.',
    background: '#94D2BD',
    text: '#fff',
    icon: <TerminalIcon sx={{ fontSize: 26 }} />
  }, 
  {
    name: 'Histopathologic Cancer Detection',
    info: 'Developed classifiers (SVM, CNN, KNN) to identify metastatic cancer in lymph node scans, differentiating cancerous and non-cancerous cells with an accuracy of >90%.',
    background: '#EACE79',
    text: '#fff',
    icon: <QueryStatsIcon sx={{ fontSize: 26 }} />
  },
  {
    name: 'Hereditary Disease Prediction',
    info: 'Mined medical transcripts for familial disease patterns, enabling 92% accuracy in risk factor prediction.',
    background: '#EE9B00',
    text: '#fff',
    icon: <ScatterPlotIcon sx={{ fontSize: 26 }} />
  },
  {
    name: 'Blossom',
    info: 'Designed the frontend for a mental health app, focusing on optimal Human-Computer Interaction principles.',
    background: '#CA6702',
    text: '#fff',
    icon: <ImportantDevicesIcon sx={{ fontSize: 26 }} />
  },
  {
    name: 'Departmental Store Design',
    info: 'Developed highly scalable and optimized database architecture for a Store Management System, ensuring efficient data access and utilization.',
    background: '#BB3E03',
    text: '#fff',
    icon: <StorageIcon sx={{ fontSize: 26 }} />
  },
  {
    name: 'Visa-Wiz',
    info: 'Leveraged data visualization to analyze H-1B visa impacts on job prospects, salary trends, success rates, and labor dynamics, aiding informed decisions for candidates.',
    background: '#9B2226',
    text: '#fff',
    icon: <TimelineIcon sx={{ fontSize: 26 }} />
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

