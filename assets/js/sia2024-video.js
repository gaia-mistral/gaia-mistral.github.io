document.addEventListener('DOMContentLoaded', function() {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
  
    videoThumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const videoId = thumbnail.getAttribute('data-video-id');
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        window.open(videoUrl, '_blank');
      });
    });
  });
  