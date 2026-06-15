import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.plumbroslofts.co.uk';

    // --- 1. CONFIGURE STATIC PAGES WITH SPEARHEAD PRIORITY ---
    const staticPages = [
        { route: '/', priority: 1.0, changeFrequency: 'yearly' as const },
        { route: '/loft-conversion', priority: 0.9, changeFrequency: 'monthly' as const }, // Spearhead
        { route: '/house-extension', priority: 0.8, changeFrequency: 'monthly' as const },
        { route: '/refurbishment', priority: 0.8, changeFrequency: 'monthly' as const },
        { route: '/portfolio', priority: 0.7, changeFrequency: 'monthly' as const },
        { route: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
        { route: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
    ];

    const staticRoutes: MetadataRoute.Sitemap = staticPages.map(({ route, priority, changeFrequency }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency,
        priority,
    }));

    // --- 2. GET DYNAMIC BLOG POSTS ---
    let blogRoutes: MetadataRoute.Sitemap = [];
    try {
        const postsDirectory = path.join(process.cwd(), 'src', 'posts');
        if (fs.existsSync(postsDirectory)) {
            const postFilenames = fs.readdirSync(postsDirectory);
            blogRoutes = postFilenames.map(filename => {
                const filePath = path.join(postsDirectory, filename);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const { data } = matter(fileContents);
                return {
                    url: `${baseUrl}/blog/${filename.replace('.md', '')}`,
                    lastModified: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
                    changeFrequency: 'monthly',
                    priority: 0.6,
                };
            });
        }
    } catch (error) {
        console.warn('Blog directory not found or error reading posts.');
    }

    // --- 3. GET DYNAMIC PORTFOLIO PROJECTS ---
    let projectRoutes: MetadataRoute.Sitemap = [];
    try {
        const projectsDirectory = path.join(process.cwd(), 'src', 'projects');
        if (fs.existsSync(projectsDirectory)) {
            const projectFilenames = fs.readdirSync(projectsDirectory);
            projectRoutes = projectFilenames.map(filename => {
                const filePath = path.join(projectsDirectory, filename);
                const fileContents = fs.readFileSync(filePath, 'utf8');
                const { data } = matter(fileContents);
                return {
                    url: `${baseUrl}/portfolio/${filename.replace('.md', '')}`,
                    lastModified: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
                    changeFrequency: 'yearly',
                    priority: 0.6,
                };
            });
        }
    } catch (error) {
        console.warn('Projects directory not found or error reading projects.');
    }

    // --- 4. COMBINE ALL ROUTES ---
    return [
        ...staticRoutes,
        ...blogRoutes,
        ...projectRoutes,
    ];
}