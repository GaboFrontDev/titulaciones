
const DIAS = [
    'UNO',
    'DOS',
    'TRES',
    'CUATRO',
    'CINCO',
    'SEIS',
    'SIETE',
    'OCHO',
    'NUEVE',
    'DIEZ',
    'ONCE',
    'DOCE',
    'TRECE',
    'CATORCE',
    'QUINCE',
    'DIECISEIS',
    'DIECISIETE',
    'DIECIOCHO',
    'DIECINUEVE',
]


const MES = [
    '',
    'ENERO',
    'FEBRERO',
    'MARZO',
    'ABRIL',
    'MAYO',
    'JUNIO',
    'JULIO',
    'AGOSTO',
    'SEPTIEMBRE',
    'NOVIEMBRE',
    'DICIEMBRE',
]



export class Fechas {
    dias: string[];
    numero: string[];
    mes: string[];
    constructor() {
        this.dias = DIAS;
        this.numero = [
            "CERO",
            ...this.dias,
            ...this.veintes(),
            "TREINTA",
            "TREINTA Y UNO"
        ];
        this.mes = MES
    }


    veintes(): string[] {
        console.log("calculating ");

        let values = []
        let i = 1
        while (i <= 9) {
            values.push(`VEINTI${this.dias[i]}`);
            i++;
        }
        return values
    }
}

