import { atom } from "jotai";
import { getlanguages, getlibrariesframeworks, getbackend, getdatabase, gettools, getexperience, geteducation, getprojects, gethomeprojects } from "@/lib/sanity/utils";

// Create Jotai atoms for asynchronous data fetching
export const fetchedLanguagesSkillsAtom = atom(async () => {
    return await getlanguages();
});

export const fetchedLibrariesFrameworksSkillsAtom = atom(async () => {
    return await getlibrariesframeworks();
});

export const fetchedBackendSkillsAtom = atom(async () => {
    return await getbackend();
});

export const fetchedDatabaseSkillsAtom = atom(async () => {
    return await getdatabase();
});

export const fetchedToolsSkillsAtom = atom(async () => {
    return await gettools();
});

export const fetchedExperienceAtom = atom(async () => { 
    return await getexperience();
});

export const fetchedEducationAtom = atom(async () => {
    return await geteducation();
});

export const fetchedProjectsAtom = atom(async () => {
    return await getprojects();
});

export const fetchedHomeProjectsAtom = atom(async () => {
    return await gethomeprojects();
});