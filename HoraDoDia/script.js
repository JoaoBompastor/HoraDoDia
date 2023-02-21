var hora = new Date().getHours()
var horanotxt = document.querySelector('p#horas')
//var hora = 19

horanotxt.innerHTML = `agora sao ${hora} horas.`

var bg = document.getElementsByTagName('body')[0]

var imagem = document.getElementById('imagem')
var footer = document.getElementById('pe')
var h1 = document.getElementById('h1')

if (hora < 12){ 
    imagem.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdm0qx8t0i9gc9.cloudfront.net%2Fthumbnails%2Fvideo%2F47Fj2US_gijjhliil%2Fbeautiful-snowy-morning_v_00ceyye_thumbnail-1080_01.png&f=1&nofb=1')"
    footer.innerHTML = 'bom dia!'
    bg.style.backgroundColor = '#EFE7BC'
    footer.style.color = 'black'
    h1.style.color = 'black'
} else if (hora < 18) {
    imagem.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fcity-evening-sunset_Zm1maWyUmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1')"
    footer.innerHTML = 'boa tarde!'
    bg.style.backgroundColor = '#F8AFA6'
    footer.style.color = 'black'
    h1.style.color = 'black'
} else {
    imagem.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shutterbug.com%2Fimages%2Fphoto_post%2F%5Buid%5D%2FCB2U2467-Compressed_0.jpg&f=1&nofb=1')"
    footer.innerHTML = 'boa noite!'
    bg.style.backgroundColor = '#003060'
}