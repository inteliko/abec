import { Link } from "react-router-dom";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <p className="text-lg text-muted-foreground mb-2">{post.date}</p>
        <h3 className="font-heading font-semibold text-xl mb-2">
          {post.title}
        </h3>
        <p className="text-lg text-muted-foreground mb-4">{post.excerpt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="text-primary font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
