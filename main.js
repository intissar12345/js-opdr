console.log("het werkt");
const x=`
{
    "firstname": "Judeska",
    "email": "judeska@example.com"
  }
  
` ;

let objPerson=JSON.parse(x);
console.log(objPerson);
console.log("voornaam", objPerson.firstname);
console.log("email",objPerson.email);


//opdr 1b
const l=`

{
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com"
  }

`
objPerson=JSON.parse(l);
console.log(objPerson);
console.log("id",objPerson.id);
console.log("voornaam",objPerson.firstname);
console.log("achternaam",objPerson.lastname);
//opdr 2
const r=`
{
    "id": 1,
    "slug": "lorem-ipsum",
    "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
    "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
    "status": "published",
    "category": "lorem",
    "publishedAt": "04/02/2023 13:25:21",
    "updatedAt": "14/03/2023 17:22:20",
    "userId": 1
  }
`
objPerson=JSON.parse(r);
console.log("objperson");
console.log("titel",objPerson.title);
console.log("content",objPerson.content);
console.log("publishedAt",objPerson.publishedAt);
//opdr 3
const p=`
{
    "id": 4,
    "firstname": "Emily",
    "lastname": "Davis",
    "email": "emilydavis@example.com",
    "birthDate": "1974-11-30",
    "login": {
      "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
      "username": "emilydavis",
      "password": "jsonplaceholder.org",
      "md5": "c1328472c5794a25723600f71c1b4586",
      "sha1": "35544a31cc19bd6520af116554873167117f4d94",
      "registered": "2022-07-10T11:21:20.033Z"
    },
    "address": {
      "street": "321 Maple Street",
      "suite": "Apt. 50",
      "city": "Anytown",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "42.9012",
        "lng": "-71.5678"
      }
    },
    "phone": "(555) 555-3456",
    "website": "www.emilydavis.com",
    "company": {
      "name": "GHI Corporation",
      "catchPhrase": "Your success is our priority",
      "bs": "Consulting"
    }
  }
`
objPerson=JSON.parse(p);
console.log(objPerson);
console.log("id",objPerson.id);
console.log("email",objPerson.email);
console.log("username",objPerson.login.username);
console.log("city",objPerson.address.city);
console.log("company name",objPerson.company.name);
//opdr 4
const m=`
{
    "id": 11,
    "postId": 3,
    "userId": 2,
    "comment": "Cras convallis ipsum eget sapien hendrerit dignissim."
  }
`
objPerson=JSON.parse(m);
console.log(objPerson);
//opdr 5



