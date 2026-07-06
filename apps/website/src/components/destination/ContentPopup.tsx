'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ContentPopupProps {
  title: string;
  previewText: string;
  children: React.ReactNode;
}

export default function ContentPopup({ title, previewText, children }: ContentPopupProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Portal needs document to be available (SSR safety)
  useEffect(() => { setMounted(true); }, []);

  const handleOpen = () => {
    setOpen(true);
    document.body.classList.add('open-model');
  };

  const handleClose = () => {
    setOpen(false);
    document.body.classList.remove('open-model');
  };

  const popup = open ? (
    <div className="popup_Box" id="contentpopup" style={{ display: 'block' }}>
      <div className="center-block">
        <div className="outer">
          <div className="mmcontent_popup">
            <h2>{title}</h2>
            <a
              href="javascript:void(0)"
              className="close__popup_content ui-link"
              onClick={handleClose}
            >
              <img src="/images/icon/popup-close.svg" alt="close" />
            </a>
            <div className="contentScroll">
              <div className="discount_popup">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="grayContent">
        <h2>{title}</h2>
        <p>{previewText}</p>
        <a href="javascript:void(0);" className="readmoreclick" onClick={handleOpen}>
          Read more
        </a>
      </div>

      {/* Render popup at document.body level — exactly like the original PHP
          which places #contentpopup outside #wrapper. position:fixed only
          works correctly when the element is not inside a transformed ancestor. */}
      {mounted && createPortal(popup, document.body)}
    </>
  );
}
