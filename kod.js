name = prompt("Lutfen Adinizi Giriniz");
document.getElementById("asdf").textContent += name;

function saat()
{
    const tarih = new Date();
    const hours = tarih.getHours();
    const dakika = tarih.getMinutes();
    const saniye = tarih.getSeconds();
    document.getElementById("id-saat").innerHTML= `${hours}:${dakika}:${saniye}`;
    setTimeout(saat,1000);
}
saat();