const killSpace = string => {
    return string.trim()
}

const prepareToSend = request => {
    request = request.split('\n').map(line => killSpace(line)).join('\n')
    end = [0x0d, 0x0a]

    request = request.split('\n').map(r => {
        r = Buffer.from(r)
        r = Array.from(r)
        r.push(...end)
        return r
    })

    request.push(...end)
    request.push(...end)

    return Buffer.from(request.flat())
}



module.exports = {prepareToSend}