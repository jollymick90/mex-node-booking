# Context:
/api/v1/takana/
## Cliente
### Login

Markup:
 - [ ] An uncompleted task
 - [x] A completed task

Serve per fare la login
/login
POST
private

### Registrazione
Serve per fare la registrazione
/registration
POST 
private

### Cambio Password 
Serve per cambiare la password
/passwordReset
POST
private

### Dove ci trovi
Serve per ottenere dove trovare i posti dove sono i track
/whereNow
GET
public

Serve per ottenere gli orari e i luoghi della settimana
/whereWeek
GET
public

### Prodotto per categoria
Serve per ottenere la lista dei prodotti
/menu-items
GET
public

#### Carrello
nel token ci sarà l'id dell'utente senza mettere l'id nel path delle api

Serve per inviare l'ordine 
/booking
POST
private

Serve per sapere lo stato dell'ordine
/booking/{id}
GET
private

Serve per ottenere la lista degli ordini del giorno
/booking
GET
private

Serve per modificare l'ordine: usato per confermare il cambio orario
/booking/{id}
PUT
private


## Track
### Login
Serve per fare la login
/login
POST
private
### Registrazione
la registrazione si può fare solo sulla dashboard di keycloak per motivi di sicurezza
### Cambio Password 
Serve per cambiare la password
/passwordReset
POST
private

#### Carrello
nel token ci sarà l'id dell'utente e una claim per sapere se è un utente di tipo track

Serve per ottenere la lista di TUTTI gli ordini del giorno di quel track
/{track-id}/booking
GET
private

Serve per sapere lo stato dell'ordine
/{track-id}/booking/{id}
GET
private

Serve per modificare l'ordine: usato per confermare, rifiutare e posticipare
/{track-id}/booking/{id}
PUT
private