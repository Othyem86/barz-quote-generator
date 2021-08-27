// 
//  ОСНОВНАЯ ПРОГРАММА
// 

// Генерирование случайного индекса массива на основе длины массива
function randomIndex(arr){
    return Math.floor(Math.random() * arr.length);
}

let audioIndex = 0;

// Итерация по звукам
function randomAudioSource() {
    if (audioIndex === 8) {
        audioIndex = 0;
    } else {
        audioIndex++;
    }
    return './sound/sound' + audioIndex + '.mp3';
}

// Сгенерируйте случайное предложение
function generateSentence(quoteObj) {
    let string = '';
    for (let set in quoteObj) {
        let randomSubSet = randomIndex(quoteObj[set]);
        string += (quoteObj[set][randomSubSet]);
    }
    return string;
}

// Воспроизведение звука и разбор случайного предложения в DOM-дерево
function generateQuote() {
    document.getElementById("quote").innerText = generateSentence(quoteDB);
    let sound = new Audio(randomAudioSource());
    sound.play();
}

// Генерация частиц для звездного фона
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


//
// БАЗА ДАННЫХ ГЕНЕРАТОРА КОТИРОВОК
// 
const quoteDB = {
    setA0: [
        "Realitatea e că doar eu și alții care lucrăm la privat înțelegem cum îi treaba cu sharing economy. ",
        "Furia anti-occidentală nu are treabă nici cu pretinsa ofensivă sexo-marxistă, nici cu multinaționalele care ne-au salvat de sărăcie: îi un teribil complex de inferioritate și cam atât. ",
        "Românii să se plângă de situație când n-or să mai fie ei campioni europeni la violența domestică, avorturi, omucideri și atâtea altele. ",
        "Mi-aș dori sa fiu ca și George Soros, dar nu am nici o șansă, nu sunt nici pe departe măcar 5% pe atât de deștept. ",
        "",
        "",
        "",
        ""
    ],
    setA1: [
        "Știu sigur de la un prieten care locuiește în comuna Ciumeghiu, jud. Bihor, că ",
        "Un metalist adevărat cum îi Florin Cîțu știe că ",
        "România are nevoie de un boom al epidemiei, cu vreo minim 10 mii de morți. Țărănache să înțeleagă ca și prim subect că ",
        "Măi, toți agitații ăia la care li-i frică de great reset și alte teribilisme nu au înțeles că ",
        "Frustrații care-și zic ei libertarieni, dar de fapt îs numa comuniști pesediști, știu și ei că de fapt că ",
        "Așa punctual poți găsi nereguli în orice țară, dar nu înseamnă că-i tiranie doar dacă te saltă de la miliție pentru ce scrii pe internet. Treaba îi așa: ",
        "Toți istericii falși conservatori, narodnici vopsiți, se fac că nu înțeleg de ce ne trebuie educație sexuală în școli, dar eu unul aș fi fericit să avem un guvern care să facă infrastructură, restul îi secundar, false probleme lansate de ruși. Țărănache să înțeleagă că ",
        "E o discuție de cel puțin zece ani că după ce se termină outsourcingul o să mergem pe fuziunea creier-computer, care nu înțeleg de ce deranjează așa tare. Eu am și scris în mai multe locuri că ",
        "Din păcate nu cred că îi coptă piața pentru dreapta conservatoare adevărată, cât timp se râde de mine pe rețelele sociale. În România ai lipsa autostrăzii, sate fără canalizare, lipsă investiții, și tu stai să te gândești la ce învață copiii la educație sexuală ca și prim subect? Uite ce zic eu: ",
        "Noi care n-avem nici măcar apă la sate, n-avem rezolvate problemele de bază, trebuie să înțelegem ca și prim subect: ",
        "Am trei amici plecați de ani mulți în țări serioase de pe mai multe continente, unu-i inginer, altu-i dentist, ș-al treilea am uitat. Dacă vreți îi sun acum. Mi-au confirmat și ei că ",
        "Dacă mă-ntrebați pe mine, sigur că există socialism de corporație, dar e de trend și e abstract ca și chestie, nu vă preocupați. Ce voiam să vă zic îi că ",
        "Ca să înțelegeți cum îi de combătut propaganda rusească, puteți să luați cel mai trivial exemplu la care mă pot gândi. Uite: "
    ],
    setA2: [
        "România rămâne pe un trend pozitiv la economia de sharing numa dacă ",
        "marea noastră șansă să scăpăm țara de legionarism îi numa dacă ",
        "nu poți să declari că o țară îi dictatură, așa, doar pentru că vrei tu. În fine, toate bune dacă ",
        "măi, toți consumatorii își doresc să fie monitorizați prin IoT, chiar dacă nici ei nu știu încă. Și uite de ce, dacă mai aveați nedumeriri, ",
        "energia regenerabilă îi cheia decuplării de hidrocarburile rusești pe termen mediu și lung. Și tot d-aia ",
        "mașinile electrice îs din ce în ce mai performante, de mers cu ele pe tăte autostrăzile care vor fi construite. Dar asta numa pentru că ",
        "se termină covidul, să stăm liniștiți, dar la unii dezaxați le trebe alte motive ca să se isterizeze. Și de aia fac ei scandal acuma, fiindcă ",
        "este excelent că se termină cu adresa din buletin, să trecem pe identitate digitală. Dacă mă întrebați pe mine, este de salutat și că "
    ],
    setA3: [
        "nu se mai pot angaja toți sezonier să lucreze ca chelneri în condiții de criză sanitară fără precedent. ",
        "se vând până mercurea viitoare toate activele de stat. ",
        "panica se stinge natural, oamenii se obișnuiesc cu orice. ",
        "la noi la Cluj rămânem cu cea mai emancipată și mai educată populație, care face ce i se spune. ",
        "noi cei cu succes adevărat în veață păstrăm la nivel valoric etica de muncă a lui Rob Halford, ca și bărbat gay. ",
        "străinii veniți în delegații la firmele de IT au chefuit prin restaurante mult peste orice scutire de taxe am fi avut noi până acum. Nouă ne trebue infrastructură. ",
        "societatea se obișnuiește cu știința, cu ideea de măsurat temperatura, plus vaccin și rapel, de câte ori e nevoie. ",
        "se trece la exploatarea terenului agricol de către corporații. (Nu-i bai, țăranii noștri oricum puneau chimicale.) ",
    ]
};