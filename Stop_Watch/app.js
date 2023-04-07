const $ = document.querySelector.bind(document)

        function appStart(){
            
            const start = $('#start')
            const stop = $('#stop')
            const reset = $('#reset')

            start.onclick = function(){
                if(dk){
                    var timeStart = setInterval(function(){
                        let time = '' 
                        giay++
                        if(giay == 60){
                            phut++
                            giay = 0
                        }
                        if(phut == 60){
                            gioi++
                            phut = 0
                        }
                        gio < 10 ? time+='0'+gio: time+=gio
                        phut < 10 ? time+=':0'+phut: time+=':'+phut
                        giay < 10 ? time+=':0'+giay: time+=':'+giay
                        $('.time').innerHTML = time
                        
                    },1000)
                    
                dk = false
            }
            stop.onclick = function(){
                clearInterval(timeStart)
                dk = true
            }
            reset.onclick = function() {
                clearInterval(timeStart)
                    dk = true
                    $('.time').innerHTML = '00:00:00'
                    gio = 0
                    giay = 0
                    phut = 0
                }
            }

            let dk = true
            let giay = 0
            let phut = 0
            let gio = 0
            
            
        }
        appStart();