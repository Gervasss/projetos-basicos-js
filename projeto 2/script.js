function verificar() {
  var data= new Date()
  var ano= data.getFullYear()
  var fano=document.getElementById('txtano')
  var res=document.getElementById('res')
  if(fano.value.length == 0 || fano.value > ano){
    window.alert('verifique os dados corretamente e tente outra vez')
  }else {
    var fsex=document.getElementsByName('radsex')
    var idade= ano - Number(fano.value)
    var gênero=''
    var img=document.createElement('img')
    img.setAttribute('id','foto')
    if(fsex[0].checked){
      gênero ='homem'
      if(idade>=0 && idade<11){
        img.setAttribute('src','bebemenino.jpg')
          //criança
      }else if(idade>10 && idade<24){
                 //jovem
                 img.setAttribute('src','jovemhomem.jpg')
      }else if(idade>18 && idade<60){
        //adulto
        img.setAttribute('src','homemadulto.jpg')
      }else if(idade>60){
        //idoso
        img.setAttribute('src','homemidoso.jpg')
      }
    }else if(fsex[1].checked){
                 gênero='mulher'
                 if(idade>=0 && idade<11){
                  img.setAttribute('src','bebemenina.jpg')
                    //criança
                }else if(idade>10 && idade<24){
                           //jovem
                           img.setAttribute('src','jovemmulher.jpg')
                }else if(idade>18 && idade<60){
                  //adulto
                  img.setAttribute('src','mulheradulta.jpg')
                }else if(idade>60){
                  //idoso
                  img.setAttribute('src','mulheridosa.jpg')
                }
    }
       res.style.textAlign =`center`
    res.innerHTML=`  ${gênero} com  ${idade} anos`
     res.appendChild(img)

    
  }

}