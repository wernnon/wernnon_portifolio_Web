"use client";

import { useEffect } from "react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
  projectTitle?: string;
}

export function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  caption,
  projectTitle,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full bg-[#121212] border border-[#262626] flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#262626] bg-black">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gold font-mono">
              {projectTitle || "Inspeção de Registro Operacional"}
            </p>
            <h4 className="text-xs font-semibold text-white truncate max-w-lg">
              {imageAlt}
            </h4>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-mono text-white-dim hover:text-white px-3 py-1 border border-[#262626]"
          >
            [ Fechar / Esc ]
          </button>
        </div>

        {/* Uncropped Image Display */}
        <div className="relative flex-1 overflow-auto bg-black flex items-center justify-center p-4">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[72vh] w-auto max-w-full object-contain block"
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="px-6 py-3 bg-[#121212] border-t border-[#262626]">
            <p className="text-xs text-white-dim leading-relaxed font-sans">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
