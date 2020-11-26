function szamol() {
    a = parseInt(document.matek.a.value)
    b = parseInt(document.matek.b.value)
    c = parseInt(document.matek.c.value)
    d = parseInt(document.matek.d.value)
    e = a+b+c+d
    document.matek.e.value = e
    if(e>120) document.getElementById("zsebszamologep").innerHTML="Túllépett ponthatár", zsebszamologep.style.background = "#ff0000";
    else if(e>95) document.getElementById("zsebszamologep").innerHTML="5", zsebszamologep.style.background = "#a8ee84";
    else if(e>71) document.getElementById("zsebszamologep").innerHTML="4", zsebszamologep.style.background = "#a8ee84";
    else if(e>47) document.getElementById("zsebszamologep").innerHTML="3", zsebszamologep.style.background = "#fff47b";
    else if(e>29) document.getElementById("zsebszamologep").innerHTML="2", zsebszamologep.style.background = "#fff47b";
    else if(e>-1) document.getElementById("zsebszamologep").innerHTML="1", zsebszamologep.style.background = "#f3666b";  
    else document.getElementById("zsebszamologep").innerHTML="Error", zsebszamologep.style.background = "#f3666b";
}
function szamol2() {
    a2 = parseInt(document.matek2.a2.value)
    b2 = parseInt(document.matek2.b2.value)
    c2 = parseInt(document.matek2.c2.value)
    d2 = parseInt(document.matek2.d2.value)
    e2 = a2+b2+c2+d2
    document.matek2.e2.value = e2
    if(e2>30) document.getElementById("zsebszamologep2").innerHTML="Túllépett ponthatár", zsebszamologep2.style.background = "#ff0000";
    else if(e2>23) document.getElementById("zsebszamologep2").innerHTML="5", zsebszamologep2.style.background = "#a8ee84";
    else if(e2>17) document.getElementById("zsebszamologep2").innerHTML="4", zsebszamologep2.style.background = "#a8ee84";
    else if(e2>11) document.getElementById("zsebszamologep2").innerHTML="3", zsebszamologep2.style.background = "#fff47b";
    else if(e2>7) document.getElementById("zsebszamologep2").innerHTML="2", zsebszamologep2.style.background = "#fff47b";
    else if(e2>-1) document.getElementById("zsebszamologep2").innerHTML="1", zsebszamologep2.style.background = "#f3666b";  
    else document.getElementById("zsebszamologep2").innerHTML="Error", zsebszamologep2.style.background = "#f3666b";
}