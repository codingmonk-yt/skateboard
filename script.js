document.addEventListener("DOMContentLoaded", function() {
    // Handle sidebar link click events
    document.querySelectorAll(".sidebar-link").forEach(function(link) {
        link.addEventListener("click", function() {
            document.querySelectorAll(".sidebar-link").forEach(function(link) {
                link.classList.remove("is-active");
            });
            this.classList.add("is-active");
        });
    });

    // Handle window resize events
    function handleResize() {
        if (window.innerWidth > 1090) {
            document.querySelector(".sidebar").classList.remove("collapse");
        } else {
            document.querySelector(".sidebar").classList.add("collapse");
        }
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    // Handle video hover events
    document.querySelectorAll(".video").forEach(function(videoElement) {
        videoElement.addEventListener("mouseover", function() {
            const video = videoElement.querySelector("video");
            video.play();
        });
        videoElement.addEventListener("mouseleave", function() {
            const video = videoElement.querySelector("video");
            video.pause();
        });
    });

    // Handle logo and discover click events
    document.querySelectorAll(".logo, .logo-expand, .discover").forEach(function(element) {
        element.addEventListener("click", function() {
            const mainContainer = document.querySelector(".main-container");
            mainContainer.classList.remove("show");
            mainContainer.scrollTop = 0;
        });
    });

    // Handle trending and video click events
    document.querySelectorAll(".trending, .video").forEach(function(element) {
        element.addEventListener("click", function() {
            const mainContainer = document.querySelector(".main-container");
            mainContainer.classList.add("show");
            mainContainer.scrollTop = 0;
            document.querySelectorAll(".sidebar-link").forEach(function(link) {
                link.classList.remove("is-active");
            });
            document.querySelector(".trending").classList.add("is-active");
        });
    });

    // Handle video click events to update video player
    document.querySelectorAll(".video").forEach(function(videoElement) {
        videoElement.addEventListener("click", function() {
            const source = videoElement.querySelector("source").getAttribute("src");
            const title = videoElement.querySelector(".video-name").textContent;
            const person = videoElement.querySelector(".video-by").textContent;
            const img = videoElement.querySelector(".author-img").getAttribute("src");

            const videoStream = document.querySelector(".video-stream");
            const videoStreamVideo = videoStream.querySelector("video");
            const videoStreamSource = videoStream.querySelector("source");

            videoStreamVideo.pause();
            videoStreamSource.setAttribute("src", source);
            videoStreamVideo.load();
            videoStream.querySelector(".video-p-title").textContent = title;
            videoStream.querySelector(".video-p-name").textContent = person;
            videoStream.querySelector(".video-detail .author-img").setAttribute("src", img);
        });
    });
});
