import { db, storage } from "../../firebase";
import {
  getDocs,
  addDoc,
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
      if (body.Email == "" || body.Password == "") {
        result.status = "error";
        result.message = "Fill out all fields";
      } else {
        const q = firestoreQuery(
          collection(db, "users"),
          where("Email", "==", body.Email),
          where("Password", "==", body.Password)
        );

        const loginRef = await getDocs(q);

        if (loginRef.empty) {
          result.status = "error";
          result.message = "Incorrect combination";
        } else {
          result.status = "success";
          result.loginId = loginRef.docs[0].id;
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
