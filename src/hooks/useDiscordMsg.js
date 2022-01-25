import fetch from "node-fetch";

export default function DiscordPost(req, res) {
    new Promise(async (resolve, reject) => {
        const url = process.env.DISCORD_API_URL || '';

        const { body } = req;
        try {
            const result = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': process.env.DISCORD_API_KEY
                },
                body: JSON.stringify(body)
            });
            const resultBody = await result.json();
            res.status(200).json(resultBody);
            resolve(resultBody);

        } catch (error) {
            console.log(error);
            res.status(404).json({ "status": "failed" });
            reject({ "status": "failed" });
        }
    })
};