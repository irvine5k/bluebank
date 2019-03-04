## BLUEBANK

## Installation
```bash
git clone https://github.com/irvine5k/bluebank

cd bluebank/bluebank-back

bundle

rails s

cd bluebank/bluebank-back/bluebank-front

npm init

npm start
```

## API /bluebank-back

### CREATE A CLIENT
```bash
curl -H 'Content-Type: application/json' -d '{"cpf": "12345678910"}' -X POST 'http://localhost:3000/clients'
```

### CREATE AN ACCOUNT
```bash
curl -H 'Content-Type: application/json' -d '{"number": "123456", "agency": "123", "client_id": 1}' -X POST 'http://localhost:3000/accounts'
```

### MAKE A DEPOSIT
```bash
curl -H 'Content-Type: application/json' -d '{"amount": 9.99}' -X POST 'http://localhost:3000/accounts/1/deposit'
```

### WITHDRAW FROM AN ACCOUNT
```bash
curl -H 'Content-Type: application/json' -d '{"amount": 9.99}' -H "Authorization: Bearer <ACCESS_TOKEN>" -X POST 'http://localhost:3000/accounts/1/withdraw'
```

### TRANSFERENCE FROM AN ACCOUNT TO OTHER ACCOUNT
```bash
curl -H 'Content-Type: application/json' -d '{"recipient_id": "2", "amount": 9.99}' -X POST 'http://localhost:3000/accounts/1/transfer'
```
