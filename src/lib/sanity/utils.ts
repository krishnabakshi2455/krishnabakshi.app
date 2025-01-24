import { createClient, groq } from "next-sanity";
import { Blog, SKILLS, Project, Experience,Education } from "@/types";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-06-01",
  useCdn: false
})

export async function getBlogs(): Promise<Blog[]> {
  return client.fetch(
    groq`*[_type == "blog"]{
      _id,
      _createdAt,
      _updatedAt,
      title,
      "slug": slug.current,
      description,
      "thumbnail": thumbnail.asset->url
    }| order(_createdAt desc)`
  )
}
export async function getlanguages(): Promise<SKILLS[]> {
  return client.fetch(
    groq`*[_type == "languages"]{
      _id,
      title,
      "thumbnail": thumbnail.asset->url
    }| order(_createdAt desc)`
  )
}

export async function getlibrariesframeworks(): Promise<SKILLS[]> {
  return client.fetch(
    groq`*[_type == "libraries-frameworks"]{
      _id,
      title,
      "thumbnail": thumbnail.asset->url
    }| order(_createdAt desc)`
  )
}


export async function getbackend(): Promise<SKILLS[]> {
  return client.fetch(
    groq`*[_type == "backend"]{
      _id,
      title,
      "thumbnail": thumbnail.asset->url
    }| order(_createdAt desc)`
  )
}



export async function getdatabase(): Promise<SKILLS[]> {
  return client.fetch(
    groq`*[_type == "database"]{
      _id,
      title,
      "thumbnail": thumbnail.asset->url
    }| order(_createdAt desc)`
  )
}

export async function gettools(): Promise<SKILLS[]> {
  return client.fetch(
    groq`*[_type == "tools"]{
      _id,
      title,
      "thumbnail": thumbnail.asset->url
    }| order(_createdAt desc)`
  )
}
export async function getprojects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "projects"]{
      _id,
      title,
      description,
      company,
      livelink,
      "thumbnail": thumbnail.asset->url
    }| order(_createdAt desc)`
  )
}
export async function gethomeprojects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "homeprojects"]{
      _id,
      title,
      description,
      sourcecodelink,
      livelink,
      "thumbnail": thumbnail.asset->url
    }| order(_createdAt desc)`
  )
}

export async function getexperience(): Promise<Experience[]> {
  return client.fetch(
    groq`*[_type == "experience"]{
      _id,
      title,
      organisation,
      date,
      location,
      description
     }| order(_createdAt desc)`
  )
}

export async function geteducation(): Promise<Education[]> {
  return client.fetch(
    groq`*[_type == "education"]{
      _id,
      title,
      organisation,
      date,
      location,
     }| order(_createdAt desc)`
  )
}