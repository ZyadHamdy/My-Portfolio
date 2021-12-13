const popup = document.querySelector('.popup');

const videoContainer = document.querySelector('.video-container');

const close = document.querySelector('.close');

popup.addEventListener('click', () => {
    videoContainer.classList.add('show');

})

close.addEventListener('click', () => {

    videoContainer.classList.remove('show');

})


//
let isShow = true,
    isHide = false;
window.onscroll = () => {
    let windowScrollTop = this.pageYOffset,
        progressBar = document.querySelectorAll(".outer-skills"),
        valueContainer = document.querySelectorAll(".value");
    if (windowScrollTop >= 997) {
        //
        //First Skill
        if (isShow) {
            let progressValue = 0;
            let progressEnd1 = 95;
            let progress = setInterval(() => {
                progressValue++;
                isShow = false;
                isHide = true;
                valueContainer[0].innerHTML = `${progressValue}%`
                progressBar[0].style.background = `conic-gradient(
                    orange ${progressValue * 3.6 }deg,
                    #fff ${progressValue * 3.6}deg
                )`
                if (progressValue == progressEnd1) {
                    clearInterval(progress);
                }
            }, 20)
        }
        // second Skill
        if (isShow) {
            let progressValue = 0;
            let progressEnd2 = 90;
            let progress = setInterval(() => {
                progressValue++;
                isShow = false;
                isHide = true;
                valueContainer[1].innerHTML = `${progressValue}%`
                progressBar[1].style.background = `conic-gradient(
                    orange ${progressValue * 3.6 }deg,
                    #fff ${progressValue * 3.6}deg
                )`
                if (progressValue == progressEnd2) {
                    clearInterval(progress);
                }
            }, 20)
        }
        // Third Skill
        if (isShow) {
            let progressValue = 0;
            let progressEnd3 = 80;
            let progress = setInterval(() => {
                progressValue++;
                isShow = false;
                isHide = true;
                valueContainer[2].innerHTML = `${progressValue}%`
                progressBar[2].style.background = `conic-gradient(
                    orange ${progressValue * 3.6 }deg,
                    #fff ${progressValue * 3.6}deg
                )`
                if (progressValue == progressEnd3) {
                    clearInterval(progress);
                }
            }, 20)
        }
        // Third Skill
        if (isShow) {
            let progressValue = 0;
            let progressEnd4 = 75;
            let progress = setInterval(() => {
                progressValue++;
                isShow = false;
                isHide = true;
                valueContainer[3].innerHTML = `${progressValue}%`
                progressBar[3].style.background = `conic-gradient(
                    orange ${progressValue * 3.6 }deg,
                    #fff ${progressValue * 3.6}deg
                )`
                if (progressValue == progressEnd4) {
                    clearInterval(progress);
                }
            }, 20)
        }
    }
}

/*------------------------Start Creat Popup Box------------------------*/

// let PopupIicon = document.querySelectorAll('.gallery .plus-icon');
// // if (PopupImags.style.transform = scale(1.1)) {
// //     PopupImags.style.border = '2px solid #f00';
// // }
// PopupIicon.forEach(img => {
//     img.addEventListener('click', (e) => {
//         //Creat Over Lay
//         let overlay = document.createElement('div');
//         //append class to div of overlay
//         overlay.className = 'popup-overlay';
//         //append overlay to body
//         document.body.appendChild(overlay);
//         //creat popup box
//         let popupBox = document.createElement('div');
//         //append class to popup box
//         popupBox.className = 'popup-box';
//         let PopupImags = document.querySelectorAll('.gallery img');
//         PopupImags.forEach(imgSrc => {
//             // if (imgSrc.target.alt !== null) {
//             //Creat Heading
//             let imgHeading = document.createElement('h3');
//             //add class to heading
//             imgHeading.className = 'popup-heading';
//             //creat text for heading
//             let imgHeadingText = document.createTextNode(imgSrc.alt);
//             //append imgHeadingText to imgHeading
//             imgHeading.appendChild(imgHeadingText)
//                 //append imgHeading to popupBox
//             popupBox.appendChild(imgHeading)
//                 // }

//             //creat popup img
//             let popupImg = document.createElement('img');

//             popupImg.src = imgSrc.src;
//             //append img to popup box
//             popupBox.appendChild(popupImg);
//             //append popupBox to body
//             document.body.appendChild(popupBox)
//                 //Creat button close
//             let buttonClose = document.createElement('span');
//             //add text to button close
//             let buttonCloseText = document.createTextNode('X');
//             //add class to button close
//             buttonClose.className = 'button-close';
//             //appen buttonCloseText to buttonClose
//             buttonClose.appendChild(buttonCloseText);
//             //appen buttonClose to popupBox
//             popupBox.appendChild(buttonClose)
//         })
//     })
// });
let PopupImags = document.querySelectorAll('.gallery img');
PopupImags.forEach(img => {
    img.addEventListener('click', (e) => {
        //Creat Over Lay
        let overlay = document.createElement('div');
        //append class to div of overlay
        overlay.className = 'popup-overlay';
        //append overlay to body
        document.body.appendChild(overlay);
        //creat popup box
        let popupBox = document.createElement('div');
        //append class to popup box
        popupBox.className = 'popup-box';
        if (img.alt !== null) {
            //Creat Heading
            let imgHeading = document.createElement('h3');
            //add class to heading
            imgHeading.className = 'popup-heading';
            //creat text for heading
            let imgHeadingText = document.createTextNode(img.alt);
            //append imgHeadingText to imgHeading
            imgHeading.appendChild(imgHeadingText)
                //append imgHeading to popupBox
            popupBox.appendChild(imgHeading)
        }

        //creat popup img
        let popupImg = document.createElement('img');
        popupImg.src = img.src;
        //append img to popup box
        popupBox.appendChild(popupImg);
        //append popupBox to body
        document.body.appendChild(popupBox)
            //Creat button close
        let buttonClose = document.createElement('span');
        //add text to button close
        let buttonCloseText = document.createTextNode('X');
        //add class to button close
        buttonClose.className = 'button-close';
        //appen buttonCloseText to buttonClose
        buttonClose.appendChild(buttonCloseText);
        //appen buttonClose to popupBox
        popupBox.appendChild(buttonClose)
    })
});
//remove popup
document.addEventListener('click', (e) => {
    if (e.target.className == 'button-close') {
        // remove the current popup
        e.target.parentNode.remove()
            //remove over lay
        document.querySelector('.popup-overlay').remove()
    }
})

/*------------------------End Creat Popup Box------------------------*/