import { addNewContact } from "../controllers/crmController";
import { getContacts } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // Middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next()
        }, getContacts)
        
        .post(addNewContact);


    app.route('/contact/:contactId')
        .put((req, res) => 
            res.send('PUT request successful!')
        )

        .delete((req, res) => 
            res.send('DELETE request successful!')
        )
}

export default routes;