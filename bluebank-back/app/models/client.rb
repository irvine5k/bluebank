class Client < ApplicationRecord
    validates :cpf, presence: true, uniqueness: true
end
