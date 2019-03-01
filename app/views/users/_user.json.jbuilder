json.extract! user, :id, :cpf, :created_at, :updated_at
json.url user_url(user, format: :json)
