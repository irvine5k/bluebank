class ClientsController < ApplicationController
    def create
      client = Client.new(client_params)
      client.save!
      render json: client
    end

    private

    def client_params
      params.require(:client).permit(:cpf)
    end
end
