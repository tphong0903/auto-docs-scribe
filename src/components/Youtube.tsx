import React, { useState } from "react";
import {
  Music,
  Image as ImageIcon,
  Send,
  Search,
  Loader2,
  PlayCircle,
} from "lucide-react";

// --- CÁC KIỂU DỮ LIỆU ---
interface YouTubeVideo {
  id: string;
  title: string;
  channelTitle: string;
  thumbnail: string;
}

interface PostData {
  id: string;
  authorName: string;
  avatarUrl: string;
  content: string;
  music: {
    videoId: string;
    startTime: number;
    endTime: number;
    title: string;
  } | null;
  timestamp: string;
}

export const CreatePostWithYouTube: React.FC = () => {
  // ================= STATE CHO PHẦN TẠO BÀI VIẾT =================
  const [content, setContent] = useState("");
  const [showMusicInputs, setShowMusicInputs] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<YouTubeVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(30);

  // ================= STATE CHO PHẦN BẢNG TIN (FEED) =================
  const [posts, setPosts] = useState<PostData[]>([
    // Một bài viết mẫu có sẵn
    {
      id: "post_1",
      authorName: "Nguyễn Văn A",
      avatarUrl: "https://i.pravatar.cc/150?img=11",
      content: "Nghe lại bài này vẫn thấy hay quá mọi người ạ! 🎵",
      music: {
        videoId: "9kzE8isXlQY",
        title: "CHÚNG TA CỦA TƯƠNG LAI",
        startTime: 65,
        endTime: 95,
      },
      timestamp: "Vài giây trước",
    },
  ]);

  // ================= HÀM XỬ LÝ TẠO BÀI =================
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);

    // Giả lập gọi API YouTube
    setTimeout(() => {
      setSearchResults([
        {
          id: "wJ8Kz8274Q0",
          title: "SƠN TÙNG M-TP | CHÚNG TA CỦA TƯƠNG LAI",
          channelTitle: "Sơn Tùng M-TP Official",
          thumbnail: "https://i.ytimg.com/vi/wJ8Kz8274Q0/default.jpg",
        },
        {
          id: "3m0F2iGvNQA",
          title: "SƠN TÙNG M-TP | CÓ CHẮC YÊU LÀ ĐÂY",
          channelTitle: "Sơn Tùng M-TP Official",
          thumbnail: "https://i.ytimg.com/vi/3m0F2iGvNQA/default.jpg",
        },
      ]);
      setIsSearching(false);
    }, 800);
  };

  const handleSelectVideo = (video: YouTubeVideo) => {
    setSelectedVideo(video);
    setSearchResults([]);
  };

  const handleSubmit = () => {
    if (!content.trim() && !selectedVideo) {
      alert("Vui lòng nhập nội dung hoặc chọn nhạc!");
      return;
    }

    // Tạo bài viết mới
    const newPost: PostData = {
      id: `post_${Date.now()}`,
      authorName: "Khách (Bạn)",
      avatarUrl: "https://i.pravatar.cc/150?img=68",
      content: content,
      music: selectedVideo
        ? {
            videoId: selectedVideo.id,
            title: selectedVideo.title,
            startTime: startTime,
            endTime: endTime,
          }
        : null,
      timestamp: "Vừa xong",
    };

    // Đẩy bài viết mới lên đầu danh sách (Feed)
    setPosts([newPost, ...posts]);

    // Reset Form
    setContent("");
    setSelectedVideo(null);
    setSearchQuery("");
    setShowMusicInputs(false);
    setStartTime(0);
    setEndTime(30);
  };

  return (
    <div className="max-w-xl mx-auto py-8 px-4 space-y-8 bg-gray-50 min-h-screen">
      {/* ================= KHU VỰC 1: FORM TẠO BÀI VIẾT ================= */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden text-sm">
        <div className="p-4">
          <textarea
            className="w-full text-base resize-none outline-none placeholder-gray-400"
            rows={3}
            placeholder="Bạn đang nghĩ gì?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {showMusicInputs && (
          <div className="bg-slate-50 p-4 border-t border-slate-100">
            {!selectedVideo ? (
              <div className="animate-in fade-in zoom-in-95 duration-200">
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="Tìm bài hát (VD: Sơn Tùng)..."
                    className="flex-1 p-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                  <button
                    onClick={handleSearch}
                    disabled={isSearching}
                    className="bg-gray-800 text-white px-3 rounded-md hover:bg-gray-700 flex items-center justify-center min-w-[40px]"
                  >
                    {isSearching ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Search size={18} />
                    )}
                  </button>
                </div>

                {searchResults.length > 0 && (
                  <div className="flex flex-col gap-2 max-h-[200px] overflow-y-auto border border-gray-200 rounded-md bg-white p-1">
                    {searchResults.map((video) => (
                      <div
                        key={video.id}
                        onClick={() => handleSelectVideo(video)}
                        className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded cursor-pointer transition"
                      >
                        <img
                          src={video.thumbnail}
                          alt="thumb"
                          className="w-12 h-9 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-800 truncate">
                            {video.title}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {video.channelTitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white border border-gray-200 p-3 rounded-lg animate-in fade-in">
                <div className="flex justify-between items-start mb-3 border-b border-gray-100 pb-2">
                  <div>
                    <p className="font-bold text-gray-800 line-clamp-1">
                      {selectedVideo.title}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="text-xs text-red-500 hover:underline px-2"
                  >
                    Đổi bài khác
                  </button>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <label className="text-xs font-medium text-gray-600">
                      Từ giây:
                    </label>
                    <input
                      type="number"
                      min="0"
                      className="w-16 p-1 border rounded text-center text-sm"
                      value={startTime}
                      onChange={(e) => setStartTime(Number(e.target.value))}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-xs font-medium text-gray-600">
                      Đến giây:
                    </label>
                    <input
                      type="number"
                      min={startTime + 1}
                      className="w-16 p-1 border rounded text-center text-sm"
                      value={endTime}
                      onChange={(e) => setEndTime(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="p-3 border-t border-gray-100 flex items-center justify-between bg-white">
          <div className="flex gap-2">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition">
              <ImageIcon size={20} />
            </button>
            <button
              className={`p-2 rounded-full transition ${showMusicInputs ? "bg-blue-100 text-blue-600" : "text-gray-500 hover:bg-gray-100"}`}
              onClick={() => setShowMusicInputs(!showMusicInputs)}
            >
              <Music size={20} />
            </button>
          </div>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition shadow-sm"
          >
            <Send size={16} /> Đăng bài
          </button>
        </div>
      </div>

      {/* ================= KHU VỰC 2: BẢNG TIN (FEED) ================= */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-gray-800">Bảng tin</h2>

        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 animate-in slide-in-from-top-4 fade-in duration-300"
          >
            {/* User Info */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={post.avatarUrl}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-gray-900 text-sm">
                  {post.authorName}
                </p>
                <p className="text-xs text-gray-500">{post.timestamp}</p>
              </div>
            </div>

            {/* Content */}
            {post.content && (
              <p className="text-gray-800 text-sm mb-3 whitespace-pre-wrap">
                {post.content}
              </p>
            )}

            {/* Music Embed Player */}
            {post.music && (
              <div className="mt-2 bg-gray-50 border border-gray-100 rounded-xl p-2 relative">
                <div className="flex items-center gap-2 mb-2 px-2 pt-1 text-blue-600">
                  <PlayCircle size={16} />
                  <span className="text-xs font-semibold line-clamp-1">
                    {post.music.title}
                  </span>
                </div>

                {/* 
                  ĐÂY LÀ CHÌA KHÓA: height="80" giúp Iframe chỉ hiển thị thanh Audio Player, 
                  che đi phần hình ảnh Video, tạo cảm giác như trình phát nhạc thật.
                */}
                <div className="w-full h-[100px] rounded-lg overflow-hidden border border-gray-200 bg-black">
                  <iframe
                    width="100%"
                    height="150" // Thử tăng cái này lên
                    src={`https://www.youtube.com/embed/${post.music.videoId}?start=${post.music.startTime}&end=${post.music.endTime}&controls=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
