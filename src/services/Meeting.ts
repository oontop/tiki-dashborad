
import axios from 'axios';
import {config} from './config';

// types
export enum MeetingType {
    NONE = 0,
    CCM = 1,
    RPM = 2,
    F2F = 3,
};

export enum UserActivityType {
    NONE = 0,
    PHONECALL = 1,
    RENEWALRX = 2,
    PHQ9 = 3,
    DOCUMENTATION = 4,
};

export interface PatientData {
    name: string;
    dob: Date | null;
    gender?: string;
    zip?: string;
    email?: string;
    phone?: string;
    mobile?: string;
}

export enum ScrapperPlatform {
    NONE = 0,
    RPM = 1,
    OpenEMR = 2,
    MedPod = 3,
    AthenaHealth = 4,
    EagleMedWorks = 5,
    AdvancedMD = 7,
}

export interface Meeting {
    patientData: PatientData;
    internalPlatformPatientId?: string;
    meetingComments?: MeetingComment[];
    meetingType?: MeetingType;
    userActivityType?: UserActivityType[];
    startDate?: Date;
    endDate?: Date;
    totalTime?: number;
    platform: ScrapperPlatform
    platformUrl: string;
    platformId: string;
}

export interface MeetingComment {
    id: string;
    date: Date;
    note?: string;
}


const meetingService = {
    async meetingFilterByDates(registrationByUserId: string, startDate: Date, endDate: Date): Promise<Meeting[]> {
        try {
            const response = await axios.post<Meeting[]>(`${config.baseUrl}/meeting/filter/dates`, {
                registrationByUserId, 
                startDate, 
                endDate
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching meetings:', error);
            throw error;
        }
    },
    async meetingFilterByPatientId(registrationByUserId: string, internalPlatformPatientId: string): Promise<Meeting[]> {
        try {
            const response = await axios.post<Meeting[]>(`${config.baseUrl}/meeting/filter/patient-id`, {
                registrationByUserId,
                internalPlatformPatientId
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching meetings:', error);
            throw error;
        }
    },
    async meetingFilterByPatientIdAndDates(registrationByUserId: string, patientName: string, startDate: Date, endDate: Date): Promise<Meeting[]> {
        try {
            const response = await axios.post<Meeting[]>(`${config.baseUrl}/meeting/filter/patient-dates`, {
                registrationByUserId,
                patientName,
                startDate,
                endDate
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching meetings:', error);
            throw error;
        }
    },
    async meetingFilterByPatientName(registrationByUserId: string, patientName: string): Promise<Meeting[]> {
        try {
            const response = await axios.post<Meeting[]>(`${config.baseUrl}/meeting/filter/patient-name`, {
                registrationByUserId,
                patientName,
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching meetings:', error);
            throw error;
        }
    },
    async meetingsToCSV(meetings: Meeting[], name: string, startDate: Date, endDate: Date): Promise<any> {
        try {
            const response = await axios.post<Meeting[]>(`${config.baseUrl}/meeting/csv`, {
                meetings,
                name,
                startDate,
                endDate 
            });
            return response.data;
        } catch (error) {
            console.error('Error exporting meetings to CSV:', error);
            throw error;
        }
    }
};
  
export default meetingService;