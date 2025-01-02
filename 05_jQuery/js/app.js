$(document).ready(function() {

    $(window).click(function(e) {

        let height_width = Math.floor(Math.random() * 50) + 50;

        const colors = [
            "#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FF8C33",
            "#33FFF3", "#8C33FF", "#FF3333", "#33FF8C", "#5733FF",
            "#FFC300", "#DAF7A6", "#581845", "#900C3F", "#C70039",
            "#2E86C1", "#28B463", "#D68910", "#A569BD", "#CB4335"
        ];

        let x = e.pageY + "px";
        let y = e.pageX + "px";

        let random_color_index = Math.floor(Math.random() * colors.length - 1);
        let background = colors[random_color_index];

        let circle = "<div style='background-color:" + background + ";width:" + height_width + "px;height:" + height_width + "px;border-radius:50%;position:absolute;top:" + x + ";left:" + y + ";'> </div>";

        $("body").append(circle);

        let windowHeigth = $(window).height();
        let top = windowHeigth - height_width;

        $("body div").last().animate({
            top: top + "px"
        }, 2000, function() {
            $(this).fadeOut();
        });

    });

});