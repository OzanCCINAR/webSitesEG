const api = {
    key: "2fa73590fd8b5a4c6e68098ad5625395", // API anahtarı (key) OpenWeatherMap API'si için kullanılacak
    base: "https://api.openweathermap.org/data/2.5/" // API'nin temel URL'si, OpenWeatherMap API'sine yapılan isteklerin başlangıç noktası
};

// ---------------------------------------------------------------------------------------------
const searchbox = document.querySelector(".search-box"); // ".search-box" sınıfına sahip bir öğeyi seçer ve searchbox değişkenine atar

searchbox.addEventListener("keypress", setQuery); // searchbox öğesi üzerinde "keypress" olayını dinler ve setQuery işlevini çağırır

function setQuery(event) {
    if(event.keyCode == 13) { // Eğer kullanıcı "Enter" tuşuna bastıysa (keyCode 13)
        getResults(searchbox.value); // searchbox değerini alarak getResults işlevini çağırır
    }
}

/*-Bu kod parçası, kullanıcıdan alınan girişi işlemek için kullanılır.
 İlk olarak, document.querySelector(".search-box") ifadesi kullanılarak HTML belgesinde .search-box sınıfına 
 sahip olan bir öğe seçilir ve searchbox değişkenine atanır.

 !SETQUERY!
-Sonrasında, searchbox üzerinde "keypress" olayı dinlenir ve bu olay gerçekleştiğinde setQuery işlevi çağırılır.
 setQuery işlevi, event parametresi ile tetiklenen olayı temsil eder.

-Özetle, searchbox.addEventListener("keypress", setQuery) kodu, searchbox öğesi
üzerinde klavyeden bir tuşa basıldığında "keypress" olayını dinler ve setQuery işlevini çağırır.
Bu sayede, kullanıcının bir tuşa bastığında belirli bir işlevin çalışmasını sağlayabilirsiniz.

-setQuery işlevinde, event.keyCode == 13 ifadesi ile kullanıcının "Enter" tuşuna bastığını kontrol eder.
Eğer kullanıcı "Enter" tuşuna bastıysa, searchbox.value ifadesi kullanılarak
arama kutusunun değeri alınır ve getResults işlevi bu değerle çağrılır. 
Bu şekilde, kullanıcının arama kutusuna girdiği veri, getResults işlevine gönderilerek ilgili işlemler yapılabilir. */

// --------------------------------------------------------


function getResults(query) {
/*function getResults(query):

Bu bir fonksiyon tanımıdır ve getResults olarak adlandırılmıştır.
İşlev bir parametre (query) alır, bu parametre arama sorgusunu temsil eder.
İşlevin içinde, hava durumu bilgilerini almak için bir dizi işlem gerçekleştirilir.
 */

    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    /*fetch(${api.base}weather?q=${query}&units=metric&APPID=${api.key}):

fetch işlevi, belirtilen URL'ye bir HTTP isteği yapmak için kullanılır.
Bu durumda, OpenWeatherMap API'sine hava durumu sorgusu yapmak için bir GET isteği yapılır.
Sorgu URL'si, api.base, query (arama sorgusu) ve api.key (API anahtarı) gibi değişkenleri kullanarak oluşturulur. */

    .then((weather) => {
        return weather.json();
    })
/*.then((weather) => { return weather.json(); }):

Bu bir Promise zincirinin bir parçasıdır ve gelen veriyi işlemek için kullanılır.
.then yöntemi, bir Promise'nin başarı durumunda çalışacak olan bir işlevi tanımlar.
Bu durumda, HTTP yanıtı (weather) JSON veriye dönüştürülür.
weather.json() ifadesi, JSON verisi döndüren bir Promise döndürür. */


    .then(displayResults)
}   /*.then(displayResults):

Bu bir Promise zincirinin bir sonraki halkasıdır ve bir işlevi çağırmak için kullanılır.
.then yöntemi, bir Promise'nin başarı durumunda çalışacak olan bir işlevi tanımlar.
Bu durumda, displayResults işlevi çağrılır. Bu işlev, hava durumu verilerini görüntülemek veya işlemek için kullanılabilir. */
// -------------------------------------------------------

