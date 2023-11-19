$(document).ready(function () {
    $('.menu a').click(function (e) { 
        e.preventDefault()
        $opt = $(this).parent().attr('class')
        switch ($opt) {
            case 'opt1':
                $('.stage01').removeClass('animate__fadeInUp')
                             .addClass('animate__fadeOutDown')
                setTimeout(() => {
                    $('.stage02').removeClass('hide')
                                .addClass('animate__fadeInUp')
                }, 200)
                break;
            case 'opt2':
                $('.stage01').removeClass('animate__fadeInUp')
                             .addClass('animate__fadeOutDown')
                setTimeout(() => {
                    $('.stage03').removeClass('hide')
                                 .addClass('animate__fadeInUp')
                }, 200)
                break;
            case 'opt3':
                $('.stage01').removeClass('animate__fadeInUp')
                             .addClass('animate__fadeOutDown')
                setTimeout(() => {
                    $('.stage04').removeClass('hide')
                                 .addClass('animate__fadeInUp')
                }, 200)
                break;
            
            case 'back-index':
                $('.stage02').removeClass('animate__fadeInUp')
                             .addClass('animate__fadeOutDown')
                $('.stage03').removeClass('animate__fadeInUp')
                             .addClass('animate__fadeOutDown')
                $('.stage04').removeClass('animate__fadeInUp')
                             .addClass('animate__fadeOutDown')
                setTimeout(() => {
                    $('.stage01').removeClass('animate__fadeOutDown')
                                 .addClass('animate__fadeInUp')
                }, 200)
                setTimeout(() => {
                    $('.stage02').removeClass('animate__fadeOutDown')
                                 .addClass('hide')
                }, 400)
                setTimeout(() => {
                    $('.stage03').removeClass('animate__fadeOutDown')
                                 .addClass('hide')
                }, 400)
                setTimeout(() => {
                    $('.stage04').removeClass('animate__fadeOutDown')
                                 .addClass('hide')
                }, 400)
                break;
        
            default:
                break;
        }
        
    })
})