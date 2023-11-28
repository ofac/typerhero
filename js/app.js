$(document).ready(function () {


    $('.stage02').on('input', '#username', function () {
        if($(this).val().length >= 4) {
            $('.opt11').removeClass('disabled')
        } else {
            $('.opt11').addClass('disabled')
        }
    })


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
            case 'opt11':
                    $('.stage02').removeClass('animate__fadeInUp')
                                 .addClass('animate__fadeOutDown')
                    setTimeout(() => {
                        $username = $('#username').val()
                        countdown()
  		                random()
                        $('.stage-play').removeClass('hide')
                                        .addClass('animate__fadeInUp')
                    }, 200)
                    break;
            case 'opt20':
                    $('.stage03').removeClass('animate__fadeInUp')
                                 .addClass('animate__fadeOutDown')
                    setTimeout(() => {
                        $('.stage20').removeClass('hide')
                                     .addClass('animate__fadeInUp')
                    }, 200)
                    break;
            case 'opt21':
                    $('.stage03').removeClass('animate__fadeInUp')
                                    .addClass('animate__fadeOutDown')
                    setTimeout(() => {
                        $('.stage21').removeClass('hide')
                                        .addClass('animate__fadeInUp')
                    }, 200)
                    break;
            case 'opt30':
                    $('.stage04').removeClass('animate__fadeInUp')
                                 .addClass('animate__fadeOutDown')
                    setTimeout(() => {
                        $('.stage30').removeClass('hide')
                                     .addClass('animate__fadeInUp')
                    }, 200)
                    break;
            case 'opt31':
                        $('.stage04').removeClass('animate__fadeInUp')
                                     .addClass('animate__fadeOutDown')
                        setTimeout(() => {
                            $('.stage31').removeClass('hide')
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

            case 'back-menu':
                $('.stage20').removeClass('animate__fadeInUp')
                             .addClass('animate__fadeOutDown')
                $('.stage21').removeClass('animate__fadeInUp')
                             .addClass('animate__fadeOutDown')
                $('.stage30').removeClass('animate__fadeInUp')
                             .addClass('animate__fadeOutDown')
                $('.stage31').removeClass('animate__fadeInUp')
                             .addClass('animate__fadeOutDown')
                setTimeout(() => {
                    $('.stage03').removeClass('animate__fadeOutDown')
                                    .addClass('animate__fadeInUp')
                }, 200)
                setTimeout(() => {
                    $('.stage04').removeClass('animate__fadeOutDown')
                                    .addClass('animate__fadeInUp')
                }, 200)
                setTimeout(() => {
                    $('.stage20').removeClass('animate__fadeOutDown')
                                 .addClass('hide')
                }, 400)
                setTimeout(() => {
                    $('.stage21').removeClass('animate__fadeOutDown')
                                 .addClass('hide')
                }, 400)
                setTimeout(() => {
                    $('.stage30').removeClass('animate__fadeOutDown')
                                 .addClass('hide')
                }, 400)
                setTimeout(() => {
                    $('.stage31').removeClass('animate__fadeOutDown')
                                 .addClass('hide')
                }, 400)
                break;

            case 'back-exit':
                $username = ''
                $('#username').val('')
                $('.opt11').addClass('disabled')
                scoreDiv.innerHTML = "0"
                words.classList.remove('message')
                words.innerHTML = ""
                clearInterval(timer)
                seconds = 60
                timerDiv.innerHTML = "60"
                $('.stage-play').removeClass('animate__fadeInUp')
                                .addClass('animate__fadeOutDown')
                setTimeout(() => {
                $('.stage01').removeClass('animate__fadeOutDown')
                             .addClass('animate__fadeInUp')
                }, 200)
                setTimeout(() => {
                    $('.stage-play').removeClass('animate__fadeOutDown')
                                    .addClass('hide')
                }, 400)
                setTimeout(() => {
                    $('.stage02').removeClass('animate__fadeOutDown')
                                 .addClass('hide')
                }, 400)
                break;
        
            default:
                break;
        }
        
    })
})