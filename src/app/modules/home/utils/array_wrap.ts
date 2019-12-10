export function wrapWords(message: string): any[] {
    let wordsByRow: string[][]
    wordsByRow = message
        .match(/.{0,50}/g)
        .map(arr => arr.split(" "));
    wordsByRow.map((row, idx) => {
        if (idx + 1 != wordsByRow.length) {
            let arr = [row.join(" "), wordsByRow[idx + 1].join(" ")]
                .join()
                .split(" ")
                .filter(str => {
                    let idx = str.indexOf(",");
                    return idx != -1 && idx != 0 && idx != str.length - 1;
                });
            if (arr.length && row.join(" ").length > 50)
                wordsByRow[idx + 1][0] = row[row.length - 1] + wordsByRow[idx + 1][0];
            row[row.length - 1] = "";
        }
        console.log(wordsByRow);

    });
    return wordsByRow.map((row: any) => (row.join(" ")));
}
