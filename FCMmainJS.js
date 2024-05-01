let bttnr = document.querySelector('#bttn-right');
let bttnl = document.querySelector('#bttn-left');

let subcontainer = document.querySelector('#subcontainer1');
let artc1 = document.querySelector('#article1');
let artc2 = document.querySelector('#article2');
let artc3 = document.querySelector('#article3');
let artc4 = document.querySelector('#article4');
let artc5 = document.querySelector('#article5');
let x = 0;


var WindowWidth,WindowHeight;
window.onresize = window.onload = function() {
    WindowWidth = this.innerWidth;
    WindowHeight = this.innerHeight;
    ArticleChanger();
    ArticleSizeChanger();
    ArrowVisibility();
};

bttnr.addEventListener('click', function(){
    if (x<4){
        x++
    } else{
        ArrowVisibility()
    }
    ArticleChanger();
    ArticleSizeChanger();
    ArrowVisibility();
});
bttnl.addEventListener('click', function(){
    if (x>0){
        x--
    } else{
        ArrowVisibility()
    }
    ArticleChanger();
    ArticleSizeChanger();
    ArrowVisibility();
});

function ArticleChanger(){
    if (x==0){
        subcontainer.style.left = (WindowWidth-800)/2 + 'px';
    } else if(x==1){
        subcontainer.style.left = (WindowWidth-800)/2 + -450 + 'px';
    } else if(x==2){
        subcontainer.style.left = (WindowWidth-800)/2 + -450*2 + 'px';
    } else if(x==3){
        subcontainer.style.left = (WindowWidth-800)/2 + -450*3 + 'px';
    } else if(x==4){
        subcontainer.style.left = (WindowWidth-800)/2 + -450*4 + 'px';
    }
};

function ArticleSizeChanger(){
    if (x==0){
        artc1.style.width = 800 + 'px';
        artc1.style.height = 450 + 'px';
        artc1.style.top = 0 + 'px';

        artc2.style.width = 400 + 'px';
        artc2.style.height = 225 + 'px';
        artc2.style.top = 112.5 + 'px';
    } else if(x==1){
        artc1.style = "transition-duration: 1s";
        artc1.style.width = 400 + 'px';
        artc1.style.height = 225 + 'px';
        artc1.style.top = 112.5 + 'px';

        artc2.style = "transition-duration: 1s";
        artc2.style.width = 800 + 'px';
        artc2.style.height = 450 + 'px';
        artc2.style.top = 0 + 'px';

        artc3.style = "transition-duration: 1s";
        artc3.style.width = 400 + 'px';
        artc3.style.height = 225 + 'px';
        artc3.style.top = 112.5 + 'px';
    } else if(x==2){
        artc2.style = "transition-duration: 1s";
        artc2.style.width = 400 + 'px';
        artc2.style.height = 225 + 'px';
        artc2.style.top = 112.5 + 'px';

        artc3.style = "transition-duration: 1s";
        artc3.style.width = 800 + 'px';
        artc3.style.height = 450 + 'px';
        artc3.style.top = 0 + 'px';

        artc4.style = "transition-duration: 1s";
        artc4.style.width = 400 + 'px';
        artc4.style.height = 225 + 'px';
        artc4.style.top = 112.5 + 'px';
    } else if(x==3){
        artc3.style = "transition-duration: 1s";
        artc3.style.width = 400 + 'px';
        artc3.style.height = 225 + 'px';
        artc3.style.top = 112.5 + 'px';

        artc4.style = "transition-duration: 1s";
        artc4.style.width = 800 + 'px';
        artc4.style.height = 450 + 'px';
        artc4.style.top = 0 + 'px';

        artc5.style = "transition-duration: 1s";
        artc5.style.width = 400 + 'px';
        artc5.style.height = 225 + 'px';
        artc5.style.top = 112.5 + 'px';
    } else if(x==4){
        artc4.style = "transition-duration: 1s";
        artc4.style.width = 400 + 'px';
        artc4.style.height = 225 + 'px';
        artc4.style.top = 112.5 + 'px';
        
        artc5.style = "transition-duration: 1s";
        artc5.style.width = 800 + 'px';
        artc5.style.height = 450 + 'px';
        artc5.style.top = 0 + 'px';
    }
}

function ArrowVisibility(){
    if (x==0){
        bttnl.style.display = "none";
        bttnr.style.display = "block";
    } else if (x==4){
        bttnl.style.display = "block";
        bttnr.style.display = "none";
    }else{
        bttnl.style.display = "block";
        bttnr.style.display = "block";
    }
};