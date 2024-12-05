import { atom } from "jotai";
import { getlanguages, getlibrariesframeworks, getbackend, getdatabase, gettools } from "@/lib/sanity/utils";

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
