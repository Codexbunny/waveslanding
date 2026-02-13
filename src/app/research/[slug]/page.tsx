import { Metadata } from 'next';
import { getLocale, getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ResearchPostClient from './ResearchPostClient';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
  // This will be populated from the messages file
  // For now, return the known slugs
  return [
    { slug: 'elliott-wave-introduction' },
    { slug: 'forex-market-structure' },
    { slug: 'risk-management-principles' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const messages = await getMessages() as Record<string, Record<string, unknown>>;
  
  const posts = messages.research?.posts as Record<string, {
    title: string;
    excerpt: string;
    author: string;
  }> | undefined;
  
  const post = posts?.[slug];
  
  if (!post) {
    return {
      title: 'Post Not Found | Waves Logix',
    };
  }
  
  return {
    title: `${post.title} | Waves Logix Research`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      locale,
      type: 'article',
      siteName: 'Waves Logix',
    },
    alternates: {
      languages: {
        'en': `/research/${slug}`,
        'es': `/research/${slug}`,
      },
    },
  };
}

export default async function ResearchPostPage({ params }: Props) {
  const { slug } = await params;
  const messages = await getMessages() as Record<string, Record<string, unknown>>;
  
  const posts = messages.research?.posts as Record<string, unknown> | undefined;
  
  if (!posts?.[slug]) {
    notFound();
  }
  
  return <ResearchPostClient slug={slug} />;
}
