# Project REST-Rant

REST-Rant is an app where users can review restaurants.

Method  | Path          | Purpose
________ _______________ ________________________________
GET     | /             |   Home Page
_________________________________________________________
        |               |
GET     | /places       |   Places index page
_________________________________________________________
        |               |
POST    | /places       |   Create new place
________ _______________ ________________________________
        |               |
GET     | /places/new   |   Form page for creating a new place
_________________________________________________________
        |               |
GET     | /places/:id   |   Details about a particular place
________ _______________ ________________________________
        |               | 
PUT     | /places/:id   |   Update a particular place
_________________________________________________________
        |                   |
GET     | /places/:id/edit  |    Form page for editing an existing place
________ _______________ ________________________________
        |                 |
DELETE  |  /places/:id    |   Delete a particular place
_________________________________________________________
        |                    |
POST    |  /places/:id/rant  |  Create a rant (comment) about a particular place
_________________________________________________________
        |                           |
DELETE  |  /places/:id/rant/:rantId | Delete a rant (comment) about a particular place
_________________________________________________________
       |     |
GET    |  *  |  404 page (matches any route not defined above)
_________________________________________________________
