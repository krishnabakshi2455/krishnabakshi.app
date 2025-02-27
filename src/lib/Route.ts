const Routes = {
    home: '/',
    contact: '/contact',
    about: '/about',
    projects:"/projects",
    blog: "/blog",
    blogPost: (slug: string) => `/blog/${slug}`,
};
export default Routes;