import React from 'react';
import { 
  Box, 
  Typography, 
  Container
} from '@mui/material';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { peopleData } from '../mock/CardMock';

const Homepage: React.FC = () => {
  const handleGenerateQR = (personId: string) => {
    console.log(`Gerando QR Code para: ${personId}`);
    alert(`QR Code gerado para ${personId}`);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            SafeTrack - Sistema de Rastreamento
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Cadastre pessoas vulneráveis e gere QR Codes para identificação em situações de emergência
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" component="h2">
              Pessoas Cadastradas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {peopleData.length} pessoas no sistema
            </Typography>
          </Box>

          <Box 
            sx={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: { xs: 'center', sm: 'flex-start' }
            }}
          >
            {peopleData.map((person) => (
              <Box 
                key={person.id}
                sx={{ 
                  width: { 
                    xs: '100%', 
                    sm: 'calc(50% - 12px)',
                    md: 'calc(25% - 18px)'
                  },
                  minWidth: { xs: '280px', sm: 'auto' }
                }}
              >
                <Card
                  person={person}
                  onGenerateQR={() => handleGenerateQR(person.id)}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Homepage;