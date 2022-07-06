$(document).ready(function () {


    TweenMax.to($(".loader"), 0.8,{ rotation:360,repeat:-1,ease: Power0.easeNone});
    
    
    var anim = new TimelineMax({ 
        delay:0 ,
        paused:true,
        onComplete:function(){
            anim.reverse();
        
            
    
    }
    });
        
    
    
    
        anim.to($(".loader"), 0.5,{ opacity:0},0.7);
        
        
        
    
    
        
    anim.play(1);
    });