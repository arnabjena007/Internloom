import React from 'react';
import { Container, Typography } from '@mui/material';
import InternshipCard from '../../components/internshipcard';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Internships
      </Typography>
      {/* Internship Cards */}
      <InternshipCard
        title="Certification Courses"
        company="Internshala Trainings"
        location="Learn From Home"
        duration="4 - 8 Weeks"
        stipend="Immediately"
        posted="Govt. Certified"
        offer="Buy 1, Get 1 Free"
        isHiring={false}
      />
      <InternshipCard
        title="Digital Marketing"
        company="Lead Mines Media"
        location="Mumbai"
        duration="3 Months"
        stipend="₹10,000/month"
        posted="1 week ago"
        offer="Internship with job offer"
        isHiring={true}
      />
    </Container>
  );
}