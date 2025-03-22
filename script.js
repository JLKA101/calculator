let a = () => {
    var num_two = Number(document.getElementById("num2").value)
    var num_one = Number(document.getElementById("num1").value)
    document.getElementById("para").innerHTML = num_one + num_two
}
document.getElementById("add").addEventListener("click", a)
let m = () => {
    var num_two = Number(document.getElementById("num2").value)
    var num_one = Number(document.getElementById("num1").value)
    document.getElementById("para").innerHTML = num_one - num_two
}
document.getElementById("minus").addEventListener("click", m)
let t = () => {
    var num_two = Number(document.getElementById("num2").value)
    var num_one = Number(document.getElementById("num1").value)
    document.getElementById("para").innerHTML = num_one * num_two
}
document.getElementById("times").addEventListener("click", t)
let d = () => {
    var num_two = Number(document.getElementById("num2").value)
    var num_one = Number(document.getElementById("num1").value)
    document.getElementById("para").innerHTML = num_one / num_two
}
document.getElementById("divide").addEventListener("click", d)