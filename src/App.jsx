import "./App.css";
import Card from "./card";
import contacts from "./contacts";
import Avatar from "./Avatar";

function createCard ( contact )
{
  return <Card
    key={ contact.id }
    name={ contact.name }
    imgSrc={ contact.imgSrc }
    phone={ contact.phone }
    email={ contact.email }
  />
}

function App ()
{
  return (
    <div className="contacts">
      <h1>My Contacts</h1>
      <Avatar imgSrc="./img/img.png" />
      { contacts.map( createCard ) }
    </div>
  )
};
export default App;