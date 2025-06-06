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
import { JSX } from "react";

type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  authorImage: string;
  content: JSX.Element;
};

const blogPosts = {
  "1": {
    id: "1",
    title: "🐾 Hành Trình Khỏi Bệnh Của Tớ Nhờ Vòng Cổ Thông Minh!",
    subtitle: "Góc chia sẻ từ Péo, chú chó Corgi yêu đời",
    author: "Péo Corgi",
    authorRole: "Đại sứ thương hiệu",
    date: "05/06/2025",
    category: "Câu chuyện cảm xúc",
    readTime: "5 phút đọc",
    image: "/images/peo_corgi_v3.webp",
    authorImage: "/placeholder.svg?height=100&width=100",
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-lg">
          Xin chào cả nhà! 🐶 Tớ là Péo, một chú chó Corgi 4 tuổi sống cùng
          &quot;ba mẹ&quot; hooman dễ thương. Tớ từng là một chú chó khá hiếu
          động, thích chạy nhảy khắp nơi, nhưng có một giai đoạn, sức khỏe của
          tớ tụt dốc mà không ai hay biết…
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
          😷 Khi tớ ốm mà chẳng biết nói...
        </h2>
        <p>
          Tớ bắt đầu ăn ít hơn, ít chơi, ngủ thì thở nặng nhọc, không còn hứng
          thú với những lần đi dạo. Ba mẹ ban đầu tưởng tớ chỉ… hơi lười. Nhưng
          rồi, một chuyện bất ngờ đã xảy ra: chiếc vòng cổ thông minh mới được
          tặng đã &quot;tố cáo&quot; tình trạng của tớ.
        </p>

        <div className="my-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            Vòng cổ gì mà kỳ vậy?
          </h3>
          <p className="text-blue-700 mb-0">
            Chiếc vòng cổ nhỏ xíu, đeo nhẹ tênh, nhưng lại là thiết bị theo dõi
            sức khỏe cực kỳ hiện đại. Nó ghi nhận mức độ vận động, giấc ngủ,
            nhịp tim của tớ. Ngay khi các chỉ số thay đổi bất thường, điện thoại
            của ba mẹ nhận được thông báo liền!
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
          Lúc ấy, ba mẹ mới biết không phải tớ lười, mà là tớ đang không khỏe
          thật sự. Họ đưa tớ đến bác sĩ ngay và nhờ dữ liệu từ vòng cổ, bác sĩ
          chẩn đoán tớ bị viêm phổi nhẹ. Nếu không phát hiện sớm, hậu quả có thể
          đã nghiêm trọng hơn rất nhiều...
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
          💡 Công nghệ – Không chỉ cho người
        </h2>
        <p>
          Trước đây, ba mẹ chỉ nghĩ công nghệ là cho... con người thôi. Nhưng
          giờ thì khác rồi! Những chiếc vòng cổ thông minh có thể giúp:
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
          Không nói quá đâu – nhờ công nghệ, tớ thấy mình được yêu thương và
          thấu hiểu hơn.
        </p>

        <div className="my-8 bg-pink-50 rounded-xl p-6 border border-pink-100">
          <p className="text-pink-800 font-medium mb-0">
            Ba mẹ đã kể câu chuyện của tớ trong một nhóm nuôi thú cưng, và thật
            bất ngờ, nhiều bạn khác cũng từng rơi vào tình huống tương tự! Có
            bạn mèo phát hiện bệnh thận sớm, có chú chó điều chỉnh cân nặng nhờ
            biết rõ mức vận động mỗi ngày.
          </p>
        </div>

        <p className="text-lg font-medium">
          Công nghệ đã kết nối chúng tớ với nhau – những &quot;em bé bốn
          chân&quot; giờ đây không còn cô đơn khi ốm nữa 🐾
        </p>

        <p>
          Chúng tớ, những &quot;em bé bốn chân&quot;, không biết nói &quot;con
          đau quá&quot;, cũng không biết đòi đi khám. Nhưng nếu bạn biết lắng
          nghe qua thiết bị nhỏ xinh này, bạn sẽ nhận ra:
        </p>

        <blockquote className="border-l-4 border-pink-500 pl-4 italic my-6">
          &quot;Mỗi cái liếm tay, mỗi cái đuôi vẫy không chỉ là niềm vui, mà còn
          là lời cảm ơn ba mẹ vì đã quan tâm đến sức khỏe của tớ mỗi ngày. Một
          chiếc vòng cổ nhỏ – nhưng là cả một thế giới an tâm!&quot;
        </blockquote>

        <p>
          Nếu bạn đang tìm kiếm một giải pháp an toàn, thông minh để chăm sóc
          thú cưng, hãy thử tìm hiểu về vòng cổ thông minh nhé. Không chỉ là
          thiết bị – đó còn là cây cầu nối yêu thương và sự quan tâm mỗi ngày.
        </p>

        <div className="bg-gray-100 rounded-xl p-6 my-8">
          <p className="font-medium mb-2">
            📌 Bạn đang dùng vòng cổ thông minh cho &quot;boss&quot; nhà mình
            chưa? Chia sẻ hành trình của bạn cùng chúng mình trong phần bình
            luận nhé!
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
    ),
  },
  "2": {
    id: "2",
    title: "5 dấu hiệu thú cưng đang bị stress",
    subtitle: "Bạn có đang bỏ lỡ những tín hiệu từ boss?",
    author: "PetCare Team",
    authorRole: "Chuyên gia hành vi thú cưng",
    date: "06/06/2025",
    category: "Sức khỏe thú cưng",
    readTime: "4 phút đọc",
    image: "/images/pet_stress.jpg",
    authorImage: "/placeholder.svg?height=100&width=100",
    content: (
      <div className="prose prose-lg max-w-none">
        <p>
          Stress không chỉ xảy ra ở người – thú cưng cũng có thể bị căng thẳng
          nếu môi trường hoặc lịch sinh hoạt thay đổi. Dưới đây là{" "}
          <span className="text-pink-600 font-semibold">
            5 dấu hiệu phổ biến
          </span>
          :
        </p>
        <ol className="list-decimal pl-6 space-y-4 mt-6">
          <li className="bg-blue-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
            <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mt-1">
              1
            </span>
            <div>
              <strong>Ăn uống thất thường</strong>
              <div className="text-gray-600 text-base">
                Ăn ít, bỏ ăn, hoặc ăn uống quá mức bất thường có thể là dấu hiệu
                lo âu.
              </div>
            </div>
          </li>
          <li className="bg-blue-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
            <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mt-1">
              2
            </span>
            <div>
              <strong>Liếm hoặc cắn bản thân</strong>
              <div className="text-gray-600 text-base">
                Một số boss có thể liếm chân, đuôi, hoặc vùng bụng liên tục.
                Hành vi này có thể là cách giảm căng thẳng.
              </div>
            </div>
          </li>
          <li className="bg-blue-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
            <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mt-1">
              3
            </span>
            <div>
              <strong>Rụt rè, né tránh</strong>
              <div className="text-gray-600 text-base">
                Thú cưng vốn thân thiện bỗng dưng thu mình, trốn trong góc,
                không lại gần chủ.
              </div>
            </div>
          </li>
          <li className="bg-blue-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
            <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mt-1">
              4
            </span>
            <div>
              <strong>Kêu nhiều bất thường</strong>
              <div className="text-gray-600 text-base">
                Mèo thì rên nhẹ hoặc gào, chó thì sủa dai dẳng – đặc biệt là khi
                bạn đi vắng.
              </div>
            </div>
          </li>
          <li className="bg-blue-50 rounded-lg p-4 shadow-sm flex items-start gap-3">
            <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mt-1">
              5
            </span>
            <div>
              <strong>Đi vệ sinh bừa bãi</strong>
              <div className="text-gray-600 text-base">
                Dù đã được huấn luyện, nhưng khi stress, boss có thể “quậy” bằng
                cách đi bậy.
              </div>
            </div>
          </li>
        </ol>
        <div className="my-8 bg-pink-50 rounded-xl p-6 border border-pink-100 flex items-center gap-4">
          <span className="text-2xl">💡</span>
          <div>
            <span className="font-semibold text-pink-700">Lời khuyên:</span> Duy
            trì lịch sinh hoạt đều đặn, chơi với boss mỗi ngày, tránh thay đổi
            môi trường đột ngột. Nếu tình trạng kéo dài, nên hỏi ý kiến bác sĩ
            thú y.
          </div>
        </div>
        <div className="flex items-center mt-6 gap-3">
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
    ),
  },
  "3": {
    id: "3",
    title: "Nên dắt chó đi dạo mấy lần một tuần?",
    subtitle: "Tùy vào giống chó, số lần đi dạo mỗi ngày sẽ khác nhau!",
    author: "PetCare Team",
    authorRole: "Chuyên gia hành vi thú cưng",
    date: "07/06/2025",
    category: "Chăm sóc thú cưng",
    readTime: "3 phút đọc",
    image: "/images/walking_dog.jpg", // Bạn có thể thay đường dẫn hình ảnh phù hợp
    authorImage: "/placeholder.svg?height=100&width=100",
    content: (
      <div className="prose prose-lg max-w-none">
        <p>
          Đi dạo không chỉ giúp chó vận động mà còn là cách để giảm stress, bớt
          buồn chán và tăng gắn kết với chủ. Tần suất phù hợp tùy vào giống và
          độ tuổi:
        </p>
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 flex flex-col items-center text-center">
            <span className="text-3xl mb-2">🐕</span>
            <div className="font-semibold text-blue-800 mb-1">
              Chó nhỏ – ít năng lượng
            </div>
            <div className="text-gray-700 text-sm mb-2">
              (Poodle, Shih Tzu, Pug...)
            </div>
            <div className="text-pink-600 font-medium">1–2 lần/ngày</div>
            <div className="text-gray-500 text-xs">Mỗi lần 20–30 phút</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 flex flex-col items-center text-center">
            <span className="text-3xl mb-2">🐕‍🦺</span>
            <div className="font-semibold text-blue-800 mb-1">
              Chó vừa – năng động
            </div>
            <div className="text-gray-700 text-sm mb-2">
              (Corgi, Husky, Beagle...)
            </div>
            <div className="text-pink-600 font-medium">2 lần/ngày</div>
            <div className="text-gray-500 text-xs">Mỗi lần 30–45 phút</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 flex flex-col items-center text-center">
            <span className="text-3xl mb-2">🐩</span>
            <div className="font-semibold text-blue-800 mb-1">
              Chó lớn – cần vận động mạnh
            </div>
            <div className="text-gray-700 text-sm mb-2">
              (Golden, Labrador...)
            </div>
            <div className="text-pink-600 font-medium">Ít nhất 2 lần/ngày</div>
            <div className="text-gray-500 text-xs">
              Kết hợp chạy bộ, ném bóng...
            </div>
          </div>
        </div>
        <div className="my-8 bg-pink-50 rounded-xl p-6 border border-pink-100">
          <h3 className="text-lg font-semibold text-pink-700 mb-2">
            ⚠️ Lưu ý khi dắt chó đi dạo:
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-pink-800">
            <li>Tránh đi vào khung giờ nắng gắt (trưa, đầu giờ chiều)</li>
            <li>Luôn mang theo nước và túi dọn vệ sinh</li>
            <li>Dùng vòng cổ chắc chắn, tránh để boss tuột chạy mất!</li>
          </ul>
        </div>
        <div className="flex items-center mt-6 gap-3">
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
    ),
  },
  "4": {
    id: "4",
    title: "Làm sao để không lo thú cưng đi lạc?",
    subtitle: "Bí quyết giúp boss luôn an toàn và dễ dàng tìm về nhà",
    author: "PetCare Team",
    authorRole: "Chuyên gia chăm sóc thú cưng",
    date: "08/06/2025",
    category: "An toàn thú cưng",
    readTime: "4 phút đọc",
    image: "/images/lost_pet.jpg",
    authorImage: "/placeholder.svg?height=100&width=100",
    content: (
      <div className="prose prose-lg max-w-none">
        <p>
          Mỗi năm có hàng ngàn thú cưng đi lạc – và không phải tất cả đều tìm
          được về nhà. Đừng để chuyện đó xảy ra với boss của bạn!
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
          ✅ Mẹo phòng tránh thú cưng đi lạc:
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Luôn đeo vòng cổ có tên + số điện thoại:</strong> Giúp người
            nhặt được dễ liên hệ với bạn ngay lập tức.
          </li>
          <li>
            <strong>Gắn thiết bị định vị GPS thông minh:</strong> (Ví dụ: vòng
            cổ thông minh GUARDi PAW) – Bạn có thể theo dõi vị trí boss mọi lúc
            mọi nơi qua ứng dụng điện thoại.
          </li>
          <li>
            <strong>Huấn luyện cơ bản:</strong> Boss biết nghe gọi, không phóng
            ra cửa khi chưa được phép.
          </li>
          <li>
            <strong>Đóng kín cổng, lưới cửa ban công cẩn thận:</strong> Đặc biệt
            với nhà phố, chung cư cao tầng.
          </li>
          <li>
            <strong>Cập nhật microchip (nếu có):</strong> Đảm bảo thông tin liên
            lạc luôn chính xác.
          </li>
        </ul>
        <div className="my-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            👉 Lợi ích của vòng cổ GPS thông minh
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-blue-700">
            <li>Định vị vị trí thú cưng theo thời gian thực trên bản đồ</li>
            <li>Cảnh báo khi boss ra khỏi vùng an toàn</li>
            <li>Tìm kiếm nhanh chóng nếu boss đi lạc</li>
            <li>Lưu lại lịch sử di chuyển của thú cưng</li>
          </ul>
        </div>
        <p>
          Nếu thú cưng có vòng đeo cổ GPS, bạn có thể định vị vị trí ngay lập
          tức bằng ứng dụng – tránh nguy cơ thất lạc đáng tiếc.
        </p>
        <blockquote className="border-l-4 border-pink-500 pl-4 italic my-6">
          “Một chiếc vòng cổ nhỏ – nhưng là cả một thế giới an tâm cho boss và
          sen!”
        </blockquote>
        <div className="bg-gray-100 rounded-xl p-6 my-8">
          <p className="font-medium mb-2">
            📌 Bạn đã từng lo lắng khi boss đi lạc chưa? Hãy chia sẻ kinh nghiệm
            hoặc câu chuyện của bạn ở phần bình luận nhé!
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
    ),
  },
};

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams?.id as keyof typeof blogPosts;

  const post = blogPosts[id];

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
            <div className="prose prose-lg max-w-none text-gray-700">
              {post.content}
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
