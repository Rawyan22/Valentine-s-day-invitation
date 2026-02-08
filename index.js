$(document).ready(function () {

     $("#yes-btn").click(function () {
        alert("You sureee?? ૮ ˶ᵔ ᵕ ᵔ˶ ა");
     });

     $("#yes-btn").click(function (){
        alert("alr (｡•́   ̫ •̀｡)");
     });
     
     $("#yes-btn").click(function (){
        const overlay = $("<div>");
        overlay.attr("id", "jumpscare");

        const vid = $("<video>");
        vid.attr("src", "chroma-keyed-video.webm");
        vid.attr("autoplay", "autoplay");

        overlay.append(vid);
        $("body").append(overlay);

        $("#jumpscare")[0].play();
        $('#jumpscare').prop('playbackRate', 1);
        
        return;
    });

     $("#no-btn").click(function () {

        const windowWidth = $(window).width();
        const windowHeight = $(window).height();

        const buttonWidth = $(this).outerWidth();
        const buttonHeight = $(this).outerHeight();

        const maxLeft = windowWidth - buttonWidth;
        const maxTop = windowHeight - buttonHeight;

        const randomLeft = Math.floor(Math.random() * maxLeft);
        const randomTop = Math.floor(Math.random() * maxTop);

        $(this).css({
            left: randomLeft + "px",
            top: randomTop + "px"
        });

        const muhehe = new Audio("soundreality-pop-423717.mp3");

        muhehe.currentTime = 0;
        muhehe.play();
     });
});
