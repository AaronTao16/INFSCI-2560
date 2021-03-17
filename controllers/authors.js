import AuthorInfo from '../models/authorsInfo.js';

export const getAuthors = async (req, res) => {
     // const developer = [
     //      {id: 1, name: "Xu, Mengdi"},
     //      {id: 2, name: "He, Xiaoxin"},
     //      {id: 3, name: "Yan, Long"},
     //      {id: 4, name: "Tao, Yi"},
     // ];

     try {
          const sort = { _id: -1 };
          const developer = await AuthorInfo.find().sort(sort);
          res.status(200).json(developer);
     } catch (error) {
          res.status(404).json(error.message);
     }
}

export const addAuthor = (req, res) => {
     console.log(req.body);
     const name = req.body.name;
     const email = req.body.email;

     const newAuthorInfo = new AuthorInfo({
          name, email,
     });

     newAuthorInfo.save()
     .then(() => res.status(201).json('Add Successfully'))
     .catch(error => res.status(409).json(error.message));
}