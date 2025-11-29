export type Post = {
    id: number;
    title: string;
    body: string;
};

export async function getPosts(limit = 6): Promise<Post[]> {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
        {
            cache: "force-cache",
            next: { revalidate: 3600 },
        },
    );

    if (!response.ok) {
        throw new Error("Failed to fetch posts");
    }

    const posts: Post[] = await response.json();
    return posts;
}

