import { config, getConfig, updateConfig, type Config } from './config';
import patientInfo from './patientInfo';
import patientTimeTracking from './patientTimeTracking'; 
import meetingService, {type Meeting} from "./Meeting";

export {
    patientInfo,
    patientTimeTracking,
    meetingService,
    Meeting,
    config,
    getConfig,
    updateConfig,
    Config,
}