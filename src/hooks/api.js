


const loginUrl = process.env.LOGIN_URL || 'http://localhost:3535';
const apiUrl = process.env.API_URL || ' http://localhost:9999/api';
const domain = process.env.DOMAIN || 'localhost:3536';


const Routes = {
	getBlog: () => {
		return `/blog`;
	},
	getBlogById: (userId) => {
		return `/blog/${userId}`;
	},
	getProfile: () => {
		return `/profile/`;
	},
	getsupport: () => {
		return `/support/`;
	},
	getUser: () => {
		return `/users/user`;
	},
	addProfile: () => {
		return `/profile/`;
	},
	getEducation: () => {
		return `/education/`;
	},
	getResume: () => {
		return `/resume/`;
	},
	getReference: () => {
		return `/reference/`;
	},
	getProject: () => {
		return `/project/`;
	},getJobExperiance: () => {
		return `/jobexperiance`;
	},
	getUserbyId: (userId) => {
		return `/users/${userId}`;
	},

};

export { apiUrl, Routes, loginUrl, domain,};
