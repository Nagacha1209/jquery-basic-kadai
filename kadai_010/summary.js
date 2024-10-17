$(function(){
    //クリックすると文字色が変わる
    $('#change-color').on('click',function(){
        $('#target').css('color','red');
    });

    //クリックすると文字内容が変わる
    $('#change-text').on('click',function(){
        $('#target').text('Hello!');
    });

    //クリックするとフェードアウトする
    $('#fade-out').on('click',function(){
        $('#target').fadeOut();
    });

    //クリックするとフェイドインする
    $('#fade-in').on('click',function(){
        $('#target').fadeIn();
    });
});