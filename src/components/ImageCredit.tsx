import { Camera } from "lucide-react";

interface ImageCreditProps {
  src: string;
  alt: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
}

const ImageCredit = ({
  src,
  alt,
  author,
  license,
  licenseUrl,
  sourceUrl,
  className = "",
  imgClassName = "w-full h-48 object-cover",
  loading = "lazy",
}: ImageCreditProps) => {
  return (
    <div className={`relative ${className}`}>
      <img src={src} alt={alt} className={imgClassName} loading={loading} />
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-3 py-1.5 flex items-center gap-1.5 text-[10px] text-white/80">
        <Camera className="w-3 h-3 shrink-0" />
        <span>
          ©{" "}
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            {author}
          </a>
          {" · "}
          <a
            href={licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            {license}
          </a>
          {" · Wikimedia Commons"}
        </span>
      </div>
    </div>
  );
};

export default ImageCredit;
