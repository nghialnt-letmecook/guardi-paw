import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowLeft,
  Heart,
  Share2,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import RelatedPosts from "@/components/related-posts";
import { PageProps } from "../../../../.next/types/app/page";

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  const post = {
    id,
    title: "🐾 Hành Trình Khỏi Bệnh Của Tớ Nhờ Vòng Cổ Thông Minh!",
    subtitle: "Góc chia sẻ từ Péo, chú chó Corgi yêu đời",
    author: "Péo Corgi",
    authorRole: "Đại sứ thương hiệu",
    date: "05/06/2025",
    category: "Câu chuyện cảm xúc",
    readTime: "5 phút đọc",
    image: "/images/peo_corgi_v3.webp",
    authorImage: "/placeholder.svg?height=100&width=100",
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Quay lại Blog
            </Button>
          </Link>
        </div>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover rounded-t-2xl"
              />
              <Badge className="absolute top-4 left-4 bg-pink-500 text-white z-10">
                {post.category}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-pink-600 font-medium mb-6">
                {post.subtitle}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                    />
                    <AvatarFallback>PC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{post.author}</div>
                    <div className="text-sm text-gray-500">
                      {post.authorRole}
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg">
                Xin chào cả nhà! 🐶 Tớ là Péo, một chú chó Corgi 4 tuổi sống
                cùng &quot;ba mẹ&quot; hooman dễ thương. Tớ từng là một chú chó
                khá hiếu động, thích chạy nhảy khắp nơi, nhưng có một giai đoạn,
                sức khỏe của tớ tụt dốc mà không ai hay biết…
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                😷 Khi tớ ốm mà chẳng biết nói...
              </h2>
              <p>
                Tớ bắt đầu ăn ít hơn, ít chơi, ngủ thì thở nặng nhọc, không còn
                hứng thú với những lần đi dạo. Ba mẹ ban đầu tưởng tớ chỉ… hơi
                lười. Nhưng rồi, một chuyện bất ngờ đã xảy ra: chiếc vòng cổ
                thông minh mới được tặng đã &quot;tố cáo&quot; tình trạng của
                tớ.
              </p>

              <div className="my-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Vòng cổ gì mà kỳ vậy?
                </h3>
                <p className="text-blue-700 mb-0">
                  Chiếc vòng cổ nhỏ xíu, đeo nhẹ tênh, nhưng lại là thiết bị
                  theo dõi sức khỏe cực kỳ hiện đại. Nó ghi nhận mức độ vận
                  động, giấc ngủ, nhịp tim của tớ. Ngay khi các chỉ số thay đổi
                  bất thường, điện thoại của ba mẹ nhận được thông báo liền!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                  <div className="w-full aspect-[4/3] relative mb-4">
                    <Image
                      src="/images/peo_corgi_before.webp"
                      alt="Péo trước khi dùng vòng cổ thông minh"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-center text-gray-600">
                    Péo trước khi dùng vòng cổ thông minh
                  </p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                  <div className="w-full aspect-[4/3] relative mb-4">
                    <Image
                      src="/images/peo_corgi_after.webp"
                      alt="Péo sau khi dùng vòng cổ thông minh"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-center text-gray-600">
                    Péo sau khi dùng vòng cổ thông minh
                  </p>
                </div>
              </div>
              <p>
                Lúc ấy, ba mẹ mới biết không phải tớ lười, mà là tớ đang không
                khỏe thật sự. Họ đưa tớ đến bác sĩ ngay và nhờ dữ liệu từ vòng
                cổ, bác sĩ chẩn đoán tớ bị viêm phổi nhẹ. Nếu không phát hiện
                sớm, hậu quả có thể đã nghiêm trọng hơn rất nhiều...
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                💡 Công nghệ – Không chỉ cho người
              </h2>
              <p>
                Trước đây, ba mẹ chỉ nghĩ công nghệ là cho... con người thôi.
                Nhưng giờ thì khác rồi! Những chiếc vòng cổ thông minh có thể
                giúp:
              </p>

              <ul className="space-y-2 my-6">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">
                    ✓
                  </span>
                  <span>Theo dõi tình trạng sức khỏe hằng ngày</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">
                    ✓
                  </span>
                  <span>Cảnh báo những bất thường tiềm ẩn</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">
                    ✓
                  </span>
                  <span>Lưu trữ lịch sử tiêm phòng, khám bệnh</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">
                    ✓
                  </span>
                  <span>Định vị khi tụi tớ đi lạc</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-1">
                    ✓
                  </span>
                  <span>Kết nối ứng dụng bác sĩ thú y từ xa</span>
                </li>
              </ul>

              <p className="italic">
                Không nói quá đâu – nhờ công nghệ, tớ thấy mình được yêu thương
                và thấu hiểu hơn.
              </p>

              <div className="my-8 bg-pink-50 rounded-xl p-6 border border-pink-100">
                <p className="text-pink-800 font-medium mb-0">
                  Ba mẹ đã kể câu chuyện của tớ trong một nhóm nuôi thú cưng, và
                  thật bất ngờ, nhiều bạn khác cũng từng rơi vào tình huống
                  tương tự! Có bạn mèo phát hiện bệnh thận sớm, có chú chó điều
                  chỉnh cân nặng nhờ biết rõ mức vận động mỗi ngày.
                </p>
              </div>

              <p className="text-lg font-medium">
                Công nghệ đã kết nối chúng tớ với nhau – những &quot;em bé bốn
                chân&quot; giờ đây không còn cô đơn khi ốm nữa 🐾
              </p>

              <p>
                Chúng tớ, những &quot;em bé bốn chân&quot;, không biết nói
                &quot;con đau quá&quot;, cũng không biết đòi đi khám. Nhưng nếu
                bạn biết lắng nghe qua thiết bị nhỏ xinh này, bạn sẽ nhận ra:
              </p>

              <blockquote className="border-l-4 border-pink-500 pl-4 italic my-6">
                &quot;Mỗi cái liếm tay, mỗi cái đuôi vẫy không chỉ là niềm vui,
                mà còn là lời cảm ơn ba mẹ vì đã quan tâm đến sức khỏe của tớ
                mỗi ngày. Một chiếc vòng cổ nhỏ – nhưng là cả một thế giới an
                tâm!&quot;
              </blockquote>

              <p>
                Nếu bạn đang tìm kiếm một giải pháp an toàn, thông minh để chăm
                sóc thú cưng, hãy thử tìm hiểu về vòng cổ thông minh nhé. Không
                chỉ là thiết bị – đó còn là cây cầu nối yêu thương và sự quan
                tâm mỗi ngày.
              </p>

              <div className="bg-gray-100 rounded-xl p-6 my-8">
                <p className="font-medium mb-2">
                  📌 Bạn đang dùng vòng cổ thông minh cho &quot;boss&quot; nhà
                  mình chưa? Chia sẻ hành trình của bạn cùng chúng mình trong
                  phần bình luận nhé!
                </p>
                <div className="flex items-center mt-4">
                  <Button variant="outline" size="sm" className="mr-2">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Bình luận
                  </Button>
                  <Button variant="outline" size="sm" className="mr-2">
                    <Heart className="mr-2 h-4 w-4" />
                    Thích
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Chia sẻ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Bài viết liên quan
          </h2>
          <RelatedPosts />
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Bảo vệ thú cưng của bạn với GUARDi PAW
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Đừng để thú cưng của bạn phải chịu đựng trong im lặng. Hãy để công
            nghệ giúp bạn hiểu và chăm sóc chúng tốt hơn mỗi ngày.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
              Khám phá vòng cổ thông minh
            </Button>
            <Button size="lg" variant="outline">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
