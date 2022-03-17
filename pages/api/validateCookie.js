import { db, storage } from "../../firebase";
import {
  getDocs,
  addDoc,
  collection,
  doc,
  query as firestoreQuery,
  where,
  getDoc,
} from "firebase/firestore";

export default async function handler(req, res) {
  const { query, body, method } = req;
  let result = { status: false };
  //   const tempId = "ItjMHSKSQslSWh10Ldpy";

  switch (method) {
    case "POST":
      if (body.LoginId == null || body.LoginId == "") {
        result = false;
      } else {
        const qref = await getDoc(doc(db, "users", body.LoginId));
        if (qref._document != null) {
          console.log("checks out");
          result.status = true;
        } else {
          console.log("DOESNT check out");
          result.status = false;
        }
      }
      res.status(200).json(result);
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
