import { createClient, groq } from "next-sanity";
import { Blog, CaseStudy, Category, Location, Service } from "@/types";

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

export async function getBlog(slug: string): Promise<Blog> {
    return client.fetch(
        groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      _updatedAt,
      title,
      "slug": slug.current,
      description,
      keywords,
      "thumbnail": thumbnail.asset->url,
      content
    }`,
        { slug }
    )
}

export async function getCategories(): Promise<Category[]> {
    return client.fetch(
        groq`*[_type == "category"]{
      _id,
      _createdAt,
      _updatedAt,
      "slug": slug.current,
      order,
      name,
      title,
      description,
      list,
      "image": image.asset->url
    }| order(order asc)`,
        {},
        {
            cache: 'force-cache',
            next: {
                tags: ['category']
            }
        }
    )
}

export async function getServices(): Promise<Service[]> {
    return client.fetch(
        groq`*[_type == "service"]{
      _id,
      _createdAt,
      _updatedAt,
      name,
      description,
      "slug": slug.current,
      "banner": banner.asset->url,
      "image": image.asset->url,
      faq,
      ourwork{
        ...,
        images[]{
          "url": asset->url
        }
      },
      category->{
        ...,
        "slug": slug.current
      }
    }| order(name asc)`,
        {},
        {
            cache: 'force-cache',
            next: {
                tags: ['service']
            }
        }
    )
}

export async function getService(slug: string): Promise<Service> {
    return client.fetch(
        groq`*[_type == "service" && slug.current == $slug][0]{
      _id,
      _createdAt,
      _updatedAt,
      name,
      "slug": slug.current,
      description,
      "banner": banner.asset->url,
      "image": image.asset->url,
      title,
      section1,
      ourservices{
        ...,
        services[]{
          ...,
          "image": image.asset->url
        }
      },
      beforeafter{
        ...,
        image1{
          "before": before.asset->url,
          "after": after.asset->url
        },
        image2{
          "before": before.asset->url,
          "after": after.asset->url
        }
      },
      ourwork{
        ...,
        images[]{
          "url": asset->url
        }
      },
      faq
    }`,
        { slug },
        {
            // cache: 'force-cache',
            next: {
                tags: ['service']
            }
        }
    )
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
    return client.fetch(
        groq`*[_type == "caseStudy"]{
      _id,
      _createdAt,
      _updatedAt,
      title,
      content,
      "image": image.asset->url
    }| order(title asc)`,
        {},
        {
            cache: 'force-cache',
            next: {
                tags: ['caseStudy']
            }
        }
    )
}

export async function getLocations(): Promise<Location[]> {
    return client.fetch(
        groq`*[_type == "location"]{
      _id,
      _createdAt,
      _updatedAt,
      locationinput,
      description,
      "slug": slug.current,
    }| order(name asc)`,
        {},
        {
            cache: 'force-cache',
            next: {
                tags: ['location']
            }
        }
    )
}

export async function getLocation(slug: string): Promise<Location> {
    return client.fetch(
        groq`*[_type == "location" && slug.current == $slug][0]{
      _id,
      _createdAt,
      _updatedAt,
      locationinput,
      description,
      "slug": slug.current,
      description
    }`,
        { slug },
        {
            cache: 'force-cache',
            next: {
                tags: ['location']
            }
        }
    )
}