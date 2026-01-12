import { blogPosts } from '@/lib/blog-data'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://campussentinel.com'

    const blogRoutes = Object.keys(blogPosts).map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(), // Ideally this would come from the post data if available, or be today's date
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/what-is-campus-sentinel`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...blogRoutes,
    ]
}
