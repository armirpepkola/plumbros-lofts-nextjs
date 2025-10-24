import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const { frontmatter } = await getPost(slug);
    return { title: `${frontmatter.title} | Our Portfolio`, description: `View details of our ${frontmatter.category} project: ${frontmatter.title}` };
}

export async function generateStaticParams() {
    const files = await fs.readdir(path.join('src', 'projects'));
    return files.map(filename => ({ slug: filename.replace('.md', '') }));
}

const getPost = async (slug: string) => {
    const markdownWithMeta = await fs.readFile(path.join('src', 'projects', `${slug}.md`), 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);
    return { frontmatter, content };
};

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const { frontmatter, content } = await getPost(slug);

    return (
        <main className="bg-white">
            <article>
                <header className="bg-brand-light py-20 md:py-28">
                    <div className="container mx-auto max-w-4xl px-6 text-center">
                        
                        {/* --- BREADCRUMB ADDED HERE --- */}
                        <Link href="/portfolio" className="text-sm font-bold text-gray-500 hover:text-[var(--color-brand-primary)] uppercase transition-colors mb-4 inline-block">
                            &larr; Back to Portfolio
                        </Link>

                        <p className="text-sm font-bold text-[var(--color-brand-primary)] uppercase mb-2">{frontmatter.category}</p>
                        <h1 className="text-4xl md:text-6xl font-extrabold font-[var(--font-montserrat)] text-[var(--color-brand-dark)]">
                            {frontmatter.title}
                        </h1>
                    </div>
                </header>

                <div className="container mx-auto max-w-7xl px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div 
                            className="lg:col-span-2 prose lg:prose-xl max-w-none" 
                            dangerouslySetInnerHTML={{ __html: marked(content) }} 
                        />
                        <aside className="lg:sticky lg:top-28 h-fit bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold font-[var(--font-montserrat)] mb-4">Project Details</h3>
                            <ul>
                                <li className="flex justify-between py-2 border-b"><strong>Date:</strong> <span>{new Date(frontmatter.date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</span></li>
                                <li className="flex justify-between py-2 border-b"><strong>Service:</strong> <span>{frontmatter.category}</span></li>
                            </ul>
                        </aside>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-center mb-8">Project Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {frontmatter.images.map((img: string, index: number) => (
                                <div key={index} className="relative h-96 rounded-lg overflow-hidden shadow-md">
                                    <Image src={img} alt={`${frontmatter.title} gallery image ${index + 1}`} fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}