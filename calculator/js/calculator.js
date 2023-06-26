function calculate() {
    // İlk giriş alanından değeri alır ve sayıya dönüştürür
    let num1 = parseInt(document.querySelector('#n1').value);

    // İkinci giriş alanından değeri alır ve sayıya dönüştürür
    let num2 = parseInt(document.querySelector('#n2').value);

    // İşlem seçimini alır
    let select = document.querySelector("#select").value;

    // Sonucu tutacak değişkeni tanımlar ve başlangıç değerini 0 olarak atar
    let result = 0;

    // İşlem seçeneğine göre hesaplama yapar
    if (select === 'cikarma') {
        // Seçenek "cikarma" ise num1'den num2'yi çıkarır
        result = num1 - num2;
        console.log("çıkardım");
    } else if (select === 'toplama') {
        // Seçenek "toplama" ise num1'e num2'yi ekler
        result = num1 + num2;
        console.log("topladım");
    } else if (select === 'bolme') {
        // Seçenek "bolme" ise num1'i num2'ye böler
        result = num1 / num2;
        console.log("böldüm");
    } else if (select === 'carpma') {
        // Seçenek "carpma" ise num1'i num2 ile çarpar
        result = num1 * num2;
        console.log("çarptım");
    }

    // Sonucu görüntülemek için sonuç alanına atama yapar
    document.querySelector('#result').value = result;

    // Sonucu konsola yazdırır
    console.log(result);
}
