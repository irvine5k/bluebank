class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
        user = User.new(user_params)
        user.save!
        render json: user
    end

    private

    def user_params
      params.require(:user).permit(:cpf)
    end
end
