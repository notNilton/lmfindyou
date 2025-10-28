export interface EmergencyContact {
  name: string;
  phone: string;
  relationship: string;
}

export interface MedicalInfo {
  allergies: string[];
  conditions: string[];
  medications: string[];
}

export interface Contact {
  phone: string;
  email?: string;
  address?: string;
}

export interface AdditionalInfo {
  height?: string;
  weight?: string;
  identification?: string;
  lastSeen?: string;
}

export interface Person {
  id: string;
  name: string;
  age: number;
  bloodType: string;
  emergencyContact: EmergencyContact;
  medicalInfo: MedicalInfo;
  contact: Contact;
  additionalInfo?: AdditionalInfo;
}

export const peopleData: Person[] = [
  {
    id: "P001",
    name: "João Silva",
    age: 72,
    bloodType: "A+",
    emergencyContact: {
      name: "Maria Silva",
      phone: "(11) 99999-9999",
      relationship: "Filha"
    },
    medicalInfo: {
      allergies: ["Penicilina", "Frutos do mar"],
      conditions: ["Hipertensão", "Diabetes"],
      medications: ["Losartana 50mg", "Metformina 850mg"]
    },
    contact: {
      phone: "(11) 98888-8888",
      email: "joao.silva@email.com",
      address: "Rua das Flores, 123 - São Paulo/SP"
    },
    additionalInfo: {
      height: "1,70m",
      weight: "75kg",
      identification: "RG: 12.345.678-9",
      lastSeen: "Shopping Center - 15/11/2024"
    }
  },
  {
    id: "P002",
    name: "Ana Oliveira",
    age: 8,
    bloodType: "O-",
    emergencyContact: {
      name: "Carlos Oliveira",
      phone: "(11) 97777-7777",
      relationship: "Pai"
    },
    medicalInfo: {
      allergies: ["Amendoim", "Lactose"],
      conditions: ["Asma"],
      medications: ["Bombinha de Asma"]
    },
    contact: {
      phone: "(11) 96666-6666",
      address: "Av. Paulista, 1000 - São Paulo/SP"
    },
    additionalInfo: {
      height: "1,20m",
      weight: "25kg",
      lastSeen: "Escola Municipal - 15/11/2024"
    }
  },
  {
    id: "P003",
    name: "Roberto Santos",
    age: 45,
    bloodType: "B+",
    emergencyContact: {
      name: "Fernanda Santos",
      phone: "(11) 95555-5555",
      relationship: "Esposa"
    },
    medicalInfo: {
      allergies: ["Nenhuma"],
      conditions: ["Epilepsia"],
      medications: ["Carbamazepina 200mg"]
    },
    contact: {
      phone: "(11) 94444-4444",
      email: "roberto.santos@email.com"
    },
    additionalInfo: {
      height: "1,78m",
      weight: "82kg",
      identification: "RG: 98.765.432-1"
    }
  },
  {
    id: "P004", 
    name: "Marina Costa",
    age: 68,
    bloodType: "AB+",
    emergencyContact: {
      name: "Pedro Costa",
      phone: "(11) 93333-3333",
      relationship: "Filho"
    },
    medicalInfo: {
      allergies: ["Dipirona"],
      conditions: ["Artrite", "Problemas Cardíacos"],
      medications: ["AAS 100mg", "Atorvastatina 20mg"]
    },
    contact: {
      phone: "(11) 92222-2222",
      address: "Rua das Palmeiras, 456 - São Paulo/SP"
    }
  }
];