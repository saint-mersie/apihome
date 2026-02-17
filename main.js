async function getUser() {

    let list = document.createElement('div')
    list.classList.add('list')

    try {

        let data = await fetch('https://jsonplaceholder.typicode.com/comments')
        let res = await data.json()

        console.log(res)

        res.forEach((item) => {
            let { name, email, body } = item

            let h2 = document.createElement('h2')
            let p = document.createElement('p')
            let a = document.createElement('a')
            let box = document.createElement('div')

            box.classList.add('box')

            h2.textContent = `Name: ${name}`
            p.textContent = `Comment: ${body}`

            a.textContent = `Email: ${email}`
            a.href = `mailto:${email}`

            box.append(h2, a, p)
            list.append(box)
        })

        document.body.append(list)

    } catch (error) {
        console.log(error)
    }
}

getUser()
