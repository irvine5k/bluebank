class User < ApplicationRecord
    validates :cpf, presence: true, uniqueness: true

end
