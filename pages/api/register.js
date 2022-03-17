import {
  collection,
  addDoc,
  getDocs,
  query as firestoreQuery,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";

export default async function handler(req, res) {
  const { body, method } = req;
  let result = { message: "", status: "" };
  let hasNull = false;

  for (const [key, value] of Object.entries(body)) {
    if (value == "" || value == null) {
      hasNull = true;
    }
  }

  // res.status(200).json({ name: "John Doe" });
  switch (method) {
    case "POST":
      const q = firestoreQuery(
        collection(db, "users"),
        where("Email", "==", body.Email)
      );
      const qR = await getDocs(q);

      if (hasNull) {
        result.status = "error";
        result.message = "All fields must be filled";
      } else {
        if (body.Password != body.ConfirmPassword) {
          result.status = "error";
          result.message = "Passwords do not match";
        } else {
          if (body.Email != body.ConfirmEmail) {
            result.status = "error";
            result.message = "Emails do not match";
          } else {
            if (qR.docs.length == 0) {
              const docRef = addDoc(collection(db, "users"), body);
              result.status = "success";
            } else {
              result.status = "error";
              result.message =
                "This email has already been taken, login instead?";
            }
          }
        }
      }
      res.status(200).json(result);
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
