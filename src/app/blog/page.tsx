import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const blogPosts = [
  {
    id: 1,
    title: "🐾 Hành Trình Khỏi Bệnh Của Tớ Nhờ Vòng Cổ Thông Minh!",
    excerpt:
      "Câu chuyện cảm động từ góc nhìn của chú chó Péo về hành trình phục hồi sức khỏe với sự hỗ trợ của công nghệ hiện đại.",
    author: "Péo Corgi",
    date: "05/06/2025",
    category: "Câu chuyện cảm xúc",
    image: "/images/peo_corgi_v2.webp",
    readTime: "5 phút đọc",
    featured: true,
  },
  {
    id: 2,
    title: "5 dấu hiệu thú cưng đang bị stress",
    excerpt:
      "Stress không chỉ xảy ra ở người – thú cưng cũng có thể bị căng thẳng nếu môi trường hoặc lịch sinh hoạt thay đổi.",
    author: "BS Thú y Minh Anh",
    date: "01/06/2025",
    category: "Kiến thức chăm sóc",
    image: "/images/pet_stress.jpg",
    readTime: "7 phút đọc",
  },
  {
    id: 3,
    title: "Nên dắt chó đi dạo mấy lần một tuần?",
    excerpt: "Đi dạo không chỉ giúp chó vận động mà còn là cách để xả stress, giảm buồn chán và kết nối với chủ.",
    author: "Huấn luyện viên Tuấn",
    date: "28/05/2025",
    category: "Lời khuyên",
    image: "/images/walking_dog.jpg",
    readTime: "6 phút đọc",
  },
  {
    id: 4,
    title: "Làm sao để không lo thú cưng đi lạc?",
    excerpt:
      "Mỗi năm có hàng ngàn thú cưng đi lạc – và không phải tất cả đều tìm được về nhà. Đừng để chuyện đó xảy ra với boss của bạn!",
    author: "Chuyên gia Hà Linh",
    date: "25/05/2025",
    category: "Mẹo hữu ích",
    image: "/images/lost_pet.jpg",
    readTime: "5 phút đọc",
  },
  {
    id: 5,
    title: "Xu hướng công nghệ chăm sóc thú cưng 2025",
    excerpt:
      "Khám phá những xu hướng công nghệ mới nhất trong việc chăm sóc thú cưng, từ AI đến IoT và những ứng dụng thực tế.",
    author: "Dr. Nguyễn Minh",
    date: "20/05/2025",
    category: "Công nghệ",
    image: "/images/pet_takecare_25.jpg",
    readTime: "8 phút đọc",
  },
  {
    id: 6,
    title: "Kiến thức chăm sóc sức khỏe chó mèo khoa học",
    excerpt:
      "Hướng dẫn chi tiết về cách theo dõi và chăm sóc sức khỏe thú cưng dựa trên các nghiên cứu khoa học mới nhất.",
    author: "BS Thú y Lan Anh",
    date: "15/05/2025",
    category: "Kiến thức chăm sóc",
    image: "/images/takecare_dog_cat.webp",
    readTime: "12 phút đọc",
  },
]

const categories = ["Tất cả", "Câu chuyện cảm xúc", "Kiến thức chăm sóc", "Lời khuyên", "Mẹo hữu ích", "Công nghệ"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Blog & Kiến Thức</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá những câu chuyện cảm động, kiến thức chăm sóc khoa học và xu hướng công nghệ mới từ cộng đồng yêu
            thú cưng
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Tìm kiếm bài viết..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-pink-500 hover:bg-pink-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Bài Viết Nổi Bật</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover rounded-t-2xl"
                    />
                    <Badge className="absolute top-4 left-4 bg-pink-500 text-white z-10">{featuredPost.category}</Badge>
                    </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{featuredPost.excerpt}</p>

                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="w-full group bg-pink-500 hover:bg-pink-600">
                      Đọc tiếp
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Bài Viết Mới Nhất</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-pink-500 text-white">{post.category}</Badge>
                  </div>
                </Link>

                <div className="p-6">
                  <div className="mb-4">
                    <Link href={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-pink-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
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
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-1">
            <Button variant="outline" size="icon" disabled>
              &lt;
            </Button>
            <Button variant="default" size="icon" className="bg-pink-500">
              1
            </Button>
            <Button variant="outline" size="icon">
              2
            </Button>
            <Button variant="outline" size="icon">
              3
            </Button>
            <Button variant="outline" size="icon">
              &gt;
            </Button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Đăng Ký Nhận Bản Tin</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nhận những bài viết mới nhất, mẹo chăm sóc thú cưng và ưu đãi đặc biệt từ GUARDi PAW
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input placeholder="Email của bạn" className="sm:flex-grow" />
              <Button className="bg-pink-500 hover:bg-pink-600">Đăng ký</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
