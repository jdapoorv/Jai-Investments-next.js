import client from "../../models/client";
import dbConnect from "../../utils/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { name, phone, insurance, message } = req.body;

      const clientData = new client({
        name,
        phone,
        insurance,
        message,
      });
      await clientData.save();
      res.status(201).json({ message: "Form data saved successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error saving form data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
