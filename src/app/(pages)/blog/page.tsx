import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Metadata } from 'next'; // Import the Metadata type

// --- SEO METADATA ADDED HERE ---
export const metadata: Metadata = {
  title: "Blog | Insights & Inspiration for Your Home",
  description: "Explore our expert guide for loft conversion and house extension ideas, tips, and the latest trends in home transformation in London.",
};

const getPosts = () => {
    const files = fs.readdirSync(path.join('src', 'posts'));
    const posts = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('src', 'posts', filename), 'utf-8');
        const { data: frontmatter } = matter(markdownWithMeta);
        return {
            slug: filename.replace('.md', ''),
            frontmatter,
        };
    });
    return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
};

export default function BlogPage() {
    const posts = getPosts();
    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);

    return (
        <main className="bg-white">
            <section className="py-20 md:py-28">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-4">
                            Insights & Inspiration
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Your expert guide to creating beautiful, functional spaces. Explore our articles for ideas, tips, and the latest trends in home transformation.
                        </p>
                    </div>

                    {/* --- FEATURED POST --- */}
                    {featuredPost && (
                        <Link href={`/blog/${featuredPost.slug}`} aria-label={`Read the full article: ${featuredPost.frontmatter.title}`} className="group block mb-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                                    <Image src={featuredPost.frontmatter.cover_image} alt={featuredPost.frontmatter.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-brand-primary uppercase mb-2">{new Date(featuredPost.frontmatter.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                    <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                                        {featuredPost.frontmatter.title}
                                    </h2>
                                    <p className="text-gray-700 text-lg mb-4">{featuredPost.frontmatter.excerpt}</p>
                                    <span className="font-bold group-hover:underline">Read More &rarr;</span>
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* --- POSTS GRID --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherPosts.map(post => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} aria-label={`Read the full article: ${post.frontmatter.title}`} className="group block">
                                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-4">
                                    <Image src={post.frontmatter.cover_image} alt={post.frontmatter.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <p className="text-xs font-bold text-gray-500 uppercase mb-2">{new Date(post.frontmatter.date).toLocaleDateString('en-GB')}</p>
                                <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                                    {post.frontmatter.title}
                                </h3>
                                {/* --- NEW, TRUNCATED EXCERPT --- */}
                                <p className="text-gray-600 text-sm line-clamp-2">
                                    {post.frontmatter.excerpt}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}