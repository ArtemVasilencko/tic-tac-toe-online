import { useEffect, useState } from 'react'

export function useNow(interval: number, enabled: boolean) {
    const [now, setNow] = useState<undefined | number>()

    useEffect(() => {
        if (!enabled) {
            setNow(undefined)
            return
        }

        const int = setInterval(() => {
            setNow(Date.now())
        }, interval)

        return () => {
            clearInterval(int)
        }
    }, [interval, enabled])

    return now
}

export function useInterval(
    interval: number,
    enabled: boolean,
    cb: (date: number) => void
) {
    useEffect(() => {
        if (!enabled) {
            return
        }

        const int = setInterval(() => {
            cb(Date.now())
        }, interval)

        return () => {
            clearInterval(int)
        }

        // TODO useCallback
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [interval, enabled])
}
