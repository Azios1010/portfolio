<div align="center">
  <h2>👨‍💻 Huan Nguyen | Computer Engineer Portfolio</h2>
  <p>Một trang Portfolio cá nhân tĩnh siêu nhẹ, tối giản và hiệu năng cao.</p>
</div>

<p align="center">
  Trang web được phát triển dựa trên thiết kế của template mã nguồn mở nổi tiếng <a href="https://github.com/bchiang7/v4" target="_blank">v4 của Brittany Chiang</a>, tuy nhiên đã được <strong>tối ưu hóa cực đoan (minimalist & highly optimized)</strong> nhằm giảm thiểu dung lượng và đạt hiệu năng tối đa.
</p>

---

## ✨ Điểm nổi bật & Tùy chỉnh (Customizations)

Dự án này đã được hiện đại hóa toàn diện với các cập nhật quan trọng sau:

1. **Nâng cấp Tech Stack**:
   - Chạy trên **Node.js 20+**, **Gatsby 5**, và **React 18** mang lại tốc độ render siêu tốc.
2. **Anti-Bloatware (Chống phình bộ nhớ)**:
   - Đã gỡ bỏ hoàn toàn các thư viện hoạt họa nặng nề như `scrollreveal`, `anime.js` và thư viện SEO `react-helmet`.
   - Chuyển sang sử dụng **Native Browser APIs** (`IntersectionObserver`, CSS Keyframes) và **Gatsby Head API** để tối ưu hóa hiệu năng cực hạn.
3. **Chế độ Sáng/Tối (Light/Dark Mode Toggle)**:
   - Tích hợp tính năng đổi màu nền mượt mà sử dụng 100% CSS Variables và React State.
   - Không dùng thư viện ngoài, trạng thái được ghi nhớ qua `window.localStorage` và xử lý triệt để lỗi giật màn hình (FOUC) khi tải trang bằng Gatsby SSR.
4. **Cá nhân hóa Logo & Thương hiệu**:
   - Tự thiết kế và sửa trực tiếp mã SVG của Logo biểu tượng lục giác chữ "H" (Huan) ở cả Navbar và màn hình Loading.
   - Thay thế toàn bộ dữ liệu mẫu, tích hợp CV trực tiếp qua `/resume.pdf` từ thư mục tĩnh `static/`.

---

## 🛠 Cài đặt & Chạy dưới Local

### 1. Cài đặt các công cụ

Sử dụng phiên bản Node.js 20+ và trình quản lý gói `npm` (Tuyệt đối **không** tạo `yarn.lock`):

```sh
npm install
```

### 2. Chạy Server Phát triển (Development)

Khởi chạy máy chủ ảo để xem giao diện real-time:

```sh
npm start
```

### 3. Biên dịch bản Production

Tạo mã nguồn HTML/JS tĩnh hoàn chỉnh:

```sh
npm run build
```

Xem trước bản build tĩnh:

```sh
npm run serve
```

---

## 🎨 Bảng màu (Color Scheme)

| Chế độ | Màu nền chính (Navy/Navy-Light) | Màu chữ chính (Slate/White) | Màu nhấn (Accent) |
| :--- | :--- | :--- | :--- |
| **Dark Mode** (Mặc định) | `#0a192f` / `#112240` | `#8892b0` / `#ccd6f6` | `#64ffda` (Xanh Neon) |
| **Light Mode** | `#f8f9fa` / `#e2e8f0` | `#495670` / `#0a192f` | `#0284c7` (Xanh Dương) |

---

## 📜 Ghi công & Bản quyền (Credits)

Thiết kế gốc thuộc về **Brittany Chiang** (Cảm ơn cô vì giao diện tuyệt đẹp!). Dự án này được fork và tối ưu hóa cá nhân bởi **Huan Nguyen**. 

> Nếu bạn muốn fork lại kho lưu trữ này, vui lòng để lại liên kết ghi nhận đóng góp (Attribution) tới tác giả thiết kế gốc [brittanychiang.com](https://brittanychiang.com) và người tối ưu hóa dự án [Huan Nguyen](https://github.com/Azios1010).
