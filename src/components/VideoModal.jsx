import { useEffect, useRef, useState } from 'react'
import { clipsOf, resolveVideo } from './media'

export default function VideoModal({ item, onClose }) {
  const closeRef = useRef(null)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!item) return
    setIdx(0)
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [item, onClose])

  if (!item) return null
  const clips = clipsOf(item.video)
  const clip = clips[idx] || clips[0]
  const media = resolveVideo(clip)

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <div className={`modal__inner ${clip?.vertical ? 'is-vertical' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="modal__bar mono">
          <span>{item.client} <span className="muted">/ {clip?.label || item.title}</span></span>
          <button ref={closeRef} onClick={onClose} className="modal__close">Close ✕</button>
        </div>
        <div className="modal__player">
          {media?.kind === 'iframe' && (
            <iframe key={media.src} src={media.src} title={clip?.label || item.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          )}
          {media?.kind === 'video' && <video key={media.src} src={media.src} controls autoPlay playsInline />}
          {!media && (
            <div className="modal__empty">
              <p className="mono">Film coming soon.</p>
              <p className="mono muted">Add a video ID in src/data/projects.js</p>
            </div>
          )}
        </div>
        {clips.length > 1 && (
          <div className="modal__tabs" role="tablist" aria-label="Clips">
            {clips.map((c, i) => (
              <button key={i} role="tab" aria-selected={i === idx} className={`chip mono ${i === idx ? 'is-on' : ''}`} onClick={() => setIdx(i)}>
                {String(i + 1).padStart(2, '0')} {c.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
