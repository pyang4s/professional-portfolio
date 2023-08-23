import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDb } from "../utils/server";
import { collection, addDoc, getDocs, Firestore, DocumentData, getDoc, doc } from "firebase/firestore";

export default function HomePage() {
  const db = getDb(); 
  const [summary, setSummary] = useState<string>("");
  const collection_name = "myinfo";
  const document_name = "general_info";

  const fetchPost = async () => {
    const data = await getDoc(doc(db, collection_name, document_name))
    const profile = data.data(); 
    if(profile){
     const sumText: string = profile.summary; 
     setSummary(sumText); 
    }
  }
  
  useEffect(() => {
    fetchPost(); 
  }, []);

  return (
    <div className="App">
      <Summary text={summary}/>
      <Portfolio />
    </div>
  );
}

export function Summary({text}:{text: string}) {
  return (
    <>
      <div className="App-summary">{text}</div>
    </>
  );
}

export function Portfolio() {
  return (
    <div className="center">
      <div>
        <NavLink end to="/projects">
          <div className="projects-button"> My Projects</div>
        </NavLink>
      </div>
    </div>
  );
}

export const InputText = () => {

  const [input, setInput] = useState<string>("");
  const [textArr, setTextArr] = useState<DocumentData[]>([]);


  const db: Firestore = getDb();

  const addInputText = async (e: any) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "input"), {
        text: input,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e: any) {
      console.error("Error adding document: ", e);
    }
  }

  const fetchPost = async () => {
    await getDocs(collection(db, "input"))
      .then((querySnapshot) => {
        const newTextArr: DocumentData[] = querySnapshot.docs
          .map((doc) => {
            console.log(doc.data());
            return (doc.data())
          });
        setTextArr(newTextArr);

      });
  }

  useEffect(() => {
    fetchPost();
  }, [])

  return (
    <>
      <div>SetState Implementation</div>
      <div>
        <input
          type="text"
          placeholder="Type something here"
          onChange={(e: any) => setInput(e.target.value)}></input>
      </div>

      <div>
        <button type="submit"
          onClick={addInputText}
        >Submit</button>
      </div>

      <div className="toto-content">
        {
          textArr?.map((item, i) => (
            <p key={i}>
              {item.text}
            </p>
          ))
        }
      </div>
    </>


  )
}

