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
const ZodNameObj = document.getElementById('ZodName');
const ZodPicObj = document.getElementById('ZodPic');
const ZodDatesObj = document.getElementById('ZodDates');
const ZodDesObj = document.getElementById('ZodDes');

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
            break;
        case 'Pompompurin':
            ZodPicObj.src = 'Media/Pompompurin.png';
            ZodDatesObj.innerHTML = 'July 23 - August 22';
            ZodDesObj.innerHTML = 'Out of all your friends, you have the most energy. Sometimes it\’s for exercise, sometimes it\’s for work. Either way, you put 100% into what you love. You\’re also the one who makes plans and gathers everyone to bring those plans to reality. For you, nothing beats a day out with those you love. Well, a nap at the end of such a fulfilling day might be better.';
            break;
        case 'Tuxedo Sam':
            ZodPicObj.src = 'Media/Tuxedo_Sam.png';
            ZodDatesObj.innerHTML = 'Dec 12...Jan 19';
            ZodDesObj.innerHTML = 'Sometimes, you\’re called the mom friend. You love to eat delicious food and by extension, feed those around you. You also love to neaten things up. From clothing to rooms, you love when things are absolutely perfect. It even irritates you to walk into a messy room or notice a hair out of place. If it\’s your friend that is the owner of such a mess, you\’ll help them clean up for both your sake and theirs. Finally, just like a parent, you can be very stubborn about matters. At the end of the day, you have the best intentions even if you\'re stuck on one approach.';
            break;
        case 'My Melody':
            ZodPicObj.src = 'Media/My_Melody.png';
            ZodDatesObj.innerHTML = 'Dec 12...Jan 19';
            ZodDesObj.innerHTML = 'From an outside perspective, you\’re sweet, kind, caring, and a bit of a klutz. You\’re also honest to a fault but only because you care about your friends so deeply that you don\’t want to hide the truth from them. Even though you\’re considered naive due to your childish outward appearance, you have a large understanding of emotions to care for your friends.';
            break;
        case 'Keroppi':
            ZodPicObj.src = 'Media/Keroppi.png';
            ZodDatesObj.innerHTML = 'Dec 12...Jan 19';
            ZodDesObj.innerHTML = 'YAn extrovert through and through. Anything to be around people, you love to do it. Especially if it involves games. You love playing all kinds of games with your friends. From board games to ball games to even video games at times, you love games. You get so excited about games that you can become careless. For you, it/’s not about winning the game but having fun. It might feel bad to lose but you don/’t let it get to you and bounce back immediately.';
            break;
        case 'Chococat':
            ZodPicObj.src = 'Media/Chococat.png';
            ZodDatesObj.innerHTML = 'November 22 - December 21';
            ZodDesObj.innerHTML = 'Most people are curious and like to learn about new things. For some people, these new things can grab their attention and keep them thinking about it all the time. You happen to do just that. You\’ll try to gather and learn everything about this new interest before you finally leave the state of fixation you\’ve put yourself in. While learning is everything to you, your thoughts also jump around a lot. It concerns those close to you but as long as you take care of yourself, there should be nothing to be concerned about.';
            break;
        case 'Badtz maru':
            ZodPicObj.src = 'Media/Badtz_maru.png';
            ZodDatesObj.innerHTML = 'Dec 12...Jan 19';
            ZodDesObj.innerHTML = 'People often call you childish for the decisions you make but in reality, you just love having fun. In any discussion, you love to play devil\’s advocate just to see others get riled up. For similar reasons, you like to tease others whenever the chance is brought up. While it\’s selfish to prioritize your fun over other people\’s feelings, you always make sure no one is actually hurt in the end. You never want to actually hurt anyone, you just want to play the bad guy for fun.';
            break;
        case 'Hangyodon':
            ZodPicObj.src = 'Media/Hangyodon.png';
            ZodDatesObj.innerHTML = 'Dec 12...Jan 19';
            ZodDesObj.innerHTML = 'Some people call you a clown but you don\’t mind it. In fact, you love making people laugh. You love playing pranks and trying to make people smile. If they don\’t go quite right, you will make things right even at your own expense. On a similar note, you love helping others out. Anyway you can be a hero, especially for your loved one, you want to do it. This heroism might be the reason you do everything you can to make sure everyone is smiling.';
            break;
        case 'Kuromi':
            ZodPicObj.src = 'Media/Kuromi.png';
            ZodDatesObj.innerHTML = 'Dec 12...Jan 19';
            ZodDesObj.innerHTML = 'People often describe you as an outlier. Not because you break rules but because you act as you please. Whether it be through your fashion or your interests, there\’s something about you that breaks people\’s expectations when they get to know you. Some might say you\’re rough around the edges but in actuality you care a lot about those you care about. Even if you are selfish at times, you never want to hurt anyone.';
            break;
        case 'Hello Kitty':
            ZodPicObj.src = 'Media/Hello_Kitty.png';
            ZodDatesObj.innerHTML = 'Dec 12...Jan 19';
            ZodDesObj.innerHTML = 'You are *the* friend to a lot of people. Your friends brag that you are someone they cherish a lot and the one they could never regret being friends with. Often, your closest friends come to you when they need someone to talk to. While you might not be the best at responding in those situations, you are an excellent listener and a trustworthy friend to share problems with.';
            break;
        case 'Pochacco':
            ZodPicObj.src = 'Media/Pochacco.png';
            ZodDatesObj.innerHTML = 'Dec 12...Jan 19';
            ZodDesObj.innerHTML = 'Just like this little dog, you\’re very curious. So curious that you tend to get into other people\’s business unintentionally. Because of that, you often know the best gossip around. As much as you stick your nose where it shouldn\'t be, you are also very clumsy. You even trip over your own feet when walking sometimes. Yet, that doesn\’t deter anyone from trying to be friends with you. Especially because you love to share snacks.';
            break;
        case 'Little Twin Stars':
            ZodPicObj.src = 'Media/Little_Twin_Stars.png';
            ZodDatesObj.innerHTML = 'Dec 12...Jan 19';
            ZodDesObj.innerHTML = 'Often, there are two sides to your personality. One side that wants to cause chaos and pull pranks. Meanwhile, the other side desires to avoid conflict and keep to oneself. Even when these two sides of you butt heads, they both come together when it comes to protecting those you love. Besides your loved ones, creating things is something you take pride in. Big or small, all the things you create bring joy to you.';
            break;
}}