function displayResults(weather) {
    console.log(weather); // Hava durumu verilerini tarayıcının konsoluna yazdırır.

    let city = document.querySelector(".location .city")
    city.innerText = `${weather.name}, ${weather.sys.country}`;
     // city değişkeni, ".location .city" seçiciye sahip olan bir HTML öğesini temsil eder.
    // city.innerText ifadesi, şehir adını ve ülke kodunu içeren bir metin ile city öğesinin içeriğini değiştirir.
    // Bu şekilde, örneğin "İstanbul, TR" gibi bir şehir ve ülke bilgisi görüntülenir.


    let now = new Date();
    let date = document.querySelector(".location .date")
    date.innerText = dateBuilder(now);
     // now değişkeni, şu anki tarih ve saat bilgisini temsil eder.
    // date değişkeni, ".location .date" seçiciye sahip olan bir HTML öğesini temsil eder.
    // date.innerText ifadesi, dateBuilder işlevini kullanarak oluşturulan tarih bilgisini date öğesinin içeriğine yerleştirir.
    // Bu şekilde, örneğin "17 June 2023" gibi bir tarih görüntülenir.

    let temp = document.querySelector(".current .temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
    // temp değişkeni, ".current .temp" seçiciye sahip olan bir HTML öğesini temsil eder.
    // temp.innerHTML ifadesi, sıcaklık bilgisini Math.round() işlevi ile yuvarlar ve "<span>°C</span>" ile birlikte içeriğe ekler.
    // Bu şekilde, örneğin "25°C" gibi bir sıcaklık bilgisi görüntülenir.

    let weather_el = document.querySelector(".current .weather");
    weather_el.innerText = weather.weather[0].main;
     // weather_el değişkeni, ".current .weather" seçiciye sahip olan bir HTML öğesini temsil eder.
    // weather_el.innerText ifadesi, hava durumu verileri içindeki ilk öğenin ana açıklamasını weather_el öğesinin içeriğine yerleştirir.
    // Bu şekilde, örneğin "Clouds" gibi bir hava durumu açıklaması görüntülenir.

    let hilow = document.querySelector(".current .hi-low");
hilow.innerText = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;

    // hilow değişkeni, ".current .hilow" seçiciye sahip olan bir HTML öğesini temsil eder.
    // hilow.innerText ifadesi, en düşük ve en yüksek sıcaklık bilgisini weather objesindeki main nesnesinin temp_min ve temp_max özelliklerinden alarak hilow öğesinin içeriğine yerleştirir.
    // Bu şekilde, örneğin "18°C / 30°C" gibi bir en düşük/en yüksek sıcaklık bilgisi görüntülenir.
}

function dateBuilder(d) {
    // months dizisi, ayların adlarını içeren bir dizi oluşturur
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // days dizisi, günlerin adlarını içeren bir dizi oluşturur
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    // d.getDay() ifadesi, verilen tarihin haftanın hangi gününe denk geldiğini döndürür
    let day = days[d.getDay()];

    // d.getDate() ifadesi, verilen tarihin ayın kaçıncı günü olduğunu döndürür
    let date = d.getDate();

    // d.getMonth() ifadesi, verilen tarihin hangi ay olduğunu döndürür (0'dan başlayarak)
    let month = months[d.getMonth()];

    // d.getFullYear() ifadesi, verilen tarihin yılını döndürür
    let year = d.getFullYear();

    // Oluşturulan değerleri kullanarak, örneğin "Sunday 17 June 2023" gibi bir tarih metni oluşturulur ve geri döndürülür
    return `${day} ${date} ${month} ${year}`;
}