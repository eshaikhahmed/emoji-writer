$(document).on("click","#common_emoji_list span", function () {
    var emoji = $(this).text();
    $('#post_writer').val($('#post_writer').val()+emoji);
});

$(document).on("click",".emoji-list span", function () {
    var emoji = $(this).text();
    // console.log('Emoji '+emoji);
    // console.log('Text area '+$('#post_writer').val() +emoji);
    $('#post_writer').val($('#post_writer').val()+emoji);

    var common_emoji = '<span>'+emoji+'</span>';
    $('#common_emoji_list').html($('#common_emoji_list').html()+common_emoji);

    var storedEmojis = localStorage.getItem("emoji_list");
    var storedEmojiArray = []
    if(storedEmojis == null){
        storedEmojiArray = [];
    } else {
        storedEmojiArray = JSON.parse(storedEmojis);
    }
    console.log(storedEmojis);
    storedEmojiArray.push(emoji);

    localStorage.setItem("emoji_list", JSON.stringify(storedEmojiArray));

 });

 function clean(){
    // console.log('hello');
    localStorage.removeItem("emoji_list");
    location.reload();
 }

 function copyToClipboard() {
    var copyText = document.getElementById('post_writer');


    /* Select the text field */
  //  copyText.select();
    //copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    $('#btnClipboard').html('Copied');
}

 window.onload = function () { 
    var storedEmojis = localStorage.getItem("emoji_list");
    if(storedEmojis != null){
        var emojiList = '';
        storedArray = JSON.parse(storedEmojis);
        for (const x of storedArray) { 
            //console.log(x); 
            var common_emoji = '<span>'+x+'</span>';
            emojiList = emojiList + common_emoji;
        }
        $('#common_emoji_list').html(emojiList);
    }
}

 function onHandEmoji(){
    $('.emoji-list').hide();
    $('#hand_emojis').show();
 }

 function onHeadEmoji(){
    $('.emoji-list').hide();
    $('#emoji_heads').show();
 }

 function onManWomen(){
    $('.emoji-list').hide();
    $('#emoji_man_women').show();
 }
 
 function onAnimalNature(){
    $('.emoji-list').hide();
    $('#emoji_nature').show();
 }

 function onFoodDrink(){
    $('.emoji-list').hide();
    $('#emoji_fruits').show();
 }

 function onTravel(){
    $('.emoji-list').hide();
    $('#emoji_travel').show();
 }

 function onSymbol(){
    $('.emoji-list').hide();
    $('#object_emojis').show();
 }

 function onSparkle(){
    $('.emoji-list').hide();
    $('#emoji_sparkle').show();
 }