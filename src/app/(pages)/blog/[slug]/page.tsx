import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// --- TYPE DEFINITION ---
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// --- DYNAMIC METADATA ---
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const markdownWithMeta = fs.readFileSync(
    path.join("src", "posts", `${slug}.md`),
    "utf-8"
  );
  const { data: frontmatter } = matter(markdownWithMeta);
  return {
    title: `${frontmatter.title} | Plumbros Lofts Blog`,
    description: frontmatter.excerpt,
  };
}

// --- STATIC PARAMS FOR BUILD ---
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src", "posts"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

// --- HELPER FUNCTION TO READ POST DATA ---
const getPost = (slug: string) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("src", "posts", `${slug}.md`),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { frontmatter, content };
};

// --- MAIN BLOG ARTICLE PAGE ---
export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const { frontmatter, content } = getPost(slug);

  // --- NEW: DYNAMIC ARTICLE SCHEMA GENERATION ---
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": frontmatter.title,
    "image": `https://www.plumbroslofts.co.uk${frontmatter.cover_image}`, // Full URL for the image
    "datePublished": new Date(frontmatter.date).toISOString(),
    "dateModified": new Date(frontmatter.date).toISOString(),
    "author": {
        "@type": "Organization",
        "name": "Plum & Bros Lofts"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Plum & Bros Lofts",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.plumbroslofts.co.uk/images/logo.png" // Full URL for your logo
        }
    },
    "description": frontmatter.excerpt
  };

  return (
    <main className="bg-white">
      {/* --- NEW: ARTICLE SCHEMA SCRIPT INJECTED HERE --- */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article>
        {/* ARTICLE HEADER */}
        <header className="py-16 md:py-24 text-center">
          <div className="container mx-auto max-w-4xl px-6">
            <Link
              href="/blog"
              className="text-sm font-bold text-gray-500 hover:text-[var(--color-brand-primary)] uppercase transition-colors"
            >
              &larr; Back to Blog
            </Link>

            <h1 className="text-4xl md:text-6xl font-extrabold font-[var(--font-montserrat)] text-[var(--color-brand-dark)] mt-4 mb-6">
              {frontmatter.title}
            </h1>

            <p className="text-gray-500">
              Published on{" "}
              {new Date(frontmatter.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </header>

        {/* FEATURED IMAGE */}
        <div className="relative h-96 w-full mb-12">
          <Image
            src={frontmatter.cover_image}
            alt={frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ARTICLE CONTENT */}
        <div className="container mx-auto max-w-3xl px-6 pb-24">
          <div
            className="prose lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
        </div>
      </article>
    </main>
  );
}