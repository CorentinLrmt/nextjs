const posts = [
    {
        id: 1, title: "TEST1", content: "Ceci est le premier test", createdAt: new Date()
    },
    {
        id: 2, title: "TEST2", content: "Ceci est le deuxième test", createdAt: new Date()
    },
];

    function updatePostById(query, body, res) {
        const index = posts.findIndex((v) => v.id === Number(query.id));

        posts[index] = { ...posts[index], ...body };
        res.json({ message: "Post updated", data: posts });
    }

    function deleteById(query, res) {
        posts.splice(posts.findIndex((v) => v.id === Number(query.id)), 1);
        res.json({ message: "Post deleted", data: posts });
    }

    export default function handler(req, res) {
        const { method, body, query } = req;

    switch (method) {
        case "GET":
            res.json({
                message: "Sending post",
                data: posts.find((v) => v.id === Number(query.id)),
            });
            break;
        case "PUT":
            updatePostById(query, body, res);
            break;
        case "DELETE":
            deleteById(query, res);
            break;
    }
}