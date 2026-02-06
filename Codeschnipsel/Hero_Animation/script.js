/**
 * GUTJAHR Hero Animation
 * Zoom-through text effect where the camera flies through the "J"
 * Animation starts on "Entry" button click, then plays video
 */

document.addEventListener('DOMContentLoaded', function() {
    const heroContainer = document.querySelector('.hero-container');
    const videoContainer = document.querySelector('.video-container');
    const video = document.querySelector('.opener-video');
    const textWrapper = document.querySelector('.text-wrapper');
    const entryBtn = document.querySelector('.entry-btn');

    // Animation duration in milliseconds (should match CSS animation)
    const ANIMATION_DURATION = 3500;

    // Start animation on button click
    entryBtn.addEventListener('click', startAnimation);

    function startAnimation() {
        // Hide the button
        entryBtn.classList.add('hidden');

        // Start the zoom animation
        textWrapper.classList.add('animate');

        // After animation completes, fade out hero and play video
        setTimeout(() => {
            heroContainer.classList.add('fade-out');
            videoContainer.classList.add('visible');

            // Start video playback
            video.play();
        }, ANIMATION_DURATION);
    }
});

/**
 * Utility: Detect if animation is supported
 */
function supportsAnimation() {
    const elem = document.createElement('div');
    return typeof elem.style.animation !== 'undefined' ||
           typeof elem.style.webkitAnimation !== 'undefined';
}

/**
 * Fallback for browsers without animation support
 */
function fallbackNoAnimation() {
    const heroContainer = document.querySelector('.hero-container');
    const videoContainer = document.querySelector('.video-container');
    const video = document.querySelector('.opener-video');

    heroContainer.style.display = 'none';
    videoContainer.style.opacity = '1';
    video.play();
}

// Check support and apply fallback if needed
if (!supportsAnimation()) {
    fallbackNoAnimation();
}
