# Takana API

<b>Context:</b>
/api/v1/takana/

## Cliente

## Login

Serve per fare la login
 - [x] A completed

Path: /login

Metodo: POST

Accessibilità: private


## Registrazione
Serve per fare la registrazione
- [x] A completed

Path: /registration

Metodo: POST 

Visibilità: private

## Cambio Password 

Serve per cambiare la password

- [ ] A completed

Path: /passwordReset

Metodo: POST

Visibilità: private

## Dove ci trovi

<b>Dove ci trovi oggi</b>

Serve per ottenere i posti dove sono i track oggi
- [ ] A completed
    - [x] Controller
    - [x] Service

Path: /whereNow

Metodo: GET

Visibilità: public

<b>Orari e luoghi del weekend</b>

Serve per ottenere gli orari e i luoghi della settimana
- [ ] A completed
    - [x] Controller
    - [x] Service
Path: /whereWeek
Metodo: GET
public

### Piatti e prodotti

<b>Lista Piatti</b>

Serve per ottenere la lista dei piatti e prodotti

- [ ] A completed
    - [x] Controller
    - [ ] Service

Path: /dishes

Metodo: GET

public

## Carrello

nel token ci sarà l'id dell'utente senza mettere l'id nel path delle api

<b>Nuovo Ordine</b>

Serve per inviare l'ordine 

- [ ] A completed
    - [x] Controller
    - [ ] Service

Path: /order

Metodo: POST

Visibilità: private

<b>Dettaglio Ordine</b>

Serve per sapere i dettagli dell'ordine e lo stato dell'ordine

- [ ] A completed
    - [x] Controller
    - [ ] Service

Path: /order/{id}

Metodo: GET

Visibilità: private

<b>Lista Ordini</b>

Serve per ottenere la lista degli ordini del giorno

- [ ] A completed
    - [x] Controller
    - [ ] Service

Path: /order/all

Metodo: GET

private

<b>Modifica Ordine</b>

Serve per modificare l'ordine non confermato

- [ ] A completed
    - [x] Controller
    - [ ] Service

Path: /order/draft/{id}

Metodo: PUT

private

<b>Conferma Ordine</b>

Serve per confermare l'ordine, dopo non si può più modificare

- [ ] A completed
    - [x] Controller
    - [ ] Service

Path: /order/send/{id}

Metodo: PUT

private


## Track
### Login
- [ ] A completed
Serve per fare la login
/login
POST
private
### Registrazione
la registrazione si può fare solo sulla dashboard di keycloak per motivi di sicurezza
### Cambio Password 
Serve per cambiare la password
- [ ] A completed
/passwordReset
POST
private

#### Carrello
nel token ci sarà l'id dell'utente e una claim per sapere se è un utente di tipo track

Serve per ottenere la lista di TUTTI gli ordini del giorno di quel track
- [ ] A completed
/{track-id}/booking
GET
private

Serve per sapere lo stato dell'ordine
- [ ] A completed
/{track-id}/booking/{id}
GET
private

Serve per modificare l'ordine: usato per confermare, rifiutare e posticipare
- [ ] A completed
/{track-id}/booking/{id}
PUT
private