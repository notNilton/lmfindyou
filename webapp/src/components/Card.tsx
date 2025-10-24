import React from 'react';
import '../styles/card.css';

interface CardProps {
  person: {
    id: string;
    name: string;
    age: number;
    bloodType: string;
    emergencyContact: {
      name: string;
      phone: string;
      relationship: string;
    };
    medicalInfo: {
      allergies: string[];
      conditions: string[];
      medications: string[];
    };
    contact: {
      phone: string;
      email?: string;
      address?: string;
    };
    additionalInfo?: {
      height?: string;
      weight?: string;
      identification?: string;
      lastSeen?: string;
    };
  };
  onGenerateQR?: () => void;
  onContactEmergency?: () => void;
}

const Card: React.FC<CardProps> = ({ person, onGenerateQR, onContactEmergency }) => {
  return (
    <div className="card">
      {/* Cabeçalho com informações principais */}
      <div className="card-header">
        <div className="person-avatar">
          {person.name.charAt(0).toUpperCase()}
        </div>
        <div className="person-basic-info">
          <h3 className="person-name">{person.name}</h3>
          <div className="person-details">
            <span className="person-age">{person.age} anos</span>
            <span className="person-blood-type">Tipo Sanguíneo: {person.bloodType}</span>
          </div>
        </div>
      </div>

      {/* Informações de contato de emergência */}
      <div className="card-section">
        <h4 className="section-title">Contato de Emergência</h4>
        <div className="emergency-contact">
          <p><strong>Nome:</strong> {person.emergencyContact.name}</p>
          <p><strong>Parentesco:</strong> {person.emergencyContact.relationship}</p>
          <p><strong>Telefone:</strong> {person.emergencyContact.phone}</p>
        </div>
      </div>

      {/* Informações médicas críticas */}
      <div className="card-section">
        <h4 className="section-title">Informações Médicas</h4>
        
        <div className="medical-info">
          <div className="info-group">
            <strong>Alergias:</strong>
            {person.medicalInfo.allergies.length > 0 ? (
              <ul className="info-list">
                {person.medicalInfo.allergies.map((allergy, index) => (
                  <li key={index}>{allergy}</li>
                ))}
              </ul>
            ) : (
              <span className="no-info">Nenhuma alergia registrada</span>
            )}
          </div>

          <div className="info-group">
            <strong>Condições:</strong>
            {person.medicalInfo.conditions.length > 0 ? (
              <ul className="info-list">
                {person.medicalInfo.conditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            ) : (
              <span className="no-info">Nenhuma condição registrada</span>
            )}
          </div>

          <div className="info-group">
            <strong>Medicações:</strong>
            {person.medicalInfo.medications.length > 0 ? (
              <ul className="info-list">
                {person.medicalInfo.medications.map((medication, index) => (
                  <li key={index}>{medication}</li>
                ))}
              </ul>
            ) : (
              <span className="no-info">Nenhuma medicação registrada</span>
            )}
          </div>
        </div>
      </div>

      {/* Informações de contato pessoal */}
      <div className="card-section">
        <h4 className="section-title">Contato Pessoal</h4>
        <div className="personal-contact">
          <p><strong>Telefone:</strong> {person.contact.phone}</p>
          {person.contact.email && (
            <p><strong>Email:</strong> {person.contact.email}</p>
          )}
          {person.contact.address && (
            <p><strong>Endereço:</strong> {person.contact.address}</p>
          )}
        </div>
      </div>

      {/* Informações adicionais */}
      {person.additionalInfo && (
        <div className="card-section">
          <h4 className="section-title">Informações Adicionais</h4>
          <div className="additional-info">
            {person.additionalInfo.height && (
              <p><strong>Altura:</strong> {person.additionalInfo.height}</p>
            )}
            {person.additionalInfo.weight && (
              <p><strong>Peso:</strong> {person.additionalInfo.weight}</p>
            )}
            {person.additionalInfo.identification && (
              <p><strong>Identificação:</strong> {person.additionalInfo.identification}</p>
            )}
            {person.additionalInfo.lastSeen && (
              <p><strong>Última localização:</strong> {person.additionalInfo.lastSeen}</p>
            )}
          </div>
        </div>
      )}

      {/* Ações */}
      <div className="card-actions">
        {onGenerateQR && (
          <button className="card-button primary" onClick={onGenerateQR}>
            Gerar QR Code
          </button>
        )}
        {onContactEmergency && (
          <button className="card-button secondary" onClick={onContactEmergency}>
            Contatar Emergência
          </button>
        )}
      </div>

      {/* ID da pessoa */}
      <div className="card-footer">
        <small className="person-id">ID: {person.id}</small>
      </div>
    </div>
  );
};

export default Card;