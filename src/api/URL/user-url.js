
import { RBOLServerURL } from './server-url';

const baseURL = RBOLServerURL + "/api/auth";

export const UPDATE_COMPANY_ACCOUNT = baseURL + '/company/update'
export const UPDATE_LECTURER_ACCOUNT = baseURL + '/lecturer/update'
export const DELETE_LECTURER_ACCOUNT = baseURL + '/lecturer/delete'
export const UPDATE_STUDENT_ACCOUNT = baseURL + '/student/update'