# Portfolio V4 - Agent Context & Guidelines

Tài liệu này cung cấp cái nhìn tổng quan, kiến trúc hệ thống, cấu trúc thư mục và các quy ước lập trình (conventions) của dự án Portfolio V4. Bất kỳ AI Agent nào khi tham gia hỗ trợ hoặc phát triển dự án này đều PHẢI đọc và tuân thủ các quy tắc trong tài liệu này trước khi viết code.

---

## 1. Tổng quan dự án (Overview)
Đây là một trang web tĩnh (Static Site) dạng Portfolio cá nhân được phát triển dựa trên một template mã nguồn mở nổi tiếng. Tuy nhiên, dự án này **đã được tối ưu hóa cực đoan (minimalist & highly optimized)**:
- **Công nghệ cốt lõi:** Nâng cấp toàn diện lên **Node.js 20+**, **Gatsby 5**, **React 18**.
- **Tối ưu bộ nhớ:** Đã xóa bỏ hoàn toàn tính năng Blog (`pensieve`) và toàn bộ các thư viện gây phình to bộ nhớ như `scrollreveal`, `anime.js`, `react-helmet`. 
- **Định hướng phát triển:** Đề cao hiệu năng, dung lượng nhẹ, và ưu tiên sử dụng Native Browser APIs (như `IntersectionObserver`, CSS Keyframes) thay vì cài đặt thêm thư viện (third-party bloatware).

---

## 2. Kiến trúc & Công nghệ (Architecture & Tech Stack)
- **Framework:** Gatsby.js (v5) - Render HTML tĩnh (SSG).
- **Package Manager:** `npm` (Tuyệt đối KHÔNG dùng `yarn` hay tạo file `yarn.lock`).
- **Styling:** `styled-components` kết hợp với CSS Variables (được định nghĩa trong `src/styles/variables.js`). KHÔNG sử dụng Tailwind CSS hay Bootstrap.
- **Content Management:** Dữ liệu nội dung các dự án, kinh nghiệm làm việc được quản lý hoàn toàn bằng **Markdown** lưu trong thư mục `content/`. Quá trình build sẽ dùng `gatsby-transformer-remark` biến đổi Markdown thành dữ liệu GraphQL.
- **Animation:** Dùng CSS Keyframes và `transition`. Hiệu ứng xuất hiện khi cuộn chuột được thực hiện thông qua custom hook `useIntersectionObserver` và class CSS `.reveal-on-scroll`.

---

## 3. Cấu trúc thư mục cốt lõi (Directory Structure)
```text
v4/
├── content/               # Dữ liệu Markdown. CẦN THẬN TRỌNG: Gatsby tự nội suy schema GraphQL từ các file này.
│   ├── featured/          # Các dự án nổi bật. Frontmatter bắt buộc: title, cover, github, external, tech, cta.
│   ├── jobs/              # Kinh nghiệm làm việc. Frontmatter bắt buộc: title, company, location, range, url.
│   └── projects/          # Các dự án phụ. Frontmatter bắt buộc: title, tech, github, external, ios, android, company.
├── src/
│   ├── components/        # Các React Components tái sử dụng (Button, Nav, Menu, Layout, v.v.)
│   │   ├── icons/         # Hệ thống SVG Icons.
│   │   └── sections/      # Các phần chính của trang web (Hero, About, Jobs, Featured, Projects, Contact).
│   ├── hooks/             # Custom React Hooks (vd: useIntersectionObserver, usePrefersReducedMotion).
│   ├── pages/             # Pages của Gatsby (index.js, 404.js, archive.js).
│   ├── styles/            # Chứa Global Styles, Theme, Mixins (Typography, Colors).
│   ├── utils/             # Helper functions.
│   └── config.js          # File cấu hình biến toàn cục (Links, email, colors).
├── gatsby-config.js       # File cấu hình plugin của Gatsby.
└── gatsby-node.js         # API Node của Gatsby (tùy chỉnh Webpack, tạo trang động).
```

---

## 4. Các Quy ước Lập trình Quan trọng (Conventions & Rules)

Bất kỳ sửa đổi nào cũng phải tuân thủ 5 quy tắc "vàng" sau:

1. **Anti-Bloatware (Chống phình to)**: 
   - Tuyệt đối không cài thêm các thư viện NPM nặng nề để giải quyết các UI/UX cơ bản.
   - Nếu cần Animation, sử dụng CSS. Nếu cần logic cuộn trang/lazy load, sử dụng API nguyên bản của trình duyệt (Browser Native API).

2. **GraphQL Inference Warning**:
   - Trong Gatsby, cấu trúc dữ liệu GraphQL được suy luận (inferred) động từ các file Markdown nằm trong thư mục `content/`.
   - Nếu một thư mục (ví dụ `content/featured`) không có bất kỳ file `.md` nào chứa field `cta`, lúc build Gatsby sẽ báo lỗi `Cannot query field "cta"`.
   - **Cách giải quyết:** Khi xóa data, luôn luôn phải giữ lại ít nhất 1 file `dummy/index.md` chứa toàn bộ các thuộc tính frontmatter tối đa có thể được gọi trong GraphQL Query của các component.

3. **Gatsby 5 GraphQL Syntax**:
   - Lệnh sắp xếp dữ liệu (Sort) trong GraphQL phải tuân theo cú pháp Gatsby 5.
   - ❌ Sai (Gatsby 4): `sort: { fields: [frontmatter___date], order: DESC }`
   - ✅ Đúng (Gatsby 5): `sort: { frontmatter: { date: DESC } }`

4. **Quản lý SEO Head**:
   - Không được phép cài đặt hay sử dụng `react-helmet`. Component `Helmet` không tương thích tốt với React 18 Concurrent Rendering.
   - Cần sử dụng **Gatsby Head API**. Tại mỗi file trong `src/pages/`, import và export Head:
     ```javascript
     import { Head as SEO } from '@components';
     export const Head = () => <SEO title="Tên trang" />;
     ```

5. **Styling & Theme**:
   - Các component mới tạo cần ưu tiên sử dụng các helper có sẵn từ `theme.mixins` (ví dụ: `${({ theme }) => theme.mixins.flexCenter};`).
   - Luôn sử dụng biến CSS `var(--color-name)` để gọi màu thay vì hardcode mã hex trực tiếp.
   - Khi tạo hiệu ứng xuất hiện trên trang, chỉ cần gắn thêm className `"reveal-on-scroll"` vào wrapper element, sau đó khởi tạo Hook `const revealContainer = useIntersectionObserver();` và đưa ref vào element đó. Mọi logic sẽ tự động hoạt động.

6. **Quản lý Tệp tĩnh & Tài liệu (CV/Resume)**:
   - Các file tĩnh đặc biệt như `resume.pdf` phải được đặt trong thư mục `static/`.
   - **Tuyệt đối không** cài đặt các thư viện đọc PDF (như `react-pdf`) để xem trực tiếp trên web, mà tận dụng trình xem PDF gốc của trình duyệt (Native Browser PDF Viewer) thông qua thẻ `<a>`.

7. **Tùy chỉnh Logo & Biểu tượng (SVG Icons)**:
   - Thay vì tải các file ảnh hay file SVG rời làm phình dự án, hãy sửa đổi trực tiếp tọa độ (path `d="..."`) của file SVG trong thư mục `src/components/icons/`.
   - Đảm bảo tính nhất quán (ví dụ: sửa `logo.js` thì cũng phải sửa `loader.js`).
