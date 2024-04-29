export function computeWinner(
    cells: Array<string | null>,
    sequenceSize: number = 5,
    fieldSize: number = 19
): number[] | undefined {
    const gap = Math.floor(sequenceSize / 2)

    function compareElements(indexes: number[]) {
        let result = true

        for (let i = 1; i < indexes.length; i++) {
            result &&= !!cells[indexes[i]]
            result &&= cells[indexes[i]] === cells[indexes[i - 1]]
        }

        return result
    }

    function getSequenceIndexes(i: number) {
        const res: number[][] = [[], [], [], []]
        for (let j = 0; j < sequenceSize; j++) {
            res[0].push(j - gap + i)
            res[1].push(fieldSize * (j - gap) + (j - gap) + i)
            res[2].push(-fieldSize * (j - gap) + (j - gap) + i)
            res[3].push(fieldSize * (j - gap) + i)
        }

        if (i % fieldSize < gap || i % fieldSize >= fieldSize - gap) {
            res.shift()
            res.shift()
            res.shift()
        }

        return res
    }

    for (let i = 0; i < cells.length; i++) {
        if (cells[i]) {
            const indexesRows = getSequenceIndexes(i)
            const winnerIndexes = indexesRows.find((row) =>
                compareElements(row)
            )
            if (winnerIndexes) {
                return winnerIndexes
            }
        }
    }

    return undefined
}
