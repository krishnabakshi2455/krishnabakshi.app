import { getlanguages, getlibrariesframeworks, getbackend, getdatabase, gettools } from '@/lib/sanity/utils'
import { SKILLS } from '@/types';



export const fetchLanguages = async (): Promise<SKILLS[]> => getlanguages();
export const fetchLibrariesFrameworks = async (): Promise<SKILLS[]> =>
    getlibrariesframeworks();
export const fetchBackend = async (): Promise<SKILLS[]> => getbackend();
export const fetchDatabase = async (): Promise<SKILLS[]> => getdatabase();
export const fetchTools = async (): Promise<SKILLS[]> => gettools();