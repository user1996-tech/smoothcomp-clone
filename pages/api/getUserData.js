import { db, storage } from "../../firebase";
import {
  getDoc,
  addDoc,
  setDoc,
  collection,
  doc,
  query as firestoreQuery,
  where,
} from "firebase/firestore";

export default async function handler(req, res) {
  const { query, body, method } = req;
  let result = { message: "", status: "", data: {} };

  switch (method) {
    case "POST":
      if (body.LoginId == "" || body.LoginId == null) {
        (result.status = "error"),
          (result.message = "You must be logged in first");
      } else {
        const docRef = doc(db, "users", body.LoginId);
        const qref = await getDoc(docRef);
        if (qref._document != null) {
          result.status = "success";
          result.data = qref.data();
        } else {
          (result.status = "error"), (result.message = "Account error");
        }
      }

      //   res.status(200).json({ name: "John Doe" });
      res.status(200).json(result);
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
