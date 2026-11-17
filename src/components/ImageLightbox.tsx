"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, Info } from "lucide-react";

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full bg-obsidian-card border border-sand/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-obsidian-border bg-obsidian-panel/90">
          <div className="flex items-center space-x-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-sand animate-ping" />
            <div>
              <p className="text-xs uppercase tracking-widest text-sand/80 font-mono">
                {projectTitle || "Inspeção de Interface Operacional"}
              </p>
              <h4 className="text-sm font-semibold text-slate-100 truncate max-w-md">
                {imageAlt}
              </h4>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-obsidian-elevated/80 hover:bg-burgundy/60 border border-obsidian-border rounded-lg transition-colors"
            title="Fechar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative flex-1 overflow-auto bg-black flex items-center justify-center min-h-[300px] p-2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg border border-obsidian-border/50 shadow-inner"
          />
        </div>

        {/* Footer with Caption */}
        {caption && (
          <div className="px-6 py-3.5 bg-obsidian-panel border-t border-obsidian-border flex items-start gap-3">
            <Info className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
