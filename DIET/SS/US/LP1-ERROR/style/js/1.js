
        $(document).ready(function () {
            $.glue({
                layer: '#beforeyougo',
                cookie: false
            });

            //Vancouver, Montreal, Calgary, Toronto, Ottawa, Edmonton
            var recentPur = [
                ['George - Vancouver', '5', '5 minutes ago'],
                ['Steve - Vancouver', '7', '15 minutes ago'],
                ['Laura - Vancouver', '3', '22 minutes ago'],
                ['Phil - Vancouver', '7', '23 minutes ago'],
                ['Juan - Edmonton', '5', '24 minutes ago'],
                ['Smith - Montreal', '7', '27 minutes ago'],
                ['Harris - Montreal', '7', '30 minutes ago'],
                ['Wilson - Montreal', '7', '31 minutes ago'],
                ['Garcia - Montreal', '7', '33 minutes ago'],
                ['Elliott - Edmonton', '7', '36 minutes ago'],
                ['Tessa - Calgary', '7', '45 minutes ago'],
                ['Ashleigh - Calgary', '7', '1 hour ago'],
                ['Devin - Calgary', '7', '1 hour ago'],
                ['Ariana - Calgary', '7', '1 hour ago'],
                ['Elin - Edmonton', '7', '1 hour ago'],
                ['Aleksandra - Toronto', '7', '1 hour ago'],
                ['Peyton - Toronto', '7', '1 hour ago'],
                ['Lucille - Toronto', '3', '1 hour ago'],
                ['Gina - Toronto', '5', '1 hour ago'],
                ['Katharine - Edmonton', '5', '1 hour ago'],
                ['Sumaya - Ottawa', '7', '1 hour ago'],
                ['Leanne - Ottawa', '5', '1 hour ago'],
                ['Nettie - Ottawa', '7', '1 hour ago'],
                ['Jeanne - Ottawa', '5', '1 hour ago'],
                ['Diane - Edmonton', '7', '1 hour ago']
            ];
            var randPur = Math.floor(Math.random() * recentPur.length);
            var timeRand = Math.round(Math.random() * 29) + 1;
            $('#notify-1').html(recentPur[randPur][0]);
            $('#notify-2').html(recentPur[randPur][1]);
            $('#notify-3').html(timeRand + " seconds ago");

            setInterval(function () {
                $(".custom-social-proof").stop().slideToggle('slow', function () {
                    if ($('.custom-social-proof').css('display') == 'none') {
                        var randPur = Math.floor(Math.random() * recentPur.length);
                        $('#notify-1').html(recentPur[randPur][0]);
                        $('#notify-2').html(recentPur[randPur][1]);
                        $('#notify-3').html(timeRand + " seconds ago");
                    }
                });
            }, 8000);
            $(".custom-close").click(function () {
                $(".custom-social-proof").stop().slideToggle('slow');
            });

        });


        $(document).bind("click", function (e) {
            if ($(e.target).closest("#beforeyougo").length == 0) {
                $.glue_close();
                hideCliamLayer();
            }
        })


        setTimeout(function () {
            window.addEventListener("popstate", function (event) {
                if (event.state && event.state.wisepops === "exit-intent") {
                    showCliamLayer();
                }
            });
        }, 100);
        if (!window.history.state || window.history.state.wisepops !== "normal-intent") {
            window.history.replaceState({ wisepops: "exit-intent" }, "");
            window.history.pushState({ wisepops: "normal-intent" }, "");
        }



        function showCliamLayer() {
            $("#beforeyougo").show();
        }

        function hideCliamLayer() {
            $("#beforeyougo").hide();
        }


        function hideFooter() {
            $(".wisepops-root").hide();
        }




    
