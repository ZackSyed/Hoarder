export const getRandomSpawn = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getRandomMovement = () => {
    return Math.floor(Math.random() * (4))
}

export const getRandomNegMovement = () => {
    return -(Math.floor(Math.random() * (4)))
}