import axios from 'axios';
import {config} from './config';

interface PatientInfo {
  id: string;
  createdAt?: Date,
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
      // use patient-info
      const response = await axios.get<PatientInfo>(`${config.baseUrl}/patient-info/${patientId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching patient info:', error);
      throw error;
    }
  },
};

export default patientInfo;