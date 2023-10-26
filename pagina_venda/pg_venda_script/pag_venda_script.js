 $(function(){
    $('#icone_menu').on('click', ()=>{
        $('.menu').slideDown(1500)
        $('nav #icone_menu').remove()
        $('.icone_close').css('display', 'block')
    })
    $('.icone_close').on('click', ()=>{
        $('.menu').slideUp(1500)
        $('nav .icone_close').remove()
        $('#icone_menu').css('display', 'block')
    })

})