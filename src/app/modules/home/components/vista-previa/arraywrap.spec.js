let profesores = ["PROFE 1", "PROFE 2", "PROFE 3"];

let PROFESORES = profesores.map(profesor => profesor.nombre).join();
while (PROFESORES.includes(",")) PROFESORES = PROFESORES.replace(",", "\n");

let message =
  'En la ciudad de Guadalajara, en la fecha 11 del mes de ENERO de 2019 se reunieron en el   Centro Universitario de ciencias exactas e ingenierías   los C. Profesores       Profesor       Profesor       Profesor       Profesor          Miembros del Jurado designados por el Comité de   Titulación de la Lienciatura en 123123 quienes   realizaron la Ceremonia de Titulación de la Pasante:   asdasdasda asdasdasd asdasd asda quien para obtener   el Título de asdas asdasd asasdas asdasdasda   cubrió los requisitos del Reglamento General de   Titulación de acuerdo al artículo 14, fracción III y los   numerales artículo 13, fracción III, del   reglamento Reglamento de titulación de este Centro se   presentó bajo la modalidad de: asasd aaeqwe qwasd    opción sadas dasdasd asdasda sasdasda sd       se realizó la evaluación al sustentante con el   trabajo "asdasd asas dasdasdasdasd asdasdasd asdasd"   contestando satisfactoriamente las interrogantes   formuladas por el jurado, el cual posteriormente   procedió a la deliberación       en la que se consideró aprobada con la   calificación 99, (NOVENTA Y NUEVE). Finalmente el     DEL JURADO tomó a la sustentante la protesta de   ley, a la cuál contestó  "SI PROTESTO". Con lo   anterior, se dio por terminada la ceremonia, firmando   el acta quienes en ella    ';

test("jugando con arrays", () => {
  let wordsByRow = message.match(/.{0,50}/g).map(arr => arr.split(" "));
  wordsByRow.map((row, idx) => {
    if (idx + 1 != wordsByRow.length) {
      let arr = [row.join(" "), wordsByRow[idx + 1].join(" ")]
        .join()
        .split(" ")
        .filter(str => {
          let idx = str.indexOf(",");
          return idx != -1 && idx != 0 && idx != str.length - 1;
        });
      if (arr.length || row.length > 50)
        wordsByRow[idx + 1][0] = row[row.length - 1] + wordsByRow[idx + 1][0];
      row[row.length - 1] = "";
    }
  });
  wordsByRow = wordsByRow.map(row => row.join(" "));
  console.log(wordsByRow);
});
