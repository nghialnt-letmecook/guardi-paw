import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Hành trình khỏi bệnh của tớ nhờ vòng cổ thông minh!",
    excerpt:
      "Câu chuyện cảm động từ góc nhìn của chú chó Péo về hành trình phục hồi sức khỏe với sự hỗ trợ của công nghệ hiện đại.",
    author: "Péo - Corgi",
    date: "15/12/2024",
    category: "Câu chuyện cảm xúc",
    image: "/images/peo_corgi.png",
    readTime: "5 phút đọc",
  },
  {
    id: 2,
    title: "Xu hướng công nghệ chăm sóc thú cưng 2024",
    excerpt:
      "Khám phá những xu hướng công nghệ mới nhất trong việc chăm sóc thú cưng, từ AI đến IoT và những ứng dụng thực tế.",
    author: "Dr. Nguyễn Minh",
    date: "12/12/2024",
    category: "Công nghệ",
    image: "/images/pet_take_care_tech.jpg",
    readTime: "8 phút đọc",
  },
  {
    id: 3,
    title: "Kiến thức chăm sóc sức khỏe chó mèo khoa học",
    excerpt:
      "Hướng dẫn chi tiết về cách theo dõi và chăm sóc sức khỏe thú cưng dựa trên các nghiên cứu khoa học mới nhất.",
    author: "BS Thú y Lan Anh",
    date: "10/12/2024",
    category: "Kiến thức chăm sóc",
    image: "/images/cat_takecare.jpg",
    readTime: "12 phút đọc",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Blog & Câu Chuyện Cảm Xúc</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá những câu chuyện cảm động, kiến thức chăm sóc khoa học và xu hướng công nghệ mới từ cộng đồng yêu
            thú cưng
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <div className="relative aspect-[4/3] w-full">
                    <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover rounded-t-2xl"
                    />
                    <Badge className="absolute top-4 left-4 bg-pink-500 text-white z-10">{post.category}</Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <Link href={`/blog/${post.id}`}>
                  <Button variant="outline" className="w-full group">
                    Đọc tiếp
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button size="lg" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50">
              Xem tất cả bài viết
            </Button>
          </Link>
        </div>

        {/* Community Section */}
        <div className="mt-20 bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Tham Gia Cộng Đồng</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Kết nối với hàng nghìn chủ nuôi thú cưng khác, chia sẻ kinh nghiệm và học hỏi từ những câu chuyện thú vị
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
                Tham gia Facebook Group
              </Button>
              <Button size="lg" variant="outline">
                Đăng ký Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
