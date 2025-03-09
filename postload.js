//Objs
const CinnamorollObj = document.getElementById('Cinnamoroll');
const PompompurinObj = document.getElementById('Pompompurin');
const TuxedoSamObj = document.getElementById('Tuxedo_Sam');
const MyMelodyObj = document.getElementById('My_Melody');
const KeroppiObj = document.getElementById('Keroppi');
const ChococatObj = document.getElementById('Chococat');
const BadtzMaruObj = document.getElementById('Badtz_maru');
const HangyodonObj = document.getElementById('Hangyodon');
const KuromiObj = document.getElementById('Kuromi');
const HelloKittyObj = document.getElementById('Hello_Kitty');
const PochaccoObj = document.getElementById('Pochacco');
const LittleTwinStarsObj = document.getElementById('Little_Twin_Stars');

//Other Objs for display
const DisplayZod = document.getElementById('DisplayArea');
const ZodNameObj = document.getElementById('ZodName');
const ZodPicObj = document.getElementById('ZodPic');
const ZodDatesObj = document.getElementById('ZodDates');
const ZodDesObj = document.getElementById('ZodDes');
const BackgroundDisplay = document.getElementById('Unblurred');

//calling Obj
CinnamorollObj.addEventListener('click', function(){
    displayOInfo('Cinnamoroll');
});
PompompurinObj.addEventListener('click', function(){
    displayOInfo('Pompompurin');
});
TuxedoSamObj.addEventListener('click', function(){
    displayOInfo('Tuxedo Sam');
});
MyMelodyObj.addEventListener('click', function(){
    displayOInfo('My Melody');
});
KeroppiObj.addEventListener('click', function(){
    displayOInfo('Keroppi');
});
ChococatObj.addEventListener('click', function(){
    displayOInfo('Chococat');
});
BadtzMaruObj.addEventListener('click', function(){
    displayOInfo('Badtz maru');
});
HangyodonObj.addEventListener('click', function(){
    displayOInfo('Hangyodon');
});
KuromiObj.addEventListener('click', function(){
    displayOInfo('Kuromi');
});
HelloKittyObj.addEventListener('click', function(){
    displayOInfo('Hello Kitty');
});
PochaccoObj.addEventListener('click', function(){
    displayOInfo('Pochacco');
});
LittleTwinStarsObj.addEventListener('click', function(){
    displayOInfo('Little Twin Stars');
});

