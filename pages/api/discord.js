export default async function handler(req, res) {
    // res.status(200).json({ name: 'John Doe' })
    await fetch(
        "webhook url",
        {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": {
                "content": "faggot"
            }
        }
    ).then((amogus) => {
        res.status(200).json(amogus.json())
    })
}
