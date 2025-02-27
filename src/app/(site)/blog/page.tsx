import Link from "@/components/layout/custom-link";
import Routes from '@/lib/Route';
import { getBlogs } from "@/lib/sanity/utils";
import { format } from "date-fns";
import { Metadata } from "next";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationEllipsis,
    PaginationPrevious,
    PaginationNext,
} from "@/components/ui/pagination"; // Adjust the import path to your project structure

export const metadata: Metadata = {
    title: "Blogs",
    description:
        "Read our latest blogs and stay updated with the latest trends in the coworking industry.",
    openGraph: {
        title: "Blogs",
        description:
            "Read our latest blogs and stay updated with the latest trends in the coworking industry.",
        url: Routes.blog,
    },
    twitter: {
        title: "Blogs",
        description:
            "Read our latest blogs and stay updated with the latest trends in the coworking industry.",
    },
    alternates: {
        canonical: `${Routes.blog}`,
    },
};

export default async function Page({
    searchParams,
}: {
    searchParams: { page?: string };
}) {
    const currentPage = parseInt(searchParams.page || "1", 10);
    const limit = 12; // Number of blogs per page
    const allBlogs = await getBlogs(); // Fetch all blogs
    const totalBlogs = allBlogs.length;

    // Slice blogs for the current page
    const start = (currentPage - 1) * limit;
    const blogs = allBlogs.slice(start, start + limit);
    const totalPages = Math.ceil(totalBlogs / limit);

    return (
        <div className="text-center mx-auto xl:w-[1280px] p-3 pt-14">
            <div className="text-3xl sm:text-4xl font-semibold mb-5 font-mono">Blog</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {blogs.map((blog, index) => (
                    <Link
                        href={Routes.blogPost(blog.slug)}
                        key={index}
                        className="bg-white text-start tracking-wider shadow-lg p-5"
                    >
                        <img
                            src={blog.thumbnail}
                            className="aspect-video w-full object-cover"
                        />
                        <p className="text-amber-900 text-start my-5 text-sm">BLOG</p>
                        <h2 className="text-xl font-semibold line-clamp-2 text-ellipsis my-3">
                            {blog.title}
                        </h2>
                        <p className="text-sm font-serif my-3">
                            {format(new Date(blog._createdAt), "LLL dd, yyyy")}
                        </p>
                        <p className="text-sm line-clamp-3 text-ellipsis my-3">
                            {blog.description}
                        </p>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <Pagination className="mt-10">
                <PaginationContent>
                    {currentPage > 1 && (
                        <PaginationItem>
                            <PaginationPrevious
                                href={`${Routes.blog}?page=${currentPage - 1}`}
                            />
                        </PaginationItem>
                    )}

                    {Array.from({ length: totalPages }, (_, index) => {
                        const page = index + 1;
                        return (
                            <PaginationItem key={page}>
                                <PaginationLink href={`${Routes.blog}?page=${page}`} isActive={page===currentPage}>
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })}

                    {currentPage < totalPages && (
                        <PaginationItem>
                            <PaginationNext
                                href={`${Routes.blog}?page=${currentPage + 1}`}
                            />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
        </div>
    );
}
