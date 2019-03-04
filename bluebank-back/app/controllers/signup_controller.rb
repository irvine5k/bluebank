class SignupController < ApplicationController
  def create
    client = Client.new(client_params)

    if client.save
      payload = { client_id: client.id}
      session = JWTSessions::Session.new(payload: payload, refresh_by_access_allowed: true)
      tokens = session.login

      response.set_cookie(JWTSessions.access_cookie,
                          value: tokens[:access],
                          httponly: true,
                          secure: Rails.env.production?)
      
      render json: {csrf: tokens[:csrf]}
    else
      render json:{error: client.errors.full_messages.join('')}, status: :unprocessable_entity
    end
  
  end

  private

  def client_params
    params.permit(:email, :password, :password_confirmation)
  end

end
