import { MOVE_ORDER } from '../constants'
import { timersType } from './types'

interface getNextMove {
    playersCount: number
    timers: timersType
    currentMove: string
}

export function getNextMove({
    playersCount,
    timers,
    currentMove,
}: getNextMove) {
    const slicedMovedOrder = MOVE_ORDER.slice(0, playersCount).filter(
        (symbol) => timers[symbol] > 0
    )
    const nextMoveIndex = slicedMovedOrder.indexOf(currentMove) + 1
    return slicedMovedOrder[nextMoveIndex] ?? slicedMovedOrder[0]
}
