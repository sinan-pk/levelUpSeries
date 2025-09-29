document.querySelectorAll('.boxes').forEach(box => {
    const p = box.querySelector('.profileFeedback');
    const textOnly = p.textContent.trim();

    if(textOnly.length > 250){
        const shortText = textOnly.slice(0, 250) + '...';
        p.innerHTML = `
            <span class="short-text">${shortText}</span>
            <span class="read-more">Read more</span>
        `;

        const btn = p.querySelector('.read-more');
        btn.addEventListener('click', () => {
            box.querySelector('.boxMiddle').classList.add('expanded');
            const shortSpan = p.querySelector('.short-text');
            if(shortSpan) {
                shortSpan.textContent = textOnly; // replace only the short span
            }
            btn.remove(); // remove the read more button
        });
    }
});




       document.querySelectorAll('.boxes').forEach(box => {
    const audio = box.querySelector('.myAudio');
    const speedBtn = box.querySelector('.speedBtn');
    if(!audio || !speedBtn) return;

    const speeds = [1, 1.5, 2];
    let currentIndex = 0;

    speedBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % speeds.length;
        audio.playbackRate = speeds[currentIndex];
        speedBtn.textContent = speeds[currentIndex] + "x";
    });

    audio.volume = 1.0;
    audio.addEventListener("volumechange", () => {
        if (audio.volume !== 1.0) audio.volume = 1.0;
    });
});
