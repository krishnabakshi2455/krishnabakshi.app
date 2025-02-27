import portableTextComponents from "@/lib/portable-text-components"
import { getBlog, getBlogs } from "@/lib/sanity/utils"
import { PortableText } from "next-sanity"
import { format } from 'date-fns'
import Link from "@/components/layout/custom-link"
import Routes from '@/lib/Route';
import { Metadata } from "next"
import { notFound } from "next/navigation"
import PageReader from "@/components/page-reader"

export async function generateMetadata({ params }: { params: Promise<any> }): Promise<Metadata> {
    const { blog } = await params
    const blogPost = await getBlog(blog)
    if (!blogPost) return notFound()
    return {
        title: blogPost.title,
        description: blogPost.description,
        openGraph: {
            title: blogPost.title,
            description: blogPost.description,
            url: `${Routes.blogPost(blog)}`,
            images: {
                url: blogPost.thumbnail,
                alt: blogPost.title
            }
        },
        twitter: {
            title: blogPost.title,
            description: blogPost.description,
            images: {
                url: blogPost.thumbnail,
                alt: blogPost.title
            }
        },
        alternates: {
            canonical: `${Routes.blogPost(blog)}`
        }
    }
}

export default async function Page({ params }: { params: Promise<any>}) {
    const { blog } = await params
    const blogPost = await getBlog(blog)
    const blogs = await getBlogs()
    if (!blogPost) return notFound()
    return (
        <div className=" pt-5 bg-secondary">
            <div className="lg:flex justify-center gap-5 p-5">
                <div id='content' className="p-4 md:w-[768px] word tracking-wide leading-7 bg-white">
                    <img src={blogPost.thumbnail} alt={blogPost.title} className="w-full aspect-video object-cover mx-auto sm:mx-0" />
                    <div className="flex justify-between items-center my-3 font-serif">
                        <div>
                            <div className="whitespace-nowrap inline">
                                {format(new Date(blogPost._createdAt), 'LLL dd, yyyy ')}
                                
                            </div>
                            <div className=" whitespace-nowrap inline">
                                {/* @ts-expect-error this is necessary  */}
                                {` ${Math.ceil(blogPost.content.reduce((totalWords, block) => totalWords + (block._type === 'block' && block.children ? block.children.map(child => child.text).join(' ').split(/\s+/).filter(word => word).length : 0), 0) / 200)} min read`}
                            </div>
                        </div>
                        {/* <PageReader /> */}
                    </div>
                    <h1 className="text-4xl font-semibold my-5">{blogPost.title}</h1>
                    <PortableText value={blogPost.content} components={portableTextComponents} />
                </div>
                <div>
                    <div className="lg:sticky lg:top-24 flex flex-col items-center gap-3">
                        <Link href={Routes.contact}>
                            <img src="/images/cta.png" alt="book a session" className="w-80 bg-white" />
                        </Link>
                        <h2 className="text-2xl font-semibold">Related Posts</h2>

                        {blogs.slice(0, 5).map((blog, index) => (
                            <Link href={Routes.blogPost(blog.slug)} key={index} className="w-80 text-center bg-white">
                                <img src={blog.thumbnail} alt={`Related blog ${index}`} className="w-full aspect-video object-cover" />
                                <div className="p-3">
                                    <h3 className="font-semibold line-clamp-2 text-ellipsis">{blog.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}