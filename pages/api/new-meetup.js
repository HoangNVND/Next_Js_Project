import { MongoClient } from "mongodb";

// POST /api/meet-up
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://admin-Hoang:hd19751980@nguyenhoang.cjsn1.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    console.log(db);

    const meetupsCollection = db.collection("Meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
    console.log(req, res);

    res.status(201).json({ message: "Meetup created successfully" });
  }
}
export default handler;
