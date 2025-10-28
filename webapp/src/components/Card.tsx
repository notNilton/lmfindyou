import React from 'react';
import { 
  Card as MuiCard,
  CardContent,
  CardActions,
  Button,
  Chip,
  Divider,
  Box,
  Typography
} from '@mui/material';
import { type Person } from '../mock/CardMock';

interface CardProps {
  person: Person;
  onGenerateQR: () => void;
}

const Card: React.FC<CardProps> = ({ person, onGenerateQR }) => {
  return (
    <MuiCard variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" component="h2">
            {person.name}
          </Typography>
          <Chip 
            label={person.bloodType} 
            color="error" 
            size="small" 
          />
        </Box>

        <Typography color="text.secondary" gutterBottom>
          {person.age} anos • ID: {person.id}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle2" gutterBottom>
          Contato de Emergência
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {person.emergencyContact.name} ({person.emergencyContact.relationship})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {person.emergencyContact.phone}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" gutterBottom>
            Condições Médicas
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {person.medicalInfo.conditions.map((condition, index) => (
              <Chip key={index} label={condition} size="small" variant="outlined" />
            ))}
          </Box>
        </Box>

        {person.additionalInfo?.lastSeen && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              Última Localização
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {person.additionalInfo.lastSeen}
            </Typography>
          </Box>
        )}
      </CardContent>

      <CardActions>
        <Button 
          size="small" 
          variant="contained" 
          onClick={onGenerateQR}
          fullWidth
        >
          Gerar QR Code
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;