// var for button 1 
let dropdown = document.querySelector('#dropdown');
let Bttn = document.querySelector('#SM-Button');
let BttnImg = document.querySelector('.bttimg');
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
let SMinfo = document.querySelector('.SM-info');
let SMinfo2 = document.querySelector('.SM-info2');
let SMinfo3 = document.querySelector('.SM-info3');

//var for button 2
let biletainfo = document.querySelector('.biletainfo');
let personid2 = document.querySelector('.personid2');
let addTicketBttn = document.querySelector('.addTicketBttn');
let addTicketBttn2 = document.querySelector('.addTicketBttn2');
//var for button 3
let personid3 = document.querySelector('.personid3');
let addTicketBttn3 = document.querySelector('.addTicketBttn3');
let i = 0; 

// Event Listeners for button 1
p1.addEventListener('click', function () {
    SMinfo.style.display = 'grid';
    SMinfo2.style.display = 'none';
    SMinfo3.style.display = 'none';
});
p2.addEventListener('click', function () {
    SMinfo.style.display = 'none';
    SMinfo2.style.display = 'grid';
    SMinfo3.style.display = 'none';
});
p3.addEventListener('click', function () {
    SMinfo.style.display = 'none';
    SMinfo2.style.display = 'none';
    SMinfo3.style.display = 'grid';
});

Bttn.addEventListener('click', function () {
    dropdown.style.display = 'block';    
});


window.addEventListener('click', function (e) {
    if (e.target != Bttn && e.target != BttnImg) {
        dropdown.style.display = 'none';
    };
});

// Event Listeners for button 2 && 3

    addTicketBttn.addEventListener('click', function () {
        biletainfo.style = 'grid-template-rows: 110px 80px 80px 100px;';
        personid2.style.display = 'grid';
        dropdown.style.top = '150px';
        if (i < 2) {
            i++;
        }
    });

addTicketBttn2.addEventListener('click', function () {
    if (i == 2) {
        biletainfo.style = 'grid-template-rows: 110px 80px 80px 100px;';
        personid2.style.display = 'none';
        dropdown.style.top = '150px';
        i--;
    } else {
        biletainfo.style = 'grid-template-rows: 110px 80px  100px;';
        personid2.style.display = 'none';
        dropdown.style.top = '190px';
        i--;
    }

});

addTicketBttn.addEventListener('click', function () {
    if (i == 1) {
        personid3.style.display = 'none';
    } else if (i == 2) {
        biletainfo.style = 'grid-template-rows: 100px 70px 70px 70px 90px;';
        personid3.style.display = 'grid';
        dropdown.style.top = '135px';
    }
});

addTicketBttn3.addEventListener('click', function () {
    if (i == 1) {
        biletainfo.style = 'grid-template-rows: 110px 80px  100px;';
        personid3.style.display = 'none';
        dropdown.style.top = '190px';
        i--;
    } else if (i == 2) {
        biletainfo.style = 'grid-template-rows: 110px 80px 80px 100px;';
        personid3.style.display = 'none';
        dropdown.style.top = '150px';
        i--;
    }
})
