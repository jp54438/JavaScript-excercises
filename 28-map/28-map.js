var students = new Map();
let student1 = {'fname': 'Hessu', 'sname': 'Hopo', 'addr': 'Hämeenkatu', 'major':'Matematiikka'};
let student2 = {'fname': 'Aku', 'sname': 'Ankka','addr': 'Ankkalinna', 'major':'Fysiikka'}
let student3 = {'fname': 'Mikki', 'sname': 'Hiiri','addr': 'Koulukatu', 'major':'Kemia'}
let student4 = {'fname': 'Hannnu', 'sname': 'Hanhi','addr': 'Timonkatu', 'major':'Historia'}
students.set('1001', student1);
students.set('1002', student2);
students.set('1003', student3);
students.set('1004', student4);

for(var[key, student] of students){
  console.log('id: '+ key +', etunimi: '+student.fname+ ', sukunimi: '+ student.sname + ' osoite: '+ student.addr + ' pääaine: '+ student.major);
}

console.log(`

      ######### tulostettuna käyttäen $ notaatiota #################`);
for(var[key, student] of students){
  console.log(`id = ${key}, etunimi: ${student.fname}, sukunimi: ${student.sname}, osoite: ${student.addr}, pääaine: ${student.major}  `)
}