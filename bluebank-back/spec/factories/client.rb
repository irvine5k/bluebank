FactoryGirl.define do
    sequence :cpf do |n|
      "client#{n}cpf"
    end
  
    factory :client do
      cpf
    end
  end