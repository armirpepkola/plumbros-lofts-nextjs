import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PortfolioGrid from '@/components/PortfolioGrid'; // Import new client component
import type { Metadata } from 'next';

// --- SEO METADATA ADDED HERE ---
export const metadata: Metadata = {
  title: "Our Work | Portfolio of Completed Projects",
  description: "View a showcase of our completed loft conversion, house extension, and refurbishment projects across London. See the quality of our craftsmanship.",
};

// --- DATA FETCHING (Runs only on the server) ---
const getProjects = () => {
    const files = fs.readdirSync(path.join(process.cwd(), 'src', 'projects'));
    const projects = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'src', 'projects', filename), 'utf-8');
        const { data: frontmatter } = matter(markdownWithMeta);
        return { 
            slug: filename.replace('.md', ''), 
            frontmatter: {
                // Ensure all frontmatter properties are explicitly included
                title: frontmatter.title,
                category: frontmatter.category,
                date: frontmatter.date,
                featured_image: frontmatter.featured_image,
                images: frontmatter.images,
            }
        };
    });
    return projects.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
};

export default function PortfolioPage() {
    // 1. Fetch data on the server
    const allProjects = getProjects();

    return (
        <main className="bg-white">
            <section className="py-20 md:py-28">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold font-[var(--font-montserrat)] text-[var(--color-brand-dark)] mb-4">Our Work</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">A showcase of our commitment to quality, craftsmanship, and client satisfaction. Explore our completed projects.</p>
                    </div>

                    {/* 2. Pass the data to the client component as a prop */}
                    <PortfolioGrid projects={allProjects} />
                </div>
            </section>
        </main>
    );
}