//Display info function
function displayOInfo(whichOne) {
    ZodNameObj.innerHTML = whichOne;
    switch (whichOne) {
        case 'Cinnamoroll':
            ZodPicObj.src = 'Media/Cinnamoroll.png';
            ZodDatesObj.innerHTML = 'August 23 - September 22';
            ZodDesObj.innerHTML = 'In social settings, you often stick to the walls and stay quiet. Not by choice, but simply because you\’re so shy. You definitely have a tough time speaking up in most situations. However, that doesn\’t mean you don\’t want to be around people at all. You adore your friends and being around them brings you insurmountable joy.';
            //makes overlay appear 
            DisplayZod.classList.remove('hideMe');
            //blurs background
            BackgroundDisplay.classList.add('ZodChara');
            //plays audio 
            playAudio('CinnaAudio');
            break;
        case 'Pompompurin':
            ZodPicObj.src = 'Media/Pompompurin.png';
            ZodDatesObj.innerHTML = 'December 22 - January 19';
            ZodDesObj.innerHTML = 'Out of all your friends, you have the most energy. Sometimes it\’s for exercise, sometimes it\’s for work. Either way, you put 100% into what you love. You\’re also the one who makes plans and gathers everyone to bring those plans to reality. For you, nothing beats a day out with those you love. Well, a nap at the end of such a fulfilling day might be better.';
            DisplayZod.classList.remove('hideMe');
            BackgroundDisplay.classList.add('ZodChara');
            playAudio('PomAudio');
            break;
        case 'Tuxedo Sam':
            ZodPicObj.src = 'Media/Tuxedo_Sam.png';
            ZodDatesObj.innerHTML = 'April 20 - May 20';
            ZodDesObj.innerHTML = 'Sometimes, you\’re called the mom friend. You love to eat delicious food and by extension, feed those around you. You also love to neaten things up. From clothing to rooms, you love when things are absolutely perfect. It even irritates you to walk into a messy room or notice a hair out of place. If your friend is the owner the mess, you\’ll help them clean up for both your sake and theirs. Just like any parent, you can also be very stubborn about matters. You always have the best intentions even if you\'re stuck on one approach.';
            DisplayZod.classList.remove('hideMe');
            BackgroundDisplay.classList.add('ZodChara');
            playAudio('SamAudio');
            break;
        case 'My Melody':
            ZodPicObj.src = 'Media/My_Melody.png';
            ZodDatesObj.innerHTML = 'September 23 - October 22';
            ZodDesObj.innerHTML = 'From an outside perspective, you\’re sweet, kind, caring, and a bit of a klutz. You\’re also honest to a fault but only because you care about your friends so deeply that you don\’t want to hide the truth from them. Even though you\’re considered naive due to your childish outward appearance, you have a large understanding of emotions to care for your friends.';
            DisplayZod.classList.remove('hideMe');
            BackgroundDisplay.classList.add('ZodChara');
            playAudio('MeloAudio');
            break;
        case 'Keroppi':
            ZodPicObj.src = 'Media/Keroppi.png';
            ZodDatesObj.innerHTML = 'July 23 - August 22';
            ZodDesObj.innerHTML = 'YAn extrovert through and through. Anything to be around people, you love to do it. Especially if it involves games. You love playing all kinds of games with your friends. From board games to ball games to even video games at times, you love games. You get so excited about games that you can become careless. For you, it/’s not about winning the game but having fun. It might feel bad to lose but you don/’t let it get to you and bounce back immediately.';
            DisplayZod.classList.remove('hideMe');
            BackgroundDisplay.classList.add('ZodChara');
            playAudio('KeroAudio');
            break;
        case 'Chococat':
            ZodPicObj.src = 'Media/Chococat.png';
            ZodDatesObj.innerHTML = 'November 22 – December 21';
            ZodDesObj.innerHTML = 'Most people are curious and like to learn about new things. For some people, these new things can grab their attention and keep them thinking about it all the time. You happen to do just that. You\’ll try to gather and learn everything about this new interest before you finally leave the state of fixation you\’ve put yourself in. While learning is everything to you, your thoughts also jump around a lot. It concerns those close to you but as long as you take care of yourself, there should be nothing to be concerned about.';
            DisplayZod.classList.remove('hideMe');
            BackgroundDisplay.classList.add('ZodChara');
            playAudio('ChocoAudio');
            break;
        case 'Badtz maru':
            ZodPicObj.src = 'Media/Badtz_maru.png';
            ZodDatesObj.innerHTML = 'March 21 - April 19';
            ZodDesObj.innerHTML = 'People often call you childish for the decisions you make but in reality, you just love having fun. In any discussion, you love to play devil\’s advocate just to see others get riled up. For similar reasons, you like to tease others whenever the chance is brought up. While it\’s selfish to prioritize your fun over other people\’s feelings, you always make sure no one is actually hurt in the end. You never want to actually hurt anyone, you just want to play the bad guy for fun.';
            DisplayZod.classList.remove('hideMe');
            BackgroundDisplay.classList.add('ZodChara');
            playAudio('BadAudio');
            break;
        case 'Hangyodon':
            ZodPicObj.src = 'Media/Hangyodon.png';
            ZodDatesObj.innerHTML = 'October 23 – November 21';
            ZodDesObj.innerHTML = 'Some people call you a clown but you don\’t mind it. In fact, you love making people laugh. You love playing pranks and trying to make people smile. If they don\’t go quite right, you will make things right even at your own expense. On a similar note, you love helping others out. Anyway you can be a hero, especially for your loved one, you want to do it. This heroism might be the reason you do everything you can to make sure everyone is smiling.';
            DisplayZod.classList.remove('hideMe');
            BackgroundDisplay.classList.add('ZodChara');
            playAudio('HangAudio');
            break;
        case 'Kuromi':
            ZodPicObj.src = 'Media/Kuromi.png';
            ZodDatesObj.innerHTML = 'June 21 - July 22';
            ZodDesObj.innerHTML = 'People often describe you as an outlier. Not because you break rules but because you act as you please. Whether it be through your fashion or your interests, there\’s something about you that breaks people\’s expectations when they get to know you. Some might say you\’re rough around the edges but in actuality you care a lot about those you care about. Even if you are selfish at times, you never want to hurt anyone.';
            DisplayZod.classList.remove('hideMe');
            BackgroundDisplay.classList.add('ZodChara');
            playAudio('KuroAudio');
            break;
        case 'Hello Kitty':
            ZodPicObj.src = 'Media/Hello_Kitty.png';
            ZodDatesObj.innerHTML = 'February 19 - March 20';
            ZodDesObj.innerHTML = 'You are *the* friend to a lot of people. Your friends brag that you are someone they cherish a lot and the one they could never regret being friends with. Often, your closest friends come to you when they need someone to talk to. While you might not be the best at responding in those situations, you are an excellent listener and a trustworthy friend to share problems with.';
            DisplayZod.classList.remove('hideMe');
            BackgroundDisplay.classList.add('ZodChara');
            playAudio('HelloAudio');
            break;
        case 'Pochacco':
            ZodPicObj.src = 'Media/Pochacco.png';
            ZodDatesObj.innerHTML = 'January 20 - February 18';
            ZodDesObj.innerHTML = 'Just like this little dog, you\’re very curious. So curious that you tend to get into other people\’s business unintentionally. Because of that, you often know the best gossip around. As much as you stick your nose where it shouldn\'t be, you are also very clumsy. You even trip over your own feet when walking sometimes. Yet, that doesn\’t deter anyone from trying to be friends with you. Especially because you love to share snacks.';
            DisplayZod.classList.remove('hideMe');
            BackgroundDisplay.classList.add('ZodChara');
            playAudio('PochAudio');
            break;
        case 'Little Twin Stars':
            ZodPicObj.src = 'Media/Little_Twin_Stars.png';
            ZodDatesObj.innerHTML = 'May 21 - June 20';
            ZodDesObj.innerHTML = 'Often, there are two sides to your personality. One side that wants to cause chaos and pull pranks. Meanwhile, the other side desires to avoid conflict and keep to oneself. Even when these two sides of you butt heads, they both come together when it comes to protecting those you love. Besides your loved ones, creating things is something you take pride in. Big or small, all the things you create bring joy to you.';
            DisplayZod.classList.remove('hideMe');
            BackgroundDisplay.classList.add('ZodChara');
            playAudio('TwinAudio');
            break;
}}

