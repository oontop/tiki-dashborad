import { config } from './config';

interface PatientTimeTracking {
  id: string;
  createdAt?: Date;
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
      const response = await fetch(`${config.baseUrl}/patient-info/${patientId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: PatientTimeTracking = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching patient info:', error);
      throw error;
    }
  },
};

export default patientTimeTracking;