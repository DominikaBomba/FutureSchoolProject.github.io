console.log("aaa");

//slider 
class Slider {
    constructor(tutorials, titles) {
        this.tutorials = tutorials;
        this.titles = titles;
    }

    add() {
        //slider
        
        //left arrow
        let left_arrow = document.createElement("button");
        left_arrow.setAttribute("id", "left_arrow");
        left_arrow.innerHTML = "Poprzedni";

        //video element
        let videoElement = document.querySelector("#vid");
        let current_video = document.createElement("source");
        current_video.setAttribute("src", this.tutorials[0]);
        videoElement.appendChild(current_video);

        //right arrow
        let right_arrow = document.createElement("button");
        right_arrow.setAttribute("id", "right_arrow");
        right_arrow.innerHTML = "Następny";

        //adding elements to slider
        const przyciski = document.querySelector("#przyciski");
        przyciski.appendChild(left_arrow);
        przyciski.appendChild(right_arrow);

        //left arrow click event
        left_arrow.addEventListener("click", () => {
            let current_number = this.tutorials.indexOf(current_video.getAttribute("src"));
            if (current_number > 0) {
                current_video.setAttribute("src", this.tutorials[current_number - 1]);
				tytul_filmu.innerHTML = this.titles[current_number - 1];
            } else {
                current_video.setAttribute("src", this.tutorials[this.tutorials.length - 1]);
				tytul_filmu.innerHTML = this.titles[this.titles.length - 1];
            }
            videoElement.load(); // Reload the video
        });

        //right arrow click event
        right_arrow.addEventListener("click", () => {
            let current_number = this.tutorials.indexOf(current_video.getAttribute("src"));
            if (current_number < this.tutorials.length - 1) {
                current_video.setAttribute("src", this.tutorials[current_number + 1]);
				tytul_filmu.innerHTML = this.titles[current_number + 1];
            } else {
                current_video.setAttribute("src", this.tutorials[0]);
				tytul_filmu.innerHTML = this.titles[0];
            }
            videoElement.load(); // Reload the video
        });
    }
}

let s1 = new Slider(["film1.mp4", "film2.mp4", "film3.mp4", "film4.mp4"], ["Czym jest Fasada?", "Dlaczego potrzebujemy Fasady?", "Teoria Fasady – Techniczne Zagadnienia", "Plusy i minusy fasady, podsumowanie "]);
console.log("aaa");
s1.add();