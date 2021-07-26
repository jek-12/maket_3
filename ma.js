$(document).ready(function() {
    // feedback form
    const back_pop = document.getElementsByClassName("pop_bckg");
    let arr = document.getElementsByTagName("input");
    let popping_inputs = $("#pop_general_box input");
    const regex = {
        "name": /^[a-zA-Z ]+$/,
        "number": /^\+?3?8?(0\d{9})$/,
        "mail": /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    };
    const index = Object.keys(regex);
    function id(num) {
        $(arr[num]).attr("placeholder", "Поле обязательно для заполнения");
        $(arr[num]).addClass("invalid");
    }
    function validation(reg, num) {
        return reg.test($(arr[num]).val());
    }
    $("#pop_btn").on("click", function () {
            setInterval(function () {
                for (let f = 0; f < arr.length - 1; f++) {
                    if (validation(regex[index[f]], f)) {
                        $(arr[f]).removeClass("invalid");

                    } else {
                        id(f);
                    }
                }
            }, 10);
        popping_inputs.on("focus", function () {
            $(this).css("border", "1px solid #ff8383");
        });
        popping_inputs.on("focusout", function () {
            $(this).css("border", "none");
        });
    });
    $(".feedback").click(function () {
        $(back_pop).fadeIn("slow");
        $(back_pop).css('display', 'flex');
    });
    $(".pop_btn_close").click(function () {
        $(back_pop).fadeOut("slow");
        setTimeout(function () {
            for(let i = 0; i < arr.length-1; i++){
                $(arr[i]).val("");
            }
        }, 750);
    });





    // burger menu + breadcrumbs
    let cat_list = $("#catalog_menu_list");
    function remove() {
        $("#breadcrumbs_li li").last().remove();
    }
    function disp_menu_list(id, event) {
       $(id).on(event, function() {
           cat_list.css("display", "list-item");
           if(event === "mouseleave") {
               cat_list.css("display", "none");
               remove();
           }
       });
    }
    function disp_general_cat(id, event) {
        $(id).on(event, function() {
            $("#breadcrumbs_li").append("<li><span>"+ this.textContent +"</span></li>");
            $(this).css("text-decoration", "underline");
            if(event === "mouseleave") {
                remove();
                remove();
                $(this).css("text-decoration", "none");
            }
        });
    }
    function menu_list_li_push(id, event) {
        $(id).on(event, function() {
            $("#breadcrumbs_li").append("<li><span>"+ this.textContent +"</span></li>");
            if(event === "mouseleave") {
                remove();
                remove();
            }
        });
    }

    disp_menu_list("#display_list", "mouseenter");
    disp_menu_list("#display_list", "mouseleave");

    disp_general_cat(".catalog_menu li span:not(.butovycha)", "mouseenter");
    disp_general_cat(".catalog_menu li span:not(.butovycha)", "mouseleave");

    $("#display_list span").mouseenter(function () {
        $("#breadcrumbs_li").append("<li><span>"+ this.textContent +" /"+"</span></li>");
    });

    menu_list_li_push("#catalog_menu_list li", "mouseenter");
    menu_list_li_push("#catalog_menu_list li", "mouseleave");

    let arr_li = document.getElementById("breadcrumbs_li").getElementsByTagName("li");
    $(arr_li).each(function () {
        this.append(" /");
    })



    //pager bottom
    $(".pagnation span:nth-child(3)").addClass("pagnation_active");
    $(".pagnation span").click(function() {
        $(".pagnation span").removeClass("pagnation_active");
        $(this).addClass("pagnation_active");
    })

});
