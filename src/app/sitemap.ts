import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function sitemap(): MetadataRoute.Sitemap {
    // --- 1. GET STATIC PAGES ---
    const staticRoutes = [
        '/',
        '/contact',
        '/portfolio',
        '/blog',
        '/loft-conversion',
        '/house-extension',
        '/refurbishment'
    ].map((route) => ({
        url: `https://www.plumbroslofts.co.uk${route}`,
        lastModified: new Date().toISOString(),
        priority: route === '/' ? 1.0 : 0.8, // Homepage is highest priority
    }));

    // --- 2. GET DYNAMIC BLOG POSTS ---
    const postsDirectory = path.join(process.cwd(), 'src', 'posts');
    const postFilenames = fs.readdirSync(postsDirectory);
    const blogRoutes = postFilenames.map(filename => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        return {
            url: `https://www.plumbroslofts.co.uk/blog/${filename.replace('.md', '')}`,
            lastModified: new Date(data.date).toISOString(),
            priority: 0.7,
        };
    });

    // --- 3. GET DYNAMIC PORTFOLIO PROJECTS ---
    const projectsDirectory = path.join(process.cwd(), 'src', 'projects');
    const projectFilenames = fs.readdirSync(projectsDirectory);
    const projectRoutes = projectFilenames.map(filename => {
        const filePath = path.join(projectsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        return {
            url: `https://www.plumbroslofts.co.uk/portfolio/${filename.replace('.md', '')}`,
            lastModified: new Date(data.date).toISOString(),
            priority: 0.6,
        };
    });


    // --- 4. COMBINE ALL ROUTES ---
    return [
        ...staticRoutes,
        ...blogRoutes,
        ...projectRoutes,
    ];
}