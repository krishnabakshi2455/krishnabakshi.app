import { getlanguages, getlibrariesframeworks, getbackend, getdatabase, gettools, getprojects,getexperience } from '@/lib/sanity/utils'
import { Experience, Project, SKILLS } from '@/types';



export const fetchLanguages = async (): Promise<SKILLS[]> => getlanguages();
export const fetchLibrariesFrameworks = async (): Promise<SKILLS[]> =>getlibrariesframeworks();
export const fetchBackend = async (): Promise<SKILLS[]> => getbackend();
export const fetchDatabase = async (): Promise<SKILLS[]> => getdatabase();
export const fetchTools = async (): Promise<SKILLS[]> => gettools();
export const fetchProjects = async():Promise<Project[]> => getprojects()
export const fetchExperience = async (): Promise<Experience[]> => getexperience()
