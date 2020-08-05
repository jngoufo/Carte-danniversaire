let surprise = $('#surprise'), msgBtn1 = $('#msgBtn1'), msgBtn2 = $('#msgBtn2'), introVideo = $('.introVideo'), 
flashButton = $('.flashButton'), birthdayVideo = $('#happyBirthdayVideo'), final = $('#final'), interval_msgBtn, fondPage = $('#fond'), docBody = $('body');
// I hide some element when the user opens the page
msgBtn1.hide();
msgBtn2.hide();
final.hide();
introVideo.hide();
birthdayVideo.hide();


function flashTheButton(button){
    button.show();
    $('body').css('background-image', 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1595849460/Carte%20Anniv%20Jud/Confetti-background_photo-min.png"), linear-gradient(180deg, #7ddaff -20%, transparent), url("https://res.cloudinary.com/monwebmestre/image/upload/v1595848520/Carte%20Anniv%20Jud/Confetti-background-min.gif")')
    interval_msgBtn = setInterval(function(){
        button.fadeToggle()
    }, 1000)
};

function hideVideo(myVideo, callback){
    myVideo.fadeOut(500, callback)
};

function changeBalloonImg(){
    if(screen.availWidth >= 768 && screen.availWidth < 1440) {
        fondPage.css('background-image','url("https://res.cloudinary.com/monwebmestre/image/upload/v1595850086/Carte%20Anniv%20Jud/Tab-Video-Background-min.png")');
    } 
    else if(screen.availWidth >= 1440 && screen.availWidth < 1920) {
        fondPage.css('background-image','url("https://res.cloudinary.com/monwebmestre/image/upload/v1595850086/Carte%20Anniv%20Jud/Lap-Video-Background-min.png")');
    }
     else if(screen.availWidth >= 1920){
        fondPage.css('background-image','url("https://res.cloudinary.com/monwebmestre/image/upload/v1595850085/Carte%20Anniv%20Jud/Desk-Video-Background_-min.png")');
    } 
    else {
        fondPage.css('background-image','url("https://res.cloudinary.com/monwebmestre/image/upload/v1595850085/Carte%20Anniv%20Jud/Mob-Video-Background-min.png")');
    }
}

$(document).ready(function(){
//Let's make the suprise button flash
let blink = setInterval(function(){
    $('figcaption').fadeToggle()
}, 800);
    
//Let's trigger an event when the mouse hovers over buttons
function mouseListener(button){
    button.mouseover(function(){
        $('body').css('background-image', 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1595849460/Carte%20Anniv%20Jud/Confetti-background_photo-min.png"), linear-gradient(180deg, #7ddaff -20%, transparent)')
    })
    button.mouseout(function(){
        $('body').css('background-image', 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1595849460/Carte%20Anniv%20Jud/Confetti-background_photo-min.png"), linear-gradient(180deg, #7ddaff -20%, transparent), url("https://res.cloudinary.com/monwebmestre/image/upload/v1595848520/Carte%20Anniv%20Jud/Confetti-background-min.gif")')
    })
}

mouseListener($('img#flashImg'));
mouseListener(msgBtn1);
mouseListener(msgBtn2);

// When the user clicks on the surprise button...
flashButton.click(function(){
    clearInterval(blink); // we stop the flash
    surprise.hide();// we hide the suprise button
    changeBalloonImg();
    $('body').css('background-image', 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596623723/Carte%20Anniv%20Jud/Star_background-min.gif")');
    fondPage.css({ // Adjust background img size to screen dimensions
        'display':'flex',
        'justify-content':'center',
        'align-items':'center',
        'background-size': 'cover',
    });
    introVideo.fadeIn('slow'); // display the video
    document.querySelector('.introVideo').addEventListener('ended', function(){
        hideVideo(introVideo, flashTheButton(msgBtn1))
    })
}); 



//Now when the user clicks on the envelope button...
msgBtn1.click(function(){
    clearInterval(interval_msgBtn); // envelope stops flashing
    $(this).hide(); // envelope is hidden
    $('body').css('background-image', 'url("https://res.cloudinary.com/monwebmestre/image/upload/v1596623723/Carte%20Anniv%20Jud/Star_background-min.gif")');
    birthdayVideo.fadeIn('slow');
    document.querySelector('#happyBirthdayVideo').addEventListener('ended', function(){
        hideVideo(birthdayVideo, flashTheButton(msgBtn2))
    }); 
});

msgBtn2.click(function(){
    clearInterval(interval_msgBtn);
    $(this).hide();
    $('body').css('background-image', 'url(https://res.cloudinary.com/monwebmestre/image/upload/v1596623723/Carte%20Anniv%20Jud/Star_background-min.gif)');
    final.fadeIn('fast');
})

})


