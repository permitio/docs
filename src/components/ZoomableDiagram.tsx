import React, { useState, useCallback } from "react";

interface ZoomableDiagramProps {
  children: React.ReactNode;
  title?: string;
}

export default function ZoomableDiagram({
  children,
  title,
}: ZoomableDiagramProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <div
        className="zoomable-diagram"
        onClick={open}
        title="Click to enlarge"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && open()}
      >
        <div className="zoomable-diagram__hint">Click to enlarge</div>
        {children}
      </div>

      {isOpen && (
        <div className="zoomable-diagram__overlay" onClick={close}>
          <button
            className="zoomable-diagram__close"
            onClick={close}
            aria-label="Close"
          >
            ✕
          </button>
          {title && <div className="zoomable-diagram__title">{title}</div>}
          <div
            className="zoomable-diagram__content"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
