import axios from 'axios';
import {config} from './config';

interface PatientTimeTracking {
  id: string;
  createdAt?: Date,
  userID: string;
  patientID: string;
  patientName: string;
  patientDOB: Date;
  patientGender: string;
  patientEmail: string;
  providers: string[];
  providerURL: string;
  treatmentDate: Date;
  startTime: Date;
  endTime: Date;
  userIDs?: string[];
  features?: string[];
}

const patientTimeTracking = {
  async getPatientTimeTracking(patientId: string): Promise<PatientTimeTracking> {
    try {
      // use patient-info route
      const response = await axios.get<PatientTimeTracking>(`${config.baseUrl}/patient-info/${patientId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching patient info:', error);
      throw error;
    }
  },
};

export default patientTimeTracking;