import { config } from './config';

interface PatientInfo {
  id: string;
  createdAt?: Date;
  name?: string;
  organizationId?: string;
  gender?: string;
  dob?: Date | null;
  email?: string;
  mobile?: string;
  phone?: string;
  zip?: string;
  behavidencePatientCode?: string;
  medicalPlatformsIds?: string[];
  whiteLabelsPlatformsIds?: string[];
  registrationByUserId?: string;
}

const patientInfo = {
  async getPatientInfo(patientId: string): Promise<PatientInfo> {
    try {
      const response = await fetch(`${config.baseUrl}/patient-info/${patientId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: PatientInfo = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching patient info:', error);
      throw error;
    }
  },
};

export default patientInfo;