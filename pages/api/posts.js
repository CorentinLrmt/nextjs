import { posts } from "./resources";

function addPost(body, res) {
  if (!body.title || !body.content) {
    res.status(400).json({ error: "Missing params" });
    return;
  }

  body["id"] = posts.length + 1;
  body["created_at"] = new Date();
  posts.push(body);
  return res.json({ message: "Post added successfully", data: posts });
}

export default function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case "GET":
      res.json({ message: "Posts list", data: posts });
      break;
    case "POST":
      addPost(body, res);
      break;
  }
}