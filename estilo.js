function clicar(){
    var n1 = document.querySelector('input#nome2')
    var n2 = document.querySelector('input#nome')
    var vel = String(n1.value)
    var vil=  String(n2.value)
alert(`O seu imail é ${vel} e a sua palavra passe é ${vil}`)
}

if (vel<9 && vil<10){
    alert('erro')
}