type GalleryImage = {
  src: string;
  caption?: string;
};

export type GalleryData = {
  [year: string]: GalleryImage[];
};

export const galleryData: GalleryData = {
  "2020": [
    { src: "/assets/gallery/2020/img1.jpeg", caption: "Stage Decor" },
    { src: "/assets/gallery/2020/img2.jpg", caption: "Evening Aarti" },
  ],
  "2021": [
    { src: "/assets/gallery/2021/img1.jpeg", caption: "Stage Decor" },
    { src: "/assets/gallery/2021/img2.jpeg", caption: "Evening Aarti" },
  ],
    "2022": [
    { src: "/assets/gallery/2022/img1.jpeg", caption: "Stage Decor" },
    { src: "/assets/gallery/2022/img2.jpg", caption: "Evening Aarti" },
  ],
  "2023": [
    { src: "/assets/gallery/2023/img1.jpeg", caption: "Stage Decor" },
    { src: "/assets/gallery/2023/img2.jpeg", caption: "Evening Aarti" },
  ],
  "2024": [
    { src: "/assets/gallery/2024/img1.jpeg", caption: "Stage Decor" },
    { src: "/assets/gallery/2024/img2.jpg", caption: "Lighting Ceremony" },
  ],
  "2025": [
    { src: "/assets/gallery/2025/img1.jpeg", caption: "Close View" },
    { src: "/assets/gallery/2025/img2.jpeg", caption: "Stage Decor" },
  ],
};
