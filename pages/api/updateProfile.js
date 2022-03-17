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
  let result = { message: "", status: "" };

  switch (method) {
    case "POST":
      if (
        body.FirstName == "" ||
        body.LastName == "" ||
        body.Email == "" ||
        body.Password == ""
      ) {
        result.status = "error";
        result.message =
          "First Name, Last Name, Email and Password cannot be empty.";
      } else {
        if (body.LoginId == "" || body.LoginId == null) {
          (result.status = "error"),
            (result.message = "You must be logged in first");
        } else {
          const docRef = doc(db, "users", body.LoginId);
          const qref = await getDoc(docRef);
          if (qref._document != null) {
            setDoc(docRef, body, { merge: true });
            result.status = "success";
            result.message = "";
          } else {
            (result.status = "error"), (result.message = "Account error");
          }
        }
      }
      // insert code
      console.log(body);

      //   res.status(200).json({ name: "John Doe" });
      res.status(200).json(result);
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
