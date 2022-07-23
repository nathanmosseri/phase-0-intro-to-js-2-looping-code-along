const writeCards = (people, eventType) => {
    const messages = []
    for (let i = 0; i < people.length; i++) {
        messages.push(`Thank you, ${people[i]}, for the wonderful ${eventType} gift!`)
        
    }
    return messages
    
}

const countDown = () => {
    let count = 11
    while (count > 0) {
        console.log(count -= 1)
    }
}