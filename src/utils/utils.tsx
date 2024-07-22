type Duration = {
    duration: number;
}

export const pause = ({ duration }: Duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}