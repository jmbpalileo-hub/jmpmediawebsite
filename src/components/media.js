// Turns a project's `video` object into something playable.
export function resolveVideo(video, { autoplay = true } = {}) {
  if (!video) return null
  const ap = autoplay ? 1 : 0
  switch (video.provider) {
    case 'vimeo':
      return video.id
        ? { kind: 'iframe', src: `https://player.vimeo.com/video/${video.id}?autoplay=${ap}&title=0&byline=0&portrait=0&dnt=1` }
        : null
    case 'youtube':
      return video.id
        ? { kind: 'iframe', src: `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=${ap}&rel=0&modestbranding=1` }
        : null
    case 'drive':
      return video.id ? { kind: 'iframe', src: `https://drive.google.com/file/d/${video.id}/preview` } : null
    case 'mp4':
      return video.src ? { kind: 'video', src: video.src } : null
    default:
      return null
  }
}

export const hasVideo = (video) => clipsOf(video).some((c) => resolveVideo(c) !== null)

// A project's `video` may be one video or a list of clips.
export const clipsOf = (video) => (Array.isArray(video) ? video : video ? [video] : [])
