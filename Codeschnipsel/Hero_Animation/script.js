/**
 * GUTJAHR Hero Animation
 * Zoom-through text effect where the camera flies through the "J"
 */

document.addEventListener('DOMContentLoaded', function() {
    const heroContainer = document.querySelector('.hero-container');
    const content = document.querySelector('.content');
    const textWrapper = document.querySelector('.text-wrapper');

    // Animation duration in milliseconds (should match CSS animation)
    const ANIMATION_DURATION = 3500;

    // After animation completes, fade out hero and show content
    setTimeout(() => {
        heroContainer.classList.add('fade-out');
        content.classList.add('visible');

        // Enable page scrolling after animation
        document.body.style.overflow = 'auto';
    }, ANIMATION_DURATION);

    // Optional: Add replay functionality
    addReplayButton();
});

/**
 * Adds a replay button for testing the animation
 */
function addReplayButton() {
    const btn = document.createElement('button');
    btn.className = 'replay-btn';
    btn.textContent = 'Animation wiederholen';
    btn.addEventListener('click', replayAnimation);
    document.body.appendChild(btn);
}

/**
 * Replays the animation from the beginning
 */
function replayAnimation() {
    const heroContainer = document.querySelector('.hero-container');
    const content = document.querySelector('.content');
    const textWrapper = document.querySelector('.text-wrapper');

    // Reset states
    heroContainer.classList.remove('fade-out');
    content.classList.remove('visible');
    document.body.style.overflow = 'hidden';

    // Force reflow to restart animation
    textWrapper.style.animation = 'none';
    textWrapper.offsetHeight; // Trigger reflow
    textWrapper.style.animation = '';

    // Hide hero after animation
    setTimeout(() => {
        heroContainer.classList.add('fade-out');
        content.classList.add('visible');
        document.body.style.overflow = 'auto';
    }, 3500);
}

/**
 * Alternative: GSAP-based animation for more control
 * Uncomment and include GSAP library to use
 */
/*
function initGSAPAnimation() {
    // Requires: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

    const tl = gsap.timeline();

    tl.to('.text-wrapper', {
        scale: 50,
        z: 5000,
        opacity: 0,
        duration: 3.5,
        ease: 'power2.in',
        transformOrigin: '47% 50%'
    })
    .to('.hero-container', {
        opacity: 0,
        duration: 0.5,
        pointerEvents: 'none'
    })
    .to('.content', {
        opacity: 1,
        duration: 0.8
    });
}
*/

/**
 * Advanced: WebGL/Three.js version for even more dramatic effect
 * This would create a true 3D fly-through with depth of field
 */
/*
function initThreeJSAnimation() {
    // Would require Three.js setup
    // - Create 3D text geometry
    // - Animate camera through the text
    // - Add post-processing for blur/glow
}
*/

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
    const content = document.querySelector('.content');

    heroContainer.style.display = 'none';
    content.style.opacity = '1';
}

// Check support and apply fallback if needed
if (!supportsAnimation()) {
    fallbackNoAnimation();
}
