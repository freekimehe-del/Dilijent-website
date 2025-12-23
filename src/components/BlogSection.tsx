import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import blogMl from '@/assets/blog-ml.jpg';
import blogUiux from '@/assets/blog-uiux.jpg';
import blogCredentialing from '@/assets/blog-credentialing.jpg';

const blogs = [
  {
    title: 'Machine Learning 101: What Every Business Leader Should Know',
    date: '19 Dec 25',
    description: 'Machine learning is no longer just a technical buzzword—it\'s a strategic business tool. From improving customer experiences to optimizing operations, ML helps leaders turn data into actionable insights. This guide breaks down the essentials every business leader should understand to stay competitive',
    image: blogMl,
  },
  {
    title: 'The Role of UI UX Design Services for Successful Software Development',
    date: '18 Dec 25',
    description: 'UI/UX design is a key factor in successful software development. It ensures intuitive navigation, seamless user experiences, and visually appealing interfaces that drive user engagement and long-term product success.',
    image: blogUiux,
  },
  {
    title: 'Key Documents Required for Smooth Medical Credentialing: A Checklist',
    date: '17 Dec 25',
    description: 'Medical credentialing can be time-consuming if documents are missing or outdated. Having the right paperwork ready ensures a smoother, faster approval process. This checklist highlights the essential documents every healthcare provider needs for successful medical credentialing.',
    image: blogCredentialing,
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-section-alt">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">LATEST BLOG</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 uppercase">
            BLOGS <span className="text-primary">CORNER</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 text-primary text-xs font-bold px-3 py-1.5 rounded shadow-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg mb-3 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  {blog.description}
                </p>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="default" size="lg">
            All BLOGS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
