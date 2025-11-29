import { Card } from "@/components/atoms/card";
import type { Post } from "@/lib/posts";

type DashboardCardProps = {
  post: Post;
};

export function DashboardCard({ post }: DashboardCardProps) {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{post.body}</p>
    </Card>
  );
}

