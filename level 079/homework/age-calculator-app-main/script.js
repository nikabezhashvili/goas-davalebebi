count_age = () => {
    let day1 = Number(document.getElementById('d').value)
    let month1 = Number(document.getElementById('m').value)
    let year1 = Number(document.getElementById('y').value)

    let today = new Date()
    let year2 = today.getFullYear()
    let month2 = today.getMonth() + 1
    let day2 = today.getDate()

    let y = year2 - year1
    let m = month2 - month1
    let d = day2 - day1

    if (d < 0) {
        m = m - 1
        d = d + 30
    }

    if (m < 0) {
        y = y - 1
        m = m + 12
    }

    document.getElementById('year').textContent = y
    document.getElementById('mon').textContent = m
    document.getElementById('day').textContent = d
}
