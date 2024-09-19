import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// Define prop types
interface InternshipCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  stipend: string;
  posted: string;
  offer: string;
  isHiring: boolean;
}

const InternshipCard: React.FC<InternshipCardProps> = ({
  title,
  company,
  location,
  duration,
  stipend,
  posted,
  offer,
  isHiring,
}) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography color="text.secondary">{company}</Typography>
        <Typography color="text.secondary">{location}</Typography>
        <Typography color="text.secondary">{duration}</Typography>
        <Typography color="text.secondary">{stipend}</Typography>
        <Typography color="text.secondary">{posted}</Typography>
        <Typography color="text.secondary">{offer}</Typography>
        <Typography color="text.secondary">
          {isHiring ? 'Hiring' : 'Not Hiring'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InternshipCard;