const DisplayHelp = document.getElementById('help');
const OpenObj = document.getElementById('openHelp');
const CloseObj = document.getElementById('closeHelp');
const CloseChara = document.getElementById('closeIt');
const DisplayError = document.getElementById('alert');
const CloseError= document.getElementById('closeAlert');

//closes overlays
CloseObj.addEventListener('click', function(){
    DisplayHelp.classList.add('hideMe');
});

CloseChara.addEventListener('click', function(){
    DisplayZod.classList.add('hideMe');
    BackgroundDisplay.classList.remove('ZodChara');
});

CloseError.addEventListener('click', function(){
    DisplayError.classList.add('hideMe');
});

//opens the help me overlay
OpenObj.addEventListener('click', function(){
    DisplayHelp.classList.remove('hideMe');
});

//variable for audio files
const allAudios = document.querySelectorAll('audio');

//Function to play specific audio when clicked 
function playAudio(whichSound) {
    allAudios.forEach(oneAudio => {
        oneAudio.pause();
        //resets the audio file back to beginning 
        oneAudio.currentTime = 0;
    });
    document.getElementById(whichSound).play();
}

//Code to input date into form + submit 

const submitObj = document.getElementById('SubmitBirth');
const formObj = document.getElementById('birthday');

submitObj.addEventListener('click', function(){
    console.log('It has been submitted');
    //step 1: capture user input 
    const formObj = document.getElementById('birthday').valueAsDate;
    console.log('Birthday is ' + formObj);
    //step 2: validate inputted date  
    if(formObj){
        const TZOffSet = formObj.getTimezoneOffset() * 60 * 1000;
        console.log('Offset is ' + TZOffSet);
        const BirthDateEST = new Date(formObj.getTime() + TZOffSet);
        console.log('BirthDateEST is ' + BirthDateEST);
        //Extracting Month + Day of Month 
        const month = BirthDateEST.getMonth() + 1;
        const day = BirthDateEST.getDate();
        console.log('month is ' + month + ' and day is ' + day);
         //step 3: convert date to a zodiac sign
            if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
                astrological_sign = 'Pompompurin'
            } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
                astrological_sign = 'Chococat'
            } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
                astrological_sign = 'Hangyodon'
            } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
                astrological_sign = 'My Melody'
            } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
                astrological_sign = 'Cinnamoroll'
            } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
                astrological_sign = 'Keroppi'
            } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
                astrological_sign = 'Kuromi'
            } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
                astrological_sign = 'Little Twin Stars'
            } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
                astrological_sign = 'Tuxedo Sam'
            } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
                astrological_sign = 'Badtz maru'
            } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
                astrological_sign = 'Hello Kitty'
            } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
                astrological_sign = 'Pochacco'
            }
            displayOInfo(astrological_sign);
    } else {
        DisplayError.classList.remove('hideMe');
    };
});