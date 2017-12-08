    function fallingPaint() {

        var $paintChips = $(), qt = parseInt(document.getElementById("chipsPerSecond").innerHTML)/3;
        
        for (var i = 0; i < qt; ++i) {
            var $paintChip = $('<div class="paint-chip"></div>');
            $paintChip.css({
                'left': (Math.random() * $('#site').width()) + 'px',
                'top': (- Math.random() * $('#site').height()) + 'px'
            });
            // add this snowflake to the set of snowflakes
            $paintChips = $paintChips.add($paintChip);
        }
        $('#paintZone').prepend($paintChips);
    
        $snowflakes.animate({
            top: "500px",
            opacity : "0",
        }, Math.random() + 5000, function(){
            $(this).remove();
            }
        );
}

    setInterval(fallingPaint, 1000 / 3)