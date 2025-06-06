import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

const relatedPosts = [
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
]

export default function RelatedPosts() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {relatedPosts.map((post) => (
        <article
          key={post.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
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
              <Badge className="absolute top-3 left-3 bg-pink-500 text-white">{post.category}</Badge>
            </div>
          </Link>

          <div className="p-5">
            <Link href={`/blog/${post.id}`}>
              <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-pink-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

            <div className="flex items-center text-xs text-gray-500">
              <User className="h-3 w-3 mr-1" />
              <span className="mr-3">{post.author}</span>
              <Calendar className="h-3 w-3 mr-1" />
              <span className="mr-3">{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
