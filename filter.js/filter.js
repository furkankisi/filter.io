function yasKontrolu(people) {
    
    return people.filter(person => person.yas > 18);
}


const insanlar = [
    { isim: 'Ahmet', yas: 20 },
    { isim: 'Mehmet', yas: 16 },
    { isim: 'Ayşe', yas: 25 },
    { isim: 'Zeynep', yas: 17 }
];

const yasliInsanlar = yasKontrolu(insanlar);
console.log(yasliInsanlar);
